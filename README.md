# JerryBB Support

Customer-facing documentation for JerryBB, built with Docusaurus.

## Local development

```bash
npm install
npm run start
```

Open `http://localhost:3000` to view the site.

## Production build

```bash
npm run build
```

The generated site is written to `build/`. Set `DOCS_URL` when building for a custom domain. The GitHub Pages workflow publishes the site from `main`.

## Documentation principles

- Describe what each page is for and which decisions it supports.
- Define metrics and state their source, freshness, confidence, and limitations.
- Keep single-match analysis separate from tactical history.
- Place screenshots beside the content they explain.
- Do not invent product behavior or recommendations.
