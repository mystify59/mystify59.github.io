# Boxuan Wang — portfolio

An independent static portfolio for GitHub Pages, based on the approved dark-blue Tabfolio design. It includes Street Pulse, Aquatorium, Li Auto S00, RE-seat, About and Resume pages. Project attribution distinguishes personal contributions, team work, concept renders and simulation results.

## Edit and preview

Install Node.js, then run:

```sh
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4180. Edit project stories in `content.mjs`, page templates in `site.tsx`, and visual styles in `styles.css`. The existing hover animations are in `ExplodedProjectCover.tsx`. Replace the public PDF in `public/Boxuan_Wang_CV.pdf`, then rebuild.

## Publish

GitHub Pages serves `docs/` from the `main` branch. After building, commit the source and `docs/`, and push to `main`. Changes to the original Framer project are independent; update this repository to change the public GitHub website.

Only public website material belongs here. Original application drafts, source CAD, private project archives and personal evidence records are maintained outside this repository.

Design credit: Tabfolio by Sebastian. Portfolio text and project work belong to their respective contributors; the project pages retain team and reference credits. The illustrations used on the Street Pulse and S00 covers are source-based reconstructions, not dimensioned CAD drawings.
