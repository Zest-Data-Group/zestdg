# Projects page — editable copy

Source: `src/projects.njk` (page prose). The write-ups themselves are one
file per project in `src/projects/*.md`, with editable copy for each in
`copy/projects/`. Edit the text here; the wording will be ported back into
those files. Page metadata and layout tags are omitted.

Each project appears on this page as a card showing its title, year, client
line, and summary. Clicking the card expands the full write-up in place. The
same write-up also has its own standalone page.

**Meta description (search snippet):**
Selected geospatial and R development work — GAMMa, the crop wild relatives assessment, and the GapAnalysis R package.

---

# Projects

Selected work in conservation science and spatial modeling. All of it is open source — repositories are linked from each write-up.

<!-- Cards, newest first. Title · year · client, then the summary line.
     Client lines may carry markdown links; they render on the cards and
     standalone pages and are stripped on the home page panels.
     These lines come from the front matter of each src/projects/*.md file
     and are repeated in the matching copy/projects/ file. -->

**GAMMa**
2026 · Atlanta Botanical Garden & Botanic Gardens Conservation International
<!-- links: Atlanta Botanical Garden → https://www.atlantabg.org/; Botanic Gardens Conservation International → https://www.bgci.org/ -->
A web application that allows users to view the extent of their own collection against the data available on GBIF.

**GapAnalysis R**
2021 · Open source · published in Ecography · originally funded by CIAT Decision and Policy Analysis (DAPA)
<!-- link: CIAT Decision and Policy Analysis (DAPA) → https://github.com/CIAT-DAPA/ -->
An R package that scores how well a species is conserved, ex situ and in situ, from occurrence records and a distribution model.

**Crop wild relatives of the United States**
2020 · Conservation gap analysis · USDA ARS National Laboratory for Genetic Resources Preservation (NLGRP)
<!-- link: USDA ARS National Laboratory for Genetic Resources Preservation (NLGRP) → https://www.ars.usda.gov/plains-area/fort-collins-co/center-for-agricultural-resources-research/paagrpru/ -->
Species distribution modeling and conservation gap analysis for all of the United States crop wild relatives.

<!-- Shown only if there are no projects; not currently visible. -->
Write-ups are on the way. Email me in the meantime.
