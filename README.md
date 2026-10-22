# ZURI Club Website

![ZURI Club logo](public/images/zuri-logo.jpg)

The public website for the Zetech University Research and Innovation Club (ZURI). It introduces the club, showcases student projects and articles, records club events, and gives visitors direct access to club resources and community links.

## Contents

- [What the site includes](#what-the-site-includes)
- [Requirements and local preview](#requirements-and-local-preview)
- [Project structure](#project-structure)
- [Features and interactions](#features-and-interactions)
- [Updating site content](#updating-site-content)
- [Accessibility and content quality](#accessibility-and-content-quality)
- [Deployment and maintenance](#deployment-and-maintenance)
- [Known limits](#known-limits)

## What the site includes

- **Home** (index.html): club introduction, research and innovation focus, featured projects, event links, articles, leadership, and WhatsApp community calls to action.
- **About** (about.html): mission, vision, membership overview, leadership profiles, and direct links to the Club Resources and Club Portfolio PDFs.
- **Innovation Showcase** (projects.html): all 14 project profiles, searchable and filterable by project area and listed Sustainable Development Goal (SDG).
- **Project profiles** (projects/): individual pages for BIT, BLUE, CampusHub, ChatPay, Fourt, MinerAI, Mobi, RevvWash, Sentient, SentryHub, SmartWaste, The Thinking Game, Umi, and Wecket.
- **Events** (events.html): event photos, a 2026 activity archive, and a month-by-month 2025 archive.
- **Insights**: workshop notes in insights.html and Okello Elly's *The Africa AI Safari* article in africa-ai-safari.html.

SmartWaste is identified as a **prototype**. Its profile includes the listed alignment with SDGs 11, 12, and 13 and a link to the external prototype.

## Requirements and local preview

This is a static website. It requires no package manager, build step, database, or server-side runtime. To preview it, use a current web browser and either open index.html directly or start a local server from the repository root.

On Windows with Python installed, run:

    py -m http.server 8000

Then open http://localhost:8000. Stop the server with Ctrl+C.

The site loads DM Sans and Manrope from Google Fonts when internet access is available, with local font fallbacks. The WhatsApp invite, UN SDG pages, SmartWaste prototype, and other external links also require internet access.

## Project structure

    .
    ├── index.html                  Home page
    ├── about.html                  Club information, resources, and leadership
    ├── projects.html               Searchable and filterable project directory
    ├── events.html                 Event photo gallery and activity archives
    ├── insights.html               Ideation and Design Thinking workshop notes
    ├── africa-ai-safari.html       Africa AI Safari article
    ├── projects/                   Individual project profile pages
    ├── public/
    │   ├── images/                 Logos, hero art, portraits, and project/event photos
    │   └── PDFs/
    │       ├── Club Resources.pdf
    │       └── Club Portfolio.pdf
    ├── styles.css                  Shared design system and responsive layouts
    ├── script.js                   Navigation, project filters, related projects,
    │                               article reading progress, and footer year
    └── README.md                   Project guide

There is no package.json; the site has no npm dependencies or build command.

### Key media assets

- public/images/hero.png is the home-page hero background; public/images/zetech-logo.png is the university mark shown over it; public/images/zuri-logo.jpg is the club logo used in navigation and footers.
- public/images/How we explore.png and public/images/I Love Zetech Image.png are background images for the research focus and community sections.
- public/images/AI Safari.jpg is used in the Africa AI Safari article. Leadership portraits, BIT concept art, and event/community photos are also stored in public/images/.
- The two PDFs in public/PDFs/ are linked from the About page. Keep asset names and capitalization exact, including spaces.

## Features and interactions

- Shared responsive navigation with a mobile menu. The menu closes when a visitor selects a link, clicks outside it, presses Escape, or returns to the desktop layout.
- Project search, project-area and SDG filters, a live result count, and a clear-filters control.
- Related project links on project profiles.
- Expandable month groups in the 2025 event archive and links to jump between event years.
- Article table of contents navigation and a reading progress indicator on the workshop notes.
- Direct PDF links for both club documents; they open in a new tab.
- WhatsApp links for joining the community and following club opportunities.
- Automatically updated copyright year in the footer.
- Responsive layouts for phone, tablet, and desktop widths; keyboard focus indicators, a skip-to-content link, semantic page structure, descriptive image text, and reduced-motion support.

The home page limits the project preview to three featured cards and links to the full Innovation Showcase. The showcase contains the complete project directory.

## Updating site content

### Projects

1. Edit the matching profile in projects/.
2. Keep project status, team names, description, technology details, SDG alignment, and external demo links current and supplied by the project team.
3. Update the matching card and its data-category and data-sdgs values in projects.html. The filter values must match the options in the filter controls.
4. Update the home page featured cards in index.html only when changing which three projects are featured.
5. Add project images under public/images/; use descriptive alt text and preserve the exact filename capitalization and spaces in image paths.

### Articles

- Edit insights.html or africa-ai-safari.html for article content.
- Update the corresponding insight card on the home page so its title, summary, date, and link stay in sync.
- For long articles, keep section headings meaningful and article contents links pointed at matching section IDs.

### Events and leadership

- Add or correct activity entries in events.html under the appropriate year and month. Keep each event's date, title, venue, and category together.
- Add event images to public/images/ and include concise alt text and a caption.
- Update leadership names, roles, and portrait paths in about.html and the home page together.

### Club resources and community links

- Replace a PDF in public/PDFs/ while keeping its filename, or update the corresponding link in about.html.
- If the WhatsApp invite changes, update the shared invite links across the site.
- External links that open a new tab should retain rel="noopener noreferrer".

### Shared design and behavior

- styles.css contains the shared color, typography, spacing, responsive layout, button, card, and focus styles.
- script.js contains the mobile navigation, project filtering, related-project cards, reading progress, and footer year behavior.
- Keep local paths relative to each HTML file. Project profiles are one folder deep and use ../ to reach root files and public/.

## Accessibility and content quality

- Give informative images accurate alt text; use empty alt text only for decorative images.
- Keep heading levels in order and use descriptive link text that explains the destination.
- Preserve visible keyboard focus and check menu controls and filters with a keyboard.
- Keep text readable over background images and retain the reduced-motion rules.
- Use supplied facts for project status, event dates, team membership, and outcomes. Do not label a project as launched or active without confirmation from its team.

## Deployment and maintenance

The repository can be deployed to GitHub Pages, Vercel, or another static hosting service. No hosting account, domain, deployment workflow, or backend is configured here.

Before publishing or changing the hosting target:

- Confirm the deployment owner, public domain, and any required university or club approvals.
- Check local image, PDF, page, and in-page links. Static hosts may use case-sensitive paths, so preserve filenames exactly.
- Review project details, event dates, leadership, article attribution, and all outbound links.
- Set an absolute public social-sharing image URL if social previews are needed, and verify page titles and descriptions on the deployed site.
- Decide who will review and publish future content changes.

## Known limits

This site does not include user accounts, a CMS, an administrator dashboard, a database, server-side search, contact or submission forms, or storage for member information. Project sharing and opportunity links lead to the club's WhatsApp community; the site itself does not collect or store messages or submissions.
