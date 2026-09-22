---
title: Crop wild relatives of the United States
date: 2020-06-01
featured: true
client: Conservation gap analysis
summary: Species distribution modeling and conservation gap analysis for all of the United States crop wild relatives.
tools: [R, terra, sf, targets]
repo: https://github.com/dcarver1/cwr_wildgrapes
thumb: /img/thumbs/iris.jpg
thumbAlt: A wild iris flowering in a meadow
figure: /img/figures/cwr-wild-grapes.jpg
figureAlt: Modeled range of Vitis acerifolia in the south-central United States with occurrence points
---

## The problem
Wild relatives of crops carry genetic diversity that breeders depend on, but their conservation status is poorly documented. The 2020 PNAS assessment established a national baseline; new species needed the same treatment without re-inventing the pipeline.

## What was built
A modernized modeling workflow covering occurrence data cleaning, species distribution modeling, and ex situ / in situ gap analysis, structured so that adding a taxon is a configuration change rather than a code change.

## Outcome
Reusable methods applied to additional species groups, with a companion repository ([cwrSDM](https://github.com/dcarver1/cwrSDM)) adapting the Aichi Target 13 codebase for ongoing work. The wild grapevine assessment was published in *Plants, People, Planet*, and the same methodology now underpins [GAMMa](/projects/gamma/), a web application bringing gap analysis to botanic garden collections.

### Publication
Carver, D., Khoury, C.K., Frances, A., McCarry, N., Diaz-Garcia, L., Galarneau, E.,
Gora, S., Haidet, M., Heinitz, C., Knapp, W., Meyer, A., Miller, A., Mims, R.,
Sapkota, S., Spurrier, C., & Wen, J. (2026). Conservation gap analysis for wild
grapevines (*Vitis* L.) of the Americas. *Plants, People, Planet*.
