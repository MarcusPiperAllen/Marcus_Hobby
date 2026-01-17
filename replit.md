# Marcus Piper Developer Portfolio

## Overview

A personal portfolio website for web developer Marcus Piper, showcasing client projects and web development expertise. This is a static site built with vanilla HTML5, CSS3, and JavaScript, featuring a modern dark glass theme with glassmorphism effects. The site includes three main pages: home (bento grid layout), projects (with before/after comparisons), and about/contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript with no build tools or frameworks
- **Design Pattern**: Multi-page static site architecture with shared CSS and modular JavaScript files
- **Styling Approach**: Custom CSS with CSS variables for theming, glassmorphism effects, and responsive design using Inter and Montserrat fonts from Google Fonts
- **Page Structure**:
  - `index.html` - Home page with bento grid project layout
  - `page2.html` - Projects showcase with before/after image comparisons
  - `page3.html` - About page with contact information

### JavaScript Modules
- **chat.js**: Simple chatbot with predefined Q&A responses, no backend required
- **commit.js**: Fetches and displays recent GitHub commits from specified repositories using GitHub's public API
- **toggle.js**: Handles before/after image toggling and rotation for project showcases

### Deployment Strategy
- **Primary Hosting**: GitHub Pages (static site hosting)
- **Secondary Hosting**: Replit for development and preview
- **Deployment Method**: Git-based deployment with helper scripts (`deploy.ps1` for Windows, `deploy.sh` for Mac/Linux)
- **Sync Workflow**: Changes pushed to GitHub automatically deploy to GitHub Pages; Replit syncs via Git pull

### Design Decisions
- **No Build Process**: Chosen for simplicity and ease of maintenance; all files are served directly without compilation
- **Vanilla JavaScript**: No frameworks to minimize complexity and load times for a portfolio site
- **CSS Variables**: Used extensively for consistent theming and easy customization of the dark glass aesthetic
- **Version Cache Busting**: CSS and JS files include `?v=1.1` query parameters for cache control

## External Dependencies

### Third-Party Services
- **GitHub API**: Public commits endpoint used to display recent project activity (no authentication required)
- **Google Analytics**: GA4 integration prepared but requires real measurement ID (currently placeholder `G-XXXXXXXXXX`)
- **Google Fonts**: Inter and Montserrat font families loaded via CDN

### Hosting Platforms
- **GitHub Pages**: Primary production hosting at `https://marcuspiperallen.github.io/Marcus_Hobby/`
- **Replit**: Development environment with Git synchronization

### No Backend Required
This is a fully static site with no server-side processing, database, or authentication. All interactivity is client-side JavaScript making public API calls.