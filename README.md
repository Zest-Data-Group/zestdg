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
figure: /img/figures/x.png # optional square image; replaces thumb everywhere it is shown
---

Markdown body goes here.
```

The slug becomes the URL: `src/projects/your-slug.md` -> `/projects/your-slug/`.
Projects sort newest first automatically.

**Drafts.** `draft: true` keeps a project out of the build — no page, no sitemap
entry, not on the home page — while still showing it in
`npm run dev`. Delete the line to publish. `src/projects/training.md` is
currently a draft.

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
| Project list (expandable cards) | `src/projects.njk` |
| Layout, nav, footer, meta tags | `src/_includes/base.njk` |
| Single project layout | `src/_includes/project.njk` |
| Styles | `src/css/style.css` |
| Logo | `src/img/logo.svg` (full mark) and `src/img/mark.svg` (favicon) |
| Publications page | `src/publications.njk` |
| Not-found page | `src/404.njk` |

Change the email or site URL in **one** place: `src/_data/site.js`. It feeds the
footer, contact links, canonical tags, structured data, and the sitemap.

## Add a team member
People on the About page come from `src/_data/team.js`. Copy the commented block
at the bottom of that file, fill it in, and drop a square photo in `src/img/`
(the page shows it as a 120px circle). Entries render in the order listed;
`image`, `bio`, and `links` are all optional.

## External links
Any link whose address leaves the site gets `target="_blank"` and
`rel="noopener"` at build time, from a transform in `.eleventy.js`. Internal
links and `mailto:` links are left alone, so nothing needs adding by hand.

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

## License
Two things live in this repo and they carry different terms; `NOTICE` has the
full statement.

- **Code** (Eleventy config, `src/_includes/`, `src/css/`, `src/js/`,
  `scripts/`, the sitemap, robots, and 404 templates, `package.json`) is
  [AGPL-3.0-or-later](LICENSE). Fork it, build your own site from it, keep it
  open. Commercial licensing on other terms is available from hello@zestdg.com.
- **Content** (project write-ups, the About page, the text inside templates,
  the data files in `src/_data/`, and everything under `src/img/`) is
  © Zest Data Group LLC, all rights reserved. Ask before reusing it.
- **Brand.** The Zest Data Group name and the lime logo are not licensed and
  may not be used to identify a derived site.

Team photos are used with each person's permission. The GAMMa figure shows an
application built for the Atlanta Botanical Garden and is used with permission.
