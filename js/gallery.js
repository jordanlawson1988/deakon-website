/**
 * Deakon Home Services — Gallery
 * Category filtering + lightbox with keyboard accessibility
 */
(function () {
  'use strict';

  // --- Category Filter ---
  var filterButtons = document.querySelectorAll('.gallery-filters button');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      // Update active state + aria-pressed
      filterButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      // Filter items
      galleryItems.forEach(function (item) {
        var category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // --- Lightbox ---
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  var lastFocusedItem = null;

  if (!lightbox || !lightboxImg) return;

  function openLightbox(item) {
    var img = item.querySelector('img');
    if (img) {
      lastFocusedItem = item;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      // Move focus into lightbox
      if (lightboxClose) {
        lightboxClose.focus();
      }
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
    // Return focus to the gallery item that opened it
    if (lastFocusedItem) {
      lastFocusedItem.focus();
      lastFocusedItem = null;
    }
  }

  // Open lightbox on click
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(item);
    });

    // Open on Enter or Space (keyboard)
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  // Close on button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close on backdrop
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard: Escape to close, Tab trap within lightbox
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
      return;
    }

    // Focus trap: keep Tab within lightbox
    if (e.key === 'Tab' && lightboxClose) {
      e.preventDefault();
      lightboxClose.focus();
    }
  });
})();
