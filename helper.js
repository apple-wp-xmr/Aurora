document.addEventListener('DOMContentLoaded', function () {
    (function () {
      'use strict';
      function initialize () {
        var headerTogglers = document.querySelectorAll('.js-collapse-toggler');
        if (headerTogglers.length) {
          addListener(headerTogglers, 'click', headerToggle);
        }
      }
      //collapses
      function headerToggle () {
        let target = document.getElementById(this.dataset.aim);
        if (target) {
          if (target.classList.contains('in')) {
            var targetHeight = target.offsetHeight;
            target.style.height = targetHeight + 'px';
            setTimeout(() => {
              this.classList.add('collapsed');
              target.classList.remove('in');
              target.removeAttribute("style");
            }, 300);
          } else {
            target.classList.add('in');
            var targetHeight = target.offsetHeight;
            this.classList.remove('collapsed');
            setTimeout(() => {
              target.removeAttribute("style");
            }, 305);
          }
        }
      }
      function addListener (elem, event, action) {
        for (var i = 0; i < elem.length; i++) {
          elem[i].addEventListener(event, action, false);
        }
      }
      initialize();
    })();
  });