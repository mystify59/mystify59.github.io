// Project report and ownership reviewed 18 October 2026.
export const thermofluidsProject = {
  "slug": "thermofluids",
  "title": "Thermofluids: vehicle & battery cooling",
  "company": "Imperial",
  "year": "2026",
  "description": "Developing a compact SUV from sketches to Fusion geometry and CFD, alongside a team study of battery cold-plate design.",
  "role": "Individual aerodynamics; team cooling contribution",
  "timeline": "2026 · academic project",
  "team": "Imperial College London",
  "platform": "Fusion · Ansys Fluent · CFD",
  "cardSummary": "Vehicle CAD and CFD · Team battery cooling",
  "coverImage": "project-assets/thermofluids/cad-render.png",
  "heroImage": "project-assets/thermofluids/cad-render.png",
  "heroCaption": "Render of the simplified Fusion model used for the aerodynamic study.",
  "sections": [
    {
      "name": "Overview",
      "heading": "A practical body shape, examined through flow.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The brief brought together two engineering problems: shaping a compact SUV around space and aerodynamic constraints, and exploring how a cold plate could distribute coolant beneath a battery. The work moved from benchmarking and sketches into CAD, CFD interpretation and cooling-channel concepts."
        },
        {
          "type": "paragraph",
          "text": "I carried out the vehicle aerodynamics work individually: concept development, Fusion modelling, Fluent setup and interpretation of the flow results. Battery cooling was a team effort in which I participated. The outcome is a documented design and simulation study; the vehicle and cold plate were not physically validated."
        }
      ]
    },
    {
      "name": "Form & CAD",
      "heading": "Keeping useful space while shaping the rear.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "I compared three rear profiles, balancing cargo space against a smoother roof-to-tail transition. The selected direction combined a gently sloping roof with a compact, near-vertical tailgate. Sketches explored how the nose, wheel areas and rear could manage airflow."
        },
        {
          "type": "paragraph",
          "text": "Using Fusion’s Form tools, I modelled half the body and mirrored it, then refined the surface continuity. The simplified geometry retained the overall shape, wheel forms and rear slope. Details such as mirrors, the proposed air dam and active features were outside this model’s scope."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/cad-side.png",
          "alt": "Fusion side view: the sloping roof and rear profile carried through into the simplified analysis geometry."
        }
      ]
    },
    {
      "name": "CFD setup",
      "heading": "From a surface model to an analysis model.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "I prepared a 1:17-scale half-body model in Ansys Fluent with a symmetry plane, a 30.5 m/s inlet and the standard k–ε turbulence model. The mesh contained 399,659 cells. I reviewed pressure and velocity contours, streamlines, and lift and drag coefficient histories over a 500-iteration run."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/velocity-side.png",
          "alt": "Side-plane velocity contour from the scaled CFD model. The low-velocity region behind the body highlights the rear wake."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/pressure-side.png",
          "alt": "Side-plane pressure contour used to examine the nose, roof and rear pressure distribution."
        }
      ]
    },
    {
      "name": "Findings",
      "heading": "The rear wake became the next design priority.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The simulated flow followed much of the upper body before separating near the rear. Pressure and velocity views highlighted the wake behind the tailgate, while local streamline views showed disturbances around the wheels. These observations directed the next iteration towards rear pressure recovery, wheel-area geometry and underbody treatment."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/streamlines.png",
          "alt": "Fluent streamline view from the 500-iteration study. This is a simulation of the simplified body."
        },
        {
          "type": "paragraph",
          "text": "The analysis supports qualitative design decisions. A scaled model, omitted details and a single mesh limit quantitative conclusions; mesh independence and full-scale Reynolds-number similarity were not established. Symmetry in this zero-yaw model is not evidence of crosswind stability."
        }
      ]
    },
    {
      "name": "Battery cooling",
      "heading": "Balancing channel coverage and flow-path complexity.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "In the team cold-plate study, we compared serpentine and parallel channel arrangements, then explored a hybrid of manifolds and branched paths. The design questions were how to distribute coolant, avoid excessive path length and pressure loss, and keep the layout practical to manufacture."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/cold-plate.jpeg",
          "alt": "Cold-plate channel concept from the team study. The drawing explores manifolds and repeated branches; it does not establish a measured cooling performance."
        },
        {
          "type": "paragraph",
          "text": "The report selected a single-inlet concept with a tapered manifold over a more complex dual-inlet option. Smooth bends and balanced branches were design intentions to investigate further. My participation was shared with the team; no temperature-reduction or pressure-drop result is claimed."
        }
      ]
    },
    {
      "name": "Next iteration",
      "heading": "Use the model to make the next comparison stronger.",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The project connected shape decisions to a repeatable simulation workflow and made the limits of a simplified model visible. A next iteration would check mesh sensitivity and consistent reference values, compare rear and wheel-area variants under the same conditions, and evaluate cold-plate flow distribution and pressure loss before physical testing."
        }
      ]
    }
  ]
};
