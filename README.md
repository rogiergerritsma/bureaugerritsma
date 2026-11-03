# Bureau Gerritsma — statische site

Zes platte HTML-pagina's, geen build-stap, geen CMS. Gehost op GitHub Pages vanuit deze repo.

## Bestanden
- `index.html` — home
- `diensten.html` — diensten
- `over.html` — over Rogier
- `contact.html` — contact
- `privacybeleid.html` — **conceptversie, nog te laten checken door een jurist**
- `assets/style.css` — alle styling
- `assets/rogier-foto.png` — portretfoto

## Live zetten (GitHub Pages)

Vanaf november 2026 draait de site op **GitHub Pages** (gratis, statisch). Plesk is niet meer nodig.
- GitHub: Settings → Pages → Source `main`, map `/ (root)`, custom domain `bureaugerritsma.nl`, **Enforce HTTPS** aan.
- `CNAME` (met `bureaugerritsma.nl`) en `.nojekyll` laten staan.
- Elke push naar `main` gaat vanzelf live.
- DNS: vier A-records naar GitHub Pages en `www` als CNAME naar `rogiergerritsma.github.io`. MX-, SPF- en DKIM-records voor iCloud-mail nooit weghalen.

**Cache:** bij een wijziging in `assets/style.css` het versienummer in de link verhogen (`style.css?v=JJJJMMDDx`) op alle pagina's, anders tonen browsers de oude opmaak.

## Bestanden (aanvulling)
- `ai-ontwikkelstraat.html` — expertisepagina Paraaf (AI-native ontwikkelstraat)
- `assets/menu.js` — hamburgermenu op mobiel
- `assets/cookies.js` — cookiebalk en Google Analytics na toestemming
- `assets/analytics.js` — laadt Google Analytics pas na toestemming (was inline script)
- `assets/fonts.css` + `assets/fonts/` — zelf gehoste lettertypen Inter en Source Serif 4 (geen Google Fonts meer)
- `.htaccess` — security headers voor de oude Plesk-hosting; mag weg zodra de site op GitHub Pages draait

## Security headers
GitHub Pages kan geen eigen headers sturen. Daarom staat de Content-Security-Policy als `<meta>`-tag in de `<head>` van **elke pagina** (zelfde tekst overal). Die staat alleen scripts, stijlen en fonts van de eigen site toe (plus Google Analytics na toestemming). Daarom:
- **geen inline `<script>`, geen `onclick=` en geen `style=`-attributen** in de HTML; zet JavaScript in `assets/*.js` en opmaak in `assets/style.css`;
- een nieuwe externe dienst (bijv. een formulierdienst of embed) moet eerst in de CSP-meta van alle pagina's worden toegevoegd;
- een nieuwe pagina krijgt dezelfde twee meta-tags (CSP en referrer) als de bestaande.

HSTS en bescherming tegen inbedden (clickjacking) kunnen op GitHub Pages niet; daarvoor is een proxy zoals Cloudflare nodig.

## Nog in te vullen
- Telefoonnummer, adres en KvK-nummer op de contactpagina (nu `[placeholders]`).
- Privacybeleid laten toetsen.
- Contactformulier: deze site is puur statisch, dus een echt formulier heeft een externe dienst nodig (bijv. Formspree of Getform) — nu staat er alleen een mailto-link.
