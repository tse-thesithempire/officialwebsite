// Sith Empire — shared mobile nav wiring.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var header = document.getElementById('site-header');
    if (!header) return;
    var headerInner = header.querySelector('.header-inner') || header;
    var nav = header.querySelector('.nav-links');
    if (!nav) return;

    // Move the desktop CTA into the drawer (visible on mobile only via CSS).
    var cta = header.querySelector('.header-cta a');
    if (cta && !nav.querySelector('.drawer-cta')) {
      var clone = cta.cloneNode(true);
      clone.classList.add('drawer-cta');
      nav.appendChild(clone);
    }

    // Build hamburger toggle if missing.
    var toggle = document.getElementById('nav-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.id = 'nav-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Toggle navigation');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', 'primary-nav');
      toggle.innerHTML = '<span></span>';
      headerInner.appendChild(toggle);
    }

    if (!nav.id) nav.id = 'primary-nav';

    function closeNav() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
    function openNav() {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    }

    toggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeNav();
      else openNav();
    });

    // Close on nav link tap.
    nav.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link) closeNav();
    });

    // Reset drawer state when resizing back to desktop.
    var mq = window.matchMedia('(min-width: 821px)');
    var onChange = function () { if (mq.matches) closeNav(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  });
})();
