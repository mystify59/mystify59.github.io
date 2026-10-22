// Personal software prototype. Private provenance lives in
// careers/portfolio/work-in-progress-2026-10-22/workbench-evidence.md.
const demoImage = 'project-assets/workbench/workbench-demo.png';

export const workbenchProject = {
  slug: 'codex-workbench',
  title: 'Personal Workbench',
  company: 'Personal software project',
  year: '2026',
  description: 'A local workspace that makes AI-assisted work easier to follow, connect and review.',
  role: 'Product and workflow design · AI-assisted implementation',
  timeline: '2026–ongoing',
  team: 'Personal project · Developed with Codex',
  platform: 'React · TypeScript · Electron · Node.js · SQLite',
  status: 'Work in progress',
  portfolioGroup: 'work-in-progress',
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
        {type: 'paragraph', text: 'I wanted a workspace that shows how coding, research and design tasks connect, what an agent is doing, and which results need review. I directed the product and workflow design and developed the prototype with Codex.'},
        {type: 'paragraph', text: 'The result is a **working local prototype** around the installed Codex runtime, with a task graph, live activity and persistent project state.'},
      ],
    },
    {
      name: 'Progress',
      heading: 'From connected tasks to inspectable evidence.',
      blocks: [
        {type: 'paragraph', text: 'The stages below separate the prototype already demonstrated from the work still planned. Recorded checks date from **19 October 2026**.'},
        {type: 'progress', steps: [
          {title: 'Shape the workspace', text: 'Task graph, list and inspector, with prerequisite links and persistent project state.', state: 'done'},
          {title: 'Connect execution and review', text: 'Real Codex runs, activity and checkpoint acceptance checked. The Electron interface was also inspected.', state: 'done'},
          {title: 'Make source context visible', text: 'Selected-source retrieval, exact evidence, revision changes and restart persistence demonstrated with controlled fixtures.', state: 'done'},
          {title: 'Evaluate broader project use', text: 'Next: real-question retrieval evaluation, source/history deletion controls and native application checks.', state: 'next'},
          {title: 'Prepare distribution', text: 'Later: installer and update handling. Parallel scheduling depends on validated resource ownership and recovery.', state: 'next', label: 'Later'},
        ]},
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
      name: 'Current state',
      heading: 'Separate the interface, task state and execution.',
      blocks: [
        {type: 'table', text: 'Prototype structure', columns: ['Layer', 'Responsibility'], rows: [
          ['React / TypeScript', 'Task graph, list, activity inspector and review controls.'],
          ['Node.js / SQLite', 'Task rules, local persistence and source-evidence records.'],
          ['Electron / Codex App Server', 'Desktop window and connection to the installed execution runtime.'],
        ]},
        {type: 'paragraph', text: '**One live task turn runs at a time.** Native Fusion and Blender operations have not been validated through this interface. The demonstration image illustrates the UI; the recorded execution and retrieval checks used separate controlled tasks.'},
      ],
    },
  ],
};
