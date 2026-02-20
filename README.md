# Deakon Home Services — Website Prototype

A modern, fast, static website for **Deakon Home Services**, a residential home improvement contractor serving Greater Atlanta, GA since 2011.

## Tech Stack

- **HTML5** — Semantic markup throughout
- **CSS** — Custom properties (design tokens), no frameworks
- **JavaScript** — Vanilla JS, no dependencies
- **Fonts** — Google Fonts (Fraunces + Inter)
- **Icons** — Inline SVG (Lucide-style)

## Pages

| File | Page | Description |
|------|------|-------------|
| `index.html` | Home | Hero, value props, service cards, testimonials, CTA |
| `services.html` | Services | Windows & Doors, Remodeling, Design — with FAQ accordions |
| `gallery.html` | Our Work | Filterable photo gallery with lightbox |
| `about.html` | About | Founder story, mission/values, team |
| `contact.html` | Contact | Estimate request form + contact info |

## Running Locally

```bash
# Option 1: npx serve (recommended)
npx serve .

# Option 2: Python
python3 -m http.server 8000

# Option 3: Open directly
open index.html
```

Then visit `http://localhost:3000` (serve) or `http://localhost:8000` (Python).

## Deploying to Netlify

### Drag-and-Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `deakon-website/` folder onto the page
3. Done — Netlify will assign a URL

### Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --dir=. --prod
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel --yes
```

Or connect the GitHub repo to Vercel and it will auto-deploy on push.

## Swapping in Real Content

### Photos
Search all HTML files for `<!-- REPLACE:` comments. Each marks a placeholder image that should be swapped with a real photo. Example:

```html
<!-- REPLACE: hero image of completed renovation project -->
<img src="https://placehold.co/1600x900/1C2B3A/F9F7F4?text=Atlanta+Home+Renovation" alt="...">
```

Replace the `src` with the path to your real image and update the `alt` text.

### Copy
Search for `<!-- PLACEHOLDER COPY -->` comments to find marketing text that should be reviewed and updated with real brand copy.

### Testimonials
Search for `<!-- REPLACE: real testimonial -->` to find placeholder testimonials that need real customer quotes.

### Form Endpoint
In `contact.html`, update the form `action` URL:
- **Formspree**: Replace `https://formspree.io/f/PLACEHOLDER` with your Formspree endpoint
- **Netlify Forms**: Add `netlify` attribute to the `<form>` tag and remove the `action`

### Google Maps
In `contact.html`, replace the map placeholder div with an actual Google Maps `<iframe>` embed.

### Social Links
In the footer of each page, replace the `href="#"` on social media links with actual profile URLs.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1C2B3A` | Deep navy — headings, nav, footer |
| `--color-accent` | `#D4882B` | Warm amber — CTAs, highlights |
| `--color-surface` | `#F9F7F4` | Off-white — section backgrounds |
| `--color-text` | `#2D2D2D` | Dark slate — body text |

All colors are defined as CSS custom properties in `css/styles.css`.

## File Structure

```
deakon-website/
├── index.html          Home page
├── services.html       Services page
├── gallery.html        Project gallery
├── about.html          About / founder story
├── contact.html        Contact form
├── css/
│   └── styles.css      All styles + design tokens
├── js/
│   ├── nav.js          Mobile nav toggle + scroll shadow
│   ├── gallery.js      Category filter + lightbox
│   └── accordion.js    FAQ accordion
└── README.md           This file
```

## Browser Support

Tested for modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties and modern layout (Grid, Flexbox) — no IE11 support.
