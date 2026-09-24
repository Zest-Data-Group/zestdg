---
layout: base.njk
title: About
permalink: /about/
description: Zest Data Group is a small geospatial consultancy in Fort Collins, Colorado. Spatial analysis, R development, and web applications built with the project teams that use them.
---
# About

Zest Data Group is a small geospatial consultancy. Our goal is to work with
your project team across the full range of your endeavor. We can help clarify
the vision and scope of your project, and we excel at generating methods and
visual outputs that tell the story. We believe that adaptation and
communication are the most valuable tools in bringing the vision of the team
to life.

Today, Zest Data Group is largely one person. Yet the name is plural on
purpose. Good groups lead to better projects, so whenever possible Zest Data
Group seeks active collaborators for their independent insight and unique
contribution.

## How we work

- **Reproducible by default.** Shared data access, version control, and full
  end-to-end workflows.
- **Honest about where things stand.** Progress, problems, and the reasons for
  a design choice get said out loud in the meeting, not discovered later.
- **A committed member of your team.** Our partners are the experts in their
  fields. We respect and value that expertise by building their vision into
  the work and responding to it as it evolves.
- **Science is a progress report.** As you learn more, your perspective
  changes, and we adapt.

## Who we are

{# Kept flush-left: indented tags would be wrapped in <p> by the markdown pass. #}
<div class="team">
{% for person in team %}
<div class="person">
{% if person.image %}<img src="{{ person.image }}" alt="{{ person.name }}" width="120" height="120" loading="lazy">{% endif %}
<div>
<h3>{{ person.name }}</h3>
<p class="meta">{{ person.role }}</p>
{% if person.bio %}<p>{{ person.bio }}</p>{% endif %}
{% if person.links and person.links.length %}<p class="person-links">{% for l in person.links %}<a href="{{ l.url }}" rel="noopener">{{ l.label }}</a>{% if not loop.last %} · {% endif %}{% endfor %}</p>{% endif %}
</div>
</div>
{% endfor %}
</div>

## Working with us

We do our best work on scoped projects with room to iterate. Our tools are R,
Python, Git, and a focus on communication.

We have our own data storage, compute, local AI inference, and hosting
infrastructure that we can deploy for your project.

Work starts with a short call, then a written proposal with deliverables and a
timeline. From the first week our plan and code live in a shared repository, so
all process is visible.
