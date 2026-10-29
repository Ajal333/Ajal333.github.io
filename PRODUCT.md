# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (current major), fully static output, deployed to GitHub Pages at ajal333.github.io via GitHub Actions. User chose this over plain HTML; the incumbent Astro 0.19 scaffold is replaced.

## Users

Hiring managers and engineering leads evaluating Ajal P for senior full-stack / AI engineering roles. They arrive from a CV link, LinkedIn, or the Linktree, usually on a laptop between other candidates, sometimes on a phone. Their job: within one screen decide whether this person has shipped real things, then find the evidence and a way to contact him.

Secondary: founders and peers who find him through Zorest.

## Product Purpose

A single-page personal portfolio for Ajal P that proves he builds production AI products end to end, and makes contact one tap away. Success: the visitor can say who he is and what he has shipped in five seconds, scrolls through verifiable work, and emails him or opens LinkedIn.

## Positioning

Two-time co-founder and current CTO who ships consumer apps used by 100K+ people (Zorest: Macro and Cradle), not a developer with a list of frameworks. The claim a neighbouring portfolio cannot copy: named apps on the App Store with ratings, a studio he co-founded, and a data platform built at a Techstars company.

## Operating Context

- Visited from CV PDF links, LinkedIn, Linktree (linktr.ee/ajal.p).
- Read quickly, often alongside the CV. The page is not the CV; it is the proof the CV points at.
- Must be indexable: the user explicitly wants SEO (title, description, Open Graph, JSON-LD Person, semantic headings, sitemap).

## Capabilities and Constraints

- Static site, no backend, no form handler. Contact is mailto and external links.
- Must stay fast on GitHub Pages; no heavy client frameworks for the page body.
- No photo of Ajal on the page (user declined in the interview). Existing /public/assets photos are not to be used.
- No real screenshots of Macro or Cradle exist in this repo; interface fragments must be built in HTML/CSS as labelled representations, never passed off as store screenshots.
- User constraints on the look: modern, minimal, interactive, not text heavy, micro animations, and explicitly no "AI-agent" design language or fonts.

## Brand Commitments

- Voice: first person, mine. Every sentence on the site reads as if I wrote it; nothing in the third person about me.
- Second round of feedback (2026-10-29): light ground, not a dark theme; minimal; no app illustrations or drawn phone screens; Macro and Cradle listed under Zorest like XENA, not as feature panels; no stretched wordmark; no "Two companies co-founded" badge; many small interactions.

- Name: Ajal P. Handle used elsewhere: Ajal333 (GitHub), ajal.p (Linktree), im_ajal (Instagram), Ajal_333 (Twitter/X).
- Voice: plain, factual, first person, short.
- No existing logo or palette to preserve; the old dark glassmorphism look is discarded.

## Evidence on Hand

Source of truth: the CV at /Users/ajal/Documents/Personal Docs/Resume/career-ops/cv.md (and the PDF export of 2026-10-18).

- Zorest, Co-Founder & CTO, May 2025–present, Kochi. Portfolio used by 100K+ people, 4.9/5 average rating.
  - Macro (iOS, Android; macro.zorest.com): AI nutrition app. Meal-photo scanning, barcode/voice/search logging, personalised meal plans and recipes, weekly AI coach check-in, 1.9M+ food database, 4.6/5 on the US App Store.
  - Cradle (iPhone, iPad, Apple Watch; cradle.zorest.com): subscription baby sleep and care tracker. Nap-window prediction, multi-caregiver shared logs, daily care timeline.
- XENA Intelligence (Techstars '22), Product Engineer, Jun 2023–May 2025 (intern Jul 2022–Mar 2023). Multi-tenant SaaS, LLM features with vector DBs, OpenAPI docs, analytics dashboards, AWS lakehouse (S3, Athena, RDS, SQS), Airflow.
- Revyu (revyu.xyz), Co-Founder, Apr 2021–Jun 2023. Shopify apps.
- ILIN Analytica, Mobile Developer Intern, Dec 2022–Jan 2023.
- Older projects: Sahaay (sahaay.xyz), D-Crowdfunding (github.com/ajal333/D-crowdfunding), MessedUp (sahara.messedup.live), thriftly (thriftly.vercel.app).
- Education: B.Tech CSE, School of Engineering, CUSAT, 2019–2023.
- Awards/community: Spheron Track Winner, Unfold'22 (Devfolio, CoinDCX); Technical Head, TEDxCUSAT; Organizer, Make-A-Ton 5.0; Technical Team, Dhishna.
- Skills: TypeScript, JavaScript, Python, Go; React, Next.js, React Native; Node.js, NestJS, Express, FastAPI; PostgreSQL, MongoDB; AWS, GCP, Docker, CI/CD; LLM API integration, agent frameworks, MCP, vector DBs; Airflow, queues, observability.
- Contact: ajal.p1999@gmail.com, linkedin.com/in/ajal, github.com/Ajal333. Based in Palakkad / Kochi, India.

Absent, do not fabricate: testimonials, client logos, download counts beyond what the CV states, revenue, press.

## Product Principles

1. Proof over adjectives: every claim on the page is a named app, number, company or year from the CV.
2. One screen to understand, one tap to contact.
3. Light on words: the page shows, the CV tells.
4. Fast and indexable: static HTML first, interaction layered on top, nothing hidden behind script.
5. Honest representations: anything drawn to stand in for an app screen is clearly a representation.

## Accessibility & Inclusion

Keyboard-reachable controls, visible focus, reduced-motion fallback for every animation, WCAG AA contrast on text.
