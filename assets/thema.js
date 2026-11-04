/* Thema (licht/donker) — Bureau Gerritsma
   Standaard volgt de site de systeeminstelling. De themaknop legt een eigen keuze vast
   in localStorage (bg_thema); kiest iemand weer wat het systeem al doet, dan vervalt de keuze.
   Dit script staat in de <head>, zodat de pagina meteen in het goede thema verschijnt. */
(function () {
  var SLEUTEL = 'bg_thema';
  var root = document.documentElement;
  var systeem = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function lees() { try { return localStorage.getItem(SLEUTEL); } catch (e) { return null; } }
  function bewaar(k) { try { if (k) localStorage.setItem(SLEUTEL, k); else localStorage.removeItem(SLEUTEL); } catch (e) {} }
  function systeemDonker() { return !!(systeem && systeem.matches); }
  function huidig() { return root.getAttribute('data-thema') || (systeemDonker() ? 'donker' : 'licht'); }

  var keuze = lees();
  if (keuze === 'donker' || keuze === 'licht') root.setAttribute('data-thema', keuze);

  function werkKnopBij(knop) {
    var donker = huidig() === 'donker';
    var label = donker ? 'Licht thema' : 'Donker thema';
    knop.setAttribute('aria-label', label);
    knop.setAttribute('title', label);
    var tekst = knop.querySelector('.thema-tekst');
    if (tekst) tekst.textContent = label;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var knop = document.querySelector('.thema-knop');
    if (!knop) return;
    werkKnopBij(knop);
    knop.addEventListener('click', function () {
      var nieuw = huidig() === 'donker' ? 'licht' : 'donker';
      var isSysteem = (nieuw === 'donker') === systeemDonker();
      if (isSysteem) { root.removeAttribute('data-thema'); bewaar(null); }
      else { root.setAttribute('data-thema', nieuw); bewaar(nieuw); }
      werkKnopBij(knop);
    });
    if (systeem && systeem.addEventListener) {
      systeem.addEventListener('change', function () { werkKnopBij(knop); });
    }
  });
})();
