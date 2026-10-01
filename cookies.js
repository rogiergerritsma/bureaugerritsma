/* Cookiebalk en conversie-events — Bureau Gerritsma
   Volgens Merkfamilie v1.1, hoofdstuk 4: geen cookiemuur, twee gelijke knoppen,
   Google Analytics pas na "Prima". Keuze in localStorage (bg_cookiekeuze). */
(function () {
  var SLEUTEL = window.KEUZE_SLEUTEL || 'bg_cookiekeuze';

  function leesKeuze() { try { return localStorage.getItem(SLEUTEL); } catch (e) { return null; } }
  function bewaarKeuze(k) { try { localStorage.setItem(SLEUTEL, k); } catch (e) {} }

  function wisGaCookies() {
    var host = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (c) {
      var naam = c.split('=')[0].trim();
      if (naam.indexOf('_ga') === 0) {
        ['', '; domain=' + host, '; domain=.' + host].forEach(function (d) {
          document.cookie = naam + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
  }

  var balk;
  function toonBalk() {
    if (balk) { balk.hidden = false; return; }
    balk = document.createElement('div');
    balk.className = 'cookiebalk';
    balk.setAttribute('role', 'region');
    balk.setAttribute('aria-label', 'Cookiekeuze');
    balk.innerHTML =
      '<p>Mogen we met Google Analytics meten hoe bezoekers deze site gebruiken? Zo zien we wat werkt. ' +
      '<a href="privacybeleid.html#cookies">Privacyverklaring</a></p>' +
      '<div class="cookiebalk-knoppen">' +
      '<button type="button" class="cookie-ja">Prima</button>' +
      '<button type="button" class="cookie-nee">Liever niet</button>' +
      '</div>';
    document.body.appendChild(balk);

    balk.querySelector('.cookie-ja').addEventListener('click', function () {
      bewaarKeuze('ja');
      balk.hidden = true;
      if (typeof window.laadAnalytics === 'function') window.laadAnalytics();
    });
    balk.querySelector('.cookie-nee').addEventListener('click', function () {
      var wasJa = leesKeuze() === 'ja' || window.gaGeladen;
      bewaarKeuze('nee');
      balk.hidden = true;
      if (wasJa) { wisGaCookies(); location.reload(); }
    });
  }

  // Wis-knop op de privacyverklaring
  window.wisCookiekeuze = function () {
    try { localStorage.removeItem(SLEUTEL); } catch (e) {}
    wisGaCookies();
    location.reload();
  };

  document.addEventListener('click', function (e) {
    // Cookie-instellingen in de footer
    var inst = e.target.closest('[data-cookie-instellingen]');
    if (inst) { e.preventDefault(); toonBalk(); return; }

    // Conversie-events (alleen als Analytics na toestemming geladen is)
    var a = e.target.closest('a[href]');
    if (!a || !window.gaGeladen || typeof window.gtag !== 'function') return;
    var href = a.getAttribute('href');
    var ev = null;
    if (href.indexOf('tel:') === 0) ev = 'bel_klik';
    else if (href.indexOf('https://wa.me') === 0) ev = 'whatsapp_klik';
    else if (href.indexOf('mailto:') === 0) ev = 'mail_klik';
    if (!ev) return;
    var plek = a.closest('[data-locatie]');
    window.gtag('event', ev, { locatie: plek ? plek.getAttribute('data-locatie') : 'onbekend' });
  });

  if (!leesKeuze()) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', toonBalk);
    else toonBalk();
  }
})();
