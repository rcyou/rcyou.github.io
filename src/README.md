# Ryan Young | Illustration and Design Site

This is the source code for my design & creative portfolio. It is built using **Eleventy (11ty)** static site generator and is designed for high performance, accessibility, and clean SEO.

---

## 🚀 Quick Start

To run this project locally on your machine:

1. **Clone the repository:**

```bash
git clone https://github.com/rcyou/rcyou.github.io.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Launch the development server:**

```bash
npm start
```

The site will be live at `http://localhost:8081` with hot-reloading enabled.

---

## Project Architecture

The project is organized into a clear source/output structure to keep the repository maintainable.

- `src/` — The heart of the project. Contains all templates, data, and assets.
  - `_data/` — Global JSON files (e.g., `illustrations.json`, `logos.json`) that drive the content of the gallery sections.
  - `_includes/` — Reusable Nunjucks layout files and partials, such as `base.njk`, `logo-section_2.njk`, and `illustration-section_2.njk`.
  - `images/` — Source imagery for portfolio pieces.
- `.eleventy.js` — The configuration file that manages passthrough file copying and input/output directory settings.
- `.github/workflows/` — Contains the GitHub Actions deployment logic.

---

## Continuous Deployment

This site uses GitHub Actions for automated deployment to GitHub Pages.

- **Branch:** Any push to the `master` branch triggers the build.
- **Process:** The action installs Node.js, runs `npm run build` to generate the static files, and deploys only the resulting `_site` folder to the live environment.
- **Security:** The `_site` and `node_modules` folders are excluded from version control via `.gitignore` to keep the history clean.

---

## Accessibility & Performance

I've prioritized a "UX-first" technical approach:

- **Landmarks:** Uses semantic HTML and ARIA landmarks for easier screen reader navigation.
- **Interactive Elements:** All gallery links include descriptive `aria-labels`, and SVG icons are hidden from screen readers to prevent redundant noise.
- **Lazy Loading:** Native browser `loading="lazy"` is implemented on all gallery images to improve initial page load speeds.
- **Focus States:** Custom focus management ensures a smooth experience for keyboard-only users.

---

## License

© 2026 Ryan Young. All rights reserved.