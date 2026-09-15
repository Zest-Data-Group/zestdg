// People shown on the About page.
//
// To add a collaborator, copy a block below. `image` is optional — leave it out
// and the entry renders as text only. Put photos in src/img/ and reference them
// as "/img/filename.jpg". Order here is the order on the page.
module.exports = [
  {
    name: "Dan Carver",
    role: "Founder, spatial scientist",
    image: "/img/dan-carver.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=pNkU3ikAAAAJ&hl=en" },
      { label: "GitHub", url: "https://github.com/dcarver1" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/daniel-carver-0439a7113/" },
    ],
    bio: `Dan has spent a decade building the spatial models behind conservation
      decisions — species distributions, gap analyses, and the pipelines that keep
      them reproducible. He is technical manager at Colorado State University's
      Geospatial Centroid and has worked with the USDA Agricultural Research
      Service on crop wild relatives since 2018, with a masters in applied
      geography from CU Denver and degrees in geology and physical geography from
      Adams State.`,
  },

  // {
  //   name: "Collaborator name",
  //   role: "What they do on projects",
  //   image: "/img/their-photo.jpg",
  //   links: [{ label: "Website", url: "https://example.com" }],
  //   bio: `A sentence or two on their background and what they bring.`,
  // },
];
