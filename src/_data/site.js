// Single source of truth for site-wide metadata. Referenced as {{ site.* }} in templates.
module.exports = {
  name: "Zest Data Group",
  legalName: "Zest Data Group LLC",
  // No trailing slash. Used to build absolute URLs for canonical tags and the sitemap.
  url: "https://zestdg.com",
  tagline: "Fast and fresh data analysis.",
  description:
    "Zest Data Group LLC — geospatial analysis, R development, and reproducible research workflows for conservation science.",
  email: "hello@zestdg.com",
  location: "Fort Collins, Colorado",
  github: "https://github.com/Zest-Data-Group",
  author: "Dan Carver",
  locale: "en_US",
  // Relative to the site root; used for Open Graph / Twitter card previews.
  ogImage: "/img/og.png",
  // Stamped at build time so the footer copyright never goes stale.
  buildYear: new Date().getFullYear(),
};
