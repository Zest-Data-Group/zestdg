# Zest Data Group LLC — setup task list

Written 2026-09-11. Covers what is still needed to stand the business up,
based on the Drive folder, the state of this repo, and standard steps for a
new single-member Colorado LLC. No account numbers or identifiers belong in
this file; keep those in a password manager.

Status key: `[ ]` open · `[x]` done · `[-]` not needed

## Already done

- [x] Colorado LLC filed (Aug 30, 2026). Filing receipt is in the Drive folder.
- [x] EIN issued by the IRS (Aug 31, 2026). CP 575 letter is in the Drive folder.
- [x] Business bank account opened (Bluevine).
- [x] Registered agent in place (Denver address).
- [x] Contract template and a draft Professional Services Agreement / SOW with
      Missouri Botanical Garden (Drive → `mobot_26-27`).
- [x] Domain `zestdg.com` registered at Cloudflare, nameservers on Cloudflare
      (registered May 2026, renews May 2027).
- [x] Site built (this repo) with deploy instructions in `DEPLOY.md`.
- [x] Business email: hello@zestdg.com via Cloudflare Email Routing (per 2026-09-15 session).

## Do first

- [ ] **Restrict the Drive folder.** It is shared as "anyone with the link" and the
      Business Reference Profile contains the EIN and the full bank account and
      routing numbers. Share with named people only, and move the bank details
      out of the doc into a password manager.

## Legal, tax, and administrative

- [ ] **Operating agreement.** Not required by Colorado, but banks, clients, and any
      future co-owner will ask for it, and it is what keeps the LLC separate from
      you personally. A single-member template is sufficient. Store a signed copy
      in the Drive folder.
- [ ] **Colorado periodic report.** Due yearly in the three-month window that opens
      on the first day of the filing anniversary month: **Aug 1 – Oct 31, 2027**
      for the first one. Set a calendar reminder now and turn on Secretary of
      State email notifications.
- [ ] **Estimated taxes.** Single-member LLC income is reported on Schedule C with
      self-employment tax. Federal quarterly payments (Form 1040-ES) are due
      mid-April, mid-June, mid-September, and mid-January; Colorado has a
      matching estimate (DR 0104EP). Decide whether to hire an accountant before
      the first client payment lands.
- [-] **Beneficial ownership (BOI) report.** Not needed. FinCEN exempted domestic
      companies in March 2025. Revisit only if the rule changes.
- [ ] **CSU outside-employment / conflict-of-interest disclosure.** File it. Also
      confirm that GAMMa and the gap-analysis codebase carry no CSU or USDA
      intellectual-property claims into client work.
- [ ] **Insurance.** Professional liability (errors and omissions) at minimum;
      general liability if a client requires it. Check the MBG draft for an
      insurance clause and a certificate-of-insurance requirement before signing.
- [ ] **Standard paperwork.**
  - [ ] W-9 filled out with the EIN, ready to send.
  - [ ] Invoice template with payment terms (net 30 is typical).
  - [ ] Rate sheet (hourly and daily; the contract template already assumes both).
  - [ ] Bookkeeping tool connected to the bank account.
  - [ ] Use the Fort Collins mailing address on contracts, not the registered
        agent's Denver address.
- [ ] **Finish the MBG agreement.** Sign, calendar the invoice dates, file the
      executed copy in `mobot_26-27`.
- [ ] **Local licensing.** Fort Collins and Larimer County do not license service
      businesses and Colorado does not tax services, so nothing should be
      required. Confirm once and note the answer here.
- [ ] **Trade name check.** Search the USPTO database (TESS / Trademark Search) for
      "Zest Data Group" before spending on branding. Trademark registration is
      optional and can wait.

## Online presence

- [x] **GitHub organization.** `Zest-Data-Group` created 2026-09-15; the site's
      GitHub link points at it.
- [ ] **Version control this folder.** Local git repos exist for this folder and
      for `~/Documents/scholar-citations-chart`. Both were pushed to the org on
      2026-09-15 and then pulled back at Dan's request: set to private, to be
      deleted. Push again when ready. The publications page links to
      `Zest-Data-Group/scholar-citations-chart`, so publish that repo before the
      site goes live or change the link.
- [ ] **Host the site.** Follow Path A in `DEPLOY.md`: connect the repo to
      Cloudflare Pages, Eleventy preset, build `npm run build`, output `_site`,
      `NODE_VERSION=20`, attach `zestdg.com` and `www.zestdg.com`. Run the
      post-deploy checks listed there. Before going live: the contributor names
      on the About page need the people's consent (see Collaborators below).
- [ ] **Email on the domain.** Pick one before the site goes live, since the site
      already publishes `hello@zestdg.com`:
  - Cloudflare Email Routing — free; forwards to Gmail; Gmail can "send as" the
    address.
  - Google Workspace Business Starter — about $7/user/month; real mailbox,
    calendar, and Drive owned by the business.
- [ ] **Icon and logo package** from the existing dragon SVG:
  - [ ] Favicon set (16, 32, 180 Apple touch, 512 for manifest).
  - [ ] Square logo for GitHub org and LinkedIn.
  - [ ] Wordmark lockup (dragon + name) for email signature and proposals.
- [ ] **Profiles.** LinkedIn company page; ORCID link on the About page.
      Google Business Profile is optional for a remote consultancy.

## Website

The site's own task list is in `TODO.md`.

## Collaborators (Ian and Gavin)

- [ ] **Ask each directly** whether they want to appear on the About page and in
      what role. `src/_data/team.js` already supports extra people with a bio,
      photo, and links; adding them is a small edit once they agree.
- [ ] **Decide the working relationship.** If they are paid through the LLC they
      are contractors: independent-contractor agreement, W-9 from each, and a
      1099-NEC at year end if payments exceed $600. Settle this before listing
      them so the website matches reality.

## Recurring dates

| When | What |
| --- | --- |
| Jan 15, Apr 15, Jun 15, Sep 15 | Federal and Colorado estimated tax payments |
| Jan 31 | 1099-NEC to any contractor paid over $600 the prior year |
| May 18, 2027 | Domain renewal (Cloudflare auto-renews if a card is on file) |
| Aug 1 – Oct 31, 2027 | Colorado periodic report |
