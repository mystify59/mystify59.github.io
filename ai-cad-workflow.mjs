// Personal tool-development case. Source records and private provenance are kept
// in careers/portfolio/ai-cad-workflow-2026-10-21, outside this public repository.
const media = 'project-assets/ai-cad-workflow/';

export const aiCadWorkflowProject = {
  slug: 'ai-cad-workflow',
  title: 'Humanoid Design',
  company: 'Personal tool development',
  year: '2026',
  description: 'A reusable Codex skill for taking mechanical design briefs into native CAD, with explicit design intent, capability checks and evidence of what the model actually contains.',
  role: 'Workflow design, iteration & Fusion trials with Codex',
  timeline: 'August 2026–ongoing',
  team: 'Personal project · AI-assisted development',
  platform: 'Codex skills · MCP · Autodesk Fusion',
  status: 'In development',
  cardSummary: 'AI-assisted CAD skill · Design intent and verification',
  coverImage: 'project-assets/humanoid-design/humanoid-design-cover.png',
  heroImage: media + 'fusion-examples-03.png',
  coverFit: 'contain',
  coverAlt: 'Humanoid Design — a blue articulated humanoid and H monogram. AI-assisted CAD skill.',
  heroCaption: 'Original Fusion viewport, 3 September 2026: nine test parts alongside two earlier mounting studies. Geometry examples used to develop the workflow; not manufactured or structurally validated parts.',
  sections: [
    {
      name: 'Purpose',
      heading: 'Make the design intent checkable.',
      blocks: [
        {type: 'paragraph', text: 'A CAD command can report success while creating the wrong envelope, acting on an outdated body reference, or leaving geometry behind after a failed operation. I wanted an AI-assisted workflow that could explain what it intended to build and check the resulting model before continuing.'},
        {type: 'paragraph', text: 'Humanoid Design is the project identity for the humanoid-cad-simulation skill I developed with Codex. I shaped its engineering questions, review rules and iteration criteria through mechanical examples. The scope grew from humanoid structures to parts and assemblies more broadly. This is a personal tool-development project, separate from the S00 internship work.'},
      ],
    },
    {
      name: 'Workflow',
      heading: 'A brief-to-CAD loop with evidence at each step.',
      blocks: [
        {type: 'workflow', steps: [
          {title: 'Define the brief', text: 'Record the function, interfaces, units, constraints and intended decision. Separate known inputs from assumptions and missing information.'},
          {title: 'Plan against available tools', text: 'Inspect the active document and live MCP capabilities. Check that each operation and its dependent steps can be executed and inspected.'},
          {title: 'Build within the agreed scope', text: 'Use native sketches, features, bodies or components at the level of detail the task needs. Preserve unrelated work and keep a recovery route.'},
          {title: 'Inspect, compare and revise', text: 'Compare the intended dimensions and state with measured geometry. Re-identify changed entities, inspect failures and report unresolved limits.'},
        ]},
        {type: 'paragraph', text: 'The level of checking follows the engineering decision. An envelope study needs different evidence from a load-bearing connection. Geometry-only work does not trigger a full simulation setup; a structural claim does require its own loads, materials, connections and acceptance criteria.'},
      ],
    },
    {
      name: 'Technical summary',
      heading: 'Separate engineering intent from CAD execution.',
      blocks: [
        {type: 'table', text: 'Technical structure of the workflow', columns: ['Layer', 'What it records or does'], rows: [
          ['Engineering record', 'Units, coordinate frames, interfaces, requirements, consequence, modelling fidelity, assumptions and evidence. Native entity IDs stay in application-specific mappings.'],
          ['Codex skill', 'Guides intake, design decisions, capability planning, human review and the choice of evidence needed before continuing.'],
          ['MCP adapters', 'Map the requested operations to the connected application. Fusion was exercised in native trials; SOLIDWORKS and Ansys have adapter guidance, without demonstrated live solves in this case study.'],
          ['Fusion bridge extensions', 'Local extensions to an existing third-party MCP implementation add typed construction-plane references, targeted body/edge queries, selection evidence and material/state reporting.'],
          ['Verification and recovery', 'Check bounding boxes, topology, parameter response and failure residue. Report a verified volume separately from mass when the assigned material is not established.'],
        ]},
        {type: 'paragraph', text: 'One useful distinction was between naming a parameter and proving that it drives a feature. Another was between a readable body name and the operative reference valid for the current topology. Those distinctions changed how the workflow selected entities, handled edits and justified its final report.'},
      ],
    },
    {
      name: 'Fusion examples',
      heading: 'Test the workflow on different kinds of geometry.',
      blocks: [
        {type: 'paragraph', text: 'These retained Fusion views show the earlier part trials that informed the workflow. The models exercised mounting features, openings, drafted forms and cosmetic edge treatments. They are development examples; the later integration results below are a separate, bounded test pass.'},
        {type: 'heading', text: 'Clamps, spacers and mounting feet'},
        {type: 'image', src: media + 'fusion-examples-01.png', alt: 'First additions, left to right after the two earlier mounts: cable-clamp plate, bearing spacer and sensor foot. Original Fusion viewport; fit and physical performance were not established.'},
        {type: 'paragraph', text: 'The sensor foot remained a conditional concept result: its basic geometry was checked, while washer and tool access, manufacturing intent and load performance still needed review.'},
        {type: 'heading', text: 'Flanges, mounting frames and a guide'},
        {type: 'image', src: media + 'fusion-examples-02.png', alt: 'The next three additions are at the right: servo flange, an open electronics mounting frame and tapered cable fairlead. Earlier studies remain visible to the left.'},
        {type: 'paragraph', text: 'The fairlead exposed a useful capability gap. The intended offset-plane-to-sketch chain was blocked by the tool schema, so this early example used a drafted extrusion as a limited fallback. A later bridge change enabled the loft chain tested in the September integration pass.'},
        {type: 'heading', text: 'Covers, links and cable supports'},
        {type: 'image', src: media + 'fusion-examples-03.png', alt: 'Final three additions at the right: rounded cover, twin-eye link and cable saddle. The cumulative native view shows all nine test parts and the two earlier mounting studies.'},
        {type: 'paragraph', text: 'The early twin-eye link deliberately omitted structural transition fillets because individual edges could not yet be enumerated safely. That limitation drove the later selective-edge work. Rounded exterior edges on the cover and saddle are cosmetic details, not proof of structural performance.'},
      ],
    },
    {
      name: 'Evidence',
      heading: 'Check the resulting model, not just the tool response.',
      blocks: [
        {type: 'paragraph', text: 'The recorded 4 September 2026 integration pass completed 19 checks with zero failures in Autodesk Fusion. A separate static test suite recorded 39 passing tests for the bridge changes. The live pass used a temporary scratch document and checked that the original empty document was restored afterwards.'},
        {type: 'table', text: 'Selected observations from the bounded Fusion integration pass', columns: ['Check', 'Observed result'], rows: [
          ['Construction-plane chain', 'An offset-plane reference was accepted by the next sketch operation and used in a completed loft.'],
          ['Selective fillet', 'One enumerated edge on a twin-eye link received a 2 mm radius, with resolved-selection and post-operation evidence.'],
          ['Repeated holes', 'Two 12 mm eye holes were cut. Targeted queries retained the body identity while its edge count changed from 12 to 16.'],
          ['Parametric response', 'Changing a feature-driving extrusion parameter changed the measured body height from 10.0 mm to 18.0 mm.'],
          ['Material-aware properties', 'A body-specific query identified Steel at 7.85 g/cm³ and reported 70.5407 g for that test body.'],
          ['Failure and cleanup', 'A deliberately invalid edge selection was refused with unchanged before/after state. The scratch document was closed without saving.'],
        ]},
        {type: 'paragraph', text: 'These results demonstrate CAD execution and inspection for the tested operations. They do not establish structural strength, fatigue life, manufacturability or certification. The scratch geometry was discarded after the pass; the retained example images above come from the earlier development trials.'},
      ],
    },
    {
      name: 'In development',
      heading: 'Extend the scope, then test it in the application.',
      blocks: [
        {type: 'paragraph', text: 'The retained Fusion examples and September integration pass establish a starting point. The next strands of work are at different stages; the earlier checks do not validate these newer extensions.'},
        {type: 'table', text: 'Current development strands', columns: ['Strand', 'Current state and next check'], rows: [
          ['Broader mechanical briefs', 'Guidance drafted for enclosures, fixtures and linkages. The written scenarios still need evaluation in native applications.'],
          ['Assembly and thread control', 'A separate, unreleased bridge extension adds explicit component targeting, thread designation and handedness, with feature readback. Native acceptance checks are still outstanding.'],
          ['Independent reliability evaluation', 'Planned comparisons on unfamiliar briefs, using independent runs and a consistent baseline to assess completion, recovery and unnecessary tool calls.'],
        ]},
      ],
    },
    {
      name: 'Reflection',
      heading: 'Let failures improve the next instruction.',
      blocks: [
        {type: 'paragraph', text: 'Across five documented iterations, the work moved from a general engineering checklist to more specific rules for coordinate checks, capability gaps, topology changes and recovery. The most useful feedback came from failures in the native application: a rejected plane reference or ambiguous cleanup could be traced to a concrete change in the skill or bridge.'},
        {type: 'paragraph', text: 'The existing record supports a working research prototype. A useful workflow has to make the model and its limits inspectable; a percentage time-saving claim or unattended engineering approval would require further evidence.'},
      ],
    },
  ],
};
