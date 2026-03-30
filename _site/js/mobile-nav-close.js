(() => {
  const MOBILE_BREAKPOINT = 991.98;

  function isMobileViewport() {
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  }

  function hideMenu(collapseEl, toggler) {
    if (!collapseEl.classList.contains('show')) return;

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.collapse) {
      window.jQuery(collapseEl).collapse('hide');
    } else {
      collapseEl.classList.remove('show');
      if (toggler) toggler.setAttribute('aria-expanded', 'false');
    }
  }

  document.addEventListener('click', (event) => {
    if (!isMobileViewport()) return;

    const navbar = document.getElementById('navbar-main');
    if (!navbar) return;

    const collapseEl = navbar.querySelector('.navbar-collapse');
    const toggler = navbar.querySelector('.navbar-toggler');
    if (!collapseEl || !toggler || !collapseEl.classList.contains('show')) return;

    if (navbar.contains(event.target)) return;

    hideMenu(collapseEl, toggler);
  });
})();
