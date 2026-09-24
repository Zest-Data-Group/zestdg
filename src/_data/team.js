// People shown under "Who we are" on the About page.
//
// To add someone, copy a block below. `image` is optional — leave it out and
// the entry renders as text only. Put photos in src/img/ and reference them
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
    bio: `After 300 nights in the field over five years, Dan started a master's
      degree in geography at the University of Colorado Denver. An internship
      with NASA DEVELOP set the stage for a geospatial data analyst career in
      Fort Collins, Colorado. Since then Dan has used his skills in facilitation, public
      speaking, and programming to bring spatial data analysis methods to a wide
      variety of project teams. He currently contributes to the Geospatial
      Centroid at Colorado State University in addition to his role at Zest Data
      Group.`,
  },
  {
    name: "Ian Hellman",
    role: "FAA-certified drone pilot and instructor",
    image: "/img/ian-hellman.jpg",
    links: [],
    // TODO: Dan's draft ended mid-sentence with where Ian currently contributes.
    bio: `Ian is an FAA-certified drone pilot who teaches the FAA pilot
      certification courses. He brings extensive experience in aerial imagery
      processing and in managing watershed science field teams. Ian has
      developed and maintained compute systems to process and securely back up
      terabytes of imagery.`,
  },
  {
    name: "Gavin Hawkes",
    role: "Computer science undergraduate, Colorado State University",
    image: "/img/gavin-hawkes.jpg",
    links: [],
    bio: `Gavin has brought his understanding of computer science to a few
      important geospatial questions, like how road design and roadside signs
      can be used to predict traffic incidents. He is currently contributing to
      Zest Data Group as the primary developer of a QGIS plugin, Tessera, that simplifies
      the generation of training and validation datasets for remote sensing
      classification projects.`,
  },

  // {
  //   name: "Person name",
  //   role: "What they do on projects",
  //   image: "/img/their-photo.jpg",
  //   links: [{ label: "Website", url: "https://example.com" }],
  //   bio: `A sentence or two on their background and what they bring.`,
  // },
];
