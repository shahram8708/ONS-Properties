# ONS Properties 🏠

> **Your property search ends here.** A complete, production-grade real estate website for ONS Properties — a trusted property consulting firm in Ahmedabad, Gujarat, helping families, investors, and businesses close confident real estate deals.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-Not%20Specified-lightgrey?style=flat-square)](#license)
[![Live Site](https://img.shields.io/badge/Live%20Site-onsproperties.in-gold?style=flat-square)](https://onsproperties.in)

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the Project](#running-the-project)
6. [Usage](#usage)
7. [API Documentation](#api-documentation)
8. [Configuration](#configuration)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [Roadmap](#roadmap)
13. [License](#license)
14. [Acknowledgements](#acknowledgements)
15. [Contact / Author](#contact--author)

---

## About the Project

Real estate in India is a trust game. Buyers face fragmented advice, incomplete legal checks, and high-pressure tactics that turn what should be an exciting decision into an anxious one. ONS Properties was built to fix exactly that — and this website is their digital front door.

This project is a fully static, zero-dependency real estate website for ONS Properties, operating out of Ahmedabad, Gujarat. It serves families buying their first home, NRIs investing remotely, business owners searching for commercial space, and anyone who wants a property deal done transparently and professionally.

The site is architected as a clean multi-page application with reusable HTML components, JSON-driven content, and a vanilla JavaScript module system. No build tools, no frameworks, no bundlers — just fast, accessible, SEO-optimised pages that load instantly and work everywhere.

---

## Key Features ✨

**Multi-Page Site with Shared Components** — Navbar, footer, and WhatsApp button are loaded once as HTML components and injected dynamically across all pages, keeping every page consistent without repeating markup.

**Live Property Listings with Smart Filters** — The properties page serves 13 real listings (apartments, villas, offices, and plots) filterable by property type, BHK configuration, Ahmedabad locality, and budget band.

**Property Detail Modal** — Clicking "View Details" on any listing opens a full Bootstrap modal with an image, description, location, price, size, features, and a pre-filled WhatsApp enquiry button.

**Load More Pagination** — Properties load in batches of 6 with a "Load More" button that counts against the filtered result set, keeping the page performant even with a large catalogue.

**Validated Contact Form with Spam Protection** — The enquiry form validates name (no digits, 2+ chars), Indian phone numbers (regex: `^[6-9]\d{9}$`), email format, and message length. A honeypot field catches bots silently, and a 30-second client-side rate limit prevents accidental duplicate submissions.

**JSON-Driven Content Architecture** — Properties, services, testimonials, and FAQs all live in separate JSON files under `data/`, with in-memory fallback data inside `js/data.js` so the site still works even if the fetch request fails.

**Animated Statistics Counter** — The stats section (10+ years, 500+ clients, 1000+ properties sold, 100% transparent dealings) counts up from zero when it scrolls into view using IntersectionObserver and requestAnimationFrame.

**Scroll Reveal Animations** — Every card, section, and feature box fades in from below with staggered delays as you scroll, driven by a lightweight IntersectionObserver in `js/animations.js`.

**Sticky Navbar with Scroll Shadow** — The navigation bar turns slightly translucent and gains a shadow after 50px of scroll, giving a polished feel on all pages.

**Floating WhatsApp Button** — A pulsing green WhatsApp float button is fixed to every page with a tooltip, keyboard accessible, and links directly to a pre-filled message at `wa.me/919067006700`.

**Testimonials Carousel** — Six real client testimonials are auto-rotated every 5 seconds using Bootstrap's Carousel component, each with star ratings, initials-based avatars, and a location tag.

**FAQ Accordion** — Eight SEO-friendly questions about buying property in Ahmedabad are rendered from `data/faqs.json` into a Bootstrap accordion with proper ARIA attributes.

**Schema.org Structured Data** — The homepage includes a `LocalBusiness` JSON-LD block with name, description, telephone, address, URL, price range, and opening hours — helping search engines understand the business.

**Full Accessibility Support** — Skip-to-content link, ARIA labels on all interactive elements, `aria-current="page"` on the active nav link, `aria-live` regions on form feedback, and keyboard-navigable WhatsApp float button.

**Responsive on All Screens** — Three breakpoints (mobile, tablet, desktop) with specific padding, font scaling, and layout changes defined in `css/responsive.css`.

---

## Tech Stack 🛠

**Frontend**

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Page structure and semantic markup |
| CSS3 | — | Custom styles, CSS variables, animations |
| JavaScript | ES6+ (modules) | All interactivity and data rendering |
| Bootstrap | 5.3.3 | Grid, navbar, modal, carousel, accordion |
| DM Sans | Google Fonts | Body typeface (400, 500, 600) |
| Playfair Display | Google Fonts | Heading typeface (400, 700, 900) |

**Hosting / Delivery**

| Tool | Purpose |
|---|---|
| Any static host (Apache, Nginx, Netlify, Vercel, GitHub Pages) | Serve the site |
| CDN (jsDelivr) | Delivers Bootstrap CSS and JS |
| Google Fonts CDN | Delivers DM Sans and Playfair Display |
| Unsplash | Property and team imagery |

**No build tools, no package manager, no server-side runtime.** The entire site is plain files.

---

## Project Structure 📁

```
ONS-Properties-main/
├── index.html                  # Homepage: hero, stats, featured properties, services, testimonials, FAQs, contact form
├── about.html                  # About page: story, mission, vision, stats, team, CTA
├── properties.html             # Listings page: filter bar, property grid, load more, detail modal
├── services.html               # Services page: service cards with full descriptions, 5-step process
├── contact.html                # Contact page: enquiry form, phone, WhatsApp, address, map
├── favicon.ico                 # Browser tab icon
│
├── img/
│   └── logo.png                # ONS Properties brand logo (used in navbar and footer)
│
├── css/
│   ├── style.css               # Core styles: CSS variables, layout, all component styles
│   ├── animations.css          # Keyframes and animation utility classes
│   └── responsive.css          # Media queries for 3 breakpoints (576px, 992px, 1200px)
│
├── js/
│   ├── data.js                 # Data access layer: fetch helpers + complete fallback data for all 4 datasets
│   ├── main.js                 # Home page orchestrator: renders featured properties, services, testimonials, FAQs
│   ├── components.js           # Component loader: injects navbar, footer, WhatsApp button; handles active nav link
│   ├── properties.js           # Properties page logic: filter, pagination, modal, render
│   ├── form.js                 # Form validation, sanitisation, honeypot, rate limiting, success state
│   └── animations.js           # IntersectionObserver for scroll-reveal on .reveal-on-scroll elements
│
├── components/
│   ├── navbar.html             # Shared sticky navbar with skip link and call button
│   ├── footer.html             # Shared footer with links, services list, contact info, social icons
│   ├── whatsapp-btn.html       # Floating WhatsApp button with tooltip and keyboard handler
│   └── property-card.html      # Unused HTML template element for property card structure
│
└── data/
    ├── properties.json         # 13 property listings (8 residential, 3 commercial, 2 plots)
    ├── services.json           # 6 service definitions with short and full descriptions
    ├── testimonials.json       # 6 client testimonials with name, quote, rating, initials, date
    └── faqs.json               # 8 FAQs about buying property in Ahmedabad
```

---

## Getting Started

### Prerequisites

You need nothing more than a way to serve static files locally. Any of the options below will work:

| Option | Install |
|---|---|
| Python 3 (built-in server) | [python.org](https://www.python.org/downloads/) — comes pre-installed on macOS and most Linux |
| Node.js with `npx serve` | [nodejs.org](https://nodejs.org/) |
| VS Code Live Server extension | [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) |
| Any web server (Nginx, Apache) | Your choice |

> **Why do you need a server at all?** The site uses `fetch()` to load its HTML components and JSON data files. Browsers block `fetch()` requests on `file://` protocol due to CORS security rules. A local server solves this instantly.

### Installation

1. Clone the repository (or download and unzip the project):

```bash
git clone https://github.com/shahram8708/ONS-Properties.git
cd ONS-Properties
```

2. No dependencies to install. There is no `package.json`, no `requirements.txt`, and no build step. The project is ready to serve as-is.

### Environment Variables

This project has no environment variables. There is no backend, no API keys, no `.env` file. All content is sourced from the local `data/` JSON files with CDN-delivered libraries.

If you fork this project and want to customise it:

| Value to change | Where it lives | What it controls |
|---|---|---|
| Phone number (`+919067006700`) | `components/navbar.html`, `components/footer.html`, `components/whatsapp-btn.html`, `index.html`, `contact.html`, `services.html`, `js/main.js`, `js/properties.js` | Call button, WhatsApp links, footer contact info |
| WhatsApp number in wa.me links | Same files as above | All "Chat on WhatsApp" buttons |
| Business name, address, hours | `index.html` (JSON-LD), `components/footer.html`, `contact.html` | SEO structured data and contact display |
| Canonical URL (`https://onsproperties.in`) | Every HTML file's `<link rel="canonical">` and OG URL tags | SEO canonical links |
| Google Maps embed | `index.html`, `contact.html` | Embedded map iframe |
| Property listings | `data/properties.json` | All displayed properties |
| Services | `data/services.json` | Service cards on home and services pages |
| Testimonials | `data/testimonials.json` | Testimonials carousel |
| FAQs | `data/faqs.json` | FAQ accordion |

### Running the Project

**Option 1: Python (simplest, no install needed)**

```bash
cd ONS-Properties
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

**Option 2: Node.js with npx**

```bash
cd ONS-Properties
npx serve .
```

Open the URL shown in the terminal (usually [http://localhost:3000](http://localhost:3000)).

**Option 3: VS Code Live Server**

Open the project folder in VS Code, right-click `index.html`, and select "Open with Live Server".

**There is no build step.** You do not run `npm run build` or compile anything. Edits to HTML, CSS, or JS files are reflected immediately on page refresh.

---

## Usage

**Browsing properties**

Navigate to `properties.html`. Use the four filter dropdowns (Property Type, BHK, Location, Budget) and click "Search". The grid updates instantly from the client-side filter. Click "View Details" on any card to open the full property modal. Click "WhatsApp Enquiry" on any card or inside the modal to open WhatsApp with a pre-filled message referencing that specific property ID.

**Submitting an enquiry**

Fill the form on `index.html` (in the "Connect with Our Experts" section) or on `contact.html`. Required fields are Full Name, Phone Number, and Message. Email and Property Type are optional. On success, the form is replaced with a green confirmation box. If you try submitting again within 30 seconds, a rate-limit message appears.

**Updating property data**

Open `data/properties.json` and add or modify a listing. Each property object must follow this structure:

```json
{
  "id": "res009",
  "title": "Your Property Title",
  "type": "Residential",
  "location": "Area Name, Ahmedabad",
  "price": 8500000,
  "price_display": "₹85 Lakh",
  "size": "1450 sq ft",
  "bhk": "2BHK",
  "status": "Available",
  "badge": "Available",
  "badge_color": "green",
  "image": "https://your-image-url.com/photo.jpg",
  "description": "Your property description here.",
  "features": ["Feature 1", "Feature 2", "Feature 3"],
  "whatsapp_text": "I am interested in Your Property Title (RES009). Please share more details.",
  "area": "Area Name"
}
```

Valid `badge_color` values are `"gold"` (Featured), `"green"` (Available), and `"red"` (Hot Deal). The `area` field must match one of the filter options in `properties.html`'s location dropdown, or it will not appear when that filter is applied.

---

## API Documentation

This project has no server-side API. All data is consumed from local JSON files via the browser's native `fetch()` API. The data layer lives in `js/data.js`.

**Data fetch functions (all return Promises):**

| Function | Source file | Returns |
|---|---|---|
| `getProperties()` | `data/properties.json` | Array of 13 property objects |
| `getServices()` | `data/services.json` | Array of 6 service objects |
| `getTestimonials()` | `data/testimonials.json` | Array of 6 testimonial objects |
| `getFaqs()` | `data/faqs.json` | Array of 8 FAQ objects |

Every function uses a try/catch and falls back to the hardcoded `fallbackData` object inside `js/data.js` if the JSON fetch fails (for example, when the page is opened from the filesystem). Import them like this:

```javascript
import { getProperties, getServices } from './data.js';

const properties = await getProperties();
const services = await getServices();
```

---

## Configuration

All configuration in this project is done by editing files directly. There is no config file, settings panel, or `.env`.

**CSS Variables (`css/style.css`)**

The entire colour palette and spacing system is defined in `:root`:

```css
:root {
  --color-navy: #0D1B3E;       /* Primary brand colour */
  --color-gold: #B8860B;       /* Accent / CTA colour */
  --color-gold-light: #C9A84C; /* Hover state for gold elements */
  --color-white: #FFFFFF;
  --color-dark: #2D2D2D;
  --color-muted: #6B7280;
  --color-bg-light: #F8F9FA;
  --color-success: #198754;
  --color-danger: #DC3545;
  --color-whatsapp: #25D366;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --spacing-section: 80px;
  --radius-card: 12px;
  --radius-btn: 6px;
}
```

Changing `--color-gold` and `--color-navy` will retheme the entire site in two edits.

**Filter options (`properties.html`)**

The BHK and Location dropdowns in the filter bar are hardcoded in the HTML. If you add a property with a new `area` value in `properties.json`, you must also add a matching `<option>` to the `#filter-location` select in `properties.html`.

**Form validation (`js/form.js`)**

Phone validation uses the regex `^[6-9]\d{9}$` (valid Indian mobile numbers). Name validation requires at least 2 characters and no digits. Message validation requires at least 10 characters. These can be adjusted directly in `form.js`.

**Rate limiting (`js/form.js`)**

The client-side rate limit is 30 seconds between submissions, controlled by the `lastSubmitTimestamp` variable. Change the `30000` in `isRateLimited()` to adjust this.

**Stats counters (`index.html`, `about.html`)**

Stats are controlled via `data-target` and `data-suffix` attributes on elements with the class `stat-number`:

```html
<p class="stat-number" data-target="500" data-suffix="+">0</p>
```

Edit the `data-target` value to change what number the counter animates to.

---

## Testing

There are no automated tests in this project. No testing framework (Jest, Playwright, Cypress, etc.) is installed, and no test files exist.

Manual testing across browsers is the current approach. If you want to add tests, these areas would benefit most:

- Form validation logic in `js/form.js` (unit tests for `validateName`, `validatePhone`, `validateEmail`, `validateMessage`, `sanitizeInput`)
- Filter logic in `js/properties.js` (unit tests for `filterProperties` with different filter combinations)
- Component loading fallback in `js/components.js` (test that fallback HTML renders when fetch fails)
- End-to-end flows: submit enquiry form, open property modal, use filter and load more

A lightweight setup like [Vitest](https://vitest.dev/) for unit tests or [Playwright](https://playwright.dev/) for end-to-end tests would be a natural fit given the project's zero-dependency philosophy.

---

## Deployment

Because this is a purely static website, deploying it is as simple as copying the files to any hosting provider that can serve HTML, CSS, and JS files.

**Deploy to Netlify (recommended for simplicity)**

1. Go to [netlify.com](https://netlify.com) and sign in.
2. Drag and drop the entire project folder onto the Netlify dashboard.
3. Netlify instantly publishes it and gives you a public URL.
4. Add your custom domain (e.g. `onsproperties.in`) in Site Settings > Domain Management.

**Deploy to Vercel**

```bash
npm install -g vercel
cd ONS-Properties
vercel
```

Follow the prompts. Vercel detects a static site automatically.

**Deploy to GitHub Pages**

1. Push the project to a GitHub repository.
2. Go to Settings > Pages.
3. Under "Source", select the branch you want to deploy from (usually `main`) and the root folder `/`.
4. Save. GitHub Pages will publish the site at `https://shahram8708.github.io/ONS-Properties/`.

**Deploy to a VPS or shared hosting (Nginx)**

Copy all project files to your server's web root:

```bash
scp -r ONS-Properties/* user@yourserver.com:/var/www/html/
```

Ensure Nginx or Apache is configured to serve `index.html` from that directory. No reverse proxy, no Node.js, no Python runtime is needed on the server.

**Important note on paths:** All asset paths (CSS, JS, images, components, data) are relative. The site works correctly from any subdirectory as long as the internal folder structure is preserved.

---

## Contributing

Contributions are welcome. Here is how to get involved:

1. Fork the repository on GitHub.
2. Create a branch with a clear name:

```bash
git checkout -b feature/add-property-search
```

3. Make your changes. Keep HTML semantic, keep CSS inside the existing variable system, and keep JS as ES6 modules.
4. Commit with a descriptive message:

```bash
git commit -m "feat: add keyword search to property filter"
```

5. Push your branch and open a Pull Request against `main`.

**Code conventions to follow:**

All HTML uses lowercase tags and double-quoted attributes. CSS follows the existing variable system — avoid hardcoded colour values. JavaScript uses `const`/`let`, arrow functions, and async/await. All interactive elements must have accessible labels. New properties must follow the JSON schema documented in the Usage section.

**Reporting a bug:**

Open a GitHub Issue with the following:

```
**Page affected:** properties.html
**Browser and version:** Chrome 124 on Windows 11
**Steps to reproduce:**
1. Open properties.html
2. Select Residential > 3BHK > Satellite
3. Click Search
**Expected:** Shows matching properties
**Actual:** Shows empty grid
**Console errors (if any):** Paste here
```

**Requesting a feature:**

Open a GitHub Issue with a clear description of what you want, why it would help users, and any rough idea of how it could be implemented.

---

## Roadmap

Based on the current codebase, here are the natural next steps:

**Completed**

All core pages (Home, About, Properties, Services, Contact) are live and functional. The property filter, detail modal, form validation, scroll animations, testimonials carousel, and FAQ accordion are all working.

**Planned / possible additions**

Adding a backend form submission endpoint so enquiries are actually emailed or stored, rather than just showing a client-side success message. The current form collects the data and displays a confirmation, but the payload (`sanitizedPayload` in `js/form.js`) is not sent anywhere.

Adding Google Analytics or a privacy-respecting alternative (Plausible, Fathom) to track which properties get the most enquiries.

Adding a `sitemap.xml` and `robots.txt` for better search engine crawling, given the SEO effort already put into the structured data and meta tags.

Enabling the property detail page as a standalone URL (e.g., `property/res001.html`) instead of a modal, to allow sharing and direct linking to a property.

Adding a rental-specific filter or toggle on the properties page, since rental is one of the six listed services but currently properties are only tagged as "Residential" or "Commercial".

Connecting the `components/property-card.html` template element to the rendering system — it currently exists as a static HTML template but is not used by any JavaScript.

Expanding the location dropdown in the properties filter to include all `area` values present in `properties.json` (for example, New Ranip, Chandkheda, Bodakdev, and SG Road are not currently listed as filter options).

---

## License

No license file was found in this repository. All rights are reserved by default under copyright law. If you intend to use, fork, or adapt this code, contact the project owner for permission.

---

## Acknowledgements

**Bootstrap 5.3.3** (MIT License) — delivered via jsDelivr CDN for grid, modal, navbar, accordion, and carousel components. [getbootstrap.com](https://getbootstrap.com)

**Google Fonts** — DM Sans for clean body text and Playfair Display for editorial-quality headings. [fonts.google.com](https://fonts.google.com)

**Unsplash** — High-quality, royalty-free property and interior images used across all listing cards, the about page, and the hero background. [unsplash.com](https://unsplash.com)

**Schema.org** — The `LocalBusiness` structured data vocabulary used in the homepage JSON-LD block. [schema.org/LocalBusiness](https://schema.org/LocalBusiness)

**WhatsApp Business API (wa.me)** — The floating button and all enquiry CTAs use WhatsApp's standard deep link format for instant, pre-filled conversations. [faq.whatsapp.com](https://faq.whatsapp.com/5246659358521814)

---

## Contact / Author

**ONS Properties**
Ahmedabad, Gujarat, India

📞 [+91 9067006700](tel:+919067006700)
💬 [Chat on WhatsApp](https://wa.me/919067006700?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20inquiry)
🌐 [onsproperties.in](https://onsproperties.in)

**Business hours:** Monday to Saturday, 9AM to 7PM | Sunday 10AM to 4PM

**Core team:**
Nirav Patel (Founder and Lead Consultant), Priya Mehta (Client Success Manager), Suresh Desai (Commercial and Investment Advisor)

If you are a developer working on this codebase and have questions, or if you are a client looking for property assistance in Ahmedabad — the WhatsApp link above is the fastest way to reach the right person.