// Eleventy config — the whole site pipeline lives here.
const site = require("./src/_data/site.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  // Cloudflare Pages reads _headers from the root of the build output.
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  // Every markdown file in src/projects becomes a project, newest first.
  // Drafts are already excluded by src/_data/eleventyComputed.js on a build.
  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/*.md").sort((a, b) => b.date - a.date)
  );

  // Front matter dates are parsed as UTC midnight, so reading them back in a
  // negative-offset timezone lands on the previous day. Always format in UTC.
  const utc = (d) => new Date(d);
  eleventyConfig.addFilter("year", (d) => utc(d).getUTCFullYear());
  eleventyConfig.addFilter("isoDate", (d) => utc(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("readableDate", (d) =>
    utc(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    })
  );

  // Turn a root-relative path into an absolute URL for canonical tags, the
  // sitemap, and Open Graph.
  eleventyConfig.addFilter("absoluteUrl", (path) => {
    try {
      return new URL(path, site.url).href;
    } catch {
      return site.url;
    }
  });

  // Nunjucks selectattr() cannot reach nested keys like "data.featured".
  eleventyConfig.addFilter("featured", (items) =>
    (items || []).filter((i) => i.data.featured)
  );

  // Publications split into the promoted set and the remainder, newest first.
  const byYear = (a, b) => b.year - a.year;
  eleventyConfig.addFilter("featuredPubs", (pubs) =>
    (pubs || []).filter((p) => p.featured).sort(byYear)
  );
  eleventyConfig.addFilter("restPubs", (pubs) =>
    (pubs || []).filter((p) => !p.featured).sort(byYear)
  );

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  // Publications in one topic group (see src/_data/pubCategories.js).
  eleventyConfig.addFilter("inCategory", (pubs, key) =>
    (pubs || []).filter((p) => p.category === key)
  );

  // Every link that leaves the site opens in a new tab. Done once here at build
  // time so markdown write-ups, publication data, and templates all get it.
  // rel="noopener" keeps the new page from reaching back into this one.
  const origin = new URL(site.url).origin;
  eleventyConfig.addTransform("externalLinks", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(/<a\s[^>]*href="(https?:\/\/[^"]+)"[^>]*>/g, (tag, href) => {
      if (href.startsWith(origin)) return tag;
      let out = tag;
      if (!/\btarget=/.test(out)) out = out.replace(/^<a\s/, '<a target="_blank" ');
      if (/\brel="/.test(out)) {
        if (!/\brel="[^"]*\bnoopener\b/.test(out)) out = out.replace(/\brel="/, 'rel="noopener ');
      } else {
        out = out.replace(/^<a\s/, '<a rel="noopener" ');
      }
      return out;
    });
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
