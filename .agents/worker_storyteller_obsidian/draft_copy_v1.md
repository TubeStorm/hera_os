# Portfolio Copy Draft — Obsidian Shortcuts (v1)

## Narrative Copy

### Problem
I noticed that taking notes or appending tasks while working introduced constant workflow interruption. Every single quick note, log entry, or task required switching active windows, scrolling through long documents, and manually positioning the cursor at precise file locations, whether at the top of a file, the bottom, or underneath specific headings and symbols. Worse, taking notes often required opening target files directly into view, pulling me completely out of deep focus. Existing tools operated on the flawed assumption that note editing is always a manual, full-file editing operation.

### Rejected
I rejected heavy modal interfaces, multi-step dialog popups, and any system that required manual cursor navigation just to append a line of text to a document. I also rejected monolithic note-taking workflows that forced opening every target note into active view. Editing software should not force you to shift your visual workspace and position your cursor manually just to log an item or append a task.

### Built
I built `obsidian-shortcuts`, a lightweight, high-velocity Obsidian plugin that provides direct single-hotkey targeted insertion operations. Instead of opening files and navigating cursors, the plugin enables instant single-hotkey actions: append here, append to top or bottom of active note, append to specific sections, headings, or symbols, prepend to lists, and execute quick-capture routines. Integrated into Obsidian's command palette with custom hotkey bindings, these operations execute without opening target files or shifting cursor focus away from the active work stream.

### Inherited
Obsidian Shortcuts taught me that something as simple as appending here, appending to bottom, or appending to a symbol is a system. It taught me that if you stack very simple actions one after the other, you eventually have a very complex system. This is how lanes and task parallelism work is built in the backend. When Iris (HERA's planner) plans your project, her job is not just to think of fancy new tasks or guess—she must consider dependencies that will make it impossible for the next task to ever matter to the first task that was executed. In other words, what will break task 5 in column 4 in lane 3, when we press the plan and task 1 in lane 1 of column 1 begins?

### Status
Built as a daily driver tool, verified in YC founder previous work audit, serving as foundational architecture for HERA's parallel execution engine.

---

## TypeScript Lineage Item (`src/data/lineage.ts`)

```typescript
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
      'Taking notes or appending tasks while working required switching active windows, scrolling, manually positioning the cursor at specific locations (top of file, bottom of file, under specific headings or symbols), or opening target files, interrupting deep focus. Existing tools assumed note editing was always a manual full-file editing operation.',
    rejected:
      'Heavy modal UIs, multi-step dialog popups, or requiring manual cursor navigation to append text to specific document locations. Monolithic note-taking workflows that forced opening every target note into active view.',
    built:
      'A lightweight, high-velocity Obsidian plugin (obsidian-shortcuts) providing direct single-hotkey targeted insertion operations: append here, append to top/bottom of active note, append to specific section/heading/symbol, prepend to list, and quick-capture routines without opening target files or shifting cursor focus away from the active work stream. Command palette integration and hotkey bindings.',
    inherited:
      'Obsidian Shortcuts taught me that something as simple as appending here, appending to bottom, or appending to a symbol is a system. It taught me that if you stack very simple actions one after the other, you eventually have a very complex system. This is how lanes and task parallelism work is built in the backend. When Iris (HERA\'s planner) plans your project, her job is not just to think of fancy new tasks or guess—she must consider dependencies that will make it impossible for the next task to ever matter to the first task that was executed. In other words, what will break task 5 in column 4 in lane 3, when we press the plan and task 1 in lane 1 of column 1 begins?',
    status:
      'Built as a daily driver tool, verified in YC founder previous work audit, serving as foundational architecture for HERA\'s parallel execution engine.',
  },
```
