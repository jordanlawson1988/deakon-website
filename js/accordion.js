/**
 * Deakon Home Services — FAQ Accordion
 */
(function () {
  'use strict';

  var triggers = document.querySelectorAll('.accordion__trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));

      if (!panel) return;

      // Close all others in the same accordion
      var accordion = trigger.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion__trigger').forEach(function (t) {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            var otherPanel = document.getElementById(t.getAttribute('aria-controls'));
            if (otherPanel) {
              otherPanel.style.maxHeight = '0';
            }
          }
        });
      }

      // Toggle current
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0';
      }
    });
  });
})();
