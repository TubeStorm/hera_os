# Handoff Report: Obsidian Shortcuts Copy Critique

**Working Directory**: `d:\Documents\favour-ai-product-portfolio\.agents\explorer_critic_obsidian_shortcuts`  
**Author**: Explorer / Critic Agent  
**Date**: 2026-07-25  

---

## 1. Observation

Direct inspection of `d:\Documents\favour-ai-product-portfolio\src\data\lineage.ts` lines 188–201 reveals:

```typescript
188:   {
189:     id: 'obsidian-shortcuts',
190:     title: 'Obsidian Shortcuts',
191:     thread: 'orchestration',
192:     date: 'May 2026',
193:     meta: 'Native iOS · visual workflow builder',
194:     mark: 'OS',
195:     tier: 'ancestor',
196:     video: 'videos/obsidian-shortcuts.mp4',
197:     problem: 'Getting to one exact place in my vault took the same taps every single time.',
198:     rejected: 'Repeating a workflow by hand because it’s “only a few steps.”',
199:     built: 'A visual builder: design an action tile once — icon, destination, action — then run the whole workflow as one tap.',
200:     inherited: 'Workflows designed once and executed as a single intentional action.',
201:     status: 'Built and running on my phone, May 2026.',
202:   },
```

Key observable attributes:
1. `meta`: `'Native iOS · visual workflow builder'`
2. `problem`: `'Getting to one exact place in my vault took the same taps every single time.'`
3. `rejected`: `'Repeating a workflow by hand because it’s “only a few steps.”'`
4. `built`: `'A visual builder: design an action tile once — icon, destination, action — then run the whole workflow as one tap.'` (Line 199 contains two em dashes `—`).
5. `inherited`: `'Workflows designed once and executed as a single intentional action.'`

Comparison observations in the same file:
- Line 181 (`obsidian-companion`): 10 lines of detailed technical mechanics (`127.0.0.1:27124`, `Local REST API`, `YAML frontmatter`, `Vanilla JavaScript 155KB`).
- Line 161 (`tabsuite`): 5 lines of detailed technical mechanics (`Chrome Side Panel`, `Gemini Nano`, `Prompt API`, `177KB Vanilla JS`).

---

## 2. Logic Chain

1. **Observation 1 (Line 197 & Line 199)**: `problem` uses vague terms ("one exact place", "took the same taps") without quantifying taps or describing the mobile Obsidian friction. `built` uses abstract product marketing terms ("visual workflow builder", "action tile", "destination, action").
   * **Reasoning**: This fails the criteria for specific, concrete engineering descriptions. The reader does not know what tech was used (e.g. Swift/SwiftUI, Obsidian URIs) or what "destination, action" does.
2. **Observation 2 (Line 199 & Line 200)**: `built` states "design an action tile once... run the whole workflow as one tap" and `inherited` states "Workflows designed once and executed as a single intentional action."
   * **Reasoning**: This exhibits formulaic LLM slogan symmetry ("design once -> run as one tap" / "designed once -> executed as single intentional action"). Furthermore, `inherited` repeats the premise of `built` rather than explaining how the project influenced HERA's architecture or agent orchestration.
3. **Observation 3 (Line 199)**: `built` contains `'...design an action tile once — icon, destination, action — then...'`.
   * **Reasoning**: Two em dashes in a single sentence break narrative flow and violate clean prose guidelines.
4. **Observation 4 (Line 195 vs Lines 108–186)**: `obsidian-shortcuts` is listed under `tier: 'ancestor'`, but its copy length and depth are minimal compared to peers (`obsidian-companion`, `tabsuite`, `crucible`, `handoff`).
   * **Reasoning**: Depending on portfolio design intent, `obsidian-shortcuts` either needs a refined concise rewrite or an expanded technical paragraph matching peer ancestors.

---

## 3. Caveats

- Investigation was strictly read-only on `src/data/lineage.ts`. No source code modifications were made.
- The underlying codebase implementation of `obsidian-shortcuts` (e.g. iOS app repository or video asset) was not inspected; evaluation is based strictly on the text copy in `lineage.ts`.
- The decision to either keep a concise 1-sentence format or expand into multi-line paragraphs depends on the portfolio editor's structural preference for non-featured `ancestor` items.

---

## 4. Conclusion

The copy for `obsidian-shortcuts` suffers from:
1. **Marketing Fluff & Vagueness**: "one exact place", "visual workflow builder", "action tile" lack concrete friction context.
2. **AI Patterning**: Redundant slogan structure between `built` and `inherited`.
3. **Punctuation Flaws**: Double em dash in line 199 and curly smart quotes inside standard string delimiters.
4. **Broken Narrative**: `inherited` fails to connect the single-tap action tile concept to HERA or broader orchestration mechanics.
5. **Jargon**: Unexplained abstract labels ("destination, action").

A full critique report with two suggested rewrite options (concise vs expanded) has been saved to `d:\Documents\favour-ai-product-portfolio\.agents\explorer_critic_obsidian_shortcuts\critique_report.md`.

---

## 5. Verification Method

To independently verify these findings:
1. Open `d:\Documents\favour-ai-product-portfolio\src\data\lineage.ts`.
2. Inspect lines 188–201 for `id: 'obsidian-shortcuts'`.
3. Confirm the double em dash in line 199 (`built`).
4. Compare lines 188–201 against lines 108–186 (`obsidian-companion`, `tabsuite`, `crucible`) to verify the depth gap between ancestor entries.
5. Review `d:\Documents\favour-ai-product-portfolio\.agents\explorer_critic_obsidian_shortcuts\critique_report.md`.
