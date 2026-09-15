---
layout: base.njk
title: About
permalink: /about/
description: Zest Data Group LLC is a geospatial consultancy — spatial analysis, R development, and reproducible research for conservation science.
---
# About

Zest Data Group is a geospatial consultancy working at the intersection of
spatial data science and conservation research. We build the models, pipelines,
and applications that let scientists and land managers act on the data they
already have.

The practice is small and works with a network of collaborators — researchers,
developers, and domain specialists brought in as a project needs them. That keeps
engagements right-sized: you get the people the problem actually calls for,
without carrying a firm.

## The work
Most of our work has been in conservation science. We built and modernized the
species distribution modeling and gap analysis workflow behind the
[crop wild relatives assessment](/projects/cwr-wild-grapes/), extending a
national baseline to new taxa in a way that makes adding a species a
configuration change rather than a rewrite.

More recently we led development of [GAMMa](/projects/gamma/), a web application
that lets botanic gardens and genebanks measure how well their living collections
represent a species' wild range — the same gap analysis methodology, rebuilt so a
collections manager can run it without a spatial analyst. It is a good summary of
what we care about: taking a method that works and putting it in the hands of the
people who need the answer.

Alongside project work we teach spatial R and Google Earth Engine to
researchers, through NASA DEVELOP and the Geospatial Centroid.

## How we work
Three commitments shape every engagement:

- **Reproducible by default.** Analyses live in version control, run end to end,
  and produce the same answer next year as they do today.
- **You own the output.** Work happens in a shared repository from day one —
  code, data documentation, and methods, not just a final report.
- **Built to be handed off.** The goal is a workflow your team can run and extend
  without us.

## Grounded in the research
The methods we bring to client work come out of peer-reviewed research —
{{ pubStats.citations }} citations and an h-index of {{ pubStats.hIndex }}, in
*PNAS*, *Ecography*, *Diversity and Distributions*, and *Plants, People, Planet*.
That matters for a practical reason: when we tell you a collection is
under-represented or a range model is unreliable, the method behind it has been
through review.

[Selected publications &rarr;](/publications/)

## Who we are
<div class="team">
{% for person in team %}
  <div class="person">
    {% if person.image %}<img src="{{ person.image }}" alt="{{ person.name }}" width="120" height="120" loading="lazy">{% endif %}
    <div>
      <h3>{{ person.name }}</h3>
      <p class="meta">{{ person.role }}</p>
      <p>{{ person.bio }}</p>
      {% if person.links %}<p class="person-links">{% for l in person.links %}<a href="{{ l.url }}" rel="noopener">{{ l.label }}</a>{% if not loop.last %} · {% endif %}{% endfor %}</p>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

{% set listed = contributors | selectattr("listed") %}
{% if listed | length %}
## Contributors
Collaborators we bring into projects when the problem calls for them.
<ul class="contributors">
{% for person in listed %}
  <li>
    <strong>{{ person.name }}</strong> <span class="meta">{{ person.role }}</span>
    {% if person.bio %}<p>{{ person.bio }}</p>{% endif %}
    {% if person.links and person.links.length %}<p class="person-links">{% for l in person.links %}<a href="{{ l.url }}" rel="noopener">{{ l.label }}</a>{% if not loop.last %} · {% endif %}{% endfor %}</p>{% endif %}
  </li>
{% endfor %}
</ul>
{% endif %}

## Tools
R (terra, sf, targets, Shiny), Google Earth Engine, Python, and Git. We pick the
tool that fits the data and the team that will maintain it, not the other way
around.

## How engagements work
1. A 30-minute call to scope the problem.
2. A short written proposal with deliverables, timeline, and a fixed price or hourly estimate.
3. Work happens in a shared repository so you own everything from day one.

We also run half-day to multi-day workshops on R for spatial data, Google Earth
Engine for ecologists, and Python fundamentals.
