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

### Contact form

The modal posts to [Web3Forms](https://web3forms.com), which emails submissions
to `info@seco.bio`. This is deliberately independent of the host — it does not
rely on Netlify's build-time form detection, which never sees a form that React
renders on the client.

It needs one environment variable, `NEXT_PUBLIC_WEB3FORMS_KEY` (see
`.env.example`). Set it in Netlify under **Site configuration → Environment
variables**, then redeploy — `NEXT_PUBLIC_*` values are baked in at build time,
so changing it does not take effect until the next build.

Without the key the form fails into its error state, which tells people to
email `info@seco.bio` directly. It never reports a success it didn't get.

## Known placeholders

- Timeline durations on Platform page read `[CONFIRM TIMELINE]` — awaiting numbers from Joe
- Nature Materials paper links point to `#`
- Team photos are grey circles until real files are added
