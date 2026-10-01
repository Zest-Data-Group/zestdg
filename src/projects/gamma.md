---
title: GAMMa
date: 2026-08-01
featured: true
client: "[Atlanta Botanical Garden](https://www.atlantabg.org/) & [Botanic Gardens Conservation International](https://www.bgci.org/)"
summary: A web application that allows users to view the extent of their own collection against the data available on GBIF.
tools: [R, Shiny, leaflet, sf, terra, GBIF]
link: https://shiny.carverd.com/app/gamma
# repo: points at the org for now; update to the project repository once it is
# migrated into the Zest Data Group GitHub.
repo: https://github.com/Zest-Data-Group
thumb: /img/thumbs/poppy.jpg
thumbAlt: A California poppy in bloom
figure: /img/figures/gamma.jpg
figureAlt: The GAMMa landing page, "Observing the meta collection"
---

Botanic Gardens and Gene Banks play an essential role in preserving species
diversity by maintaining living collections. Each organization approaches their
collections with a set of known priorities and limitations that directly shape
what species the organization can protect. Yet the act of effectively conserving
a species in **ex situ** collections goes well beyond the capacity of any single
organization. The GAMMa application is intended to enable individuals to
evaluate how their collection of a species fits within the larger metacollection
of observations and living records maintained by other organizations. This tool
provides a quantitative conservation gap analysis assessment that can be used to
provide guidance on where additional collection excursions may be most valuable
in improving the coverage of a species' living collection.

## What GAMMa does
GAMMa compares a species' accession records against wild occurrence records for
the same taxon, then scores how much of the wild range the current **ex situ**
collection actually covers. This is possible by pulling records directly from
[GBIF](https://www.gbif.org/) inside the tool or uploading your own accession data as a spreadsheet. The
tool enables individuals to clean the records interactively on a map and table,
run a conservation gap analysis, and generate a report to share with others.

The results of the conservation gap analysis are presented through three scores,
each bounded 0–100, and averaged into a Final Conservation Score:

- **Sampling** — number of living accessions relative to reference records.
- **Geographic** — the proportion of the estimated wild range falling inside
  buffers around living accession records.
- **Ecological** — the share of the terrestrial ecoregions the species
  occupies that are within the buffered area of a living collection record.

Scores and map outputs are intended to support decision making regarding future
collection priorities. Additionally, they can be used to compare the
conservation status of different species.

The metacollection — the combined holdings of several institutions — is
currently only represented by records publicly available on GBIF.

Uploaded data is never stored. Analyses run in a single isolated session, and
once closed all data and analysis conducted on the GAMMa application is lost.
We provide opportunities to download your edited data as well as the end report
to help ensure work within the application can be saved. These files are saved
to your computer, not the device on which the application is hosted.

## How it was built
An R and Shiny application, modularized by analysis stage, with leaflet for the
interactive mapping, sf and terra for the spatial work, rgbif for occurrence
retrieval against the GBIF Backbone Taxonomy, and R Markdown for report
generation. The gap analysis itself extends the methodology of the
[GapAnalysis R package](https://github.com/CIAT-DAPA/GapAnalysis) — the same
lineage as the [crop wild relatives work](/projects/cwr-wild-grapes/) — reworked
so that a collections manager, not a programmer, is the intended operator.

## Outcome
GAMMa is in public beta. The project has been in development since 2024, and
multiple workshops with botanically interested individuals have resulted in a
wide suite of feedback that has changed the vision and direction of the tool
over time.

The work was initiated in 2023 by the [Atlanta Botanical Garden](https://www.atlantabg.org/),
[The Morton Arboretum](https://mortonarb.org/), and the
[Montgomery Botanical Center](https://www.montgomerybotanical.org/), with a core
team drawn from those institutions plus Zest Data Group, the
[New York Botanical Garden](https://www.nybg.org/), and [BGCI-US](https://www.bgci.org/).
It is supported by the [Institute of Museum and Library Services](https://www.imls.gov/)
(award [MG-252894-OMS-23](https://www.imls.gov/grants/awarded/mg-252894-oms-23)),
[BGCI-US](https://www.bgci.org/), and the [United States Botanic Garden](https://www.usbg.gov/).
