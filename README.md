# Boxuan Wang — portfolio

An independent static portfolio for GitHub Pages, based on the approved dark-blue Tabfolio design. It includes Li Auto S00, Street Pulse, Thermofluids, RE-seat, Aquatorium, About and Resume pages. Project attribution distinguishes personal contributions, team work, concept renders and simulation results.

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

Design credit: Tabfolio by Sebastian. Portfolio text and project work belong to their respective contributors; the project pages retain team and reference credits. The Street Pulse cover illustration is a source-based reconstruction, not a dimensioned CAD drawing. S00 uses the original assembled CAD image.

## 18 October 2026 portfolio update

Thermofluids is a new case study at `/case-studies/thermofluids/`, using selected original Fusion, Fluent and cold-plate images from the project report. Its 2026 date was confirmed by the author. Individual aerodynamics and team battery-cooling contributions are explicit; simulation does not imply physical validation.

The homepage now leads with S00, then Street Pulse, Thermofluids, RE-seat and Aquatorium. Short technical summaries identify the contribution on each card. S00 uses the author's preferred original static assembly image. The Resume page and downloadable CV include the current projects and corrected Elibot 2023 date.

`thermofluids.mjs` holds the new case-study copy. `project-assets/thermofluids/` contains the selected original images; the build copies them into content-hashed local URLs. The public site remains a separate build from the saved Framer editor.

Validation: nine-page production build; desktop (1280px) and phone (390px) review; homepage, new case and resume text/image/overflow checks; section navigation and image zoom/Escape checks; searchable one-page PDF with embedded fonts.
