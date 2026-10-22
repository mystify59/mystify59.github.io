# Boxuan Wang — portfolio

An independent static portfolio for GitHub Pages, based on the approved dark-blue Tabfolio design. It includes Li Auto S00, Street Pulse, AI-assisted CAD workflow, Thermofluids, Re:Seat, Aquatorium, Project Revival, About and Resume pages. Project attribution distinguishes personal contributions, team work, concept renders and simulation results.

## Edit and preview

Install Node.js, then run:

```sh
npm ci
npm run build
npm run preview
```

Open http://127.0.0.1:4180. Edit project stories in `content.mjs`, page templates in `site.tsx`, and visual styles in `styles.css`. The existing hover animations are in `ExplodedProjectCover.tsx`. Replace the public downloads in `public/Boxuan_Wang_CV.pdf` and `public/Boxuan_Wang_Portfolio.pdf`, then rebuild.

`image-build.mjs` generates responsive WebP display versions and project-specific sharing images. Original project images remain available in the zoom viewer. Intrinsic image dimensions reserve space before loading. Run `npm test` after building to check responsive image metadata, sharing cards and original-file preservation.

## S00 three-part case, 22 October 2026

`s00.mjs` now groups the case into component supports, main-frame FEA, and the wrist-camera mount for VLA data collection. Original Ansys report images in `project-assets/s00-analysis/` match the saved 4 August frame results. The camera section reports the separate 17 August bracket studies in tables. Load, material, boundary and convergence limits are stated with the results; the camera fixture is distinct from the head-camera support. Hand-posture research is omitted.

## AI-assisted CAD workflow, 21 October 2026

`ai-cad-workflow.mjs` holds a separate personal tool-development case at `/case-studies/ai-cad-workflow/`, placed after Street Pulse on the homepage. Its four-step workflow and technical tables use native HTML, with the existing dark/blue styling. S00's internship story remains separate.

`project-assets/ai-cad-workflow/` contains three unmodified original Fusion viewport images from 3 September 2026. They show cumulative development trials, including conditional concept results. The case distinguishes these retained models from the separate 4 September scratch-document integration pass (19 checks, zero failures) and its 39-test static suite. These are recorded historical results, not structural or manufacturing validation. Third-party MCP foundations, AI-assisted development and untested SOLIDWORKS/Ansys integrations are explicit.

Validation: thirteen-page build; existing image-delivery tests; desktop and 390/320px phone layouts; original-image zoom and homepage navigation; source-claim review. Original images remain available through the zoom viewer.

## 21 October 2026 audit fixes

Project, About and Resume pages use a compact header. Project facts use two columns on phones, Project Revival opens with its project menu, and related enclosure/CFD images are grouped for comparison. Download links on Home, Resume and the footer serve the current CV and twelve-page portfolio. The CV wording is unchanged from the selected 20 October version, with improved text extraction in the public export.

Aquatorium identifies the supported Phase 1 contribution while retaining team attribution for subsequent development. Anvil remains **in development** until its internals are finished and tested; the existing print does not establish a completed mechanism or working sound system. Approved original covers and hover behaviours are preserved, with concise concept-image captions where relevant.

`revival.mjs` holds the Project Revival menu and its Anvil/Ghost stories. Each object has a `destination` for its route: `/project-revival/`, `/project-revival/anvil/` and `/project-revival/ghost/`. The build includes child-story assets and routes in the same static output and sitemap. New series projects can follow this pattern without placing every child on the homepage.

## Publish

GitHub Pages serves `docs/` from the `main` branch. After building, commit the source and `docs/`, and push to `main`. Changes to the original Framer project are independent; update this repository to change the public GitHub website.

Only public website material belongs here. Original application drafts, source CAD, private project archives and personal evidence records are maintained outside this repository.

Design credit: Tabfolio by Sebastian. Portfolio text and project work belong to their respective contributors; the project pages retain team and reference credits. The Street Pulse cover illustration is a source-based reconstruction, not a dimensioned CAD drawing. S00 uses the original assembled CAD image.

## 18 October 2026 portfolio update

Thermofluids is a new case study at `/case-studies/thermofluids/`, using selected original Fusion, Fluent and cold-plate images from the project report. Its 2026 date was confirmed by the author. Individual aerodynamics and team battery-cooling contributions are explicit; simulation does not imply physical validation.

The homepage now leads with S00, then Street Pulse, Thermofluids, RE-seat and Aquatorium. Short technical summaries identify the contribution on each card. S00 uses the author's preferred original static assembly image. The Resume page and downloadable CV include the current projects and corrected Elibot 2023 date.

`thermofluids.mjs` holds the new case-study copy. `project-assets/thermofluids/` contains the selected original images; the build copies them into content-hashed local URLs. The public site remains a separate build from the saved Framer editor.

Validation: nine-page production build; desktop (1280px) and phone (390px) review; homepage, new case and resume text/image/overflow checks; section navigation and image zoom/Escape checks; searchable one-page PDF with embedded fonts.

## 20 October 2026 portfolio update

The saved Framer additions are now incorporated into the static build. Project Revival has one homepage entry opening a menu for Anvil and Ghost, with individual stories and return links. Anvil distinguishes original CAD renders from the first printed iteration; Ghost remains labelled as research and development, with a typographic cover and proposed system diagram.

Re:Seat's homepage cover uses the approved studio visualisation of the finished three-seat concept; hover reveals the original bare frame. The studio image is AI-refined from the original CAD image, with minor inferred finishing detail. Its original case-study images and concept status are preserved. S00 keeps its original static assembled CAD cover.

Card typography, spacing and visible stacked phone/tablet metadata match the approved Framer refinements. The newer Thermofluids story, S00-first project order, resume corrections and 18 October public CV are preserved.

Later on 20 October, the user selected the blue SUV city render for the Thermofluids cover. `project-assets/thermofluids/vehicle-concept.png` is the original 1920 × 1080 image from Figma node `135:312`, matching the supplied screenshot without its selection border. The source labels it as a Vizcom-generated concept render; its alt text preserves that qualification. The case-study hero, native CAD and CFD evidence are unchanged.

Validation: twelve-page production build with 52 local images; all 338 generated local links/media references resolve; desktop and phone review; Revival menu/child/return navigation; section navigation and image zoom/Escape; Re:Seat hover, Street Pulse hover/reassembly/reduced motion, and static S00 cover. Public CV SHA-256 remains `8ba4366d652ecb1ec737faf4d897299e7e73347ca0658cab4e24c806f2cca927`.
