# ZURI Club Website

![ZURI Club logo](public/images/zuri-logo.jpg)

The public website for the Zetech University Research and Innovation Club (ZURI). It introduces the club, outlines its research and innovation focus, and connects visitors to the club's WhatsApp community.

## Current status

- Responsive, single-page static website built with HTML, CSS, and JavaScript.
- Research and projects, events and opportunities, insights and articles, and leadership sections are in place.
- The club overview and seven leadership names, roles, and portraits have been added from club-supplied information.
- Project details, event dates, and articles are awaiting confirmation and approval.
- The WhatsApp invite is `https://chat.whatsapp.com/K7sTw4zHiXr5oTB896LgVl`.
- No backend, database, member accounts, online submission storage, or publishing dashboard is included.
- No development server or deployed website is started by this project automatically.

## Preview locally

No packages or build step are required. From the project folder, either open `index.html` in a browser or run a local static server:

```powershell
py -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C` in the terminal where it is running.

The fonts are loaded from Google Fonts when the browser is online. The page uses local system fonts as fallbacks.

## Website structure

The homepage is currently one page with section links in the header:

1. **Home** - Zetech campus image, club introduction, and calls to action.
2. **About** - The club's purpose and shared values.
3. **What we do** - Research, innovation, and collaboration.
4. **Research and projects** - Introduction to the project showcase and a link for students to share an idea.
5. **Events and opportunities** - Space for confirmed activities, calls, and registration details.
6. **Insights and articles** - Space for reviewed research notes and club stories.
7. **Leadership** - Profiles for the patron, chairperson, interim chairperson, vice chairperson, programme coordinator, communication director, and membership chair.
8. **Community** - Ways to join, contribute an idea, and connect.
9. **Join** - WhatsApp community invite.

When the club has enough approved material, the content sections can become dedicated static pages while keeping the homepage as a short overview. A CMS is only needed if committee members must publish without editing website files. A custom backend is only needed for features such as accounts, private information, or submissions stored by the site.

## Project files

```text
index.html              Page content, navigation, links, and metadata
styles.css              Colors, typography, layout, responsive rules, and focus styles
script.js               Mobile menu behavior and automatic footer year
public/images/hero.jpg  Zetech campus image used in the home hero
public/images/zetech-logo.jpg  Zetech University mark
public/images/zuri-logo.jpg    ZURI Club logo
public/images/patron.png
public/images/chairperson.png
public/images/interim-chairperson.png
public/images/vice-chairperson.png
public/images/programme-coordinator.png
public/images/communication-director.png
public/images/membership-chair.png  Leadership profile photos
README.md               Project guide and content update notes
```

## Leadership profiles

- Md. Esther Mwangi - Patron
- Moses Tabalya - Chairperson
- Elly Okello - Interim Chairperson
- Paul Wako - Vice Chairperson
- Ivy Nganga - Programme Coordinator
- Gabriel Nyaringo - Communication Director
- Emmanuel Bett - Membership Chair

## Interactions

- Header navigation scrolls to page sections.
- The mobile menu opens and closes with its button. It also closes after a link is selected, when the user clicks outside it, when Escape is pressed, or when the screen expands to desktop width.
- The join, project sharing, and opportunity links open the WhatsApp invite in a new tab.
- The footer year updates automatically.
- The site includes a skip link, semantic section headings, keyboard focus indicators, and reduced-motion support.

## Updating content

1. Confirm project facts with project teams, event dates and registration links with event owners, and article text with its author.
2. Confirm leadership names and roles with the club before changing the profiles. Photos are stored in `public/images/` with role-based filenames.
3. Edit the corresponding section in `index.html`. Keep unpublished details marked as awaiting confirmation until approved.
4. Keep links and section IDs in sync. Check that each in-page link points to an existing section.
5. If the WhatsApp invite changes, replace every occurrence in `index.html`.
6. Replace the relative `og:image` path with an absolute public image URL when the hosting address is known.

The current project sharing and opportunity buttons open the general WhatsApp group. They do not collect or store submissions separately.

## Before launch

- Confirm the official club description, membership process, contact method, and all published information.
- Confirm approval to publish the university and club marks, photographs, and member details.
- Choose the hosting account owner and approved domain.
- Set an absolute social sharing image URL and check the page title and description after deployment.
- Agree who reviews and publishes future content updates.

The site can be hosted on GitHub Pages, Vercel, or another static host. Hosting and a custom domain are not configured by this project.
