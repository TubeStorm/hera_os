# research-requests — External Research Prompts

This directory holds self-contained research prompts prepared for execution by Favour via ChatGPT or web browsing.

## Why this directory exists

External research (industry standards, portfolio strategy, competitor analysis, market context) should NOT consume coding-agent allowance by default. These prompts are written here so Favour can run them in a cheaper research tool and paste the results back.

## When to write a prompt here

The coordinator writes a prompt here when:
1. External knowledge is genuinely required to proceed
2. The coding environment has not been explicitly authorized to perform the research
3. The question is self-contained enough to be answered by a web search or ChatGPT

## Prompt file format

Filename: `YYYYMMDD-[topic].md`

Required sections:

```
# Research Request: [Topic]

## Why this matters
[How the answer will affect a specific portfolio or architecture decision]

## Exact questions
1. [Question]
2. [Question]

## Required source quality
[e.g., "Primary sources only — not Reddit/Quora", "Industry reports from 2023-2025"]

## Desired output format
[e.g., "Bullet list of key findings", "Short paragraph per question"]

## Maximum useful length
[e.g., "500 words total", "3-5 key findings per question"]
```

---

*No research requests currently queued.*
