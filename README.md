# IGNITE — IEEE Student Branch LBSITW

A responsive website for **IGNITE**, a technical event organized by the IEEE Student Branch, LBSITW. Built as part of the IEEE Web Team interview task.

🔗 **Live site:** _add your deployed link here_
📂 **Repo:** _add your GitHub repo link here_

## Features

- **Home** — event name, tagline, date, venue, and description
- **About IEEE** — intro to IEEE, the Student Branch, IGNITE's objective, and links to IEEE's website / Instagram / LinkedIn
- **Events** — 9 event cards across three categories (Technical, Professional, Interactive)
  - Live **filtering** by category
  - Live **search** by event name
- **Schedule** — full day timetable in a clean table layout
- **FAQ** — expandable/collapsible accordion built with vanilla JS
- Fully **responsive** across mobile, tablet, and desktop
- Smooth-scrolling navigation bar linking to every section

## Tech stack

Built with **only HTML, CSS, and JavaScript** — no frameworks or libraries. Google Fonts (Space Grotesk, Inter, IBM Plex Mono) are loaded via CDN for typography.

## Project structure

```
ignite-website/
├── index.html       # page structure and all 5 sections
├── css/
│   └── style.css    # design tokens, layout, responsive breakpoints
└── js/
    └── script.js     # event/schedule/FAQ data + filtering, search, nav, accordion logic
```

## Running locally

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd ignite-website
   ```
2. Open `index.html` directly in a browser, **or** use the VS Code "Live Server" extension:
   right-click `index.html` → **Open with Live Server**

No build step or dependencies required.

## Notes

All event, schedule, and FAQ content is sample data for demo purposes, per the task brief.
