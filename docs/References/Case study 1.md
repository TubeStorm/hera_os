# **Work Arrangement – Redesigning Internal Approvals at Scale**

# **Highlights**

* Led research across 4 organizational levels to uncover systemic workflow friction  
* Translated user pain points into 5 structured decision flows and phased product epics  
* Balanced UX clarity with HR policy constraints through templated comments and legal reviews  
* Acted as de facto product strategist, shaping roadmap and stakeholder direction without formal PO title

# **Context & Role**

The **Work Arrangement tool** is an internal system used by Ubisoft employees to formally request long-term remote work—typically for periods longer than one week—when circumstances like illness, family care, or accessibility challenges prevent them from commuting. After Ubisoft implemented a mandatory hybrid policy (Tuesdays and Thursdays in-office), the tool became essential for helping employees remain compliant without being penalized.

The tool was originally built under tight deadlines to support the policy launch. While it functioned on a basic level, it introduced a number of problems that quickly surfaced at scale:

* Confusing or inconsistent approval logic  
* Vague, emotionally cold system messages  
* No visibility into the status of a request once submitted  
* Friction between user expectations and HR policy constraints

Critically, HR policies also placed limits on what information could be displayed or automated within the tool. This introduced tension between **clarity for users** and **compliance requirements**—leaving employees unsure of where their request stood, and managers unsure of what language or process to follow.

What initially appeared to be a UI problem turned out to be a deeper issue of **trust, transparency, and emotional tone**. The tool didn’t just manage logistics—it governed decisions that touched health, family, and job stability. It needed to be both functional and human.

## **My Role**

When I joined the project, I was the sole UX designer assigned to Work Arrangement. I was expected to simply clean up some flows and polish the interface. But it became immediately clear that the deeper issues were systemic, emotional, and strategic—not just design-related.

Over the course of four weeks, I led end-to-end research across four organizational levels, uncovered cross-role tensions, and collaborated closely with HR, engineering, and two product owners. While I’ve taken on product responsibilities internally—defining priorities, scoping features, and shaping our next Epic—I’m now seeking to grow in a team where product ownership is formally supported and recognized.

### **Where I’m headed now**

This case study documents the shift from being the **person fixing the UX** to the **person driving the product forward**, while navigating legacy systems, HR policy tension, and company-wide user needs.

## **Project Scope**

* **Users Impacted:** Ubisoft Canada full-time employees, with future global rollout planned  
* **Research Participants:** 12+ interviewees across employees, managers, directors, and HR committee  
* **Stakeholder Groups:** HR, Engineering, Product Owners, Directors  
* **Tool Role:** Supports compliance with Ubisoft’s mandatory hybrid policy

## **Who I Worked With**

1. **Claude (Temporary PO):** Co-led priorities, feature breakdowns, and roadmap direction. Currently mentoring me into full PO responsibilities.  
2. **Véroniq (HR Product Owner):** Represented policy, approvals, and long-term compliance needs.  
3. **Aude (PO, Compass Team):** Supported system logic and stakeholder alignment from a PO perspective.  
4. **Engineering Team:** Partnered on feasibility, testing flow logic, and implementation planning.  
5. **Managers & Directors (End Users):** Provided direct feedback on usage pain points and approval decisions.  
6. **Employees (End Users):** Shared critical insights that reshaped how we framed decision messaging.

# **Problem Landscape & User Research**

At first glance, Work Arrangement appeared functional. Employees could submit requests. Managers could approve or escalate them. But once I began user research, it became clear the tool was not working as intended. It created emotional strain, procedural confusion, and tension across roles.

The root problems were not just usability issues. They reflected a deeper misalignment between what employees needed, what managers were equipped to do, and what HR policies permitted.

## **Core Problems Identified**

* **Status messages felt cold and unclear**  
* Employees received automated updates like “Decision made. Contact your manager,” without knowing what the decision was or why it had been made. For those navigating illness, burnout, or care responsibilities, this language felt abrupt and impersonal. The lack of transparency added to their stress.  
* **The manager form was unreliable and confusing**  
* Fields were mislabeled or duplicated. Managers were unsure what was required. Some users lost work after submitting without manually saving, which led to unnecessary repetition or abandonment.  
* **Field intent was vague**  
* One example that came up repeatedly was a field labeled “Performance.” Managers asked whether they were supposed to evaluate past behavior, predict future outcomes, or something else. Most ended up writing long explanations in the comment box because the fields themselves lacked clarity.  
* **Employees had no visibility into their request**  
* After submission, employees had no way to track what was happening. If a manager made a decision, it was not reflected in the tool. They had to wait until their manager reached out, if they did at all. This silence caused frustration, confusion, and extra follow-up.  
* **Policy constraints limited what could be communicated**  
* HR policies restricted what the system could show. Manager comments could not be displayed to employees without legal review. This meant key information had to be withheld or heavily filtered. These policy boundaries created emotional distance between the system and its users.

## **Research Approach**

I conducted group interviews across four user types:

1. **Employees** – Those making the requests  
2. **Direct Managers** – First-level approvers  
3. **Other Managers** – Middle management occasionally involved in partial approvals  
4. **Directors & HR Committee Members** – Policy enforcers and stakeholders

By interviewing participants across different levels, we identified points of friction that weren’t just individual frustrations—they were **systemic misalignments**. A field might make sense to HR but confuse managers. A message might satisfy policy but emotionally alienate employees.

### **Feedbacks**

*“It feels like I’m in trouble.”* – John, Employee

*“Why can’t I just see the decision after it’s made?”* – Lucy, Employee

*“Like the question Performance? Are they asking us to evaluate these people or asking if they work?”* – Jane, Direct Manager

*“We put all the info in the comments because the fields don’t make sense.”* – Dan, Direct Manager

*“Most of the time I just rely on email. I barely use the tool unless I have to, since it shows nothing anyways.”* – Ben, Other Manager

These interviews shifted the project’s framing. This was not a tool that needed minor UX polish. It was a broken conversation between roles, hidden beneath a working interface. The challenge became how to rebuild clarity and trust within the constraints of policy, without losing sight of the human context behind every request.

# **From Research to Prioritized Issues**

Before we moved into brainstorming, Claude and I sat down in person to review every part of the existing Work Arrangement tool. Our goal was to surface and document real user issues without jumping ahead to solutions.

We took annotated screenshots of each key screen and imported them into Miro. Together, we walked through the interface screen by screen and flagged every issue users had raised during interviews. Anything confirmed as a problem was marked in red. If further clarification from Véroniq was needed (especially where policy or legal restrictions might apply) we added a blue sticky note instead.

Over the course of this review, we documented around 13 major issues, each tied to specific interactions or decision points. These issues were grouped under three headers in the working file, reflecting their location or type.

1. Employee Form  
2. Manager Form  
3. Table View  
4. At this stage, we deliberately held off on proposing fixes. The goal was to keep the analysis clean — to focus on surfacing what wasn’t working, not solving it prematurely.

Even so, we couldn’t help but start noting patterns. Certain issues repeated across pages. Others revealed deeper conflicts between what the tool allowed and what managers or employees expected. These observations became the foundation for our brainstorms that followed.

## **Examples of Issues Identified**

Here are a few of the real breakdowns we documented:

* **The Approver column was misleading**  
* When a request was escalated to the committee, the column would say “Committee”, and it looked like the committee would publish the final decision. In reality, the direct manager still had to publish it, which caused delays and confusion.  
* **Blocked approval options were not explained**  
* Managers were prevented from approving certain requests (such as those exceeding 8 weeks), but the system did not explain why. This led to frustration and miscommunication with employees.  
* **Requests could not be sent back**  
* If a manager noticed a mistake or missing info, there was no way to return the request. The only workaround was to cancel the request entirely and ask the employee to start over.  
* **Important buttons were buried or unclear**  
* The "Publish" button (essential to finalizing a decision) was placed at the bottom of the screen and often missed. Combined with vague wording like "To Publish," this led to many incomplete submissions.

This review became the foundation for everything that followed, not only in our brainstorm sessions, but in how we mapped future flows and phased the work into epics.

## **Artifact: Screenshot from Early Tool Review**

*Annotated screenshots captured during in-person review. Red tags indicate confirmed UX and logic issues. Blue notes highlight instructions that guided the feature, pulled directly from the policy mandate.*

* Hey\! Why Can’t See The Detailed Image?

Image intentionally blurred to comply with Ubisoft NDA. All original (un-edited) visual materials and content are the property of Ubisoft and used here with internal project context only.

# **Policy-Aware Brainstorming**

Once the issues were documented and grouped by page, I led a live brainstorm session in Miro with Claude, Véroniq, and Aude. The goal was to move from surface symptoms to feasible, policy-compliant design solutions.

To make the session accessible to everyone in the room, I organized the Miro board by **interface page**, not by theme. We used three clear groupings:

1. Employee Form  
2. Table View  
3. Manager Form

This structure gave each participant the context they needed. Véroniq, who previously owned the tool from HR’s side, rarely interacted with the employee experience directly. Aude, who was new to Work Arrangement, had only used the Employee side and had no exposure to the manager side. By walking page by page, we avoided confusion and made sure every idea had shared context.

## **My Role as Facilitator**

As the lead, I opened the session by restating the business goals behind the tool. I explained that it needed to balance three priorities:

* Empowering managers to take action on requests  
* Helping Ubisoft stay compliant with regional HR policy  
* Remaining flexible enough to roll out globally in the next six to eight months

I also summarized the user pain points, reminded the team of our constraints, and clarified that our goal was to propose solution paths, not lock anything in.

While I contributed ideas, I mainly focused on keeping the session structured. I guided the team through each page’s issues in order, and made space for every participant to share solutions or concerns. When needed, I slowed us down to clarify whether an idea aligned with known legal requirements or needed to be flagged for legal review later.

## **Example: Clarifying Manager Comments**

One major issue flagged during research was that employees wanted to see the decision made on their request. Managers also expressed interest in **including a final comment** that would explain why a request was accepted or refused. This felt like a human, helpful solution, but Véroniq immediately brought in the legal perspective.

She reminded us that **free-text comments made by managers** can be risky. Without guidance, they might include informal language that exposes Ubisoft to liability or internal conflicts. Based on this, we explored multiple options:

* Should we allow comments at all?  
* Could we require managers to choose from a **bank of approved message templates**?  
* Could those templates be linked to the reason for acceptance or refusal?  
* Could the committee’s existing templates be expanded and standardized across all decisions?

We decided to move forward with “Templated comments for all final decisions” and this became one of the first solutions we greenlit. We also proposed pulling anonymized examples from existing manager comments to create a library of common messages that could be refined over time.

This process: identifying a desired outcome, surfacing risk, and reframing the solution to fit, was repeated throughout the session.

## **Our Brainstorm Format**

We worked through each interface page one at a time, using the Miro board to walk issue by issue, page by page. This helped each participant ground their ideas in the tool itself, rather than abstract feature categories. Here’s how we structured the session and what it revealed.

### **1\. Employee Form (request creation)**

This section had the fewest issues. We focused on improving submission clarity and refining feedback cues once a request was sent. Most of the pain points here were small but foundational — for example, making sure the employee understood when their submission had been received, and what would happen next.

### **2\. Table View (request inbox)**

This is where status logic and flow visibility came to the forefront.

As we reviewed the page, it became clear that the tool supported only two flows — approval or rejection. Every other case, including escalations or modifications, was handled offline or left ambiguous. We identified this gap and began to define five structured flows, accounting for all roles and states in the system.

We also introduced a **new accountability step**, designed to ensure that a manager speaks with the employee before finalizing any decision. This was added as a required check across all flows — not just a UI prompt, but a structural safeguard to center human contact.

### **Flow Overviews:**

1. **Did You Speak with the Employee?**  
2. A required confirmation step before publishing. Used across all flows to emphasize real communication over silent automation.  
3. **Manager is Final Approver**  
4. The simplest case. Request is approved or denied directly by the first-line manager.  
5. **Manager Sends Back to Employee**  
6. Request needs clarification or revision. The tool currently offers no way to send it back, so we proposed a revision loop.  
7. **Request Escalated to Committee**  
8. The manager sends the request up to a committee or another manager for review. Final decision and publish remain with original manager.  
9. **Escalated Then Returned**  
10. Committee sends request back to original manager for final decision and publication. This clarified a common ambiguity in ownership.

### **3\. Manager Form (decision-making)**

This was the most legally sensitive area. We focused on improving:

* The language around blocked actions  
* Clarity on who holds publishing responsibility  
* The implementation of templated decision comments reviewed by legal  
* The integration of the “Did you speak with the employee?” step as a mandatory checkpoint

### **Risk-Aware Brainstorming**

Throughout the brainstorm, we maintained a “Review with Legal” tag for any ideas that raised concerns about compliance or policy. This created a visible system for **risk management**, not risk avoidance. Instead of shutting ideas down, we logged them in a separate backlog for legal and policy evaluation.

This allowed the brainstorm to stay productive and expansive, while still honoring real-world constraints.

# **Flow Mapping & Decision Ownership**

The tool originally supported only two outcomes (approve or reject), and everything else was handled informally. So our goal was to create **predictable pathways** for both users and systems — and to make ownership of decisions visible at every step for all parties.

## **1\. Mini-Flow: Did You Speak with the Employee?**

**What it covers:**

This small but critical flow introduced an accountability step before any decision was published. Instead of assuming communication had taken place, the tool now prompts the manager to confirm whether they spoke with the employee. This adds emotional care and policy alignment without introducing delay.

*Required checkpoint added to all decision flows. Managers must confirm communication before publishing any outcome after the final decision is made.*

## **2\. Manager is the Final Approver**

**What it covers:**

This is the default flow for most standard requests. The manager reviews, approves or rejects, confirms the meeting, and publishes. The employee sees the decision and receives a templated message aligned to the outcome.

**What it solves:**

Before this, decisions were published silently. Employees were often confused or anxious after submission. This adds a clear, human loop to the end of the process.

*Default direct approval flow. Includes confirmation prompt and templated decision notification.*

## **3\. Manager Sends Request Back to Employee**

**What it covers:**

This flow introduces a recursive loop for correction. If a manager finds missing or incorrect information, they can return the request to the employee. Notifications are sent at each handoff to prevent silence or confusion.

**What it solves:**

Previously, managers canceled the request entirely, asking the employee to resubmit. This adds transparency and reduces redundant work.

*New revision loop added to allow manager-employee collaboration without cancellation.*

### **4\. Direct Manager Sends to Committee**

**What it covers:**

This flow applies when a request exceeds standard policy limits or needs escalation. The manager forwards the request to a higher-level reviewer or committee, who makes the decision. Final publishing still rests with the original manager.

**What it solves:**

Previously, this process was handled offline or via email. This new structure documents escalation while keeping accountability with the originating manager.

*Escalation flow that separates decision-making from final publishing responsibility.*

### **5\. Escalated Request is Sent Back to Direct Manager**

**What it covers:**

Sometimes, the committee needs the original manager to make changes before a decision can be finalized. This flow supports that handoff and return cycle. The manager receives clear instructions and a second chance to finalize.

**What it solves:**

This was a major gray area in the old tool. By clearly defining return logic and notifications, this flow closes the loop for shared ownership.

*New return path clarifies decision authority and reduces email-based follow-ups.*

# **Epic Breakdown & Product Roadmap**

After defining the flows, we translated those UX outcomes into five phased epics. Each one was organized around a core system theme and sequenced based on feasibility, impact, and dependency.

We built the roadmap collaboratively in Miro. While the design direction is clear, implementation timelines are still pending validation with our development lead. Once scoped, we’ll present to leadership for approval and prioritization.

## **Epic 1: Table View Redesign**

This epic targets core usability and structure within the request dashboard. Updates include:

* Splitting the overloaded **Status** column into two distinct fields: **Status** (system state) and **Decision** (approval outcome)  
* Renaming **Approver** to **Assignee** to reflect real responsibility  
* Adding **Created Date** and **Duration (in weeks)** to improve assessment clarity

These changes reduce friction for managers but also clean up how status and decision events are logged. The separation of fields creates a more structured data model that can be used for internal reporting and compliance tracking.

*Planned improvements to the manager dashboard. These changes create clarity for users and introduce cleaner, audit-ready data structure.*

## **Epic 2: Status Logic Alignment**

This epic restructures the system’s internal status logic to reflect the five real-world flows defined earlier. We updated both system states and what each user role sees.

* Rewriting unclear status labels (e.g., "New" becomes "To Do")  
* Aligning backend logic to reflect real request ownership across roles  
* Updating color and visual hierarchy of status chips for readability  
* Keeping current email behavior unchanged during this phase

This work is foundational. It transforms status logic from a cosmetic label into a **reliable signal** that aligns across UX, data, and organizational workflow.

## **Epic 3: Email & Notification Framework**

Once statuses and roles are clearly defined, we’ll redesign the notification system.

* Revising email language to reflect new status and decision logic  
* Mapping triggers to avoid confusion and over-communication  
* Structuring messages by role, event type, and next step expectation

This epic ensures that communication reflects **not just user experience needs**, but also creates **a transparent and consistent log** of system events. Each notification becomes part of a meaningful data trail.

### **Epic 4: Manager Message Templates**

This epic brings compliance, clarity, and consistency to final decisions.

* Creating a set of templated messages tied to reasons for approval or refusal  
* Expanding the committee’s template logic to all final decisions  
* Tagging templates for traceability and legal clarity  
* Reviewing with HR and Legal to confirm acceptable phrasing

These templates are not just tone tools — they are **structured decision metadata**. They eliminate the ambiguity of free-text comments and help the system log, surface, and track outcomes without manual intervention.

### **Epic 5: Form Page Redesigns**

This epic focuses on reworking the key interaction pages for both employees and managers.

* Showing **request duration** on both pages for contextual clarity  
* Moving **Cancel Request** to be employee-only, with new visual hierarchy  
* Relocating **Publish** to the top-right for visibility and interaction consistency for the manager page.  
* Adding inline links to HR policy wherever a manager is required to assess sensitive fields

These changes simplify action, reduce role confusion, and **embed HR compliance as a navigational aid** — not a blocker. They also prepare the tool for broader rollout with clearer alignment between form content and system logic.

## **Next Steps**

We are currently preparing to validate technical feasibility with the development lead. Once scope is confirmed, we’ll present our phased roadmap and early concepts to the department director. This will allow us to confirm which features move forward, which need to be deferred, and how we communicate value to the client.

A summary board will be created to support leadership presentations. Once buy-in is secured, we’ll move to mid-fidelity mockups and begin client-facing presentations, ensuring we only pitch what we know is viable.

# **Driving Product Strategy Without Formal Ownership**

One of the defining aspects of this project was leading product-defining decisions without holding formal product ownership.

I was initially brought in as the sole UX designer to address surface-level interface issues. But through research, system mapping, and multi-stakeholder collaboration, I became the person shaping how we framed problems, prioritized improvements, and sequenced delivery.

Strategic shifts such as separating the status and decision columns, introducing the accountability flow before publishing, and replacing free-text decision comments with legally vetted templates all began as insights from user interviews. These ideas were not part of the original scope. I translated them into viable product proposals, facilitated alignment between HR, engineering, and product leadership, and ensured they were structured into epics that could be scoped and validated.

At each step, I acted as the bridge between UX, policy, and technical feasibility. While my title remained UX Designer, my role in Work Arrangement evolved into leading roadmap direction and cross-functional planning. Every decision I proposed was grounded in both user experience and long-term system integrity.

Trained in applied data systems through MIT xPRO, I approached this project with both a user-centered and systems-level mindset—designing scalable patterns, structured flows, and traceable decision logic.

