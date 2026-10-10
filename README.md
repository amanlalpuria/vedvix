# Vedvix website

Marketing site and portfolio for Vedvix, live at [vedvix.in](https://vedvix.in). Vite + React 19 + Tailwind v4, built on the brand kit in [`src/ui`](src/ui/README.md).

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # production build into dist/
```

Pushing to `master` deploys to GitHub Pages (`.github/workflows/publishNextjs.yml`).

## Routes

| Path | Page |
|---|---|
| `/` | Home: hero, featured case study, services, selected work, process, testimonials, about, contact |
| `/work` | All case studies with category filters |
| `/work/<slug>` | One case study |
| `/#showcase` | UI-kit component showcase |

Routing is a small history router in [`src/router.tsx`](src/router.tsx). GitHub Pages only serves files, so the build writes a copy of `index.html` for every route with route-specific metadata and JSON-LD, plus a noindex `404.html`, `robots.txt` and `sitemap.xml`. Metadata lengths are capped at 60 characters for titles and 160 for descriptions. See `staticRoutes()` in [`vite.config.ts`](vite.config.ts) and the shared metadata/schema helpers in [`src/site/seo.ts`](src/site/seo.ts).

## Analytics

Set any required IDs in your deployment environment or local `.env` file using the variables in [`.env.example`](.env.example). For GitHub Pages, add optional Actions secrets named `VITE_GTM_ID`, `VITE_GA4_ID` and `VITE_META_PIXEL_ID`; the deploy workflow passes them to the build. Trackers are disabled when IDs are empty. Use either a GTM container or direct GA4 (`VITE_GA4_ID`); when GTM is configured, add the GA4 tag to the GTM container to avoid duplicate page views. Meta Pixel can be configured independently. The app sends SPA `page_view`, `contact_click` (email/phone), and `contact_cta_click` events. `trackLeadSubmission(formName)` is available for a future form and should only be called after the server accepts the submission. There is no form submission endpoint in this site, so no synthetic form or lead-submission event is sent.

Review the site's consent and privacy requirements before enabling third-party tags in production.

## Adding a case study

1. Put images in `public/work/<slug>/`: a `cover.jpg` (2:1 works best) and any screenshots. Add a matching WebP file for each JPEG (for example, `ffmpeg -i public/work/<slug>/cover.jpg -c:v libwebp -quality 82 -compression_level 6 public/work/<slug>/cover.webp`); pages prefer WebP and retain JPEG as a fallback. Add each image's exact width and height to [`src/data/imageDimensions.ts`](src/data/imageDimensions.ts). Phone screenshots look right at 540×960.
2. Add an entry to `PROJECTS` in [`src/data/projects.ts`](src/data/projects.ts). `accent` tints the case-study page.
3. Optionally add `caseStudy` for the long-form layout (apps, screenshot walkthrough, step sequence, features by audience, engineering notes, architecture). NYC Beer Kegs is the reference. Without it, the page shows features and tech stack instead.
4. Set `featured: true` on one project to feature it on the home page.

The route files are generated from the same data, so no other change is needed.
