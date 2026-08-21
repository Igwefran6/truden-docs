# Truden Documentation

Official documentation website for **[Truden](https://github.com/Igwefran6/truden)** — instant high-DPI screen snipping overlay and Vision LLM adapters for web applications.

Built with **[Astro](https://astro.build)** and **[Starlight](https://starlight.astro.build)**.

---

## 🌟 Features

- **100% Static HTML (SSG)**: Zero runtime server dependencies; deployable directly to any CDN or static hosting platform.
- **Fast Client Search**: Instant full-text search powered by [Pagefind](https://pagefind.app/) running in WebAssembly.
- **Multi-Framework Documentation**: Multi-tab code samples covering React, Next.js, Svelte, Vue, Angular, SolidJS, TanStack Start, and Vanilla JS.
- **Branded Design**: Clean dark/light theme integration matching Truden's `#D843D8` mascot brand identity.
- **Fully Type-Safe**: Validated with `@astrojs/check` and TypeScript strict mode.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Local Development Server
```bash
pnpm dev
```
Open `http://localhost:4321` in your browser to view the documentation site with live hot-reloading.

### 3. Typecheck & Validate
```bash
pnpm exec astro check
```

### 4. Build for Production
```bash
pnpm run build
```
The optimized static bundle will be generated in `./dist/` alongside the search index and `sitemap-index.xml`.

### 5. Preview Production Build
```bash
pnpm run preview
```

---

## 📁 Project Structure

```
.
├── public/                     # Static public assets (favicons, robots.txt)
│   └── favicon.svg
├── src/
│   ├── assets/                 # Optimized vector & raster logos
│   │   ├── truden-logo-gradient.svg
│   │   └── truden-logo.png
│   ├── components/             # Custom header components & overrides
│   │   └── HeaderSocialIcons.astro
│   ├── content/
│   │   └── docs/               # Markdown/MDX documentation content
│   │       ├── index.mdx       # Landing splash page
│   │       ├── getting-started.mdx
│   │       ├── triggers.mdx
│   │       ├── mode-a.mdx
│   │       ├── mode-b.mdx
│   │       ├── playground.mdx
│   │       ├── api-reference.mdx
│   │       └── limitations.mdx
│   └── styles/
│       └── custom.css          # Custom #D843D8 palette & typography overrides
├── astro.config.mjs            # Starlight & Astro configuration
├── package.json
└── tsconfig.json
```

---

## 🚢 Deployment

Because this project compiles to pure static HTML, CSS, and JS, you can deploy the `./dist/` directory to any static host:

- **GitHub Pages**: Set build output directory to `./dist` in GitHub Actions.
- **Cloudflare Pages**: Set build command `pnpm run build` and output directory `dist`.
- **Vercel / Netlify**: Select **Astro** preset with output directory `dist`.

---

## 📄 License

MIT © [Francis Igwe](https://github.com/Igwefran6)
