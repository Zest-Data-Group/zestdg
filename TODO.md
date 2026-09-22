# zestdg.com — task list

Written 2026-09-15 at the end of a working session. Business setup tasks
(legal, tax, email, hosting) live in `TASKS.md`; this file is the website and
code work. Status key: `[ ]` open · `[x]` done · `[-]` dropped.

## Where things stand

Palette: linen ground `#FAF0E6`, green `#00743F` and orange `#F1A104` lead, blue
`#1E65A7` as accent, no dark theme. Lime logo (`src/img/logo.svg`, favicon
`src/img/mark.svg`). JetBrains Mono throughout. Tagline "Fast and fresh data
analysis." Nav: Projects, Publications, About, GitHub. Home page has flower
thumbnails beside featured work. Publications page has the citations chart with
a per-year / cumulative toggle and topic dropdowns. Contact block on every page,
live oak footer with a green overlay. `npm run verify` builds and checks links.

Both this folder and `~/Documents/scholar-citations-chart` have local git repos
with one commit each.

## Do first

- [ ] **Delete the two GitHub repos.** They were pushed to the `Zest-Data-Group`
      org and then set to private at Dan's request. Deleting needs the
      `delete_repo` token scope:
      `gh auth refresh -h github.com -s delete_repo`, then
      `gh repo delete Zest-Data-Group/zestdg --yes` and the same for
      `scholar-citations-chart`.
- [ ] **Amend the two initial commits** to drop the Claude attribution trailer,
      now that `~/.claude/settings.json` turns attribution off. One
      `git commit --amend` in each repo before any future push.

## Design decisions still open

- [ ] **Contact block.** Five options are mocked up in `design/cta-options.html`
      (open it in a browser). A is the current blue panel with an orange edge;
      B a quiet rule with a button; C a split card; D a centered statement using
      the tagline; E a full-bleed navy band above the footer. Once chosen, edit
      the `contact-block` markup in `src/_includes/base.njk` and its CSS.
- [ ] **Font.** The whole site is JetBrains Mono, the font this Omarchy install
      runs. omarchy.org itself pairs Geist for text with JetBrains Mono for code.
      If all-mono tires, the switch is the `body` font line in
      `src/css/style.css` plus the Google Fonts link in `base.njk`. The site
      currently loads the font from Google; self-host the woff2 files if that
      matters for privacy. (The unused Fraunces font link was removed
      2026-09-16.)
- [ ] **Logo refinement.** `src/img/logo.svg` is the round first pass;
      `src/img/logo-v2.svg` is the oval with a third cut away. Pick one. Open questions:
      band shape (taper or curve), whether the cut quarter should sit top-right,
      a lighter lime green for the body. Then export the favicon PNG set and a
      square mark for GitHub and LinkedIn. Delete `src/img/dragon.svg` once the
      lime is final.

## Content

- [ ] **Better project figures.** All three projects now carry a `figure:` in
      `src/img/figures/` (2026-09-16): a crop of the GAMMa landing page, the
      *Vitis acerifolia* range map, and the GapAnalysis priority chart. The
      GAMMa one is the weak link: the app's results view (map plus the three
      scores) cannot be reached headless, so Dan should capture that by hand
      and replace `src/img/figures/gamma.jpg` (square, 320px or larger). Use
      figures you made; journal-typeset figures may carry the publisher's
      copyright even for open-access papers.
- [ ] **Team entries on the About page.** Ian Hellman and Gavin Hawkes are now
      in `src/_data/team.js`. Ian's bio ends before the sentence about where he
      currently contributes; neither has links. Remove anyone who has not agreed before the site goes live
      (see Collaborators in `TASKS.md` for the consent and contractor questions).
- [ ] **Confirm the GapAnalysis repo link.** `src/projects/gap-analysis-r.md`
      points at `github.com/CIAT-DAPA/GapAnalysis` from memory. Verify, or point
      at CRAN.
- [ ] **Review the publication groups.** Topic assignments are the `category`
      key in `src/_data/publications.js`; group names and blurbs are in
      `src/_data/pubCategories.js`. They were assigned from titles and venues.
- [ ] **About page rewrite.** The current text is unreviewed boilerplate. Dan is
      answering a set of guiding questions (2026-09-16 session) and the page
      will be rewritten from those answers. Layout can stay.
- [ ] **Audience framing.** The site is deliberately specific to plant genetic
      resources and conservation. Decided 2026-09-16 to keep that focus for
      launch; broaden only when there is real work to show (public health,
      VirusScreen, Colorado state projects). When that happens, add a short
      "Also" or "Other domains" strip rather than diluting the lede.

## Build later (not blocking launch)

- [ ] **Services / Working-with-us page.** Engagement steps, formats, and
      pricing shape are not settled yet. When they are, move "How engagements
      work", "Tools", and the workshop line off the About page onto a Services
      page and link it from the contact block.
- [ ] **Training as a listed service.** `src/projects/training.md` is
      `draft: true`. Promote it to a real page with past hosts (NASA DEVELOP,
      Geospatial Centroid) and typical formats once training is something to
      sell.
- [ ] **Notes / writing section.** Wanted. First post: Dan's position on using
      AI in the workplace, written as a company stance. Plan: a `src/notes/`
      collection with its own layout, a `/notes/` index, an RSS feed, and a nav
      entry once there is at least one published post. Posts as Markdown with
      `date`, `summary`, and `draft`. Do not add the nav link before the first
      post is ready.

## Data

- [ ] **Keep the Scholar numbers in one place.** The same per-year counts live in
      `src/_data/pubStats.js` (site) and `data.js` in the chart repo. When you
      refresh from Scholar, update both, or have the site copy from the repo.
      Note the date in `asOf` each time.

## Chart repo (`~/Documents/scholar-citations-chart`)

- [ ] Push to the org when ready (currently held back, see Do first).
- [ ] Enable GitHub Pages on it so people can try it without downloading.
- [ ] Test the Download SVG and Download PNG buttons in Firefox and Safari.
- [ ] Add a cumulative-mode screenshot to the README.
- [ ] The publications page links to `Zest-Data-Group/scholar-citations-chart`.
      Publish that repo before the site goes live, or change the link in
      `src/publications.njk`.

## Launch checklist

- [ ] Push `zestdg` to the org and connect it to Cloudflare Pages (Path A in
      `DEPLOY.md`): Eleventy preset, build `npm run build`, output `_site`,
      `NODE_VERSION=20`, attach `zestdg.com` and `www.zestdg.com`.
- [ ] Cloudflare Email Routing for `hello@zestdg.com` (the site already
      publishes it).
- [ ] Run the post-deploy checks in `DEPLOY.md`.
- [ ] Team members' consent confirmed, or entries removed from `src/_data/team.js`.
- [ ] Google Search Console: add the domain, submit `sitemap.xml`.
