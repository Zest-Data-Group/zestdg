# zestdg.com — task list

Website and code work. Business setup tasks (legal, tax, email, hosting
accounts) live in `TASKS.md`. Status key: `[ ]` open · `[x]` done · `[-]`
dropped. Last reviewed 2026-09-22.

## Where things stand

The site repo is public at `github.com/Zest-Data-Group/zestdg` (pushed
2026-09-22, two commits). It is live: deployed from the repo as a Cloudflare
Worker (`zestdg.carver-dan1.workers.dev`) with `zestdg.com` and
`www.zestdg.com` attached as custom domains. Verified 2026-09-22 from
Cloudflare's edge and from Google's resolver; `_headers` is honored.

Palette: linen ground `#FAF0E6`, green `#00743F` and orange `#F1A104` lead, blue
`#1E65A7` and navy `#192E5B` as accents, no dark theme. Lime logo
(`src/img/logo.svg`, favicon `src/img/mark.svg`). JetBrains Mono throughout.
Tagline "Fast and fresh data analysis." Nav: Projects, Publications, About,
GitHub.

Home page: three "What we do" panels (green, blue, navy, all with an orange top
bar, equal height, stepped toward the center) that slide on hover to reveal
the featured project beneath. Projects page: each project is a card that
expands in place to the full write-up; the standalone project pages still
exist and show the project's square image beside the title. About page:
rewritten from Dan's text 2026-09-21 with a three-person team (Dan, Ian
Hellman, Gavin Hawkes) with photos. Publications page has the citations chart
with a per-year / cumulative toggle and topic dropdowns. Every link that leaves
the site opens in a new tab (a transform in `.eleventy.js`). Contact ask and
live oak photo in the footer. `npm run verify` builds and checks links.

## Do first

- [x] **Connect Cloudflare** and attach both domains. Done 2026-09-22 as a
      Worker rather than a Pages project.
- [ ] **Turn on "Always Use HTTPS"** in the Cloudflare zone (SSL/TLS → Edge
      Certificates). Plain `http://zestdg.com` currently serves the page
      instead of redirecting; HSTS is already set so browsers mostly cope.
- [ ] **Publish the chart repo or change the link.** The publications page links
      to `github.com/Zest-Data-Group/scholar-citations-chart`, which does not
      exist on the org (it was deleted 2026-09-15 and never re-pushed). The
      local repo at `~/Documents/scholar-citations-chart` still points at that
      remote and has one uncommitted change to `style.css`. Push it before
      launch, or edit the link in `src/publications.njk`.
- [-] **Delete the two GitHub repos.** Superseded: `zestdg` was re-pushed as a
      public repo on 2026-09-22. The chart repo is gone and needs re-pushing
      (above).
- [x] **Attribution trailer on the first commit.** Removed 2026-09-22 by
      rewriting the root commit and force-pushing `main` (now `12d6eb4` and
      `f8a6bcd`). Anyone who cloned before that must re-clone.

## Design decisions still open

- [ ] **Contact block.** A footer ask (`foot-ask` in `src/_includes/base.njk`)
      is in place. If that is the final choice, delete
      `design/cta-options.html` and close this.
- [ ] **Font.** The whole site is JetBrains Mono. If all-mono tires, the switch
      is the `body` font line in `src/css/style.css` plus the Google Fonts link
      in `base.njk`. The font loads from Google; self-host the woff2 files if
      that matters for privacy.
- [ ] **Logo refinement.** `src/img/logo.svg` (round, in use) versus
      `src/img/logo-v2.svg` (oval with a third cut away). Pick one. Then export
      the favicon PNG set (16, 32, 180, 512). Square exports for GitHub and
      LinkedIn already exist in `design/` (`logo-github.png`, 1024px on linen,
      and `logo.png`, transparent). `src/img/dragon.svg` is unreferenced and can
      be deleted.

## Content

- [ ] **Project write-ups.** Dan wants to edit all three project texts
      (`src/projects/*.md`). Each file feeds both the expandable card on the
      projects page and the standalone page.
- [ ] **Better project figures.** All three carry a `figure:` in
      `src/img/figures/`. The GAMMa one (`gamma.jpg`, 1.5 MB) is the weak link
      and is also far larger than the other two; recapture the results view by
      hand at 320px square and re-save it small. Use figures you made; journal
      figures may carry the publisher's copyright.
- [ ] **Image permissions.** `NOTICE` and the README state that team photos
      are used with each person's permission and that the GAMMa figure is used
      with the Atlanta Botanical Garden's permission. Dan is asking Ian and
      Gavin about their headshots and ABG about the application screenshot
      (2026-09-22). If either says no, replace the image.
- [x] **Licensing.** Both repos are AGPL-3.0-or-later for code (2026-09-22);
      site content, data, images, and the brand are reserved. See `NOTICE`.
      The chart repo moved from MIT to AGPL before it was ever published.
- [ ] **Team entries.** Ian's draft bio ended mid-sentence at where he
      currently contributes; finish that sentence. Neither Ian nor Gavin has
      links. Confirm the FAA wording with Ian (Dan wrote "FIA").
- [x] **Confirm the GapAnalysis repo link.** Verified 2026-09-22:
      `github.com/CIAT-DAPA/GapAnalysis` exists and the package is on CRAN.
- [ ] **Review the publication groups.** Topic assignments are the `category`
      key in `src/_data/publications.js`; group names and blurbs are in
      `src/_data/pubCategories.js`.
- [x] **About page rewrite.** Done 2026-09-21 from Dan's text. The former
      "The work" and "On AI" sections were removed; AI stance returns as a post.
- [ ] **Audience framing.** Keep the plant-conservation focus for launch;
      broaden only when there is real work to show. The new About intro is
      general-purpose, so revisit whether the home lede should match it.

## Build later (not blocking launch)

- [ ] **Services / Working-with-us page.** When engagement steps and pricing
      shape are settled, move "Working with us" off the About page.
- [ ] **Training as a listed service.** `src/projects/training.md` is
      `draft: true`. Promote it once training is something to sell.
- [ ] **Notes / writing section.** First post: the AI-in-the-workplace stance
      that was removed from About. Plan: a `src/notes/` collection with its own
      layout, a `/notes/` index, an RSS feed, and a nav entry once there is at
      least one published post.

## Data

- [ ] **Keep the Scholar numbers in one place.** The per-year counts live in
      `src/_data/pubStats.js` (site) and `data.js` in the chart repo. Update
      both, and note the date in `asOf`.

## Chart repo (`~/Documents/scholar-citations-chart`)

- [ ] Commit the pending `style.css` change and push to the org (see Do first).
- [ ] Enable GitHub Pages on it so people can try it without downloading.
- [ ] Test the Download SVG and Download PNG buttons in Firefox and Safari.
- [ ] Add a cumulative-mode screenshot to the README.

## Launch checklist

- [x] Push `zestdg` to the org (2026-09-22).
- [x] Connect it to Cloudflare and attach both domains (2026-09-22).
- [x] Cloudflare Email Routing for `hello@zestdg.com` (MX records are live).
- [ ] Chart repo published, or the publications-page link changed.
- [ ] Run the post-deploy checks in `DEPLOY.md`.
- [ ] Upload `design/logo-github.png` as the org avatar if not done.
- [ ] Google Search Console: add the domain, submit `sitemap.xml`.
