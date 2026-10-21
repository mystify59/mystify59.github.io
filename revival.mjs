// Public copy migrated from the saved Project Revival pages.
// Rendered CAD, a printed first iteration and proposed systems are distinguished.
const media = 'project-assets/revival/';

export const revivalSeries = {
  slug: 'project-revival',
  destination: '/project-revival/',
  kind: 'series',
  title: 'Project Revival',
  company: 'Personal series',
  year: '2026',
  description: 'Bringing film and game objects into the physical world. A personal series of individual revivals, from reference and research to modelling, making and testing.',
  subtitle: 'Bringing film and game objects into the physical world.',
  role: 'CAD, component architecture & prototyping',
  timeline: '2026 · Ongoing',
  team: 'Personal project',
  platform: 'Film and game-inspired physical builds',
  cardSummary: 'Anvil · In development; Ghost · Research and planning',
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
    description: 'A full-scale recreation developed through component modelling and printable architecture. A first iteration is printed; the internal mechanism and sound system still need completion and testing.',
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
    status: 'Research & planning · In development',
    description: 'An early design study for a hovering desk companion with a lit eye and spoken conversation. The current work defines the architecture and staged build plan.',
    role: 'Research, system architecture & build planning',
    timeline: 'In development · Plan documented 11 October 2026',
    team: 'Personal project',
    platform: 'Physical computing · Product development',
    cardSummary: 'Research and system planning · In development',
    hasProductRender: false,
    coverType: 'typographic',
    coverImage: media + 'ghost-development.svg',
    heroImage: media + 'ghost-development.svg',
    heroCaption: 'Research and system planning. No finished-product render or integrated prototype is shown.',
    sections: [
      {
        name: 'Direction',
        heading: 'Define the companion before building it.',
        blocks: [
          {type: 'paragraph', text: 'The second project in Project Revival explores a Destiny-inspired companion with physical presence, a lit eye and spoken conversation. The current work defines a proposed architecture, researches candidate components and sets out a staged plan for prototyping and validation.'},
          {type: 'paragraph', text: 'Independent operation is preferred, with wireless processing retained as an alternative. Destiny 2 provides the appearance reference; this page documents the proposed build direction.'},
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
          {type: 'paragraph', text: 'The build plan starts by checking stock levitation and a representative load, then proving the voice pipeline on the bench. Shell printing and progressive integration follow those checks.'},
        ],
      },
      {
        name: 'Validation',
        heading: 'What needs validating.',
        blocks: [
          {type: 'paragraph', text: 'Payload balance, heat, nearby magnetic components, microphone noise and response delay are identified as design risks. Acceptance targets are defined; test results are not yet available.'},
        ],
      },
      {
        name: 'Current status',
        heading: 'Research and build planning are documented.',
        blocks: [
          {type: 'paragraph', text: 'The exact computer, final enclosure and reactive-eye implementation remain open decisions. A working integrated prototype has not been demonstrated.'},
        ],
      },
    ],
  },
];
