# Bureau Gerritsma — statische site

Vijf platte HTML-pagina's, geen build-stap, geen CMS. Werkt direct op GitHub Pages.

## Bestanden
- `index.html` — home
- `diensten.html` — diensten
- `over.html` — over Rogier
- `contact.html` — contact
- `privacybeleid.html` — **conceptversie, nog te laten checken door een jurist**
- `assets/style.css` — alle styling
- `assets/rogier-foto.png` — portretfoto

## Live zetten via GitHub Pages

1. Maak een nieuwe (of gebruik een bestaande) GitHub-repository, bijvoorbeeld `bureau-gerritsma-site`.
2. Upload deze bestanden naar de root van die repository (via de GitHub-website: "Add file" → "Upload files", of via git).
3. Ga naar **Settings → Pages** in de repository.
4. Zet bij "Source" de branch op `main` en de map op `/ (root)`.
5. Na een minuut of twee staat de site live op `https://<jouw-github-gebruikersnaam>.github.io/<repository-naam>/`.

## Eigen domein koppelen (bureaugerritsma.nl)

1. In dezelfde Settings → Pages, vul bij "Custom domain" `bureaugerritsma.nl` in.
2. Zet bij je domeinregistrar (waar bureaugerritsma.nl nu draait) de DNS-records zoals GitHub aangeeft (meestal een aantal A-records naar GitHub's IP-adressen, plus een CNAME voor `www`).
3. Wacht tot de DNS is doorgevoerd (kan tot 24 uur duren) en vink in GitHub "Enforce HTTPS" aan zodra dat kan.

## Nog in te vullen
- Telefoonnummer, adres en KvK-nummer op de contactpagina (nu `[placeholders]`).
- Privacybeleid laten toetsen.
- Contactformulier: deze site is puur statisch, dus een echt formulier heeft een externe dienst nodig (bijv. Formspree of Getform) — nu staat er alleen een mailto-link.
