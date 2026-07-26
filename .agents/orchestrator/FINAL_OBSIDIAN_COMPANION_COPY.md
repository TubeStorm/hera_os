# FINAL ACCEPTED PORTFOLIO COPY — Obsidian Companion

> Status: APPROVED & INTEGRATED  
> YC Reviewer Score: **9.3 / 10.0** (Pass Threshold: >= 8.5)  
> Nontechnical Reader Score: **9.18 / 10.0** (Pass Threshold: >= 9.0)  
> Forensic Audit Verdict: **CLEAN**  
> Integrated File: `src/data/lineage.ts` (id: `obsidian-companion`)  

---

## 1. Required Portfolio Copy Sections

### Problem
When conducting deep research in the browser, capturing thoughts and web excerpts into my personal knowledge base required constantly leaving active tabs, switching windows to the desktop Obsidian application, and manually creating or locating target notes. This constant context switching fragmented my executive focus and broke reading momentum. Standard web clippers aggravated the issue by dumping raw, unformatted HTML or unstructured text directly into the vault. Without immediate formatting, notes accumulated into unorganized digital dumpsters lacking standard YAML metadata, consistent folder structures, clean document titles, or canonical tags. I realized that forcing users to jump between browser tabs and external applications to organize research creates unnecessary friction, while unguided web capture ruins vault hygiene.

### Rejected
I rejected the premise that capturing knowledge requires leaving the browser tab where active reading happens. I also rejected third-party web clippers that rely on external cloud servers, user account logins, or remote APIs to process user notes, which compromises local data privacy and violates the core reason for using a local-first vault. On the technical side, I rejected heavy frontend frameworks like React or Vue, Webpack bundlers, and third-party NPM packages that bloat extension sizes. Furthermore, I rejected rigid background automation that silently auto-categorizes clips using brittle classifiers. Because note organization is context-dependent, invisible background sorting frequently misfiles notes into incorrect folders. I decided instead on an asymmetric interaction model: allowing rapid, raw input while giving the user lightweight, inspectable AI tools to review and approve notes before persisting them to disk.

### Built
In April 2026, I built Obsidian Companion, a Manifest V3 Chrome side panel extension engineered in 155KB (~4,500 lines) of pure unbundled Vanilla JavaScript (`script.js`) with zero build steps or npm dependencies. Operating directly beside active browser tabs, the extension communicates securely with the user's desktop vault via Obsidian's Local REST API server running on `127.0.0.1:27124` using local SSL certificates and API tokens, ensuring zero cloud reliance and total data privacy. I built a dark-mode dual-pane editor that allows seamless toggling between raw Markdown source editing and live rendered HTML previewing. To maintain vault hygiene, the system automatically injects standardized YAML frontmatter metadata (`type`, `created_at`, `tags`) into every entry. I integrated on-device AI refactoring tools for local note cleanup, auto-titling, and smart tagging based on customizable target audience prompts. I also engineered a smart append flow that appends clips directly into existing vault files under relevant headings instead of scattering duplicate notes, complete with a hover-reveal file explorer, pinned notes, and starter folder generation.

### Inherited
Obsidian Companion taught me to put the tool where the work lives, and give them the tools they need to do it faster. I put the roadmap right in the workspace, and rather than making goals and tasks arbitrary nodes, I also tied them to the navigation in HERA. Specifically, HERA inherited Obsidian Companion's core principle of spatial continuity and contextual accessibility: embedding goal roadmaps, intake controls, and task execution tools directly inside the active workspace surface instead of forcing users to navigate to separate destination screens. HERA also adopted Obsidian Companion's asymmetric processing model and canonical YAML frontmatter schema, allowing users to enter messy, unstructured inputs while the system structures them into machine-readable knowledge nodes without breaking operational flow.

### Status
Built in April 2026. Used daily as an ambient side panel to capture, refactor, and file web research directly into my local Obsidian vault without breaking focus.

---

## 2. Integrated TypeScript `LineageProject` Snippet (`src/data/lineage.ts`)

```typescript
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
```
