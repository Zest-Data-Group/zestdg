---
title: GapAnalysis — an R package for conservation gap analysis
date: 2021-07-01
featured: true
client: Open source · published in Ecography
summary: An R package that scores how well a species is conserved, ex situ and in situ, from occurrence records and a distribution model. The method behind the crop wild relatives assessments and GAMMa.
tools: [R, terra, sf, CRAN]
repo: https://github.com/CIAT-DAPA/GapAnalysis
thumb: /img/thumbs/gold-bloom.jpg
thumbAlt: A yellow flower in bloom
---

## The problem
Conservation gap analysis asks a simple question: how much of a species' diversity
is already safeguarded, in genebanks and botanic gardens (ex situ) and in protected
areas (in situ), and where are the gaps? The method had been applied to hundreds of
crop wild relatives, but the code lived in project scripts. Every new study
re-implemented it, and results were hard to compare or reproduce.

## What GapAnalysis does
The package turns that method into a documented, tested R library. Given occurrence
records, a modeled distribution, an ecoregion layer, and a protected-area layer, it
computes three scores for each conservation strategy:

- **Sampling representativeness** — how many occurrences are backed by a conserved
  accession.
- **Geographic representativeness** — how much of the modeled range falls within
  buffers around conserved samples, or inside protected areas.
- **Ecological representativeness** — how many of the ecoregions the species
  occupies are represented in collections or protected areas.

The three combine into a final conservation score, ex situ and in situ, and a
combined score with a priority category. Maps of the gaps come out alongside the
numbers, so a score points at places to collect or protect.

## Why it matters
The package is the shared foundation for the work that followed: the
[crop wild relatives assessment](/projects/cwr-wild-grapes/) applied it across
taxa, and [GAMMa](/projects/gamma/) wraps the same scoring in a web application
for collections managers. Publishing the method as a package means a result from
any of those studies can be re-run, and the method can be applied by anyone with
occurrence data.

## Publication
Carver, D., Sosa, C.C., Khoury, C.K., Achicanoy, H.A., Diaz, M.V., Sotelo, S.,
Castañeda-Álvarez, N.P., & Ramírez-Villegas, J. (2021). GapAnalysis: an R package
to calculate conservation indicators using spatial information. *Ecography*,
44(7), 1000–1009. [doi:10.1111/ecog.05430](https://doi.org/10.1111/ecog.05430)
