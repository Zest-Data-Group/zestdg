// Draft handling: `draft: true` in a file's front matter keeps it visible in
// `npm run dev` but drops it from `npm run build`, so unfinished work never
// reaches production. ELEVENTY_RUN_MODE is "build" only for a real build.
const isBuild = () => process.env.ELEVENTY_RUN_MODE === "build";
const isHidden = (data) => Boolean(data.draft) && isBuild();

module.exports = {
  eleventyExcludeFromCollections: (data) =>
    isHidden(data) || data.eleventyExcludeFromCollections === true,
  permalink: (data) => (isHidden(data) ? false : data.permalink),
  // A project's summary doubles as its meta description unless one is set.
  description: (data) => data.description || data.summary,
};
