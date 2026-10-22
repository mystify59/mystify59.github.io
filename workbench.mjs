// Personal software prototype. Private provenance lives in
// careers/portfolio/humanoid-design-2026-10-22/workbench-evidence.md.
const demoImage = 'project-assets/workbench/workbench-demo.png';

export const workbenchProject = {
  slug: 'codex-workbench',
  title: 'Codex Workbench',
  company: 'Personal software project',
  year: '2026',
  description: 'A local workspace that makes AI-assisted work easier to follow, connect and review.',
  role: 'Product and workflow design · AI-assisted implementation',
  timeline: '2026–ongoing',
  team: 'Personal project · Developed with Codex',
  platform: 'React · TypeScript · Electron · Node.js · SQLite',
  status: 'In development',
  cardSummary: 'Task relationships · Visible progress · Source evidence',
  coverImage: demoImage,
  heroImage: demoImage,
  coverFit: 'contain',
  coverAlt: 'Codex Workbench interface with demonstration tasks, dependency arrows and a task inspector.',
  heroCaption: 'Workbench interface using demonstration tasks. The sample gripper project illustrates the interface; it does not show live robot design or CAD operations.',
  sections: [
    {
      name: 'Purpose',
      heading: 'Keep the work visible as it develops.',
      blocks: [
        {type: 'paragraph', text: 'Coding, research and design tasks often depend on one another. I wanted a workspace that shows those relationships, what an agent is doing, and which results still need review. I directed the product and workflow design and developed the prototype with Codex.'},
        {type: 'paragraph', text: 'The result is a **working local prototype** around the installed Codex runtime, with a task graph, live activity and persistent project state.'},
      ],
    },
    {
      name: 'Workflow',
      heading: 'Connect tasks. Inspect progress. Review the result.',
      blocks: [
        {type: 'workflow', steps: [
          {title: 'Define the task', text: 'Choose a project folder, write the brief and select relevant source material.'},
          {title: 'Connect related work', text: 'Use prerequisite arrows to hold dependent tasks until their upstream results are accepted.'},
          {title: 'Follow the activity', text: 'Inspect current operations, timestamped events, conversation and checkpoint progress.'},
          {title: 'Review and accept', text: 'Check outputs and verify checkpoints. Agent-reported completion stays separate from user acceptance.'},
        ]},
      ],
    },
    {
      name: 'Source evidence',
      heading: 'Make the supplied context inspectable.',
      blocks: [
        {type: 'paragraph', text: 'Each task selects eligible files and saved research excerpts. **SQLite FTS5 lexical retrieval** finds matching passages; the Sources panel exposes their exact text, line ranges, revisions and delivery status.'},
        {type: 'paragraph', text: 'Files are checked again for each run, and earlier evidence snapshots remain available. This records what Workbench supplied to Codex; it does not prove that the model relied on every passage.'},
      ],
    },
    {
      name: 'Technical approach',
      heading: 'Separate the interface, task state and execution.',
      blocks: [
        {type: 'table', text: 'Prototype structure', columns: ['Layer', 'Responsibility'], rows: [
          ['React / TypeScript', 'Task graph, list, activity inspector and review controls.'],
          ['Node.js / SQLite', 'Task rules, local persistence and source-evidence records.'],
          ['Electron / Codex App Server', 'Desktop window and connection to the installed execution runtime.'],
        ]},
      ],
    },
    {
      name: 'Current state',
      heading: 'A working prototype, with clear next steps.',
      blocks: [
        {type: 'paragraph', text: 'Recorded checks cover real Codex execution, dependency gating, source retrieval and revision history, browser interaction and the Electron application. **One live task turn runs at a time.** Native Fusion and Blender operations have not been validated through this interface.'},
        {type: 'paragraph', text: 'Further development includes source-retention controls, broader document support and a distributable installer. Parallel scheduling remains future work; the current emphasis is inspectable execution and review.'},
      ],
    },
  ],
};
