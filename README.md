# Jadion.AI

Landing page for [jadion.ai](https://jadion.ai) — currently a static site.

## Structure

```
jadion-ai/
  index.html          Main landing page
  assets/
    css/
      styles.css      All styles
    js/
      main.js         Scroll reveal + waitlist form logic
  README.md
```

## Local development

No build step required. Open `index.html` in a browser directly, or run a simple local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Fonts load from Google Fonts — internet connection required on first render.

## Deployment

Connected to [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeploy.

Branch conventions:
- `main` — always live
- `dev` — working branch
- `feature/x` — specific additions

## Before going live

- [ ] Wire up waitlist form to a real backend (Formspree or Airtable)
- [ ] Confirm public-facing stats cleared with legal (4x, $130B, TDWI)
- [ ] Update Dian's bio with her final language
- [ ] Point jadion.ai DNS to Vercel
- [ ] Add favicon and Open Graph meta tags

## Brand

| Token         | Value     |
|---------------|-----------|
| Navy          | `#002C5E` |
| Navy Deep     | `#001835` |
| Crimson       | `#A81F2F` |
| Cream         | `#F5F1EA` |
| Font Display  | Bebas Neue |
| Font Body     | DM Sans    |
| Font Mono     | DM Mono    |
# jadion.ai
