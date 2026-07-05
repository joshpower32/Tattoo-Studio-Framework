# VANTA — Custom Tattoo Studio Framework

A **premium, "expensive-looking"** tattoo studio template: three.js ink-dust hero, scroll reveals, 3D tilt cards, a **style-filterable work gallery with lightbox**, artist profiles, session rates, and a detailed consult-request form. Pure HTML/CSS/JS — no build step, hosts free on GitHub Pages or Netlify.

Near-black + ink-crimson aesthetic with engraved Cinzel display type (Google Fonts). Works for tattoo studios, private artists, piercing studios, and PMU/beauty-ink artists.

> Second framework built on the **PowerStudio premium playbook** —
> `PowerStudio/Playbooks/Expensive-Website-Playbook.md`. The reusable `fx.js`
> effects library is copied verbatim from the playbook; the hero uses the
> "dust drift" scene recipe.

## Features

- **three.js hero** — crimson ink-dust drifting through a dark volume with cursor parallax (`three-scene.js`, CDN-loaded). All motion is a pure function of time, so promo-video capture is deterministic. Falls back to a static gradient on reduced-motion or if WebGL/CDN is unavailable.
- **fx.js effects library** — scroll reveals with stagger, animated stat counters, 3D tilt cards with glare, magnetic buttons, parallax studio strip, marquee, header scroll state.
- **Work gallery** — filter by style (Blackwork / Fine line / Colour / Traditional), lightbox with keyboard navigation and photographer credits. One `WORK` array drives it.
- **Styles grid** — four tilt cards (`STYLES` array).
- **Artists** — profile cards with portraits, specialties, and Instagram handles (`ARTISTS` array).
- **Rates** — hourly / half-day / full-day glass cards (`RATES` array) with deposit fineprint.
- **Process section** — consult → design → session → heal.
- **Consult form** — artist preference, style, placement, size, and idea fields, wired to Web3Forms (`🖋 NEW CONSULT`), honeypot, mailto fallback.
- **Visit section** — hours (incl. walk-in Fridays), location, contact, Google Map with styled address fallback.
- **TattooParlor JSON-LD**, mobile responsive, ARIA-labelled, keyboard friendly.

## Personalising for a client

1. **Brand & colours** — edit `:root` tokens in `styles.css` (`--brand` crimson can become any accent; keep the near-black base).
2. **Business info** — name, hours, address, phone, JSON-LD, and map `q=` address in `index.html`. The 18+ / deposit fineprint lives in the rates section and form note.
3. **Work gallery** — edit the `WORK` array in `app.js`; **this is where the client's real portfolio goes** (swap Pexels URLs for their healed-work photos — a studio shoot sells this site).
4. **Artists / Rates / Reviews / Styles** — each is one array in `app.js`.
5. **Fonts** — Cinzel from Google Fonts; swap the `<link>` and `--font-head` token to re-voice the brand.

## Local preview

```bash
python3 -m http.server 5620   # then open http://localhost:5620
```

## Lead delivery

1. Get a FREE key at [web3forms.com](https://web3forms.com) using the **client's email**.
2. Paste it into `CONFIG.web3formsKey` in `app.js`.
3. Set `CONFIG.ownerEmail`, `CONFIG.businessName`, and `CONFIG.phone`.
4. Test from the live site and confirm the `🖋 NEW CONSULT` email arrives.

Free tier = 250 submissions/month per key. **Fallback:** with no key set, the form opens the visitor's email app (mailto) so no lead is lost.

## Performance notes

- three.js (~600 KB) loads as a deferred ES module from jsdelivr — the page renders fully before it arrives.
- The scene pauses off-screen/hidden-tab, drops particle count on small screens, caps DPR at 2, and honours `prefers-reduced-motion`.

## Hosting

1. Push to GitHub (free demo).
2. Deploy to **Netlify** or **Cloudflare Pages** (both free, custom domain support).
3. Point custom domain nameservers to Netlify/Cloudflare.

## Selling this template

Premium-tier demo — position against $5–10k agency builds. Tattoo artists live on Instagram but lose bookings without a consult funnel: this gives them a portfolio that filters by style and a consult form that lands in their inbox. Their real healed-work photos + a studio shoot are the personalization — both natural PowerStudio photography upsells.
