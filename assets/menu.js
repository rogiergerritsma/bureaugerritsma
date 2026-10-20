// Hamburgermenu voor mobiel
(function () {
  var knop = document.querySelector('.menu-knop');
  var menu = document.getElementById('hoofdmenu');
  if (!knop || !menu) return;
  knop.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
})();
