# STEKI – Greek Taste

Website for the **STEKI** Greek food truck (Wettingen, CH). Built with React + Vite.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
client/
├─ public/                 # static files copied as-is to the site root
│  ├─ logo.jpeg            # logo / favicon / social preview image
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ assets/              # images imported & bundled by Vite
│  ├─ components/          # UI building blocks (one section per file)
│  │  ├─ Icon.jsx          # inline SVG icon set
│  │  ├─ Brand.jsx         # logo + wordmark (used in header & footer)
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Marquee.jsx       # scrolling text strip
│  │  ├─ Highlights.jsx
│  │  ├─ Menu.jsx
│  │  ├─ Location.jsx
│  │  ├─ About.jsx
│  │  └─ Footer.jsx
│  ├─ data/                # content & config (no markup)
│  │  ├─ site.js           # name, contact, nav, address, marquee text
│  │  └─ menu.js           # menu items, extras, sauces
│  ├─ hooks/               # reusable behaviour
│  │  ├─ useHideOnScroll.js
│  │  └─ useScrollReveal.js
│  ├─ styles/
│  │  ├─ index.css         # global styles & fonts
│  │  └─ App.css           # site styles & animations
│  ├─ App.jsx              # composes the sections
│  └─ main.jsx             # React entry point
└─ index.html              # SEO meta tags, Open Graph & JSON-LD
```

To update the menu or contact details, edit the files in `src/data/` – no markup changes needed.

## Deployment (Netlify)

Deployment is configured in [`../netlify.toml`](../netlify.toml) at the repository root:

- **Base directory:** `client`
- **Build command:** `npm run build`
- **Publish directory:** `dist` (i.e. `client/dist`)

Connect the repository in Netlify and it will pick up this configuration automatically.
The domain `steki.ch` can be added under **Domain settings**.

### Booking form (Netlify Forms)

The booking/contact form (`src/components/Contact.jsx`) uses [Netlify Forms](https://docs.netlify.com/forms/setup/).
A hidden duplicate of the form in `index.html` lets Netlify detect it at deploy time.
Submissions appear in the Netlify dashboard under **Forms → foodtruck-buchung**.
To receive them by e-mail, add a notification to `info@steki.ch` under
**Forms → Form notifications**. (The form only works on the deployed site, not locally.)
