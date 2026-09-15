---
title: GAMMa — Gap Analysis & Metacollection Management Tool
date: 2026-08-01
featured: true
client: Atlanta Botanical Garden
summary: A web application that shows botanic gardens and genebanks how well their living collections represent a species' wild range — and where to collect next.
tools: [R, Shiny, leaflet, sf, terra, GBIF]
link: https://atlantabg.shinyapps.io/GAMMA_dev/
thumb: /img/thumbs/poppy.jpg
thumbAlt: A California poppy in bloom
# repo: the source lives in a collaborator's repository; link it only if the
# project team wants it public from here.
---

## The problem
Botanic gardens and genebanks hold living collections that are meant to safeguard
a species' genetic diversity. But a collection of fifty plants gathered from one
valley preserves far less than fifty plants gathered across a species' full range,
and until recently there was no accessible way for a curator to tell the
difference. The analysis existed — it had been developed over a decade of
conservation research — but it lived in R scripts that assumed you were a
spatial analyst.

The gap was capacity, not method. Institutions of different sizes needed to apply
the same assessment without hiring one.

## What GAMMa does
GAMMa compares a collection's accession records against wild occurrence records
for the same taxon, then scores how much of the wild range the collection actually
covers. Curators pull reference records directly from GBIF inside the tool or
upload their own, add their accession data as a spreadsheet, clean the records
interactively, and run the analysis.

The result is three scores, each bounded 0–100, averaged into a Final
Conservation Score:

- **Sampling** — germplasm accessions relative to reference records.
- **Geographic** — the proportion of the estimated wild range falling inside
  buffers around collection points.
- **Ecological** — the share of the 814 terrestrial ecoregions the species
  occupies that the collection reaches.

Low scores localize: the maps show which parts of the range and which ecoregions
are missing, which turns an abstract score into a collecting trip. Results export
as a shareable HTML report.

The application also works across institutions. Metacollections — the combined
holdings of several gardens, managed jointly — can be assessed as a single unit,
which is where the redundancy and the real gaps in ex situ conservation tend to
show up.

Uploaded data is never stored. Analyses run in a single session and time out,
so institutions can assess sensitive collections without handing over records.

## How it was built
An R and Shiny application, modularized by analysis stage, with leaflet for the
interactive mapping, sf and terra for the spatial work, rgbif for occurrence
retrieval against the GBIF Backbone Taxonomy, and R Markdown for report
generation. The gap analysis itself extends the methodology of the
[GapAnalysis R package](https://github.com/CIAT-DAPA/GapAnalysis) — the same
lineage as the [crop wild relatives work](/projects/cwr-wild-grapes/) — reworked
so that a collections manager, not a programmer, is the intended operator.

## Outcome
GAMMa is in public beta. The project has run workshops for collections managers
since 2024 and produced gap analyses supporting active collecting programs.

The work was initiated in 2023 by the Atlanta Botanical Garden, The Morton
Arboretum, and the Montgomery Botanical Center, with a core team drawn from those
institutions plus Colorado State University's Geospatial Centroid, the New York
Botanical Garden, and BGCI-US. It is supported by the Institute of Museum and
Library Services (award MG-252894-OMS-23), BGCI-US, and the United States
Botanic Garden.
