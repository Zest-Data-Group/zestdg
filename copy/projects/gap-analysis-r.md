# GapAnalysis R — editable copy

Source: `src/projects/gap-analysis-r.md`. This text feeds both the expandable
card on the projects page and the standalone page at
`/projects/gap-analysis-r/`. Edit the text here; the wording will be ported
back into that file. Front matter that is not prose (dates, image paths,
tools list) is omitted.

**Title:** GapAnalysis R
**Date shown:** July 2021
**Client line:** Open source · published in Ecography · originally funded by CIAT Decision and Policy Analysis
**Tools:** R, terra, sf, CRAN
**Link:** Source on GitHub → https://github.com/CIAT-DAPA/GapAnalysis

**Summary (card line, also the search snippet):**
An R package that scores how well a species is conserved, ex situ and in situ, from occurrence records and a distribution model.

**Figure caption (alt text):**
GapAnalysis conservation priority chart with urgent, high, medium, and low bands

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
crop wild relatives assessment applied it across taxa, and GAMMa wraps the
same scoring in a web application for collections managers. Publishing the
method as a package means a result from any of those studies can be re-run,
and the method can be applied by anyone with occurrence data.

<!-- Links in the paragraph above: "crop wild relatives assessment" → /projects/cwr-wild-grapes/; "GAMMa" → /projects/gamma/ -->

## Publication

Carver, D., Sosa, C.C., Khoury, C.K., Achicanoy, H.A., Diaz, M.V., Sotelo, S.,
Castañeda-Álvarez, N.P., & Ramírez-Villegas, J. (2021). GapAnalysis: an R package
to calculate conservation indicators using spatial information. *Ecography*,
44(7), 1000–1009. doi:10.1111/ecog.05430
