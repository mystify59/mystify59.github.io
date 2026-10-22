// Vehicle and battery-cooling source reports reviewed 22 October 2026.
export const thermofluidsProject = {
  "slug": "thermofluids",
  "title": "Thermofluids: vehicle & battery cooling",
  "company": "Imperial",
  "year": "2026",
  "description": "Two connected studies: shaping a compact SUV through aerodynamic research, and using battery-cooling CFD to investigate pressure loss and uneven temperatures.",
  "role": "Individual SUV design; cooling design contribution",
  "timeline": "2026 · academic project",
  "team": "Imperial College London",
  "platform": "Fusion · Fluent · Ansys Discovery",
  "cardSummary": "SUV profile design · Battery-cooling CFD",
  "coverImage": "project-assets/thermofluids/vehicle-concept.png",
  "coverAlt": "Blue SUV concept in a city setting. Vizcom-generated concept visualisation from the project report.",
  "coverCaption": "Concept visualisation · Vizcom image from the report",
  "coverFit": "contain",
  "heroImage": "project-assets/thermofluids/cad-render.png",
  "heroCaption": "Render of the simplified Fusion model used for the aerodynamic study.",
  "sections": [
    {
      "name": "01 · SUV profile",
      "heading": "Part 1 / SUV aerodynamics & profile design",
      "blocks": [
        {
          "type": "heading",
          "text": "Researching SUV aerodynamics"
        },
        {
          "type": "paragraph",
          "text": "I began with the trade-off at the heart of a compact SUV: **useful cabin space and a raised driving position**, alongside the aerodynamic challenges of a larger frontal area, exposed underbody and upright rear. My research focused on how the roofline, wheel areas and tailgate could work together without losing the vehicle’s practicality."
        },
        {
          "type": "paragraph",
          "text": "In the report, I compared the **Volvo EX90, Tesla Model Y and Porsche Cayenne** as different approaches to space, a continuous roof-to-tail profile and active aerodynamic features. This benchmarking informed the shape studies below; it did not establish a measured drag improvement for my concept."
        },
        {
          "type": "heading",
          "text": "Developing the profile"
        },
        {
          "type": "paragraph",
          "text": "Side-profile and perspective sketches explored the body proportions before narrowing the rear shape to three alternatives. I selected **a gently sloping roof with a short, near-vertical tailgate** as a compromise between a smoother transition and usable luggage space."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/suv-profile-studies.jpeg",
          "alt": "Original side-profile studies exploring the roofline, cabin proportions and rear treatment."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/suv-selected-profile.jpeg",
          "alt": "Selected / Sloping roof and compact tailgate, balancing the rear transition with useful space.",
          "comparison": "Three rear-profile alternatives"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/suv-fastback-profile.jpeg",
          "alt": "Alternative / Continuous fastback, with a greater compromise in luggage space.",
          "comparison": "Three rear-profile alternatives"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/suv-upright-profile.jpeg",
          "alt": "Alternative / Upright SUV rear, retaining a conventional spacious profile.",
          "comparison": "Three rear-profile alternatives"
        },
        {
          "type": "paragraph",
          "text": "The chosen profile led into sketches of the nose, wheel-area airflow and rear treatment. I then built a **simplified, mirrored Fusion body** to examine the overall form in Fluent. That initial study highlighted the rear wake and wheel areas as priorities for refinement. The proposed air dam and active features remained concept details outside the simplified model."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/suv-airflow-sketch.jpeg",
          "alt": "Design intent: the proposed airflow around the chosen form. These drawn arrows are not CFD results.",
          "comparison": "From intended airflow to analysis geometry"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/cad-side.png",
          "alt": "Simplified Fusion geometry used for the initial vehicle aerodynamics study.",
          "comparison": "From intended airflow to analysis geometry"
        },
        {
          "type": "heading",
          "text": "The final vehicle concept"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids/vehicle-concept.png",
          "alt": "Final SUV concept visualisation developed using Vizcom, following the profile studies. The CFD used the separate simplified Fusion model."
        }
      ]
    },
    {
      "name": "02 · Battery cooling",
      "heading": "Part 2 / Resolving the cooling-plate trade-offs",
      "blocks": [
        {
          "type": "heading",
          "text": "The problem: cooling coverage versus pressure loss"
        },
        {
          "type": "paragraph",
          "text": "The team’s second study developed a **hybrid spiral–serpentine cold plate** beneath a 420 × 210 × 70 mm battery block. The aim was to cover the battery effectively while controlling the resistance encountered by the coolant. We compared channel layouts, then used Ansys Discovery CFD to inspect pressure and temperature fields."
        },
        {
          "type": "paragraph",
          "text": "My contribution was **channel and aspect-ratio research, design iterations and CAD development** for the team’s selected concept. I also **assisted with CFD and interpreted the results**, using the findings to guide improvements. The simulation results and overall cooling design are presented as team work."
        },
        {
          "type": "paragraph",
          "text": "The initial dense spiral produced a reported **6.1 kPa pressure drop**, with a maximum battery temperature of **45.4 °C** and an average of **38.5 °C**. The long route and repeated tight turns became the main hydraulic design concern. The temperature field also showed that a reasonable average could conceal uneven cooling across the battery."
        },
        {
          "type": "heading",
          "text": "Changing the geometry"
        },
        {
          "type": "paragraph",
          "text": "The next iteration **reduced the spiral density, shortened the route to 3.40 m and widened the channel**. Spiral spacing increased from 4 mm to 17 mm. Rather than simply maximising channel coverage, the revised design sought to preserve heat removal with fewer turns and less flow resistance."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/battery-baseline-channel-cad.png",
          "alt": "Initial CAD: a densely packed spiral with many turns.",
          "comparison": "Cooling-channel geometry before and after iteration"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/battery-revised-channel-cad.png",
          "alt": "Revised CAD: a more open spiral and a shorter 3.40 m channel route.",
          "comparison": "Cooling-channel geometry before and after iteration"
        },
        {
          "type": "paragraph",
          "text": "Two elliptical cross-sections were then compared on the revised route. **Profile 1 was 8 mm wide × 6.67 mm deep; Profile 2 was 6.67 mm wide × 8 mm deep.** Swapping these dimensions retained the same cross-sectional area while changing the channel orientation relative to the battery."
        },
        {
          "type": "heading",
          "text": "What the CFD showed"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/battery-baseline-pressure.png",
          "alt": "Initial run: reported pressure drop of 6.1 kPa. Read the scale in pascals.",
          "comparison": "Reported pressure fields before and after iteration"
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/battery-profile-1-pressure.png",
          "alt": "Revised Profile 1: reported pressure drop of 1.26 kPa. The colour scale differs from the initial plot.",
          "comparison": "Reported pressure fields before and after iteration"
        },
        {
          "type": "table",
          "text": "Reported CFD results for the two revised profiles",
          "columns": [
            "Result",
            "Profile 1",
            "Profile 2"
          ],
          "rows": [
            [
              "Pressure drop",
              "1.26 kPa",
              "1.24 kPa"
            ],
            [
              "Maximum battery temperature",
              "44.8 °C",
              "45.6 °C"
            ],
            [
              "Average battery temperature",
              "38.5 °C",
              "39.0 °C"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The report selected **Profile 1**, accepting its slightly higher pressure loss in return for lower reported battery temperatures. The revised runs recorded much lower pressure losses than the initial layout, while average temperatures remained close. This made the thermal–hydraulic trade-off visible rather than treating more densely packed channels as automatically better."
        },
        {
          "type": "paragraph",
          "text": "These values are **reported simulation outputs**, not physical test results. A mesh-independence study and identical boundary settings across every iteration were not documented, so the comparison indicates a design direction rather than a validated percentage improvement."
        },
        {
          "type": "heading",
          "text": "The remaining issue: uneven cooling"
        },
        {
          "type": "paragraph",
          "text": "The revised temperature field still showed hotter regions towards the outlet side. Reducing hydraulic resistance had not removed the temperature imbalance: coolant continued to warm as it travelled through the long route."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/battery-profile-1-temperature.png",
          "alt": "Profile 1 battery-temperature field: the reported maximum is 44.8 °C, with uneven cooling still visible."
        },
        {
          "type": "paragraph",
          "text": "The proposed next iteration **split the large central spiral into smaller routes and moved denser channel coverage towards the outlet region**. Multiple inlet and outlet arrangements were also considered to shorten local flow paths. These were recommendations for further simulation, rather than tested fixes."
        },
        {
          "type": "image",
          "src": "project-assets/thermofluids-two-parts/battery-proposed-next-route.jpeg",
          "alt": "Proposed next layout: smaller spiral regions and redistributed channel coverage. This sketch was not validated by the reported CFD runs."
        },
        {
          "type": "heading",
          "text": "Checking the model assumptions"
        },
        {
          "type": "paragraph",
          "text": "The hand calculations provided an energy balance and pressure-loss estimate, but their temperature predictions differed sharply from the CFD. Reviewing the setup reveals differences in **flow rate, heat input, battery conductivity and thermal boundaries**. Those assumptions need to be aligned before the two methods can be used as a direct validation comparison."
        },
        {
          "type": "takeaway",
          "text": "**Design learning:** use pressure and temperature fields together. The simpler channel layout returned lower reported pressure losses, while the remaining thermal imbalance defined the next geometry study."
        }
      ]
    }
  ],
  "showHero": false
};
