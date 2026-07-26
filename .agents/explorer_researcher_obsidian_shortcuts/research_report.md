# Deep Dive Research Report: Obsidian Shortcuts & Architectural Foundations of HERA

**Author:** Explorer Researcher (`explorer_researcher_obsidian_shortcuts`)  
**Date:** 2026-07-26  
**Subject:** Obsidian Shortcuts — Fact Extraction & Lineage to HERA Architecture  
**Source Documents Inspected:**
- `D:\Documents\HERA\docs\product\New truth\Y COMBINATOR\reports\YC-FOUNDER-PREVIOUS-WORK-AUDIT.md` (Project #8)
- `D:\Documents\HERA\docs\product\New truth\Y COMBINATOR\reports\YC-FOUNDER-PREVIOUS-WORK-EVIDENCE.md` (Section `Obsidian Shortcuts (iOS)`)
- `D:\Documents\High Level Shit\My_Apps_IOS\osidian-shortcuts\App Build Dossier\Obsidian Shortcuts Build Notes.txt`
- `D:\Documents\High Level Shit\My_Apps_IOS\osidian-shortcuts\App Build Dossier\Initial Design.txt`
- `D:\Documents\High Level Shit\My_Apps_IOS\_Tracker\ObsidianShortcuts_tracker.csv`
- `D:\Documents\HERA\docs\product\New truth\Y COMBINATOR\FAVOUR-FOUNDER-OPERATING-MODEL.md`
- `D:\Documents\HERA\docs\product\New truth\Y COMBINATOR\1 How to frame hera.md`

---

## Executive Summary

**Obsidian Shortcuts** (built April–May 2026) is a native iOS application (`SwiftUI` / `WidgetKit`) designed as an intent-driven launcher and automated workflow engine for Obsidian vaults and Markdown context environments. Rather than acting as another full-screen text editor, Obsidian Shortcuts isolates note capture and vault manipulation into structured, tactile, visual "action tiles."

This analysis demonstrates how Obsidian Shortcuts served as the direct conceptual and architectural predecessor to **HERA** (*Human-intent to Executable Roadmap & Artifacts*). By solving mobile friction, iOS security-scoped sandboxing failure modes, section-targeted note appends, AI proofreading refinement, and structured action logging, Obsidian Shortcuts established the core design pattern—**Intention-to-Form Architecture**—that HERA later scaled into parallel agent execution lanes and living roadmap dependency management.

---

## 1. Real User Problem

Based on `YC-FOUNDER-PREVIOUS-WORK-AUDIT.md` (lines 255–267) and `Obsidian Shortcuts Build Notes.txt` (lines 3–14):

1. **High Mobile Friction & Context-Switching**:
   - On iOS devices, quick note capture or updating an ongoing log in Obsidian requires opening the full app, waiting for vault loading/syncing, navigating folder trees, locating the specific `.md` file, positioning the text cursor at the bottom or target heading, typing, and returning to the previous application.
   - This multi-step process breaks working memory and flow state for users trying to log an idea, task, or session note during active work.

2. **Brittleness of Existing Automation Solutions**:
   - Power users relying on Apple Shortcuts or raw `obsidian://` URI schemes frequently encountered silent failures, broken URL encoding, missing parameters, and lack of visual/audio feedback.
   - Apple Shortcuts offered no structured interactive prompts for multi-field inputs (e.g. subject framing + body content + destination selection) before committing edits to disk.

3. **Loss of Working Context**:
   - Switching out of an active task to record context in Obsidian frequently caused accidental abandonment of the primary focus thread—a core friction point identified across Favour Diokpo's productivity tool portfolio (e.g., Handoff, NGuard, WallPlanner).

---

## 2. Hidden System Failure Noticed

From `Obsidian Shortcuts Build Notes.txt` (lines 15–17, 98–125) and `YC-FOUNDER-PREVIOUS-WORK-AUDIT.md`:

1. **The Sandboxing & Security-Scoped Bookmark Failure Mode**:
   - On iOS, widget extensions (`WidgetKit`) cannot reliably execute direct background file edits on user-selected vault folders because the widget extension process does not maintain persistent ownership of the app's security-scoped folder permission (`NSError code 513`: Operation not permitted; `unable to make sandbox extension`).
   - Default implementations that tried to write files directly from background widgets or un-scoped paths (`/private/var/...`) failed silently, corrupting data access or quietly discarding user input.

2. **Over-engineered Editors vs. Intent-less Command Launchers**:
   - Existing PKM tools treat every interaction as an open-ended text editing session inside a heavy document container.
   - Conversely, simple command launchers treat text append as a dumb string dump, ignoring structural note conventions such as YAML frontmatter headers, dynamic date/time templates, active section markers, and structured CSV logging.

3. **Silent Execution & Lack of Verification**:
   - Standard URL-scheme triggers provide zero feedback to the user on whether the file operation succeeded, whether the folder was disconnected, or whether input text was truncated.

---

## 3. Existing Assumptions

As documented in `Initial Design.txt` and `Obsidian Shortcuts Build Notes.txt`:

1. **Assumption 1**: *Users want full note-editing UI on mobile.*
   - **Flaw**: Users on mobile want rapid, zero-friction intent execution, not full document management interface chrome.

2. **Assumption 2**: *Apple Shortcuts and `obsidian://` URIs are sufficient for power-user vault automation.*
   - **Flaw**: Raw URIs are brittle, non-visual, lack typed error messaging, cannot perform dynamic local validation, and cannot handle complex fallback conditions.

3. **Assumption 3**: *Widgets can directly perform background file edits on external directories.*
   - **Flaw**: iOS sandbox boundary security explicitly revokes or denies security-scoped folder bookmarks (`UIDocumentPickerViewController` scope) inside WidgetKit extensions.

4. **Assumption 4**: *Quick capture is a single unformatted text field.*
   - **Flaw**: Real-world knowledge capture requires subject context, location/destination lists, dynamic template variables (`{{date}}`, `{{time}}`, `{{weekday}}`), optional AI polishing, and speech-to-text dictation that flushes audio buffers cleanly.

---

## 4. What Was Rejected

Extracted from `Obsidian Shortcuts Build Notes.txt` (lines 15-17, 57-64, 70-76, 98-135):

1. **Direct Background File Editing from Widgets**:
   - *Explicitly Rejected*: Trying to perform background file writes directly inside `WidgetKit` extension process.
   - *Adopted Alternative*: Widgets act as tactile deep-linking launchers into the root app runner, which holds the active security-scoped folder bookmark and guarantees safe, permitted file execution.

2. **Manual String Path Entry in Workflow Builder**:
   - *Explicitly Rejected*: Asking users to manually type file paths into text boxes (which caused sandbox path mismatch errors).
   - *Adopted Alternative*: Integrated native iOS Files picker (`UIDocumentPickerViewController`) to acquire security-scoped root folder bookmarks (`startAccessingSecurityScopedResource()`), storing normalized connected-folder-relative paths.

3. **Becoming a Full Note Editor / Knowledge Base**:
   - *Explicitly Rejected*: Adding markdown editing canvases, complex note trees, or vault graph visualizers.
   - *Adopted Alternative*: Scope strictly defended around action tiles, quick capture runner, workflow list boards, analytics, and widget integration.

4. **Silent / Unconfirmed Appends**:
   - *Explicitly Rejected*: Invisible execution without feedback.
   - *Adopted Alternative*: Distinct typed notices (success, warning, error), high-quality speech confirmation (`AVSpeechUtterance` with quality-ranked voice selection), and interactive fallback menus.

5. **Double Security-Scoped Resource Calls**:
   - *Explicitly Rejected*: Dual calls to root URL + note URL which triggered OS security crashes.
   - *Adopted Alternative*: Single root security-scoped access with path normalization.

6. **Non-Working UI Controls / UI Theatre**:
   - *Explicitly Rejected*: Leaving non-working toggles visible. The Claude handoff toggle was hidden with a "coming soon" label until full implementation.

7. **Creating Top-Level System Folders**:
   - *Explicitly Rejected*: Writing reports to standalone root folders outside the vault scope, which caused permission errors.
   - *Adopted Alternative*: All logs, backups, and reports consolidated under a unified `Workflow Logs/` directory inside the connected vault folder.

---

## 5. What Was Built (Exact Functionality & Architecture)

### Core Architecture & Codebase Structure
- **Platform**: Native iOS application (`SwiftUI`, `WidgetKit`, `AVFoundation`, `Speech`) built for iOS 16.4+.
- **Codebase Split**: 14 modular Swift source files (~190KB code size):
  - `WorkflowStore.swift` (45.9KB): State management, security-scoped bookmark restoration, file I/O, widget metrics publishing.
  - `WorkflowEditorViews.swift` (32.1KB): Accordion-section action builder with icon, color, type, and target pickers.
  - `AnalysisViews.swift` (22.1KB): Overview, Trends, Activity, and Report reader views with day/week/month/year controls.
  - `Models.swift` (18.8KB): Data structures for Workflows, ActionTypes, LogRecords, and Settings.
  - `RunnerViews.swift` (17.8KB): Execution runner for single actions, list boards, and Smart Capture.
  - `DashboardViews.swift` (16.4KB): Action card grid, group filtering, and edit-mode reordering.
  - `SharedViewsAndHelpers.swift` (18.7KB): Custom glass cards, typed notices, dictation handlers, speech feedback.
  - `SettingsWidgetViews.swift` (11.1KB), `GroupViews.swift` (9.1KB), `AppShellViews.swift` (5.4KB).

### Action Types & Append Mechanisms
1. `append-bottom`: Appends body text directly to the end of the specified note file.
2. `append-top`: Appends body text below YAML frontmatter header ("*Respect YAML: Top append below frontmatter*").
3. `append after marker`: Targets specific section headers or custom text markers within a note.
4. `create-note`: Generates a new note using dynamic template filenames (e.g. `Daily/{{YYYY-MM-DD}}.md`).
5. `open-note / open URL`: Opens a target note/URL via Obsidian URI scheme or native iOS Quick Look / Files picker.
6. `list board / action list`: Composable tile that displays a grid or list of target files, links, or nested workflows.
7. `smart-capture`: Intelligent conditional action:
   - Text without subject -> Appends to Inbox capture file.
   - Text with subject -> Creates new subject note.
   - No text -> Displays interactive fallback target menu.

### Dynamic Variable Manipulation
Renders variables inside target paths, filenames, and body templates:
`{{date}}`, `{{time}}`, `{{datetime}}`, `{{weekday}}`, `{{subject}}`, `{{input}}`, `{{year}}`, `{{month}}`, `{{YYYY-MM-DD}}`.

### AI Refinement Integration
- Optional Claude AI proofreading toggle (`enableClaude`).
- When active, rough text inputs are formatted and transformed into structured markdown callout blocks (`> [!abstract] Refined by AI`) before appending to the vault.

### Dictation & Voice Feedback System
- **Speech Capture**: Integrated native iOS Speech recognition (`SpeechCapture`) with `stopAndPreserveText()` handling to prevent buffered audio loss on dictation stop.
- **Voice Feedback**: `AVSpeechUtterance` system using `bestEnglishVoice()`, scoring voices by quality rank and preferring enhanced/Siri voice models for confirmation cues.

### Durable Data Mirroring & File Storage
- `Workflow Logs/Action Logs/YYYY-MM_action_log.csv`: Structured monthly execution logs recording timestamp, workflow ID, workflow name, group, action type, target file, and subject.
- `Workflow Logs/workflow_actions.json`: Editable JSON mirror of all configured workflows for bulk editing.
- `Workflow Logs/run_history.json`: Persisted run record history to survive app reinstalls.
- `Workflow Logs/Weekly Report.md`: Automatically generated weekly markdown analytics report.

### WidgetKit Integration
- `AppIntentConfiguration` launcher widgets supporting Small, Medium, and Large Home Screen layouts (up to 12 actions).
- Per-widget group assignment allowing specific widgets to display specific action groups (e.g., "Work", "Journal", "Quick Capture").
- Published analytics metrics (`Workflow Trends`) to shared App Group (`group.favourDiokpoi.ObsidianShortcuts`).

---

## 6. Evidence of Use & Development

Extracted from `YC-FOUNDER-PREVIOUS-WORK-AUDIT.md`, `YC-FOUNDER-PREVIOUS-WORK-EVIDENCE.md`, and project files:

1. **Repository & Files Location**:
   - Location: `D:\Documents\High Level Shit\My_Apps_IOS\osidian-shortcuts`
   - Audit Date: July 16, 2026 by Antigravity AI research audit.
   - Build Tracker: `_Tracker/ObsidianShortcuts_tracker.csv` (28,064 bytes).

2. **Verified Clean Build Logs**:
   - Verified repeatedly via generic iOS `xcodebuild`:
     `xcodebuild -project osidian-shortcuts/ObsidianShortcuts.xcodeproj -scheme ObsidianShortcuts -destination 'generic/platform=iOS' -derivedDataPath osidian-shortcuts/Build CODE_SIGNING_ALLOWED=NO build`
   - Successful build timestamps recorded: 2026-05-01, 2026-05-02, and 2026-05-03.

3. **Demonstration Media & Artifacts**:
   - Master video demo: `D:\Documents\HERA\docs\product\New truth\Y COMBINATOR\Demos\Obsidian shortcuts.mp4`
   - Feature demonstration clips located in `Demos/ignore/obsidian shortcuts/`:
     - `Analysis tab.mp4`
     - `Set up complex options.mp4`
     - `Set up widgets.mp4`
     - `create log an idea.mp4`
     - `duplicate, pin workflow.mp4`
     - `open the app.mp4`
     - `update a workflow.mp4`
     - `workflow templates.mp4`
   - High-resolution icon assets: `icon.png` (5.1MB), `AppIcon.png` (688KB).

---

## 7. What HERA Inherited

The core architectural concepts developed in Obsidian Shortcuts directly informed HERA's system design (as detailed in `FAVOUR-FOUNDER-OPERATING-MODEL.md` and `1 How to frame hera.md`):

```
+-----------------------------------------------------------------------+
|                         OBSIDIAN SHORTCUTS                            |
|  - Raw Input + Action Tile -> Target Section Append / Note Creation   |
|  - Composable Action Lists & Nested Workflows                         |
|  - Local Cache (UserDefaults) + Durable Mirroring (Markdown/JSON)      |
|  - Pre-Execution Modal + AI Refinement (Claude Callout)               |
+-----------------------------------------------------------------------+
                                   |
                                   v  (Inherited Architectural Principles)
+-----------------------------------------------------------------------+
|                                HERA                                   |
|  - Intention-to-Form: Raw Void Prompt -> Objective, Roadmap, Tasks    |
|  - Parallel Task Execution Lanes & Composable Goal Dependencies        |
|  - Durable Provenance: Runtime "Worked for" & Artifact Files          |
|  - Human Review Gates & Interactive Artifact Approval                 |
+-----------------------------------------------------------------------+
```

### 1. Intention-to-Form Architecture
- **Obsidian Shortcuts Insight**: Input should not require manual UI navigation or file system assembly. The software identifies user intent (e.g. smart capture routing, append to marker, create note) and transforms raw text into its correct operational form on disk.
- **HERA Inheritance**: HERA takes a raw, messy founder prompt in The Void and automatically determines its operational form—creating a Room, Objective, Roadmap, Goals, Tasks, and Artifacts—without forcing the human to operate project management machinery.

### 2. Action Stacking -> Parallel Task Execution Lanes & Dependency Management
- **Obsidian Shortcuts Insight**: Action List boards and nested workflows enabled single tiles to launch or target multiple downstream files/actions in sequence or hierarchy.
- **HERA Inheritance**: HERA scaled this concept into **Goal Decomposition & Parallel Task Execution Lanes**. A single top-level Objective breaks down into nested Goals, which trigger parallel execution lanes for specialized sub-agents while maintaining strict dependency ordering.

### 3. Durable File Mirroring & State Provenance
- **Obsidian Shortcuts Insight**: Fast local in-memory UI state (`UserDefaults`) was mirrored to durable, user-accessible Markdown and JSON files (`workflow_actions.json`, `run_history.json`, `YYYY-MM_action_log.csv`) in the connected folder.
- **HERA Inheritance**: HERA strictly enforces state provenance. System activity ("Worked for"), execution logs, roadmap updates, and generated artifacts are continuously mirrored to persistent storage so project context survives app restarts, model transitions, or interruptions.

### 4. Human-in-the-Loop Refinement Gates
- **Obsidian Shortcuts Insight**: Pre-execution input modals provided an optional Claude AI proofreading gate to refine and format messy inputs before committing them to the vault.
- **HERA Inheritance**: Scaled into HERA's **Review Gates and Artifact Verification**. AI-generated outputs are presented as candidate artifacts for human review, approval, or modification before propagating into authoritative project state.

### 5. Section-Aware Non-Destructive Target Editing
- **Obsidian Shortcuts Insight**: The engine respected internal note structure ("append top after YAML frontmatter", "append after marker").
- **HERA Inheritance**: HERA modifies specific roadmap nodes, code files, and design specifications without destroying surrounding context or top-level project metadata.

---

## Conclusion

Obsidian Shortcuts was far more than a minor iOS utility. It was the crucial empirical lab where Favour Diokpo tested **intent-driven execution**, **security-scoped data durability**, **structured action composition**, and **AI refinement gates**. These exact mechanics provided the architectural template for HERA's intent-to-execution engine.
