# Bureau Gerritsma — statische site

Zes platte HTML-pagina's, geen build-stap, geen CMS. Gehost op Plesk, gedeployed vanuit deze repo.

## Bestanden
- `index.html` — home
- `diensten.html` — diensten
- `over.html` — over Rogier
- `contact.html` — contact
- `privacybeleid.html` — **conceptversie, nog te laten checken door een jurist**
- `assets/style.css` — alle styling
- `assets/rogier-foto.png` — portretfoto

## Live zetten (Plesk)

De site draait op Plesk (bureaugerritsma.nl). Plesk haalt de code op uit deze repo (`main`).

**Handmatig:** Plesk → bureaugerritsma.nl → Git → **Pull updates** (en **Deploy** als deployment op handmatig staat).

**Automatisch via webhook:** Plesk heeft een webhook-URL die een pull + deploy start.
- De URL staat in Plesk → bureaugerritsma.nl → Git (de webhook-link van de repository).
- **De URL staat bewust niet in deze repo:** de repo is publiek en met de URL kan iedereen een deploy starten.
- Instellen in GitHub: Settings → Webhooks → Add webhook → Payload URL = de Plesk-URL, Content type `application/json`, event "Just the push event".
- Daarna gaat elke push naar `main` vanzelf live.

**Cache:** bij een wijziging in `assets/style.css` het versienummer in de link verhogen (`style.css?v=JJJJMMDDx`) op alle pagina's, anders tonen browsers de oude opmaak.

## Bestanden (aanvulling)
- `ai-ontwikkelstraat.html` — expertisepagina Paraaf (AI-native ontwikkelstraat)
- `assets/menu.js` — hamburgermenu op mobiel
- `assets/cookies.js` — cookiebalk en Google Analytics na toestemming

## Nog in te vullen
- Telefoonnummer, adres en KvK-nummer op de contactpagina (nu `[placeholders]`).
- Privacybeleid laten toetsen.
- Contactformulier: deze site is puur statisch, dus een echt formulier heeft een externe dienst nodig (bijv. Formspree of Getform) — nu staat er alleen een mailto-link.
