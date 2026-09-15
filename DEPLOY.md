# Deploying zestdg.com to Cloudflare Pages

Two paths. Path A (GitHub) is set once and then every `git push` deploys automatically.
Path B (CLI) publishes straight from your machine. You can use both on the same project.

## 0. One-time prerequisites
1. Node.js 18 or newer: `node -v`
2. A Cloudflare account with `zestdg.com` added as a zone (Cloudflare dashboard → Add a domain). If the domain is registered elsewhere, point its nameservers at the two Cloudflare gives you.
3. In this folder: `npm install`, then `npm run verify` — this builds and checks
   that every internal link resolves. Confirm `_site/index.html` exists.

## Path A — GitHub auto-deploy (recommended)
1. Push this folder to a GitHub repo, e.g. `dcarver1/zestdg`.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings:
   - Framework preset: **Eleventy**
   - Build command: `npm run build`
   - Build output directory: `_site`
   - Environment variable: `NODE_VERSION` = `20`
4. Save and Deploy. First build takes about a minute; you get a `*.pages.dev` URL.
5. Add the domain: project → Custom domains → Set up a custom domain → `zestdg.com`. Repeat for `www.zestdg.com`. Cloudflare creates the DNS records since the zone is already there.
6. Done. From now on: edit markdown → `git commit` → `git push` → live in ~1 minute.

## Path B — Wrangler CLI
1. Install: `npm install -g wrangler` (or use `npx wrangler` without installing).
2. Log in: `wrangler login` — opens a browser to authorize.
3. Create the project once:
   `wrangler pages project create zestdg --production-branch main`
4. Build and publish:
   ```
   npm run build
   wrangler pages deploy _site --project-name zestdg
   ```
5. Custom domain: same as Path A step 5, in the dashboard (Wrangler doesn't attach domains to Pages).
6. Every later update is just step 4.

## Before the first deploy
Set the real domain in `src/_data/site.js` if it is ever anything other than
`https://zestdg.com`. That one value generates the canonical tags, sitemap,
and social card URLs — if it is wrong, search engines index the wrong host.

## Checks after first deploy
- `https://zestdg.com` loads and redirects from `http://`.
- `https://www.zestdg.com` works (Cloudflare handles the redirect if both domains are attached).
- `https://zestdg.com/sitemap.xml` and `/robots.txt` both load, and
  every `<loc>` in the sitemap points at `zestdg.com` (not `localhost`).
- A made-up URL such as `https://zestdg.com/nope/` shows the styled 404 page.
- Paste `https://zestdg.com` into Slack or iMessage — the preview card should show
  the lime logo and "Fast and fresh data analysis."
- Response headers include `X-Content-Type-Options: nosniff`, which confirms
  `_headers` was picked up: `curl -sI https://zestdg.com | grep -i x-content`.
- Dashboard → Pages project → Settings → Builds: confirm `NODE_VERSION` is set if a build fails with a Node error.

## Search engine setup (optional, after the domain is live)
1. Google Search Console → add `zestdg.com` as a domain property; verification is
   a DNS TXT record, which you add in the same Cloudflare zone.
2. Submit `https://zestdg.com/sitemap.xml`.

## Common problems
- **Build fails on Cloudflare but works locally** → almost always the Node version. Set `NODE_VERSION=20`.
- **CSS or dragon missing** → paths must start with `/` (e.g. `/css/style.css`). Check `.eleventy.js` passthrough copies.
- **Domain shows "not active"** → nameservers haven't propagated yet; can take up to 24 h.
- **Want to preview a change before it's live** → open a pull request; Pages builds a preview URL per branch.
- **A draft project appeared on the live site** → the file still has `draft: true`
  but something ran `eleventy --serve` rather than `npm run build`. Cloudflare's
  build command must be exactly `npm run build`.
- **Social preview card is blank or stale** → Slack, LinkedIn, and X cache
  previews aggressively. Confirm `https://zestdg.com/img/og.png` loads directly,
  then re-share; most platforms refresh within a day.
