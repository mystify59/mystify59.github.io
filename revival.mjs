// Public copy migrated from the saved Project Revival pages.
// Rendered CAD, a printed first iteration and proposed systems are distinguished.
const media = 'project-assets/revival/';
const ghostCad = 'project-assets/ghost-v3/';

const anvilProgress = [
  {title: 'Translate the reference into CAD', text: 'The original Fusion model separates the game-inspired form into eleven components for a nonfunctional prop.', state: 'done', label: 'CAD recorded'},
  {title: 'Print the first full-scale iteration', text: 'The first iteration was printed in China and remains there. The images on this page show the CAD rather than photographs of that print.', state: 'done', label: 'First print confirmed'},
  {title: 'Continue the internal development', text: 'The internal arrangement and sound module remain unfinished. Later CAD studies explore the direction, but their physical operation is untested.', state: 'current'},
  {title: 'Check the assembled prop', text: 'Record fit, assembly, movement, durability and sound checks before describing the internal design as complete.', state: 'next'},
];

const ghostProgress = [
  {title: 'Define the companion and its systems', text: 'The documented plan separates a Destiny-inspired floating shell and lit eye from stationary computing and audio.', state: 'done', label: 'Research and plan recorded'},
  {title: 'Develop the proposed shell in CAD', text: 'The V3 Fusion proposal develops an eight-panel shell, a larger central cavity and a layered eye. The CAD and export checks were recorded on 28 October 2026.', state: 'done', label: 'Proposed CAD recorded'},
  {title: 'Resolve weight and assembly', text: 'Weight reduction, panel retention and core fasteners remain in development. Electronics access and the levitation attachment still need to be designed and checked.', state: 'current'},
  {title: 'Prototype and test in stages', text: 'Check stock levitation and a representative load, prove voice on the bench, then print and integrate the shell. No integrated prototype is demonstrated yet.', state: 'next'},
];

export const revivalSeries = {
  slug: 'project-revival',
  destination: '/project-revival/',
  kind: 'series',
  portfolioGroup: 'work-in-progress',
  status: 'Work in progress',
  title: 'Project Revival',
  company: 'Personal series',
  year: '2026',
  description: 'Bringing film and game objects into the physical world. A personal series of individual revivals, from reference and research to modelling, making and testing.',
  subtitle: 'Bringing film and game objects into the physical world.',
  role: 'CAD, component architecture & prototyping',
  timeline: '2026 · Ongoing',
  team: 'Personal project',
  platform: 'Film and game-inspired physical builds',
  cardSummary: 'Anvil: first print, internals in development · Ghost: proposed CAD in development',
  coverImage: media + 'anvil-assembled.png',
  heroImage: media + 'anvil-assembled.png',
  heroCaption: 'Anvil assembled CAD with a game-inspired finish. A visual study, not a photograph of the printed object.',
  children: ['anvil', 'ghost'],
  sections: [
    {
      name: 'The series',
      heading: 'Choose a revival. Follow its development.',
      blocks: [
        {type: 'paragraph', text: 'Project Revival is a personal series exploring how recognisable screen objects can become printable components and hands-on builds. Each revival follows its own path from reference and research to modelling, making and testing.'},
        {type: 'paragraph', text: 'My aim is to make complex builds accessible to younger makers and give them the experience of creating something substantial. This is the intended direction of the series; workshops and educational outcomes have not yet been delivered.'},
      ],
    },
    {
      name: 'Progress',
      heading: 'Two revivals, at different stages.',
      blocks: [
        {type: 'heading', text: 'Anvil · From CAD to a first print'},
        {type: 'progress', steps: anvilProgress},
        {type: 'heading', text: 'Ghost · From research to a proposed CAD model'},
        {type: 'progress', steps: ghostProgress},
      ],
    },
  ],
};

export const revivalProjects = [
  {
    slug: 'anvil',
    destination: '/project-revival/anvil/',
    seriesSlug: 'project-revival',
    backHref: '/project-revival/',
    backLabel: '← Project Revival',
    title: 'Anvil',
    company: 'Revival 01 · ARC Raiders',
    year: '2026',
    revivalNumber: 'Revival 01',
    reference: 'ARC Raiders',
    status: 'In development · Internals unfinished and untested',
    description: 'A full-scale nonfunctional prop developed through component modelling and printable architecture. A first iteration is printed; the internal arrangement and sound system still need completion and testing.',
    role: 'Original Fusion model, component architecture & build development',
    timeline: '2026 · Ongoing',
    team: 'Personal project',
    platform: 'CAD · 3D printing · Assembly',
    cardSummary: 'First iteration printed · Internal mechanism and sound still to complete and test',
    hasProductRender: true,
    coverImage: media + 'anvil-assembled.png',
    heroImage: media + 'anvil-assembled.png',
    heroCaption: 'Assembled CAD with a game-inspired finish. This is a visual study, not a photograph of the printed object.',
    sections: [
      {
        name: 'Progress',
        heading: 'A first print, with more development ahead.',
        blocks: [{type: 'progress', steps: anvilProgress}],
      },
      {
        name: 'Reference',
        heading: 'From reference to assembly.',
        blocks: [
          {type: 'paragraph', text: 'I developed the initial Fusion model and component architecture for a full-scale recreation of Anvil from ARC Raiders. The challenge was to translate the recognisable form into separate printable parts and an assembly that could be developed further.'},
          {type: 'paragraph', text: 'ARC Raiders provides the appearance reference. The component modelling and build development form my own personal project.'},
        ],
      },
      {
        name: 'Component architecture',
        heading: 'Give each component a place in the build.',
        blocks: [
          {type: 'paragraph', text: 'The original assembly contains eleven CAD components, including the outer barrel shroud, front sight, grip panels, chamber and centre shaft. The assembled and exploded views make their arrangement clear before physical fit checks.'},
          {type: 'image', src: media + 'anvil-exploded.png', alt: 'Exploded CAD render of the eleven original components, including the outer barrel shroud and front sight.'},
        ],
      },
      {
        name: 'First iteration',
        heading: 'The first full-scale iteration.',
        blocks: [
          {type: 'paragraph', text: 'The first iteration was printed at full scale in China. That print is still in China; the images shown here document the CAD design and its development rather than the physical print.'},
          {type: 'paragraph', text: 'The project remains in development until the internals are finished and tested. The first print establishes a physical iteration; fit, movement, assembly, durability and sound performance still need their own checks.'},
        ],
      },
      {
        name: 'Chamber prototype',
        heading: 'Developing the chamber.',
        blocks: [
          {type: 'paragraph', text: 'The chamber, shaft and support arrangement is a prototype direction. Printed fit and free movement remain to be evaluated.'},
          {type: 'image', src: media + 'anvil-chamber.png', alt: 'CAD render of the initial chamber, shaft and support arrangement. Physical fit and movement remain to be evaluated.'},
        ],
      },
      {
        name: 'Hollowing study',
        heading: 'A later hollowing study.',
        blocks: [
          {type: 'paragraph', text: 'A later CAD study explores retaining an outer shell, a central sleeve and a connecting web inside the decorative drum. This is separate from the sound plate and remains a CAD prototype.'},
          {type: 'paragraph', text: 'Later drum and acoustic development used Codex and Fusion assistance. The current visuals support design discussion; they do not establish printed-weight savings, sound performance or physical validation.'},
          {type: 'image', src: media + 'anvil-hollowing-study.png', alt: 'Decorative-drum hollowing study retaining the outer shell and central sleeve. CAD prototype.'},
        ],
      },
      {
        name: 'Next steps',
        heading: 'What comes next.',
        blocks: [
          {type: 'paragraph', text: 'Check the printed parts for fit and assembly, evaluate chamber movement, and continue sound-module prototyping. The longer-term aim is to turn a complex reference-led build into a clear making experience.'},
        ],
      },
    ],
  },
  {
    slug: 'ghost',
    destination: '/project-revival/ghost/',
    seriesSlug: 'project-revival',
    backHref: '/project-revival/',
    backLabel: '← Project Revival',
    title: 'Ghost',
    company: 'Revival 02 · Destiny 2',
    year: '2026',
    revivalNumber: 'Revival 02',
    reference: 'Destiny 2',
    status: 'Proposed CAD · In development',
    description: 'A proposed hovering desk companion with a lit eye and spoken conversation. The V3 shell study turns the system plan into an eight-panel CAD model, with weight reduction and assembly development still ahead.',
    role: 'Design direction, system planning & AI-assisted Fusion CAD',
    timeline: 'Ongoing · V3 CAD recorded 28 October 2026',
    team: 'Personal project',
    platform: 'Fusion CAD · Physical computing · Product development',
    cardSummary: 'Eight-panel shell proposal · Weight and assembly in development',
    hasProductRender: true,
    coverFit: 'contain',
    coverImage: ghostCad + 'ghost-v3-isometric.png',
    coverAlt: 'Fusion CAD view of the proposed V3 Ghost shell and layered eye. In development.',
    heroImage: ghostCad + 'ghost-v3-isometric.png',
    heroCaption: 'Proposed V3 shell in Fusion, recorded 28 October 2026. User-directed, AI-assisted CAD development; this is a model view, not a built or levitating prototype.',
    sections: [
      {
        name: 'Progress',
        heading: 'From a system plan to a shell proposal.',
        blocks: [{type: 'progress', steps: ghostProgress}],
      },
      {
        name: 'Direction',
        heading: 'Define the companion before building it.',
        blocks: [
          {type: 'paragraph', text: 'The second project in Project Revival explores a Destiny-inspired companion with physical presence, a lit eye and spoken conversation. The system research now has a proposed shell model alongside the staged plan for prototyping and validation.'},
          {type: 'paragraph', text: 'I directed the design and revisions, using Codex and Fusion MCP assistance to develop the CAD. Destiny 2 by Bungie provides the appearance reference. Independent operation remains the preferred direction, with wireless processing as an alternative.'},
        ],
      },
      {
        name: 'Proposed CAD',
        heading: 'A fuller shell, with more room at the centre.',
        blocks: [
          {type: 'paragraph', text: 'The **V3 proposal** retains the eight folded panels, recessed channels, gold tips and layered eye, while increasing wall thickness and enlarging the central cavity. The focus is the shell and its internal space; this revision does not add motors or servo pockets.'},
          {type: 'image', src: ghostCad + 'ghost-v3-front.png', alt: 'Eye-facing CAD view of the proposed V3 shell: folded panels, recessed details and layered central eye.', comparison: 'V3 shell CAD views'},
          {type: 'image', src: ghostCad + 'ghost-v3-side.png', alt: 'Side CAD view showing the panel depth, separation and central core. Panel attachment is still to be resolved.', comparison: 'V3 shell CAD views'},
          {type: 'table', text: 'V3 design changes and recorded geometry', columns: ['Design detail', 'Proposed V3 model'], rows: [
            ['Panel wall thickness', 'Increased from 1.2 mm to 1.8 mm'],
            ['Central core diameter', 'Increased from 46 mm to 54 mm'],
            ['Overall envelope', 'Approximately 133 × 133 × 95 mm'],
            ['Model structure', '31 solid bodies forming the panels, core, eye and trim'],
          ]},
          {type: 'paragraph', text: 'The saved export checks record **31 watertight STL meshes and 31 STEP solids**. These confirm the exported geometry, while print tolerances, panel retention, assembly and physical performance still need their own checks.'},
          {type: 'takeaway', text: '**Weight is the next design constraint.** The CAD-volume estimate is approximately 89 g in PLA before electronics and attachment hardware; it is not a measured print. The shell needs further weight and attachment development before a levitation trial.'},
        ],
      },
      {
        name: 'System architecture',
        heading: 'Separate the systems.',
        blocks: [
          {type: 'paragraph', text: 'The initial plan keeps the stock levitation pedestal separate from a stationary compute and audio pod. The floating assembly carries the lightweight shell and stock lighting; chatbot software does not control levitation.'},
          {type: 'image', src: media + 'ghost-module-relationships.png', alt: 'Proposed system architecture. The voice pipeline and levitation controller remain independent; the wireless path is an alternative.'},
        ],
      },
      {
        name: 'Voice experience',
        heading: 'Plan the voice experience.',
        blocks: [
          {type: 'paragraph', text: 'The researched local voice pipeline connects speech recognition, a conversational model and speech synthesis. Press-to-talk, microphone mute and cancellation are included in the initial plan.'},
        ],
      },
      {
        name: 'Build plan',
        heading: 'Prototype in stages.',
        blocks: [
          {type: 'paragraph', text: 'The next stage is to reduce shell mass and resolve its attachments, check stock levitation with a representative load, and prove the voice pipeline on the bench. Fit coupons, shell printing and progressive integration follow those checks.'},
        ],
      },
      {
        name: 'Validation',
        heading: 'What needs validating.',
        blocks: [
          {type: 'paragraph', text: 'Panel retention, core fasteners, print clearances and electronics access remain unresolved. Payload balance, heat, nearby magnetic components, microphone noise and response delay also need physical checks. No print, strength, electrical or levitation test results are recorded for V3.'},
        ],
      },
      {
        name: 'Current status',
        heading: 'CAD proposed. Physical integration still ahead.',
        blocks: [
          {type: 'paragraph', text: 'The V3 shell and its geometry checks are documented. Weight reduction, attachments, the exact computer and reactive-eye implementation remain open. A working integrated prototype has not been demonstrated.'},
        ],
      },
    ],
  },
];
