/**
 * Deakon Home Services — Navigation
 * Mobile menu toggle + scroll-based nav shadow + focus management
 */
(function () {
  'use strict';

  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.site-nav__toggle');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (!toggle || !mobileMenu) return;

  var focusableInMenu = mobileMenu.querySelectorAll('a, button');

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    // Move focus to first link in menu
    if (focusableInMenu.length) {
      focusableInMenu[0].focus();
    }
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
    // Return focus to the toggle button
    toggle.focus();
  }

  // Toggle mobile menu
  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // Keyboard handling
  document.addEventListener('keydown', function (e) {
    if (!mobileMenu.classList.contains('is-open')) return;

    // Close on Escape
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }

    // Focus trap within mobile menu
    if (e.key === 'Tab' && focusableInMenu.length) {
      var first = focusableInMenu[0];
      var last = focusableInMenu[focusableInMenu.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  // Add shadow on scroll
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('site-nav--scrolled');
      } else {
        nav.classList.remove('site-nav--scrolled');
      }
    }, { passive: true });
  }

  // Set active nav link
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__links a, .mobile-menu a:not(.mobile-menu__phone)').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
