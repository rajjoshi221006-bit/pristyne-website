# PRISTYNE website

A static website (plain HTML, CSS and JavaScript, no build step).

## Structure
```
index.html          page markup (all pages live here, switched by the menu)
css/style.css       all styles
js/router.js        menu / page switching
js/hero.js          poster hero, portrait movement, progress bar
js/explore.js       Explore page (scroll-morph cards)
js/intro.js         logo opening screen scroll effect
js/nav.js           mobile hamburger menu
js/gallery-form.js  gallery images + Google Form link (FORM_URL)
assets/             logo, portraits, gallery photos, favicon
```

## Run in VS Code
1. File > Open Folder... and choose this folder.
2. Install the **Live Server** extension (VS Code will suggest it).
3. Right-click `index.html` > **Open with Live Server**.

Or in a terminal: `python3 -m http.server 0` and open the printed localhost port.

## Add your Google Form
Open `js/gallery-form.js` and paste your form link into `FORM_URL`, e.g.
`var FORM_URL='https://forms.gle/xxxx';`

## Deploy
Upload the whole folder (not just index.html) to your host, e.g. Netlify or GoDaddy hosting `public_html`.
