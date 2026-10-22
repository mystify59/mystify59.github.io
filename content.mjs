// Public portfolio copy migrated from the current website.
// Team attribution and prototype/simulation limits are preserved.
import { thermofluidsProject } from './thermofluids.mjs';
import { revivalSeries, revivalProjects } from './revival.mjs';
import { aiCadWorkflowProject } from './ai-cad-workflow.mjs';
import { s00Project } from './s00.mjs';

export const siteContent = {
  "projects": [
    {
      "slug": "street-pulse",
      "title": "Street Pulse: feeling live music",
      "company": "Academic team project",
      "year": "2025",
      "description": "Modular haptic floor tiles that combine vibration and light to bring audiences into street performances. From field research and tessellation studies to electronics prototyping and user testing.",
      "role": "Research, physical design & prototyping",
      "timeline": "2025 · report delivered June",
      "team": "JJAGernaut",
      "platform": "Physical product & experience",
      "subtitle": "Modular haptic floor tiles that combine vibration and light to bring audiences into street performances. From field research and tessellation studies to electronics prototyping and user testing.",
      "coverImage": "https://framerusercontent.com/images/Tcpkpbi0RUAt7TA3haeo4ws.png",
      "heroImage": "https://framerusercontent.com/images/5QOld1RBtYfbZhGwvoMlTzKB8M.png",
      "hoverImage": "https://framerusercontent.com/images/5QOld1RBtYfbZhGwvoMlTzKB8M.png",
      "sections": [
        {
          "name": "Overview",
          "heading": "An invitation to feel the performance.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Street Pulse explores how vibration and light could turn a passing encounter with a street performer into a more engaging experience. Trapezium floor modules can be arranged into different layouts, adding a physical rhythm beneath the audience’s feet. The project combines a working demonstration module with digital models of a larger installation; the overview image is a concept render."
            },
            {
              "type": "paragraph",
              "text": "My contribution: I carried out almost all of the user research, developed the tessellation and exterior design, prototyped the electronics, and carried out all testing and assembly. Software development was handled by other team members."
            }
          ]
        },
        {
          "name": "Research",
          "heading": "Two experiences sharing one street.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "We studied performances in Covent Garden, Leicester Square, and around King’s Cross, St Pancras and Euston. Observations and interviews covered both performers and audiences: how crowds form, where people stand, what invites participation, and the work involved in setting up and moving between locations."
            },
            {
              "type": "paragraph",
              "text": "The research exposed two different time scales. An audience member needs a reason to stop within a brief encounter. A performer has a full day of travel, setup and repeated performances, so additional equipment must earn its place. Journey maps and an audience-density model helped connect these needs to the physical space."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/RmhaaPPldkFzbg292yL9M2LEU.png",
              "alt": "Audience-density model synthesising field observations of where people gathered.",
              "text": "Audience-density model synthesising field observations of where people gathered."
            },
            {
              "type": "paragraph",
              "text": "Our design question became: how could we invite people to join a performance and help shape the audience’s position without the performer continually directing them? This set the direction for a low-effort, sensory invitation."
            }
          ]
        },
        {
          "name": "Form & concept",
          "heading": "One tile, many ways to gather.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Co-design explored ways to create curiosity, wonder and excitement. The team compared spotlight systems, adjustable-height platforms and haptic floor modules, using public feedback and feasibility discussions to narrow the direction. Early sensory comparisons supported developing vibration together with lighting."
            },
            {
              "type": "paragraph",
              "text": "I developed the tessellation and exterior design. Sketches, small-scale modules and figures helped us explore how repeated trapezium units could form different performance spaces. Co-design with a choreographer informed the arrangements, while surface-pattern studies and perimeter lighting developed the visual identity."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/Mrf9LxqHgVnnCA6krTANJDnv76o.png",
              "alt": "Initial tessellation sketches.",
              "text": "Initial tessellation sketches."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/bxj1xjV2PELgmiMWL0lH7GyQbqU.png",
              "alt": "Alternative radial arrangements.",
              "text": "Alternative radial arrangements."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/BYuq0wGwUvYCQKh4LM9cy7VfPqc.png",
              "alt": "The intended audience experience, shown in the team’s virtual street environment.",
              "text": "The intended audience experience, shown in the team’s virtual street environment."
            }
          ]
        },
        {
          "name": "Prototyping",
          "heading": "Build the sensation into the structure.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "I prototyped the electronics and assembled the hardware, testing how the surface, supports and actuators changed the sensation. We compared 5 mm plywood, 5 mm acrylic and 3 mm acrylic, selecting the thinner acrylic for vibration transmission. Soft rubber mats let the actuators contact the ground, so we moved to firmer individual feet."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/Tcpkpbi0RUAt7TA3haeo4ws.png",
              "alt": "Exploded design render showing the surface, perimeter lighting, internal structure and electronics.",
              "text": "Exploded design render showing the surface, perimeter lighting, internal structure and electronics."
            },
            {
              "type": "paragraph",
              "text": "The electronics work explored an Arduino and DRV2605L haptic driver with linear resonant actuators. Internal spaces and wiring routes had to fit around the structure. The final demonstration used one physical unit; the proposed connectors and larger tessellated platform remained part of the wider design."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/eB7vLuYcIUHqzlhc9xkkb83A.png",
              "alt": "Breadboard electronics prototype from the delivery report.",
              "text": "Breadboard electronics prototype from the delivery report."
            }
          ]
        },
        {
          "name": "Testing",
          "heading": "Test the rhythm, then the experience.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "I carried out all testing. In a 20-person preference test, participants ranked three vibration patterns while listening to the same song: a metronome, the full song signal and selected rhythmic elements. The selected-rhythm pattern ranked best, guiding us towards a more focused haptic response."
            },
            {
              "type": "paragraph",
              "text": "For the experience evaluation, 19 participants wore a VR headset while standing on a functional vibration module. The virtual performance let us evaluate the physical sensation in the context of the proposed larger installation."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/ZAPPsPPs7eslCl70ux4V3IG2qw.png",
              "alt": "Virtual performance environment used alongside a working vibration module in the 19-person evaluation.",
              "text": "Virtual performance environment used alongside a working vibration module in the 19-person evaluation."
            },
            {
              "type": "paragraph",
              "text": "In that prototype evaluation, 89% agreed or strongly agreed that the platform improved the viewing experience, and 94.7% felt it interacted well with the music. These were participants’ reported experiences in a simulation. The project did not establish an increase in real street audience retention, tipping or crowd-positioning effectiveness."
            }
          ]
        },
        {
          "name": "Reflection",
          "heading": "Connect the research to what people feel.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The project connected field research to form, electronics and evaluation. Testing changed tangible details: the surface thickness, the support feet and the choice of vibration pattern. The strongest part of the process was bringing the physical prototype into an experience that participants could respond to."
            },
            {
              "type": "paragraph",
              "text": "A next iteration would test connected modules during real street performances, measuring setup effort, participation and audience retention. It would also need to validate accessibility, load capacity and outdoor durability before moving towards a public installation."
            }
          ]
        }
      ]
    },
    {
      "slug": "aquatorium",
      "title": "Aquatorium: a compact field system",
      "company": "Academic team project",
      "year": "",
      "description": "A collapsible live-fish transport concept combining a support frame, individual fish bags, oxygen delivery and cooling.",
      "role": "Individual Phase 1 concepts",
      "timeline": "Two project phases",
      "team": "Four-person academic team",
      "platform": "Outdoor product",
      "subtitle": "A collapsible live-fish transport concept combining a support frame, individual fish bags, oxygen delivery and cooling.",
      "coverImage": "https://framerusercontent.com/images/A6CgaUaEe1WxPgrduRATyptMtfU.png",
      "heroImage": "https://framerusercontent.com/images/wI9JQsYTDpDY5ZkHTiBz2uKkxec.png",
      "hoverImage": "",
      "sections": [
        {
          "name": "Research",
          "heading": "Understanding the journey before designing the product.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Aquatorium is a **collapsible live-fish transport concept** for backcountry anglers moving between hiking and fishing. The challenge was to carry and manage the catch without making an already full equipment load harder to handle. The concept combines three individual fish bags, oxygen delivery and cooling within a folding support frame."
            },
            {
              "type": "paragraph",
              "text": "My **individual Phase 1 work** explored six concepts for supporting the transition between activities, including a floating hydro-generator. The later Aquatorium frame, enclosure prototypes, component layouts and manufacturing study are presented as the **team’s development work**."
            },
            {
              "type": "heading",
              "text": "Four interviews, two connected activities"
            },
            {
              "type": "paragraph",
              "text": "Our initial research brought together interviews with **two experienced hikers and two anglers**. We organised quoted evidence into pain points and emerging insights, then compared equipment inventories, existing products and the stages of a trip. The participant photos below come from our project report."
            },
            {
              "type": "heading",
              "text": "Hiking / Weight, power and reliability"
            },
            {
              "type": "image",
              "comparison": "Hiking research participants",
              "src": "project-assets/aquatorium-research/interview-he.jpeg",
              "alt": "Mr He · long-route hiking and custom equipment."
            },
            {
              "type": "image",
              "comparison": "Hiking research participants",
              "src": "project-assets/aquatorium-research/interview-bromley.jpeg",
              "alt": "Mr Bromley · mountaineering and long-distance hiking."
            },
            {
              "type": "quote",
              "text": "“Solar panels are **rigid and don’t fit well on backpacks**.”",
              "attribution": "Hiking interview notes · team research"
            },
            {
              "type": "paragraph",
              "text": "**Carried weight limited longer trips.** Power banks added bulk, while charging products could be awkward to pack or use on the move. The notes also raised concerns about improvised repairs and pointed towards **modular, dependable equipment** that could earn its place in the pack."
            },
            {
              "type": "heading",
              "text": "Fishing / Access in wet, messy conditions"
            },
            {
              "type": "image",
              "comparison": "Fishing research participants",
              "src": "project-assets/aquatorium-research/interview-jojo.jpeg",
              "alt": "Mr Jojo · 15 years of fly-fishing experience."
            },
            {
              "type": "image",
              "comparison": "Fishing research participants",
              "src": "project-assets/aquatorium-research/interview-vuttigrai.jpeg",
              "alt": "Mr Vuttigrai · leisure and sport fishing."
            },
            {
              "type": "quote",
              "text": "“If I use bait or touch the fish, **my hands get sticky and smell fishy**.”",
              "attribution": "Fishing interview notes · team research"
            },
            {
              "type": "paragraph",
              "text": "Tools were spread across separate items and could become buried or slow to reach. Wet, messy hands made handling less comfortable and precise, while overpacking added clutter. **Organisation during use** mattered as much as storage: tools needed **predictable access and wet-hand handling**."
            },
            {
              "type": "heading",
              "text": "Turning findings into design priorities"
            },
            {
              "type": "paragraph",
              "text": "**Weight and pack space:** adding fishing equipment compounds an already full hiking load. Any new function needed to justify its mass and bulk."
            },
            {
              "type": "paragraph",
              "text": "**Access during use:** buried tools, repeated unpacking and wet or dirty hands made simple tasks awkward. We prioritised predictable access and straightforward handling."
            },
            {
              "type": "paragraph",
              "text": "**Confidence away from help:** power limitations, equipment failure and improvised fixes raised reliability concerns. Modularity, protection and repair access became recurring requirements."
            },
            {
              "type": "heading",
              "text": "Mapping the whole trip"
            },
            {
              "type": "paragraph",
              "text": "We used a journey map to compare **hiking, fishing and the combined experience**. The synthesis highlighted repeated changes between walking, setting up, handling equipment and carrying the catch."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-research/journey-chart.svg",
              "mobileSrc": "project-assets/aquatorium-research/journey-chart-mobile.svg",
              "alt": "Journey map: hikers (dashed grey), fishers (dotted teal) and backcountry anglers (solid blue). The curves interpret the team’s research; they are not measured scores. Numbered observations describe the trip below."
            },
            {
              "type": "journey-notes",
              "observations": [
                "Fishers start off relaxed, while hikers and anglers worry about **what to pack** when preparing.",
                "All are **excited upon initial arrival**.",
                "Hikers and anglers lose some excitement over **tedious terrain and weather**, but recover after seeing extraordinary scenery.",
                "The angler **settles down and starts fishing**, behaving similarly to the fisher.",
                "The fisher starts getting bored, but quickly **gets excited after each catch**.",
                "Upon leaving the great scenery, **tiredness catches up with the hiker**. Enjoyment diminishes until they camp for the night, where it recovers.",
                "The fisher and angler are both **happy with the day’s haul** and leave or camp for the night."
              ]
            },
            {
              "type": "paragraph",
              "text": "Our product benchmarking compared quick-access storage, folding structures, compact powered equipment and outdoor reliability. It suggested that existing products addressed individual needs, while **the transition between hiking and fishing** remained a useful focus for design."
            },
            {
              "type": "heading",
              "text": "The question that focused the project"
            },
            {
              "type": "takeaway",
              "text": "How might we support backcountry anglers during **the transition between hiking and fishing**?"
            }
          ]
        },
        {
          "name": "Concepts",
          "heading": "Exploring alternatives, then choosing a direction.",
          "blocks": [
            {
              "type": "heading",
              "text": "My six initial concepts"
            },
            {
              "type": "paragraph",
              "text": "My individual Phase 1 work explored **six different ways to support the transition between hiking and fishing**: generating power, sharing supplies, combining equipment and preparing for the next stop. These original sketches show the range of ideas before I selected one for further development."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/concept-1.jpeg",
              "comparison": "My six initial concepts",
              "gallery": true,
              "alt": "01 / Pendulum-generator backpack. Harvesting energy from walking for use while fishing or at camp."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/concept-2.jpeg",
              "comparison": "My six initial concepts",
              "gallery": true,
              "alt": "02 / Angler’s supply cache. Leaving spare tackle and supplies at fishing sites for later visitors."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/concept-3.jpeg",
              "comparison": "My six initial concepts",
              "gallery": true,
              "alt": "03 / Floating hydro-generator. Using flowing water to charge a battery between activities."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/concept-4.jpeg",
              "comparison": "My six initial concepts",
              "gallery": true,
              "alt": "04 / Gaiters that become a seat. Folding frames extending into a fishing seat."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/concept-5.jpeg",
              "comparison": "My six initial concepts",
              "gallery": true,
              "alt": "05 / Drifting depth detector. Measuring depth and anchoring at a suitable spot while the angler walks downstream."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/concept-6.jpeg",
              "comparison": "My six initial concepts",
              "gallery": true,
              "alt": "06 / Self-drying bait holder. Separating, cleaning and drying wet bait while walking to the next stop."
            },
            {
              "type": "heading",
              "text": "Developing the proposed generator in CAD"
            },
            {
              "type": "paragraph",
              "text": "Survey feedback and a follow-up interview supported developing the **floating hydro-generator**. Feedback about still or slow-moving water raised questions about flow conditions and possible wind generation. I developed the proposal around **two modules: the turbine and a separate anchor/battery unit**."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/generator-turbine-exploded.png",
              "alt": "Proposed turbine module — original exploded CAD render from my Phase 1 work, showing the front guard, generator support, housing and tail-support rings."
            },
            {
              "type": "paragraph",
              "text": "The CAD work explored **assembly, retrieval and packing**: a removable front guard, an accessible generator mount and a fabric tail supported by collapsible rings. I placed the battery in the anchoring module to reduce its exposure to water, with folding pegs and a rubber-lined loop proposed for different anchoring conditions. These views show the design proposal at this stage."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/generator-anchor-exploded.png",
              "alt": "Proposed anchor module — original exploded CAD render showing the ring housing, inner lining and folding peg."
            },
            {
              "type": "paragraph",
              "text": "Within the housing, I added **reinforcing ribs to hollow parts** and developed **M3 screw mounting for the generator holder**, making the assembly details part of the concept development."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/generator-rib-detail.png",
              "comparison": "Generator CAD assembly details",
              "alt": "Internal rib in the hollow housing — original CAD detail."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-concepts/generator-fastener-detail.png",
              "comparison": "Generator CAD assembly details",
              "alt": "Threaded mounting points for screw-based assembly — original CAD detail."
            },
            {
              "type": "heading",
              "text": "A parallel direction: managing the catch"
            },
            {
              "type": "paragraph",
              "text": "Joe Chen’s strand explored catch storage and handling, including an anchored net and a dual-chamber bag for refreshing water. Concepts were assessed through user feedback and weighted criteria covering feasibility, problem fit, portability, durability and complexity."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/YSUa2Qz0ALMttGBeL5JWBjnyE.jpg",
              "alt": "Joe Chen’s early dual-chamber catch-bag concept — Phase 1.",
              "text": "Joe Chen’s early dual-chamber catch-bag concept — Phase 1."
            },
            {
              "type": "heading",
              "text": "Why the project changed direction"
            },
            {
              "type": "paragraph",
              "text": "During later team prototyping, the turbine’s output proved too low to justify its size and weight. The team moved towards Aquatorium: a collapsible fish-transport concept with oxygen delivery and cooling. Portability, access and reliability remained criteria to test throughout development."
            }
          ]
        },
        {
          "name": "Development",
          "heading": "Iterating around the real components.",
          "blocks": [
            {
              "type": "heading",
              "text": "Four bays became three"
            },
            {
              "type": "paragraph",
              "text": "The first frame left too little room for the electronics and made the edge sliders difficult to handle. The team moved from four bays to three to improve spacing and access."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/CGMu1LX7QYF6if9Ot0GHZuQT4M.png",
              "alt": "Earlier frame: packaging and slider-access constraints.",
              "text": "Earlier frame: packaging and slider-access constraints."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/fh1J5UC4175LfTdaCoizAV6is.png",
              "alt": "Revised frame: three bays with more space for components and access.",
              "text": "Revised frame: three bays with more space for components and access."
            },
            {
              "type": "heading",
              "text": "From a basic box to a fitted enclosure"
            },
            {
              "type": "paragraph",
              "text": "The team moved from a basic box to a fitted enclosure so that component access, openings and mounts could develop together. These three physical prototypes exposed packaging and assembly constraints that were less obvious in CAD."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/aJVbXLoTKzD8BeNPKpIQQ3HQRs4.png",
              "comparison": "Team enclosure iterations",
              "alt": "01 / Basic enclosure",
              "text": "01 / Basic enclosure"
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/h6qNgeBXpXBLCZXq8qpCSR9A4NQ.jpg",
              "comparison": "Team enclosure iterations",
              "alt": "02 / Test layout",
              "text": "02 / Test layout"
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/xkDyneol6LVCnwu99HUdOBzd8Zg.png",
              "comparison": "Team enclosure iterations",
              "alt": "03 / Refined openings",
              "text": "03 / Refined openings"
            }
          ]
        },
        {
          "name": "Manufacture",
          "heading": "Designed to be made, taken apart and maintained.",
          "blocks": [
            {
              "type": "heading",
              "text": "Design for manufacturing"
            },
            {
              "type": "paragraph",
              "text": "The team developed the enclosure around **a 2 mm shell, 3 mm internal supports and 1° draft**. Controlled wall thickness, radiused corners and continuous geometry were proposed to support injection moulding and part release."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/dfm-shell.jpeg",
              "alt": "Enclosure manufacturing study: wall thickness, radii and draft considered in CAD."
            },
            {
              "type": "heading",
              "text": "Design for disassembly"
            },
            {
              "type": "paragraph",
              "text": "The frame splits into two halves joined by **removable splice plates and M4 flat-head screws**. The outer bag is screwed to the frame so it can be removed for cleaning or replacement. Separate handle, fish-bag and electronics subassemblies provide access to individual parts."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/dfd-frame.jpeg",
              "alt": "Frame connection: removable splice plate and screw arrangement — team CAD study."
            },
            {
              "type": "paragraph",
              "text": "The **electronics enclosure is a removable module**, with predominantly M3 fixings and plug-in connections where maintenance is needed. The Peltier and heat sinks are thermally bonded as a cooling assembly, which is then secured into the housing with machine screws."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/dfd-electronics.jpeg",
              "alt": "Cooling assembly and enclosure: screw-mounted components and access for assembly — team CAD study."
            },
            {
              "type": "paragraph",
              "text": "These details describe the team’s **manufacturing and serviceability proposal**. Prototype assembly informed the design; production tooling and repeated disassembly testing would be later steps."
            }
          ]
        },
        {
          "name": "Electronics",
          "heading": "From circuit diagram to working prototype.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The electronics were developed as **two separate systems: water pumping and active cooling**. Building and testing them on the bench exposed the wiring, power and packaging needs before they were integrated into the enclosure."
            },
            {
              "type": "heading",
              "text": "The cooling circuit"
            },
            {
              "type": "paragraph",
              "text": "A **12 V battery powers the XY-T01 temperature controller, a TEC1-12703 Peltier module and two fans**. The probe provides temperature feedback; the controller’s relay switches the cooling assembly. Fans move air across the cold-side and hot-side heat sinks."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/circuit-cooling-4x.png",
              "alt": "Original cooling circuit: battery, temperature probe/controller, Peltier module and fans. Enlarge to inspect the wiring."
            },
            {
              "type": "workflow",
              "text": "Temperature-control sequence documented in the team report",
              "steps": [
                {
                  "title": "Set the target",
                  "text": "The user sets a target temperature on the XY-T01 controller."
                },
                {
                  "title": "Read the probe",
                  "text": "The temperature probe feeds the current reading back to the controller."
                },
                {
                  "title": "Switch on cooling",
                  "text": "The report describes activation at 1°C above the selected target; the relay switches the Peltier and fans."
                },
                {
                  "title": "Return and repeat",
                  "text": "The cooling assembly brings the reading towards the target while the controller continues monitoring."
                }
              ]
            },
            {
              "type": "heading",
              "text": "The pumping circuit"
            },
            {
              "type": "paragraph",
              "text": "An **ESP32-S reads load-cell feedback through an HX711 module** and controls the R320 pump through a relay. Buttons and a display support setting and checking the fill operation. This circuit manages water filling separately from the temperature-control loop."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/circuit-pumping-4x.png",
              "alt": "Original pumping circuit: ESP32-S, load-cell interface, buttons, display, relay and pump. Enlarge to inspect the connections."
            },
            {
              "type": "heading",
              "text": "Building and packaging the prototype"
            },
            {
              "type": "paragraph",
              "text": "The team assembled the controls and cooling hardware on the bench, then fitted the cooling unit into an insulated enclosure. These **original prototype photographs** show the physical wiring, heat sinks, fans and component packaging behind the concept."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/electronics-bench-prototype.png",
              "alt": "Bench integration of the controls and Peltier cooling hardware — original team prototype photograph."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/cooling-enclosure-integration.jpeg",
              "alt": "Cooling unit fitted inside the enclosure.",
              "comparison": "Cooling prototype packaging"
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/cooling-insulated-test-box.jpeg",
              "alt": "Insulated enclosure used during prototype testing.",
              "comparison": "Cooling prototype packaging"
            },
            {
              "type": "table",
              "text": "Prototype results and engineering estimates",
              "columns": [
                "Check",
                "Reported result",
                "What it establishes"
              ],
              "rows": [
                [
                  "Temperature response",
                  "25°C → 20°C in about 3 minutes",
                  "A sensor reading in the test setup; not a cooling rate for a fully loaded container."
                ],
                [
                  "Cooling endurance estimate",
                  "About 47 minutes continuously; about 4 hours at an assumed 20% duty cycle",
                  "Battery sizing calculation, not a measured all-day endurance result."
                ],
                [
                  "Pump-wire immersion",
                  "Approximately 0.5 m for 30 minutes",
                  "The isolated connection remained operational; this was not a whole-product weather-protection test."
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "The next iteration needed to improve **battery endurance, rain protection, charging convenience and carrying weight**, while retaining access for cleaning and repair."
            }
          ]
        },
        {
          "name": "Final design",
          "heading": "Set up, use and pack away.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The concept brings three individual fish bags together with a support frame, load-cell-controlled pumping, oxygen delivery and a cooling/control enclosure. The arrangement links the physical structure to the water and electronics systems while retaining access to the main components."
            },
            {
              "type": "workflow",
              "text": "Intended Aquatorium use sequence",
              "steps": [
                {
                  "title": "Load and organise",
                  "text": "Unfold the frame, fit the three individual fish bags and keep the controls accessible in the side compartment."
                },
                {
                  "title": "Fill and monitor",
                  "text": "Use the load-cell-based pumping system to fill a bag to the selected target, then monitor the cooling system through its controls."
                },
                {
                  "title": "Carry and pack away",
                  "text": "Use the folding handles for carrying; empty and dry the bags, then collapse the body for storage. The report records 22 L unfolded and 8 L folded."
                }
              ]
            },
            {
              "type": "paragraph",
              "text": "The final proposal brings together **separate fish storage, controlled water filling, oxygen delivery and active cooling** in a collapsible format. The renders below show the intended product arrangement and appearance; the preceding prototype work records what was built and tested."
            },
            {
              "type": "image",
                "src": "project-assets/aquatorium-final/final-open-render.png",
                "framing": "square-bottom",
              "alt": "Final concept visualisation — open configuration, with the bags, supporting frame and side controls visible."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/final-closed-render.png",
              "alt": "Final concept visualisation — closed configuration for carrying."
            },
            {
              "type": "image",
              "src": "project-assets/aquatorium-final/final-folded-render.png",
              "alt": "Final concept visualisation — folded configuration for storage."
            },
            {
              "type": "paragraph",
              "text": "Developed by **Joseph Wang, Joe Chen, Jason Wang and Peppe Aphiphunya**. Academic team project at Imperial College London."
            }
          ]
        }
      ]
    },
    s00Project,
    {
      "slug": "aircraft-seating",
      "title": "RE-seat",
      "company": "Academic design project",
      "year": "2025",
      "description": "Modular aircraft seating designed for repair and reuse.",
      "role": "Product & service design",
      "timeline": "2025",
      "team": "Individual concept · Team 12 research",
      "platform": "Physical product & service system",
      "subtitle": "Modular aircraft seating designed for repair and reuse.",
      "coverImage": "https://framerusercontent.com/images/FJCGBl9G1KzlCaqfbe0sbgyx6Lw.png",
      "heroImage": "https://framerusercontent.com/images/ANUUEObA7aLBpLZHYEAKgt9MpbA.png",
      "hoverImage": "https://framerusercontent.com/images/ANUUEObA7aLBpLZHYEAKgt9MpbA.png",
      "sections": [
        {
          "name": "Overview",
          "heading": "Keep the structure. Renew the parts.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "How could an aircraft seat accommodate changing passenger needs while making worn parts easier to replace? This concept separates the supporting frame from cushioning, electronics and accessories. The aim is to keep useful components in service, configure features for different flights and make repair part of the product’s everyday operation."
            },
            {
              "type": "paragraph",
              "text": "My individual submission brings together the seat concept, CAD, component architecture, proposed service system and environmental evaluation. The initial research was shared by Team 12: Ikem Enebeli, Aliza Mumtaz, Joseph Wang and Leila Ali. I also participated in the industry interview. The work shown here is a design proposal supported by research and modelling."
            }
          ]
        },
        {
          "name": "Research",
          "heading": "Understand what makes a seat hard to maintain.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Our group dismantled a legacy aircraft seat and mapped its parts, materials and joining methods. Buried fixings, rivets and adhesive-bonded materials made separation difficult or destructive. Removable upholstery offered a useful contrast: the connection made routine cleaning and replacement much more accessible."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/xk97DfwMbFIhXm3PEU6aqwaUUc.png",
              "alt": "Bonded materials exposed during Team 12’s teardown of the reference seat.",
              "text": "Bonded materials exposed during Team 12’s teardown of the reference seat."
            },
            {
              "type": "paragraph",
              "text": "We analysed five economy-flight review videos to build illustrative passenger personas and journey maps. These highlighted legroom, hygiene, stable tray tables and reachable power. A 40-minute interview with a cabin maintenance engineer added operational considerations around modularity, maintenance cost and safety."
            },
            {
              "type": "paragraph",
              "text": "Together, the findings framed the challenge: simplify access to parts without sacrificing the comfort and dependable functionality passengers expect. The group’s environmental comparisons also made mass during use a priority for the subsequent concept."
            }
          ]
        },
        {
          "name": "Development",
          "heading": "Turn research into a modular architecture.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "I translated the research into requirements for a base seat under 11 kg, reversible connections between different materials, replaceable accessories and two-, three- or four-seat configurations. Frequent replacement also made connector durability a central requirement. These were design targets to assess, rather than proven performance."
            },
            {
              "type": "paragraph",
              "text": "Early exploration divided the seat into three layers: the supporting frame, essential features and optional modules. This gave each component a purpose and a replacement route. It also exposed a tension: making features removable adds connections that must remain secure through repeated use."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/37jASjV69Eh93P4d6kFI8PiS0U.png",
              "alt": "Base frame",
              "text": "Base frame"
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/lJkCYCDk5Emcvdmuo9ffSAepqc.png",
              "alt": "Essential features",
              "text": "Essential features"
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/4dohcjSygKE9GvjBz3l7E4800U4.png",
              "alt": "Optional modules",
              "text": "Optional modules"
            },
            {
              "type": "paragraph",
              "text": "I used anthropometric references to guide dimensions and explored visible interaction cues for passengers and maintenance staff. The later review identified ergonomics and maintenance cues as areas needing further development."
            }
          ]
        },
        {
          "name": "Seat design",
          "heading": "Resolve the frame and the parts around it.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The aluminium frame uses I-section members and cross-shafts, with cushioning supported directly above them instead of a separate seat pan. Repeated components allow two-, three- and four-seat arrangements. That flexibility introduces additional side supports, a trade-off to weigh against the benefit of shared parts."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/FJCGBl9G1KzlCaqfbe0sbgyx6Lw.png",
              "alt": "Three-seat CAD configuration showing the proposed supporting frame.",
              "text": "Three-seat CAD configuration showing the proposed supporting frame."
            },
            {
              "type": "paragraph",
              "text": "I proposed removable expanded-polypropylene cushion cores with recycled-PET covers, a recycled carbon-fibre composite back and detachable aluminium armrests. Separating these parts was intended to support targeted replacement and material sorting. The material choices remained subject to performance and certification assessment."
            },
            {
              "type": "paragraph",
              "text": "Optional modules include a detachable screen or device holder and a tray that stores against the seat back. Electronics are grouped in the back to concentrate access for repair. These features explore how changing the fitted equipment could serve different journeys without redesigning the frame."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/ED0CYrQeC1xYNnpHPW9LVThfPE.png",
              "alt": "Removable headrest and backrest cushion modules, shown as CAD studies.",
              "text": "Removable headrest and backrest cushion modules, shown as CAD studies."
            }
          ]
        },
        {
          "name": "Service system",
          "heading": "Design the return route as well as the seat.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The service proposal connects feature selection before a flight with inspection and component replacement on the ground. Staff would log damaged or stained modules, remove them and fit prepared replacements. Returned parts would be cleaned, repaired or separated according to condition, then re-enter a shared pool."
            },
            {
              "type": "paragraph",
              "text": "Mapping this cycle made the operational dependencies visible. Spare-module availability, demand forecasting, storage and turnaround time would determine whether the system could work. Designing a detachable component was only one part of the task; the service also needed to deliver the right replacement when required."
            }
          ]
        },
        {
          "name": "Evaluation",
          "heading": "Use the model to guide the next prototype.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The project’s environmental comparison uses an estimated redesigned-seat mass of 10.4 kg against an 18 kg reference. Eco Audit and material-circularity analysis explored the implications of the proposed materials and component system. These are design estimates, not measurements from a built seat or an operational aircraft."
            },
            {
              "type": "paragraph",
              "text": "The work connected disassembly research to CAD and a proposed service cycle. Its next step would be a physical prototype to assess fit, comfort, replacement time and repeated connector use, followed by structural and certification assessment. The key lesson was that lighter components, maintainable connections and practical service logistics need to develop together."
            }
          ]
        }
      ]
    }
  ]
};

// Lead with robotics evidence while retaining the wider design-engineering work.
siteContent.projects.push(thermofluidsProject);
siteContent.projects.push(revivalSeries);
siteContent.projects.push(aiCadWorkflowProject);
siteContent.revivals = revivalProjects;
const projectOrder = ['s00', 'street-pulse', 'ai-cad-workflow', 'thermofluids', 'aircraft-seating', 'aquatorium', 'project-revival'];
siteContent.projects.sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug));
const cardSummaries = {
  s00: 'Component supports · Main-frame FEA · Camera mounts',
  'street-pulse': 'Electronics prototyping · Assembly and testing',
  'aircraft-seating': 'Modular seat concept · CAD and Eco Audit',
  aquatorium: 'Individual concepts · Team product development',
};
for (const project of siteContent.projects) {
  if (cardSummaries[project.slug]) project.cardSummary = cardSummaries[project.slug];
  // Preserve the user's 12 October choice of the original, static S00 assembly.
  if (project.slug === 's00') project.coverImage = project.heroImage;
  if (project.slug === 'aircraft-seating') {
    project.title = 'Re:Seat';
    project.hoverImage = project.coverImage;
    project.coverImage = 'project-assets/aircraft-seat/reseat-final-studio.png';
    project.coverAlt = 'Re:Seat modular aircraft-seat concept. AI-refined studio visualisation based on the project CAD, with inferred finishing details.';
    project.coverCaption = 'Concept visualisation · AI-refined from project CAD';
  }
}
