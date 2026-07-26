# Obsidian Companion: Comprehensive Research & Evidence Report

**Project:** Obsidian Companion (Chrome Side Panel Extension) & Related Ecosystem  
**Author:** Purpose and Evidence Researcher  
**Target Portfolio:** Portfolio Copy Rewrite — Obsidian Companion Case Study  
**Date:** 2026-07-25  

---

## 1. Executive Summary & Core Identity

**Obsidian Companion** (repository folder: `Obsidian_Companion_Extension`) is a privacy-first Chrome side panel extension built in April 2026 by Favour Diokpo. It serves as a dark-mode writing and note-organization workbench that connects directly to a user's local Obsidian vault via the Obsidian Local REST API (`127.0.0.1:27124`).

Containing **155,675 bytes** (~4,500 lines) of pure, unbundled Vanilla JavaScript in a single `script.js` file—the single largest JavaScript file across the founder's 20-project audit corpus—Obsidian Companion allows users to create, edit, search, refactor, and organize Markdown notes directly beside their browser tabs without switching application windows.

It sits within a coherent trilogy of browser context tools alongside **Handoff** (single-focus session tracker) and **The Crucible** (prompt cleaner/vault), anchored by local-first data ownership and AI-assisted human-in-the-loop workflows.

---

## 2. Real User Problem Being Solved

### The Browser Context Break & Vault Clutter
- **Frictionful App Switching:** Knowledge workers, researchers, and founders who rely on Obsidian as their central knowledge base spend their working day in web browsers. Capturing thoughts, clips, or research notes required leaving the browser, switching windows to the desktop Obsidian application, locating or creating a note, pasting content, and formatting it manually.
- **Context Loss & Flow Disruption:** Switching windows breaks executive focus. The browser is frictionless and chaotic; jumping back and forth to Obsidian breaks the research momentum.
- **Unstructured Vault Pollution:** Standard web clippers paste raw HTML or messy unformatted Markdown into notes. Without immediate, lightweight cleanup, notes become cluttered "digital dumpsters" lacking YAML metadata, canonical tags, clean headings, or logical folder categorization.

---

## 3. Hidden System Failure Noticed by Founder

The founder identified two systemic flaws in existing browser clippers and note-taking software:

1. **The Cloud Lock-in / Privacy Paradox:** Existing browser-to-knowledge-base extensions almost universally require third-party cloud servers, user account logins, or remote APIs that store user notes on external servers. This undermines the core reason users choose local-first tools like Obsidian (privacy, control, data longevity).
2. **The Fragility of Rigid Background Automation:** Conventional tools attempt either *no organization* (leaving raw clips in an inbox) or *rigid background automation* (silent auto-categorization based on hardcoded rules or naive classifiers). 
   - Human note-taking is organic, evolving, and context-dependent. Rigid automation fails on messy, real-world notes because it misclassifies notes or buries them in wrong folders.
   - **The Founder's Insight:** Note processing requires an **asymmetric interaction model**: *input is allowed to be messy and rapid*, but the system provides *lightweight, local AI assistance* (cleanup, auto-titling, smart tagging, structured frontmatter generation) that the user can inspect, tune, and approve before persisting to their local vault.

---

## 4. Assumptions Made by Existing Tools & What Was Rejected

### Assumptions Rejected by the Founder:
- **Assumption 1: Note extensions must rely on cloud infrastructure or remote backends.**
  - *Rejected.* Obsidian Companion communicates exclusively with the user's local Obsidian instance over HTTP/HTTPS loopback (`127.0.0.1:27124` / `localhost`) using SSL certificates (`obsidian-local-rest-api.crt`). Data stays on device.
- **Assumption 2: Complex web applications require heavy frameworks (React/Vue) and build bundlers (Webpack/Vite).**
  - *Rejected.* The founder built a massive, responsive note workbench in 155KB+ of pure Vanilla JavaScript (`script.js`) with zero npm dependencies or build steps, loading instantly via Chrome Manifest V3.
- **Assumption 3: AI note organization should run as invisible background automation.**
  - *Rejected.* Obsidian Companion explicitly avoids rigid background automation. Smarts like "Smart Append," "Organize Note," and AI rewrites are user-triggered, customizable via audience prompts, and previewable.
- **Assumption 4: A browser clipper is just a "save button."**
  - *Rejected.* Obsidian Companion includes a full dual-pane Markdown editor/previewer, frontmatter template engine, search engine, file explorer, starter folder creator, and multi-note batch manager inside Chrome's side panel.

---

## 5. System Architecture, Technical Choices & Features

### Architecture & Specs
- **Platform:** Chrome Extension Manifest V3 (`sidePanel`, `storage`, `tabs`, `activeTab`, `scripting`).
- **Core Codebase:**
  - `script.js`: 155,675 bytes (~4,498 lines of vanilla JS).
  - `index.html`: 61,746 bytes (rich side panel HTML UI).
  - `manifest.json`: 752 bytes.
  - `obsidian-local-rest-api.crt`: Included certificate for local SSL REST communication.
- **Backend Communication:** Direct REST calls to Obsidian's `Local REST API` plugin running on `https://127.0.0.1:27124` with Bearer API Token authentication.

### Key Features & Workflow Integration
1. **Dual-Pane Workbench Editor:**
   - Dark-mode UI tailored for distraction-free writing.
   - Seamless toggling between raw Markdown source editing and live rendered HTML preview.
2. **Local AI Note Refactoring & Assistance:**
   - **Note Cleanup & Rewrite:** AI refactors messy drafts into structured, readable notes based on customizable target audience prompts (default prompt: *"Explain clearly for learning, define jargon briefly, and keep the structure easy to study"*).
   - **Title Generation & Auto-Tagging:** Automatically suggests clean document titles and extracts relevant tags based on content and user's `preferredTags` settings.
   - **Smart Append Flow:** Intelligently appends clip snippets into existing notes under appropriate headings rather than creating duplicate notes.
3. **YAML Frontmatter & Template System:**
   - Automatically injects standardized YAML frontmatter metadata:
     ```yaml
     ---
     type: obsidian-companion-note
     created_at: {{created_at}}
     tags: []
     ---
     ```
4. **Hover-Reveal File Explorer & Vault Management:**
   - Search notes across the active vault directory.
   - Collapse/expand folder trees.
   - Multi-note selection and batch deletion.
   - Pin frequently accessed notes (`PINNED_NOTES_STORAGE_KEY`).
   - One-click starter folder creation (`Sources`, `Notes`, `Projects`, `Archive`).
   - Real-time connection status indicator badge (green/red dot with test connection capability).

---

## 6. Evidence of Use, Real Metrics & Audit Findings

### Quantifiable Evidence (from YC Founder Audit):
- **Development Date:** April 20, 2026 (built during an intense April 2026 extension creation sprint yielding 35+ commits across `My_Extensions`).
- **Code Size:** `script.js` is **155,675 bytes** — the largest single JS file in the entire 20-project portfolio, proving high code density and sustained architectural discipline without external dependencies.
- **Git Commit Evidence:** Repo `My_Extensions` commit history confirms `obsidian companision` commit on April 20, 2026.
- **Directory Location:** `C:\Users\ijeom\OneDrive\Documents\Documents\GitHub\My_Extensions\Obsidian_Companion_Extension`.

### Verification Status:
- Load unpacked in Chrome via `chrome://extensions/` with Developer Mode enabled.
- Requires Obsidian desktop app with the `Local REST API` community plugin installed and enabled.
- Privacy audit passed: User API keys and endpoints are stored in `chrome.storage.local`. `obsidian-local-rest-api.crt` verified as localhost self-signed certificate.

---

## 7. What HERA OS Inherited from Obsidian Companion

Obsidian Companion served as a direct conceptual and architectural precursor to **HERA OS**. The core principles transferred include:

1. **Local-First & Data Ownership Standard:** HERA OS inherits the non-negotiable requirement that user knowledge, context, and generated artifacts belong locally to the user, eliminating cloud lock-in.
2. **Asymmetric Processing Pattern (Messy Input → Clean Output):** The foundational HERA execution model—allowing raw, unrefined user inputs and applying AI transformations to output structured, validated artifacts—was pioneered in Obsidian Companion's wrap-up and cleanup flows.
3. **Ambient Companion Architecture:** Operating as an omnipresent side panel beside primary work activities directly foreshadowed HERA's ambient operating system layer that stays present without hijacking focus.
4. **Human-in-the-Loop AI Control:** Rejection of invisible, rigid background automation in favor of controllable AI prompts, reviewable previews, and user-confirmed actions became a core design pillar of HERA OS.
5. **Canonical Frontmatter & Schema Integrity:** The use of standardized frontmatter headers (`type`, `created_at`, `tags`) to turn freeform text into machine-readable knowledge nodes laid the blueprint for HERA's memory and artifact management system.

---

## 8. Appendix: The Broader Obsidian Ecosystem in Founder's Work

Obsidian Companion was not an isolated project; it was part of a larger personal system built around Obsidian:

- **Obsidian Shortcuts (Native iOS App - SwiftUI):**
  - Path: `D:\Documents\High Level Shit\My_Apps_IOS\osidian-shortcuts` (April–May 2026).
  - Built with SwiftUI & WidgetKit. Allows customizable visual action tiles (icons, colors, target files, optional Claude AI proofreading, voice confirmation) that trigger Obsidian URI scheme actions on iOS. Features 45KB `WorkflowStore.swift` and 32KB `WorkflowEditorViews.swift`.
- **Handoff Extension:** Included optional bidirectional Obsidian vault synchronization for session wrap-ups.
- **The Crucible Extension:** Prompt vault included optional background mirroring of saved prompts into Obsidian `.md` files.
- **LifeLogger (iOS):** Exported monthly review documents as Markdown formatted for direct Obsidian vault import.

---
*Report compiled for Obsidian Companion Portfolio Copy Rewrite.*
