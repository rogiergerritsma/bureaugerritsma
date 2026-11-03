/* Google Analytics loader — loads only after consent (see assets/cookies.js).
   Moved out of the inline <script> so the Content-Security-Policy needs no 'unsafe-inline'. */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var GA_ID = 'G-P5S9DLW367';
var KEUZE_SLEUTEL = 'bg_cookiekeuze';
window.gaGeladen = false;
function laadAnalytics(){
  if (window.gaGeladen) return; window.gaGeladen = true;
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA_ID, {allow_google_signals:false, allow_ad_personalization_signals:false});
}
try { if (localStorage.getItem(KEUZE_SLEUTEL) === 'ja') laadAnalytics(); } catch (e) {}
