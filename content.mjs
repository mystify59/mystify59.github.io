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
              "text": "Aquatorium is a collapsible live-fish transport concept for backcountry anglers moving between hiking and fishing. The challenge was to carry and manage the catch without making an already full equipment load harder to handle. The concept combines three individual fish bags, oxygen delivery and cooling within a folding support frame."
            },
            {
              "type": "paragraph",
              "text": "My individual Phase 1 work explored six concepts for supporting the transition between activities, including a floating hydro-generator. The later Aquatorium frame, enclosure prototypes, component layouts and manufacturing study are presented as the team’s development work."
            },
            {
              "type": "heading",
              "text": "Four interviews, two connected activities"
            },
            {
              "type": "paragraph",
              "text": "Our initial research brought together interviews with two experienced hikers and two anglers. We organised quoted evidence into pain points and emerging insights, then compared equipment inventories, existing products, personas and the stages of a trip."
            },
            {
              "type": "heading",
              "text": "Turning findings into design priorities"
            },
            {
              "type": "paragraph",
              "text": "Weight and pack space: adding fishing equipment compounds an already full hiking load. Any new function needed to justify its mass and bulk."
            },
            {
              "type": "paragraph",
              "text": "Access during use: buried tools, repeated unpacking and wet or dirty hands made simple tasks awkward. We prioritised predictable access and straightforward handling."
            },
            {
              "type": "paragraph",
              "text": "Confidence away from help: power limitations, equipment failure and improvised fixes raised reliability concerns. Modularity, protection and repair access became recurring requirements."
            },
            {
              "type": "heading",
              "text": "Mapping the whole trip"
            },
            {
              "type": "paragraph",
              "text": "We used three illustrative personas and a journey map to compare hiking, fishing and the combined experience. The synthesis highlighted repeated changes between walking, setting up, handling equipment and carrying the catch."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/qE9xt8WsdWPaHq8HLMqqWzEeM.png",
              "alt": "Part 1: illustrative personas and a journey map synthesising the team’s research.",
              "text": "Part 1: illustrative personas and a journey map synthesising the team’s research."
            },
            {
              "type": "paragraph",
              "text": "Our product benchmarking compared quick-access storage, folding structures, compact powered equipment and outdoor reliability. It suggested that existing products addressed individual needs, while the transition between hiking and fishing remained a useful focus for design."
            },
            {
              "type": "heading",
              "text": "The question that focused the project"
            },
            {
              "type": "paragraph",
              "text": "How might we support backcountry anglers during the transition between hiking and fishing?"
            }
          ]
        },
        {
          "name": "Concepts",
          "heading": "Exploring alternatives, then choosing a direction.",
          "blocks": [
            {
              "type": "heading",
              "text": "My initial direction: using downtime to support the next activity"
            },
            {
              "type": "paragraph",
              "text": "My individual Phase 1 work explored six concepts for support across hiking and fishing, including a floating hydro-generator. Survey feedback and a follow-up interview supported developing that direction. Feedback about still or slow-moving water raised questions about flow conditions and possible wind generation."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/6ESlahrWPuexcJs5TYKQatAMywM.jpg",
              "alt": "My early floating hydro-generator concept — Phase 1.",
              "text": "My early floating hydro-generator concept — Phase 1."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/YSUa2Qz0ALMttGBeL5JWBjnyE.jpg",
              "alt": "Joe Chen’s early dual-chamber catch-bag concept — Phase 1.",
              "text": "Joe Chen’s early dual-chamber catch-bag concept — Phase 1."
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
              "type": "heading",
              "text": "Why the project changed direction"
            },
            {
              "type": "paragraph",
              "text": "During later team prototyping, the turbine’s output proved too low to justify its size and weight. The team moved towards Aquatorium: a collapsible fish-transport concept with oxygen delivery and cooling. Portability, access and reliability remained criteria to test throughout development."
            },
            {
              "type": "heading",
              "text": "The integrated system"
            },
            {
              "type": "paragraph",
              "text": "The concept brings three individual fish bags together with a support frame, load-cell-controlled pumping, oxygen delivery and a cooling/control enclosure. The arrangement links the physical structure to the water and electronics systems while retaining access to the main components."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/PSPqKfbFw5INA4jg55QGDocSNh8.png",
              "alt": "Concept visualisations from the team’s project materials.",
              "text": "Concept visualisations from the team’s project materials."
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
          "heading": "Designed for assembly and replacement.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The manufacturing study considered a 2 mm enclosure shell, 3 mm support walls and 1° draft, alongside fillets and continuous geometry for moulding."
            },
            {
              "type": "paragraph",
              "text": "Separate frame, handle, bag and electronics subassemblies were proposed to improve build access. Splice plates and screws join the frame, while removable bags and electronics modules support cleaning and replacement."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/yE8l8wXzTMdaSAV4YWIUDBQvbs.jpg",
              "alt": "Enclosure CAD from the team’s manufacturing study.",
              "text": "Enclosure CAD from the team’s manufacturing study."
            },
            {
              "type": "image",
              "src": "https://framerusercontent.com/images/bcgSxh7in5p8tSIsvEs8hXvNRc.jpg",
              "alt": "Frame joint and fastening study.",
              "text": "Frame joint and fastening study."
            },
            {
              "type": "paragraph",
              "text": "These are proposed manufacturing details, rather than evidence of production tooling or certification. Removable modules and standard fixings were considered to support cleaning, repair and replacement."
            }
          ]
        },
        {
          "name": "Testing",
          "heading": "What the prototype demonstrated.",
          "blocks": [
            {
              "type": "heading",
              "text": "About 4 hours of cooling"
            },
            {
              "type": "paragraph",
              "text": "The team report records around four hours of cooling runtime for the tested prototype. Endurance remained below the intended use case."
            },
            {
              "type": "heading",
              "text": "22 L unfolded → 8 L folded"
            },
            {
              "type": "paragraph",
              "text": "The reported unfolded and folded volumes demonstrate the packaging direction. These values describe the prototype evaluated in the project."
            },
            {
              "type": "heading",
              "text": "Temperature and connection tests"
            },
            {
              "type": "paragraph",
              "text": "The report records a temperature reading falling from 25°C to 20°C in about three minutes in the test setup. This is a reported sensor reading, not a demonstrated cooling rate for a fully loaded container."
            },
            {
              "type": "paragraph",
              "text": "An isolated pump-wire connection remained operational during an immersion test at approximately 0.5 m for 30 minutes. Whole-product weather protection still required development."
            }
          ]
        },
        {
          "name": "Next steps",
          "heading": "Portability and access.",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Reducing the frame from four bays to three created more room for electronics and improved access. The enclosure iterations reinforced the same lesson: component layout, handling and assembly needed to develop together."
            },
            {
              "type": "paragraph",
              "text": "Battery endurance, rain protection, charging convenience and carrying weight remained priorities for the next iteration. Further work would need to address these constraints while preserving access for cleaning, repair and replacement."
            },
            {
              "type": "heading",
              "text": "Team credit"
            },
            {
              "type": "paragraph",
              "text": "Developed by Joseph Wang, Joe Chen, Jason Wang and Peppe Aphiphunya. Academic team project at Imperial College London."
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
