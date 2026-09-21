# Seco Bio — Website

Next.js site for Seco Bio. Deploys to Netlify from `main`.

## Structure

```
pages/
  index.jsx        Nav, routing, footer — the shell
  _app.jsx         Loads global CSS
  _document.jsx    <head>, meta tags, favicon link
components/
  HomePage.jsx        Hero, problem, proof, two doors
  TechnologyPage.jsx  Technical detail
  PlatformPage.jsx    The loop, deal structure
  SciencePage.jsx     Paper, findings, IP
  PartnersPage.jsx    Brands + investors
  AboutPage.jsx       Team, advisors, funding
  ContactForm.jsx     Modal intake form
  Translate.jsx       Google Translate widget
styles/globals.css    Global styles + Tailwind
public/
  videos/          <- put seco-video.mp4 here
  images/team/     <- put headshots here
```

## Adding assets

**Video:** name it `seco-video.mp4`, drop in `public/videos/`. It plays automatically — no code change.

**Headshots:** drop in `public/images/team/` as `joe.jpg`, `miguel.jpg`, `giovanni.jpg`, `hendrix.jpg`, `stroud.jpg`, `luther.jpg`. Then say the word and the About page gets wired to them.

**Favicon:** drop `favicon.ico` in `public/`.

## Run locally

```
npm install
npm run dev        # http://localhost:3000
```

## Deploy

Push to `main`. Netlify builds and deploys automatically (see `netlify.toml`).

Contact form submissions are handled by Netlify Forms. The modal is rendered by
React, which Netlify's build-time scanner never sees, so `public/__forms.html`
registers the form instead and the modal POSTs to that same path. Where
submissions get emailed is a dashboard setting, not a repo setting:
Site settings → Forms → Form notifications.

## Known placeholders

- Timeline durations on Platform page read `[CONFIRM TIMELINE]` — awaiting numbers from Joe
- Nature Materials paper links point to `#`
- Team photos are grey circles until real files are added
