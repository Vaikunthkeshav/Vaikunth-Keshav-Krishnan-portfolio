# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Vaikunth Keshav Krishnan, a mechanical engineering graduate student. The portfolio showcases engineering projects including CFD analysis, product design, mechatronics, and reverse engineering work.

## Architecture

**Static Website Structure:**
- `index.html` - Main portfolio page with sections for about, timeline, projects, skills, and contact
- `css/styles.css` - Complete styling with dark/light theme support and responsive design
- `js/script.js` - JavaScript for interactive features including:
  - Dynamic project loading from data objects
  - Modal system for detailed project views
  - Theme toggle functionality
  - Smooth scrolling navigation
  - Typing animation effects

**Content Management:**
- Projects are defined as JavaScript objects in `script.js` with detailed metadata
- Portfolio project descriptions are maintained in `portfolio_projects.md`
- Assets organized in `assets/` with subdirectories for images and documents

**Key Components:**
- Responsive navigation with mobile hamburger menu
- Professional timeline section with educational/work history
- Dynamic project grid with modal popups showing detailed project information
- Skills visualization with animated progress bars
- Contact section with resume download link

## Development Commands

This is a static website with no build process. Development workflow:

**Local Development:**
```bash
# Serve locally using Python
python3 -m http.server 8000
# Or using Node.js
npx http-server
```

**File Management:**
- Edit HTML in `index.html`
- Modify styles in `css/styles.css`
- Update JavaScript functionality in `js/script.js`
- Add new project assets to `assets/images/` and update project data in `script.js`

## Content Updates

**Adding New Projects:**
1. Add project data object to `projectsData` array in `js/script.js`
2. Include required fields: title, shortDescription, image, technologies, overview, technical, results
3. Add corresponding images to appropriate `assets/images/` subdirectory
4. Update `portfolio_projects.md` documentation if needed

**Theme Customization:**
- CSS custom properties in `:root` define color scheme
- Dark/light theme toggle handled by JavaScript class switching
- Theme preference persisted in localStorage

## File Organization

```
├── index.html              # Main portfolio page
├── css/
│   └── styles.css         # All styling and responsive design
├── js/
│   └── script.js          # Interactive functionality and project data
├── assets/
│   ├── images/           # Project screenshots and diagrams
│   └── docs/             # PDF reports and resume
├── data/                 # Additional data files
└── portfolio_projects.md # Project documentation
```

## Technical Notes

- Mobile-first responsive design with CSS Grid and Flexbox
- Vanilla JavaScript (no frameworks/libraries except Font Awesome icons)
- Project modal system with lazy loading of detailed content
- Smooth scroll navigation with active section highlighting
- Form validation and interactive elements use modern CSS and JS
- All external dependencies loaded via CDN (Google Fonts, Font Awesome)