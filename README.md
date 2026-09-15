# zestdg.com

Static site for Zest Data Group LLC, built with [Eleventy](https://www.11ty.dev/)
and hosted on Cloudflare Pages. No runtime dependencies — the build produces
plain HTML, CSS, and SVG.

## Run locally
```
npm install
npm run dev      # http://localhost:8080, live reload
npm run build    # outputs to _site/
npm run verify   # build, then check every internal link resolves
```

## Add a project
Create `src/projects/your-slug.md`:

```markdown
---
title: Project name
date: 2026-03-01
featured: true          # shows on the home page (optional)
draft: true             # visible in `npm run dev`, excluded from the build (optional)
client: Who it was for  # optional
summary: One sentence shown in lists and search results.
tools: [R, Shiny]       # optional, rendered as pills
repo: https://github.com/dcarver1/...   # optional
link: https://app-url   # optional
thumb: /img/thumbs/x.jpg   # optional square photo, shown on the home page and project list
thumbAlt: What the photo shows
figure: /img/figures/x.png # optional; replaces thumb on the project list only
---

Markdown body goes here.
```

The slug becomes the URL: `src/projects/your-slug.md` -> `/projects/your-slug/`.
Projects sort newest first automatically.

**Drafts.** `draft: true` keeps a project out of the build — no page, no sitemap
entry, not on the home page — while still showing it in
`npm run dev`. Delete the line to publish. `src/projects/gamma.md` is currently a
draft placeholder.

Images go in `src/img/` and are referenced as `/img/filename.png`.

## Edit other pages
| What | Where |
| --- | --- |
| Site name, URL, email, social links | `src/_data/site.js` |
| People on the About page | `src/_data/team.js` |
| Publication list | `src/_data/publications.js` |
| Google Scholar metrics | `src/_data/pubStats.js` |
| Home copy | `src/index.njk` |
| About | `src/about.md` |
| Project list | `src/projects.njk` |
| Layout, nav, footer, meta tags | `src/_includes/base.njk` |
| Single project layout | `src/_includes/project.njk` |
| Styles | `src/css/style.css` |
| Logo | `src/img/logo.svg` (full mark) and `src/img/mark.svg` (favicon) |
| Publications page | `src/publications.njk` |
| Not-found page | `src/404.njk` |

Change the email or site URL in **one** place: `src/_data/site.js`. It feeds the
footer, contact links, canonical tags, structured data, and the sitemap.

## Add a collaborator
People on the About page come from `src/_data/team.js`. Copy the commented block
at the bottom of that file, fill it in, and drop a photo in `src/img/`. Entries
render in the order listed; `image` and `links` are both optional.

## Add a publication
Add an entry to `src/_data/publications.js`. Set `featured: true` to promote it
to the top of the publications page and onto the home page — keep that to a
handful. `doi` turns the title into a link; `citations` and `note` are optional.

Citation totals live in `src/_data/pubStats.js` and are stamped with the date
they were read, so update `asOf` whenever you refresh them from Scholar.

## What the build generates
- `/sitemap.xml` and `/robots.txt` — from `src/sitemap.njk` and `src/robots.njk`.
- `/404.html` — served automatically by Cloudflare Pages.
- `_headers` — security and cache headers, from `src/_headers`.
- Per-page canonical URLs, Open Graph / Twitter cards, and `ProfessionalService`
  JSON-LD, all built from `src/_data/site.js`.

## Social preview image
`src/img/og.svg` is the source for the link preview card. After editing it:

```
npm run og       # requires rsvg-convert (librsvg)
```

Both files are committed; regenerate the PNG only when the SVG changes.

See DEPLOY.md for Cloudflare.
