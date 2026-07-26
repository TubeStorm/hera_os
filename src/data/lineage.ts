// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the Lineage page ("The Long Build") and every
// demo video on the site. To swap a video: change `video` here. To fill a
// missing asset: set `video` (or `image`) and delete `missing`.
//
// `missing` is the plain text shown inside a static blank placeholder — it
// names exactly which asset still has to be captured. No UI theatre.
// ─────────────────────────────────────────────────────────────────────────────

export type LineageTier = 'featured' | 'ancestor' | 'experiment' | 'range';

export type LineageProject = {
  id: string;
  title: string;
  /** one-word thread this project proves (context / behavior / interface …) */
  thread: string;
  /** date range or build date, always shown as meta, never as ordering */
  date: string;
  /** short factual meta line: platform + the one build fact that matters */
  meta: string;
  /** 1–2 letters for the generated 1:1 monogram tile */
  mark: string;
  tier: LineageTier;
  /** path under public/ when a real capture exists */
  video?: string;
  image?: string;
  /** what asset belongs here when none exists yet */
  missing?: string;
  problem: string;
  rejected: string;
  built: string;
  inherited: string;
  /** honest completion status — always shown */
  status: string;
  /** extra panels revealed by the featured carousel (top three only) */
  more?: { title: string; body: string }[];
};

export const lineage: LineageProject[] = [
  // ── The three that lead straight to HERA ───────────────────────────────────
  {
    id: 'handoff',
    title: 'Handoff',
    thread: 'context',
    date: 'April 2026',
    meta: 'Chrome extension · plain JavaScript, no frameworks · built in one week',
    mark: 'H',
    tier: 'featured',
    video: 'videos/handoff.mp4',
    problem:
      'Knowledge workers lose context when they switch between tasks. The web browser worsens this by treating all tabs as equal and failing to save your place when you close them. Because it acts as a neutral surface, the browser forces users to remember where they left off. Productivity applications live entirely outside the browser, requiring further context switching to manage tasks. I noticed that existing tab managers fail because they assume users must manually adapt their habits to the software. They miss the fact that ongoing work requires continuous context, leaving the burden of memory entirely on the user.',
    rejected:
      'Instead of treating the browser as an open window, I realized it needed to take an active role. I also moved away from the traditional checklist model that asks "did you finish?" at the end of a task. That is the wrong question because it ignores the reality of ongoing work. A productivity tool must take responsibility for context management, which means it should ask "where are you going next?". Finally, I abandoned the idea that building a fast, functional extension required a complicated setup.',
    built:
      'I built Handoff, a browser extension that transforms the browser from a passive window into an active participant. The extension acts as a single-focus session tracker. It enforces a strict constraint: users can only work on one active subject at a time. Each subject provides a text document, a scratchpad, and a history of previous sessions. When a stray thought occurs, a global inbox captures it so the user does not have to switch tabs and lose focus. When the user finishes working, a wrap-up flow handles the transition. The user dumps their messy, unstructured notes from the session into the extension. An AI then automatically structures those notes into clear summaries and action items, updating the history so it is ready for the next time the user opens the subject.',
    inherited:
      'My subsequent application, HERA, inherited a fundamental design principle from Handoff: there is an asymmetry between human memory and AI capability. Specifically, HERA adopted the rule that users are allowed to input messy thoughts, and the system must take responsibility for the cleanup. HERA also inherited the architectural enforcement of single-focus discipline to prevent distraction.',
    status: 'Built in one week, April 2026. Used daily to manage my own work sessions.',
    more: [
      {
        title: 'Execution and Iteration',
        body: 'I built Handoff to solve my own friction, and I used it daily to manage my own work sessions. I prioritized speed and simplicity, going from an idea to a fully functional AI-integrated extension in just one week. Relying on the tool daily changed how I operated. I no longer wasted time trying to remember where I left off. I iterated quickly based on real daily use, continuously refining the application to better capture unstructured thoughts without causing new distractions.',
      },
    ],
  },
  {
    id: 'nguard',
    title: 'NGuard',
    thread: 'behavior',
    date: 'April — May 2026',
    meta: 'Native iOS · SwiftUI + WidgetKit',
    mark: 'N',
    tier: 'featured',
    video: 'videos/nguard.mp4',
    problem:
      'Founders, creatives, and knowledge workers often set a target bedtime but continue working late into the night. The root issue is not a lack of sleep data. The problem is a lack of visible, real-time accountability that forces them to make an intentional choice to stop working. Current sleep applications only track behavior retroactively. They fail to intervene during the exact window when a user\'s intention to sleep turns into working late.',
    rejected:
      'Existing solutions assumed the answer was retroactive tracking or functioning as a medical treatment tool. I rejected these approaches. I also decided against using guilt as a motivator, making a strict product decision never to punish a user for a bad week. Finally, I designed the application to require no servers or accounts, keeping all data stored locally.',
    built:
      'Between April and May 2026, I built a native iOS sleep accountability application. The core mechanism relies on timely prompts. Beginning hours before a target bedtime, the application sends local notifications requiring an explicit choice, such as taking "15 min" more or selecting "Skip Today". Each morning, a check-in logs the user\'s actual behavior. At the end of the week, an adaptation algorithm reviews this data and adjusts future target times to match reality.',
    inherited:
      'This project proved that software can successfully intervene in the exact window between a user\'s intention and their subsequent behavior. When I built my next productivity application, HERA, I applied this approach to task management. This concept shaped HERA\'s core features, building mechanics that force a user to make an active choice before abandoning a task.',
    status: 'I built it to fix my own sleep, and it successfully forced me to confront my late-night drift.',
    more: [],
  },
  {
    id: 'wallplanner',
    title: 'WallPlanner',
    thread: 'interface',
    date: 'Oct 2023 — Mar 2025',
    meta: 'Electron · Desktop Overlay',
    mark: 'W',
    tier: 'featured',
    video: 'videos/wallplanner.mp4',
    problem:
      'Checking a task list during deep work requires breaking focus. Users must minimize their current window, open a separate application, and search for their next step. Dedicated task managers act as separate destinations that pull users out of their workflow. Desktop sticky notes avoid this friction, but they lack the structure needed for tracking complex projects. I noticed that traditional software treats the workspace as a static background and the application as a foreground destination, forcing people to abandon their context just to check a plan.',
    rejected:
      'Software conventions assume that a task planner must be an independent application window. I rejected the idea that a planner needs to run as a standard window at all. Users should not have to navigate to a new digital location to remember what they need to do next.',
    built:
      'I wanted to integrate WallPlanner natively into the Windows background, but operating system restrictions prevented this. Instead, I built a seamless, borderless application that sits directly over the desktop wallpaper to imitate native design. The interface lives ambiently on the background, ensuring it looks beautiful without causing distraction. Users press a single hotkey to reveal custom-titled boards, task notes, and subtask progress trackers right on their desktop, and press the hotkey again to hide the planner.',
    inherited:
      'HERA inherited this focus on spatial continuity through a feature called The Void. In The Void, when a user is ready to turn their temporary conversation into an actual room, the tool reconfigures directly around them. There are no screen swipes, and no closing or opening of windows. The active chat transcript stays perfectly in place, the primary navigation hides, and the permanent room buttons and settings appear directly around the conversation.',
    status: 'I relied on this tool exclusively for 16 months to manage my daily tasks, saving myself from constant context switches.',
    more: [],
  },

  // ── Closest supporting ancestors ───────────────────────────────────────────
  {
    id: 'pomodoro',
    title: 'Pomodoro Timer',
    thread: 'orchestration',
    date: 'May 2025',
    meta: 'Electron · system tray',
    mark: 'P',
    tier: 'ancestor',
    video: 'videos/pomodoro.mp4',
    problem:
      'Traditional timers demand manual initiation. A timer you have to remember to start simply becomes another task on your to-do list. The user ends up managing the tool instead of the tool managing the work.',
    rejected:
      'I rejected the fundamental concept of a timer as a single, manually initiated session.',
    built:
      'In May 2025, I built a Pomodoro Timer application using Electron that lived in the system tray. The application ran multiple independent timers simultaneously. Each timer followed custom rules for active days, operating hours, work and break rhythms, and notification sounds. The core design principle was simple: set the rules once, and the system executes them. I built this application in 48 hours to eliminate friction I experienced in my own daily workflow.',
    inherited:
      'HERA inherited this exact execution model. Traditional AI chatbots require the user to manually initiate every single step in an ask and answer format. HERA operates on automated parallel lanes instead. Once a user starts a goal, HERA executes multiple agentic tasks in parallel automatically based on established rules. Tasks wait for dependencies and trigger sequentially without the user ever needing to re-initiate them.',
    status: 'Built in 48 hours in May 2025 to automate my own productivity tracking.',
  },
  {
    id: 'crucible',
    title: 'The Crucible',
    thread: 'discipline',
    date: 'April 2026',
    meta: 'Chrome extension · README lists what it will never become',
    mark: 'C',
    tier: 'ancestor',
    video: 'videos/crucible.mp4',
    problem:
      'Knowledge workers and prompt engineers spend significant effort crafting precise AI prompts with custom roles, context, and strict output constraints. However, standard browser chat interfaces treat every prompt as a disposable, single-use chat turn in an infinite scrolling log. Once a session moves forward, high-performing prompts get buried in scrollback history. Reusing a proven prompt forces the user to manually scroll back through old chats, copy-paste text, or re-type the prompt from memory. Furthermore, pasting raw, unrefined thoughts directly into chat windows produces inconsistent model outputs because unpolished drafts lack structured constraints and clear boundaries.',
    rejected:
      'I rejected the convention that prompts are disposable text messages. I also rejected the assumption that managing prompts requires a bloated application. Conventional tools force users to navigate multi-folder hierarchies, fill out rigid database forms, or adopt full project management platforms just to save a working prompt. In The Crucible\'s README, I explicitly wrote an anti-roadmap establishing what the software would never become: not a project manager, not a full knowledge base, and not a giant template builder. Additionally, I rejected forcing users onto cloud API subscriptions for basic text polishing, and I abandoned Chrome\'s cloud sync storage (chrome.storage.sync) after discovering it silently truncates user data when storage thresholds are exceeded.',
    built:
      'In April 2026, I built The Crucible, a single-purpose Chrome Side Panel extension engineered in pure vanilla JavaScript with a lightweight 57KB footprint and zero external dependencies. The Crucible operates directly alongside active browser chat windows as an on-device prompt engine. It takes raw, unstructured thoughts and restructures them into clear, execution-ready prompt templates by defining system roles, context, and output constraints without losing domain nuance. The polishing engine prioritizes Chrome\'s embedded on-device AI (Gemini Nano) for zero-latency, local-first execution, falling back to the Gemini API only when local AI is unsupported. To guarantee data durability, I migrated the prompt vault to Chrome\'s local storage engine (chrome.storage.local). This unlocked instant search, hotkey retrieval, one-click clipboard copying, custom tag filters, and optional Markdown sync to Obsidian.',
    inherited:
      'My subsequent application, HERA, inherited its core intake pipeline directly from The Crucible: the Intention-to-Form Transformation Engine. In HERA, users arrive with raw, unstructured thoughts in The Void, and the system assumes responsibility for transforming that unformed text into structured rooms, goal roadmaps, and execution specs without losing the founder\'s original intent. HERA also inherited The Crucible\'s strict scope discipline, embedding explicit non-goals into product architecture to resist feature bloat, as well as its local-first resilient AI model execution pipeline.',
    status:
      'Built in April 2026. Used daily to structure and store my active prompt library alongside browser chat models.',
  },
  {
    id: 'tabsuite',
    title: 'TabSuite',
    thread: 'context',
    date: 'April 2026',
    meta: 'Chrome Side Panel extension · Gemini Nano on-device AI',
    mark: 'T',
    tier: 'ancestor',
    video: 'videos/tabsuite.mp4',
    problem:
      'When conducting deep technical research, I constantly accumulated tab sprawl across 20 or more open browser tabs. Navigating cramped tab bars created severe cognitive friction and fragmented my active focus. I realized this friction stemmed from a fundamental browser system failure: web browsers treat open tabs as ephemeral, unorganized UI pages that disappear when a window closes. Because browsers treat session restoration as an emergency crash-recovery tool rather than a structured workspace manager, closing a window destroys tab group titles, color hierarchies, and the fragile mental context of ongoing research.',
    rejected:
      'I rejected the convention that open tabs are disposable UI elements designed to be closed and forgotten. I also rejected relying on cloud-based AI APIs for tab organization and summarization. Sending a user\'s entire live browsing history and page contents to external cloud servers introduces privacy vulnerabilities, network latency, and recurring subscription costs. Finally, I rejected heavy frontend frameworks like React and Vue along with external CDN styling, which inflate extension bundle sizes and violate Manifest V3 Content Security Policies.',
    built:
      'In April 2026, I built TabSuite, a Manifest V3 Chrome Side Panel extension engineered in 177KB of pure Vanilla JavaScript with zero external runtime dependencies. TabSuite introduces named session snapshot serialization, capturing active tab structures into recoverable state objects that preserve exact tab group titles, color metadata, and page hierarchies. To organize open tabs without compromising privacy, I integrated local Gemini Nano on-device AI using Chrome\'s Prompt API. This enables zero-latency, private tab summarization and hybrid topic grouping directly inside the browser, allowing users to categorize open tabs into site, topic, or hybrid modes with zero data egress.',
    inherited:
      'HERA inherited its core workspace state model directly from TabSuite. In traditional operating environments, application sessions and agent execution steps are treated as temporary runtime processes. HERA adopted TabSuite\'s structural primitive of treating complex multi-surface workspace state, including spatial rooms, active agent execution runs, and tab contexts, as persistent, recoverable state objects. Just as TabSuite allows users to snapshot and restore tab group hierarchies without losing state, HERA allows users to freeze, store, and resume entire multi-agent workspace environments across application restarts.',
    status:
      'Built in April 2026. Used daily to snapshot and restore complex multi-tab research sessions without losing focus.',
  },
  {
    id: 'obsidian-companion',
    title: 'Obsidian Companion',
    thread: 'context',
    date: 'April 2026',
    meta: 'Chrome Manifest V3 side panel · 155KB pure Vanilla JS · Local REST API',
    mark: 'O',
    tier: 'ancestor',
    video: 'videos/obsidian-companion.mp4',
    problem:
      'When conducting deep research in the browser, capturing thoughts and web excerpts into my personal knowledge base required constantly leaving active tabs, switching windows to the desktop Obsidian application, and manually creating or locating target notes. This constant context switching fragmented my executive focus and broke reading momentum. Standard web clippers aggravated the issue by dumping raw, unformatted HTML or unstructured text directly into the vault. Without immediate formatting, notes accumulated into unorganized digital dumpsters lacking standard YAML metadata, consistent folder structures, clean document titles, or canonical tags. I realized that forcing users to jump between browser tabs and external applications to organize research creates unnecessary friction, while unguided web capture ruins vault hygiene.',
    rejected:
      'I rejected the premise that capturing knowledge requires leaving the browser tab where active reading happens. I also rejected third-party web clippers that rely on external cloud servers, user account logins, or remote APIs to process user notes, which compromises local data privacy and violates the core reason for using a local-first vault. On the technical side, I rejected heavy frontend frameworks like React or Vue, Webpack bundlers, and third-party NPM packages that bloat extension sizes. Furthermore, I rejected rigid background automation that silently auto-categorizes clips using brittle classifiers. Because note organization is context-dependent, invisible background sorting frequently misfiles notes into incorrect folders. I decided instead on an asymmetric interaction model: allowing rapid, raw input while giving the user lightweight, inspectable AI tools to review and approve notes before persisting them to disk.',
    built:
      'In April 2026, I built Obsidian Companion, a Manifest V3 Chrome side panel extension engineered in 155KB (~4,500 lines) of pure unbundled Vanilla JavaScript (script.js) with zero build steps or npm dependencies. Operating directly beside active browser tabs, the extension communicates securely with the user\'s desktop vault via Obsidian\'s Local REST API server running on 127.0.0.1:27124 using local SSL certificates and API tokens, ensuring zero cloud reliance and total data privacy. I built a dark-mode dual-pane editor that allows seamless toggling between raw Markdown source editing and live rendered HTML previewing. To maintain vault hygiene, the system automatically injects standardized YAML frontmatter metadata (type, created_at, tags) into every entry. I integrated on-device AI refactoring tools for local note cleanup, auto-titling, and smart tagging based on customizable target audience prompts. I also engineered a smart append flow that appends clips directly into existing vault files under relevant headings instead of scattering duplicate notes, complete with a hover-reveal file explorer, pinned notes, and starter folder generation.',
    inherited:
      'Obsidian Companion taught me to put the tool where the work lives, and give them the tools they need to do it faster. I put the roadmap right in the workspace, and rather than making goals and tasks arbitrary nodes, I also tied them to the navigation in HERA. Specifically, HERA inherited Obsidian Companion\'s core principle of spatial continuity and contextual accessibility: embedding goal roadmaps, intake controls, and task execution tools directly inside the active workspace surface instead of forcing users to navigate to separate destination screens. HERA also adopted Obsidian Companion\'s asymmetric processing model and canonical YAML frontmatter schema, allowing users to enter messy, unstructured inputs while the system structures them into machine-readable knowledge nodes without breaking operational flow.',
    status:
      'Built in April 2026. Used daily as an ambient side panel to capture, refactor, and file web research directly into my local Obsidian vault without breaking focus.',
  },
  {
    id: 'obsidian-shortcuts',
    title: 'Obsidian Shortcuts',
    thread: 'orchestration',
    date: 'May 2026',
    meta: 'Obsidian plugin · TypeScript · targeted insertion engine',
    mark: 'OS',
    tier: 'ancestor',
    video: 'videos/obsidian-shortcuts.mp4',
    problem:
      'While writing code or managing systems in Obsidian, logging a quick thought or appending a task required breaking focus. To add text to a specific file or section, such as the top of an active note, the bottom of a log, or under a specific header or symbol, I had to stop working, switch active tabs, scroll through the document, manually place the cursor, and type. Standard note tools assumed note editing was always a manual, whole-file operation requiring direct editor context and visual cursor navigation. When taking dozens of micro-notes a day, this context switching accumulated into major friction and fragmented focus.',
    rejected:
      'I rejected heavy modal popups, multi-step dialog boxes, and visual cursor navigation for routine text appending. I also rejected monolithic note managers that forced opening every target note into active view just to insert a single line of text.',
    built:
      'I built obsidian-shortcuts, an Obsidian plugin executing targeted background file insertion through single-hotkey operations. Users can append or prepend text directly to the active file, top or bottom of a note, or under specific headings and symbols without moving their cursor or opening target notes. By leveraging single-key hotkey bindings and Obsidian\'s command palette, it executes direct line-targeted text manipulation directly in the background.',
    inherited:
      'Obsidian Shortcuts taught me that something as simple as appending here, appending to bottom, or appending to a symbol is a system. It taught me that if you stack very simple actions one after the other, you eventually have a very complex system. This is how lanes and task parallelism work is built in the backend. When Iris (HERA\'s planner) plans your project, her job is not just to think of fancy new tasks or guess, she must consider dependencies that will make it impossible for the next task to ever matter to the first task that was executed. In other words, what will break task 5 in column 4 in lane 3, when we press the plan and task 1 in lane 1 of column 1 begins?',
    status:
      'Built and proven in daily workflow as part of the founder\'s track record of previous work. Its deterministic targeted insertion model directly informed the architecture of HERA\'s parallel execution lanes and task dependency planner.',
  },
  {
    id: 'lifelogger',
    title: 'LifeLogger',
    thread: 'behavior',
    date: 'May 2026',
    meta: 'Native iOS · five designed widget states · P0/P1/P2 spec',
    mark: 'L',
    tier: 'ancestor',
    video: 'videos/lifelogger.mp4',
    problem:
      'Most life-tracking apps demand that users manually describe what they did after the fact. By the time the app is opened, the context is already gone, and the entry is a guess. I wanted to understand how to predict what a person would do next based on actions they had already taken. The challenge was not storage or tracking — it was making the act of logging so fast and frictionless that users would actually do it consistently enough to generate real patterns.',
    rejected:
      'I rejected the idea that logging required typing. I also rejected flat, uncategorized action lists that treat watching a film the same as drinking a coffee. Undifferentiated data accumulates without generating insight. And I rejected the assumption that predictions require sophisticated models — I started with simple averaging and lightweight repetition tracking to test whether the underlying behavior data was even worth collecting.',
    built:
      'I built LifeLogger as a native iOS tap-logger structured around nested action hierarchies. Rather than asking users to describe what they did, I pre-built branching category trees: entertainment \u2192 movie \u2192 Assassin\'s Creed, or drink \u2192 soda \u2192 Coke. A single button tap captured the timestamp, the broad category, and the specific sub-action simultaneously. Five designed widget states covered the edges most logging apps skip. Monthly reviews generated themselves as structured Markdown summaries. The system derived behavioral patterns \u2014 when someone drinks Coke versus other sodas, which shows they return to, which categories cluster at certain times \u2014 from data that cost the user nothing beyond one tap.',
    inherited:
      'LifeLogger was my first experiment in predictive work: learning what a person would do next from the actions they had already taken. But the larger inheritance was a design philosophy. When I designed HERA\'s Vault, I deliberately did not ask users to arrive with a fully-formed dossier, a project plan, or a structured document. I wanted them to arrive with a raw idea and let the system guide it toward its final form. Actions on their own are meaningless. Patterns are where the value lives. A single tap on LifeLogger produced a timestamp, a category, and a subcategory. A single unstructured thought in HERA\'s Void produces a structured room, a goal roadmap, and an execution spec. The entry cost is 10 seconds. The system does the rest.',
    status: 'Built and running on my phone, May 2026.',
  },

  // ── Interaction experiments ────────────────────────────────────────────────
  {
    id: 'clockit',
    title: 'ClockIt',
    thread: 'restraint',
    date: 'Sep 2023 · V2 Jan 2024',
    meta: 'Electron · deliberately minimal',
    mark: 'CI',
    tier: 'experiment',
    video: 'videos/clockit.mp4',
    problem: 'I just wanted to know how long I actually worked.',
    rejected: 'Filling a small tool with features to make it look serious.',
    built: 'Punch in. Punch out. Totals. That’s the product — and I came back months later to maintain it.',
    inherited: 'Restraint as a decision. One job, clearly done.',
    status: 'Working V1, maintained into 2024.',
  },
  {
    id: 'collagewhiz',
    title: 'CollageWhiz',
    thread: 'control',
    date: 'Sep 2023',
    meta: 'Electron · built in 9 days',
    mark: 'CW',
    tier: 'experiment',
    video: 'videos/collagewhiz.mp4',
    problem: 'Making a collage by hand is slow; auto-generators lock you out of the result.',
    rejected: 'Generation as a final answer.',
    built: 'Generate a layout, then move and resize anything. The generated thing stays editable.',
    inherited: 'Exactly how HERA treats AI output: a starting point under human control, never a verdict.',
    status: 'Working V1, September 2023.',
  },
  {
    id: 'coursemate',
    title: 'CourseMate',
    thread: 'process',
    date: 'Aug 2023',
    meta: 'Python · 12 UI prototypes before the build',
    mark: 'CM',
    tier: 'experiment',
    video: 'videos/coursemate.mp4',
    problem: 'Course progress lived in my head and nowhere else.',
    rejected: 'Building the first design that came to mind.',
    built: 'A course tracker — after prototyping the interface twelve times before committing to one.',
    inherited: 'Prototype until the design is earned, then build.',
    status: 'Working V1, August 2023.',
  },
  {
    id: 'gallerygrouper',
    title: 'GalleryGrouper',
    thread: 'reflex',
    date: 'Aug 2023',
    meta: 'Built and shipped the same day · 12 commits',
    mark: 'G',
    tier: 'experiment',
    video: 'videos/gallerygrouper.mp4',
    problem: 'Sorting hundreds of images into folders by hand, again.',
    rejected: 'Tolerating a friction I could automate.',
    built: 'Pick a folder, pick the number of groups, preview the split, distribute. Noticed in the morning, shipped by night.',
    inherited: 'The reflex itself: friction noticed, system built, same day.',
    status: 'Working V1, August 2023.',
  },
  // ── Creative and technical range ───────────────────────────────────────────
  {
    id: 'stickytabs',
    title: 'StickyTabs',
    thread: 'interface',
    date: 'April 2026',
    meta: 'Chrome extension',
    mark: 'S',
    tier: 'range',
    image: 'images/stickytabs.png',
    problem: 'Links I needed daily kept drowning in bookmarks.',
    rejected: 'The generic settings-panel look every small utility defaults to.',
    built: 'A little notebook you keep links in — the metaphor is the interface.',
    inherited: 'A visual metaphor can change how a utility feels to live with.',
    status: 'Working on my machines. Built April 2026.',
  },
  {
    id: 'totaltally',
    title: 'TotalTally',
    thread: 'capture',
    date: 'Apr — Jun 2023',
    meta: 'Chrome extension · my earliest structured commits',
    mark: 'TT',
    tier: 'range',
    video: 'videos/totaltally.mp4',
    problem: 'I never logged spending after the fact, because after the fact is too late.',
    rejected: 'Reconstructing information instead of capturing it the moment it exists.',
    built: 'Capture the total on the checkout page, categorize it there, watch the history chart update.',
    inherited: 'Meet information at the moment it is created.',
    status: 'Earliest project with structured commit history, spring 2023.',
  },
  {
    id: 'aurora',
    title: 'Aurora PCStats',
    thread: 'range',
    date: 'Jun 2025',
    meta: 'Flask + psutil',
    mark: 'A',
    tier: 'range',
    video: 'videos/aurora-pcstats.mp4',
    problem: 'A stats widget for my own PC.',
    rejected: 'Letting private tools be ugly.',
    built: 'A live CPU/RAM dashboard with customizable gauges. Personal infrastructure, overbuilt on purpose.',
    inherited: 'Even the tools nobody sees get designed.',
    status: 'Working, June 2025.',
  },
  {
    id: 'fitbit-ttt',
    title: 'Fitbit Tic-Tac-Toe',
    thread: 'range',
    date: 'Jun 2024',
    meta: 'Fitbit OS',
    mark: 'F',
    tier: 'range',
    image: 'images/fitbit-ttt.png',
    problem: 'A game with an AI opponent, on a watch.',
    rejected: 'Waiting for comfortable hardware.',
    built: 'Tic-tac-toe against an AI inside severe wearable display constraints.',
    inherited: 'Strange constraints are not a reason to skip an idea.',
    status: 'Working, June 2024.',
  },
  {
    id: 'lifestream',
    title: 'LifeStream',
    thread: 'range',
    date: 'Nov — Dec 2023',
    meta: 'Unity · 33 commits',
    mark: 'LS',
    tier: 'range',
    video: 'videos/lifestream.mp4',
    problem: 'A life sim with a build mode, 3D scenes, and a working grocery economy.',
    rejected: 'Staying inside 2D tools.',
    built: 'An interconnected world: states, environments, an economy that runs.',
    inherited: 'Before workflow tools, I was already building systems that had to hold together.',
    status: 'Substantially built, unreleased. Late 2023.',
  },
];

export const featured = lineage.filter((p) => p.tier === 'featured');
export const ancestors = lineage.filter((p) => p.tier === 'ancestor');
export const experiments = lineage.filter((p) => p.tier === 'experiment');
export const range = lineage.filter((p) => p.tier === 'range');

// ── Convergence — the four threads that join into HERA ───────────────────────
export const convergence = [
  {
    from: 'WallPlanner',
    lesson: 'the interface lives where you already are',
    into: 'HERA’s rooms and reconfiguring workspace',
  },
  {
    from: 'Pomodoro',
    lesson: 'rules execute so you don’t re-initiate',
    into: 'HERA’s goals, lanes, and parallel runs',
  },
  {
    from: 'NGuard',
    lesson: 'step in where intention drifts',
    into: 'HERA’s review gates and transforming composer',
  },
  {
    from: 'Handoff',
    lesson: 'context survives stopping',
    into: 'HERA’s Void, Objective, and resumable work',
  },
];

// ── HERA media used on Home + Deep Dive ───────────────────────────────────────
export const heraMedia = {
  heroRecording: {
    video: 'videos/hera-demo.mp4',
  },
  migrationRecording: {
    video: 'videos/hera-void-to-room.mp4',
  },
  roadmapRecording: {
    video: 'videos/hera-task-orchestration.mp4',
  },
  workedForShot: {
    video: 'videos/hera-worked-for.mp4',
  },
  composerStrip: {
    video: 'videos/hera-composer-transform.mp4',
  },
  oldVersion: [
    { image: 'images/hera/hera-warroom.png', caption: 'HERA, first version — the War Room' },
    { image: 'images/hera/hera-void-home.png', caption: 'HERA, first version — the game-world Void' },
  ],
};
