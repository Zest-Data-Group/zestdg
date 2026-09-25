# Crop wild relatives of the United States — editable copy

Source: `src/projects/cwr-wild-grapes.md`. This text feeds both the
expandable card on the projects page and the standalone page at
`/projects/cwr-wild-grapes/`. Edit the text here; the wording will be ported
back into that file. Front matter that is not prose (dates, image paths,
tools list) is omitted.

**Title:** Crop wild relatives of the United States
**Date shown:** June 2020
**Client line:** Conservation gap analysis · USDA National Laboratory for Genetic Resources Preservation
**Tools:** R, terra, sf, targets
**Link:** Source on GitHub → https://github.com/dcarver1/cwr_wildgrapes

**Summary (card line, also the search snippet):**
Species distribution modeling and conservation gap analysis for all of the United States crop wild relatives.

**Figure caption (alt text):**
Modeled range of Vitis acerifolia in the south-central United States with occurrence points

---

## The problem

Wild relatives of crops carry genetic diversity that breeders depend on, but their conservation status is poorly documented. The 2020 PNAS assessment established a national baseline; new species needed the same treatment without re-inventing the pipeline.

## What was built

A modernized modeling workflow covering occurrence data cleaning, species distribution modeling, and ex situ / in situ gap analysis, structured so that adding a taxon is a configuration change rather than a code change.

## Outcome

Reusable methods applied to additional species groups, with a companion repository (cwrSDM) adapting the Aichi Target 13 codebase for ongoing work. The wild grapevine assessment was published in *Plants, People, Planet*, and the same methodology now underpins GAMMa, a web application bringing gap analysis to botanic garden collections.

<!-- Links in the paragraph above: "cwrSDM" → https://github.com/dcarver1/cwrSDM; "GAMMa" → /projects/gamma/ -->

### Publication

Carver, D., Khoury, C.K., Frances, A., McCarry, N., Diaz-Garcia, L., Galarneau, E.,
Gora, S., Haidet, M., Heinitz, C., Knapp, W., Meyer, A., Miller, A., Mims, R.,
Sapkota, S., Spurrier, C., & Wen, J. (2026). Conservation gap analysis for wild
grapevines (*Vitis* L.) of the Americas. *Plants, People, Planet*.
