// Google Scholar metrics. These drift, so the page states when they were read.
module.exports = {
  citations: 577,
  hIndex: 13,
  i10: 14,
  asOf: "September 2026",
  scholar: "https://scholar.google.com/citations?user=pNkU3ikAAAAJ&hl=en",
  // Citations per year, from the "Cited by" chart on the Scholar profile.
  // Feeds the chart on the publications page. Mark the current year partial;
  // refresh these whenever `asOf` changes.
  byYear: [
    { year: 2019, citations: 9 },
    { year: 2020, citations: 30 },
    { year: 2021, citations: 63 },
    { year: 2022, citations: 92 },
    { year: 2023, citations: 92 },
    { year: 2024, citations: 100 },
    { year: 2025, citations: 100 },
    { year: 2026, citations: 72, partial: true },
  ],
  // The three most-cited papers, with citations per year from each paper's own
  // Scholar page. Drawn as lines over the yearly bars; the legend links to the DOI.
  // Order here is the legend order and the color order (orange, blue, teal).
  topPapers: [
    {
      short: "Crop wild relatives of the US (PNAS)",
      title: "Crop wild relatives of the United States require urgent conservation action",
      doi: "10.1073/pnas.2007029117",
      byYear: { 2021: 15, 2022: 29, 2023: 26, 2024: 11, 2025: 12, 2026: 13 },
    },
    {
      short: "Wild chile peppers (Diversity and Distributions)",
      title: "Modelled distributions and conservation status of the wild relatives of chile peppers (Capsicum L.)",
      doi: "10.1111/ddi.13008",
      byYear: { 2020: 13, 2021: 10, 2022: 13, 2023: 12, 2024: 12, 2025: 15, 2026: 6 },
    },
    {
      short: "Wild mint germplasm (Frontiers in Plant Science)",
      title: "Crop wild relatives as germplasm resource for cultivar improvement in mint (Mentha L.)",
      doi: "10.3389/fpls.2020.01217",
      byYear: { 2020: 1, 2021: 7, 2022: 14, 2023: 12, 2024: 8, 2025: 12, 2026: 9 },
    },
  ],
};
