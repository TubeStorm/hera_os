# **RPM UI Revamp & Design System**

The **RPM Production** (Resource Planning & Management) tool is Ubisoft’s primary internal platform used to manage staffing across all projects. It allows teams to plan who is working where, when people will be available, and whether new roles need to be opened.

After moving from game UX into systems design, this became my first project on the Compass team. I chose internal tools because I wanted to fix what was slowing people down. From day one, I worked across functions to uncover blind spots, clarify workflows, and earn trust in a tool that had become frustrating for over 1,000 users.

This case study shows how I applied research and UI systems thinking to clean up over 40 modals, standardize patterns, and bring consistency back to a critical internal tool.

## **My Team**

As the sole UX designer on RPM, I led the end-to-end redesign of its modal system and broader user workflows. This wasn’t just a UI cleanup—it was a phased systems revamp across 40+ modals, each affecting core features like Gantt planning and position/request syncing.

I worked closely with:

* **Clement (PO)** to align UX priorities with roadmap goals  
* **Sybil (Dev Lead)** to ensure feasibility and reduce delivery friction  
* **Our Business Analysts** to break the work into phases and support Jira planning

I also mentored developers and budding UI artists on design thinking, helping the team shift from ad-hoc fixes to pattern-driven decisions.

### **Tools Used**

**Figma**

**Balsamiq**

**Jira**

**Teams**

## **The Problem**

When I joined the RPM team, the tool was drowning in complaints—but no one had mapped the root causes. A recent redesign had changed both its interface and workflows, but it was done without UX input or a clear understanding of its users. The result? A fresh coat of paint over foundational problems.

There was no structured research. No user segmentation. The product owner was doing reactive one-on-ones, but couldn’t see the bigger picture. (who used RPM, how they used it, or what pain points mattered most.)

I proposed a formal research process to uncover the real user landscape and create clarity around what to fix, for whom, and why.

### **\*\*The Goal\*\* Rebuild trust through insight, not guesswork. Research Insights**

To anchor our roadmap, we launched a global Satisfaction Survey and received **101 responses** from users across Ubisoft. The results surfaced core disconnects between usage frequency, satisfaction, and role.

**Who Was Using RPM (and Struggling)**

* \*\*Seniority didn’t help\*\*: Long-time users were the most frustrated, showing that time spent with the tool didn’t ease confusion. \*\*Frequent users\*\* rated RPM lowest for saving time. Both new and experienced users reported friction, with an average score of \*\*2.16/5\*\*. \*\*Project Managers\*\* were the largest group and the least satisfied 3.3\*\*/5\*\*, prompting us to run usability research and dig deeper. **Further Analysis**  
* **Job Family Distribution**  
* Project Managers represented the largest group at **38%**, but had the lowest average satisfaction score (**3.3/5**). Finance users, although fewer, were more satisfied overall (**3.9/5**), with HR close behind (**3.4/5**).  
*   
* **Core User**  
* \*\*Project Managers\*\* were RPM’s primary users. They relied on it daily to plan and manage resources. \*\*Finance teams and HR\*\* were secondary users, using RPM to track and report on project data. \*\*Executives\*\* were tertiary users. They used RPM for high-level overviews, though often more as stakeholders than operators. **How Project Managers Used RPM**

**![Embedded widget][image1]**

* **Seniority Distribution**  
* While over half of users had been using RPM for more than two years (54%), this group reported a low satisfaction score of **3.2/5**. Surprisingly, newer users (\<6 months) rated RPM highest (**3.5/5**), while mid-tenure users had the lowest score of all (**2.6/5**).  
*   
* **Usage Distribution**  
* The more often users engaged with RPM, the worse the experience felt. A combined **62%** of users accessed RPM several times a week or more.  
* Despite high engagement, the tool received a low **2.16/5** rating on its ability to S**ave Time**; suggesting frequency bred friction, not fluency.  
* 

**What Users Said**

The overall satisfaction score landed at **3.5/5**, but the pain ran deeper in specific areas.

\*\*FRUSTRATED\*\* Too many clicks for simple tasks \*\*OLD\*\* The tool felt outdated and visually cluttered \*\*OVERWHELMED\*\* Users didn’t know where to look or what to do next **Where They Struggled Most**

Across open-ended responses and follow-up interviews, three UX problem areas kept appearing:

* **Managing Positions and Requests** – Too many steps, confusing modals, Lack of feedback, unclear next actions  
* **Finding Features** – Users mentioned not being able to find key features and primary action buttons such as “Add Position”.  
* **Inconsistent UI Behavior** – Buttons worked differently across screens, and data often felt unreliable or out of sync

These insights pushed us to act. We prioritized the Ribbon first, where users couldn’t find basic functions. Then we moved to the Modals, where broken flows and inconsistent behavior created the most friction. The goal wasn’t just to clean up the UI. It was to restore trust in how RPM actually worked.

## **Our Vision**

Our research revealed a deeper problem than missing features or bad UI. Users didn’t trust RPM. They couldn’t find what they needed, didn’t understand how things worked, and constantly second-guessed the tool’s behavior.

A full rebuild wasn’t realistic. So I proposed a phased UX strategy focused on restoring confidence, simplifying interactions, and reinforcing system-wide consistency.

We started where the pain was most visible, the Ribbon. This was RPM’s primary navigation surface and one of the most cited friction points in both surveys and interviews. Users didn’t understand the structure, misread icons, and assumed entire features were missing.

Redesigned Ribbon

Redesigned Ribbon

After addressing navigation and visibility, we moved deeper into RPM’s most repeated and high-stakes interaction points, the Modals. These affected staffing, requests, and planning decisions, and were constantly triggering errors, rework, or support tickets.

We audited over 40 modals, focusing first on the three that shaped the core workflow: Position, Request, and the Advanced Date Editor. We partnered with the product team to rebuild these interactions from the ground up.

Collage of Redesigned Modals

## **UX Alignment Kickoff**

Before jumping into design work, I ran a cross-functional brainstorm session with our product, dev, and analyst teams to map the biggest UX breakdowns in RPM. We needed to align on which problems were most urgent, which ones we could realistically solve, and how to structure our roadmap. This session helped us turn user complaints into prioritized UX focus areas for both navigation and workflows.

During the brainstorm we had 3 main objectives.

### **🎯 Identify key usability issues in the Ribbon and Modal UI using user feedback 🎯 Explore multiple design solutions for each pain point 🎯 Prioritize based on impact vs effort for handoff to the BA and roadmap planning Mapping Pain points**

We started with a UI walkthrough of the Ribbon and Modal interactions, using real user quotes and our own heuristic findings to mark issues.

We mapped over 25 distinct issues across the three modals and navigation ribbon, ranging from button clarity to modal behavior breakdowns.

🔴 UX problems

🟢 Early solution ideas

🔵 Team notes

### **Prioritizing**

After brainstorming over 20 solutions, we used dot-voting and an Impact vs Effort matrix to prioritize actions. The top items became our “quick wins” for early delivery, while more complex flows were phased into future sprints.

## **Ribbon Redesign**

**The Ribbon was RPM’s primary navigation surface, so tackling it was our first step to victory. We focused on two things: clarity and scalability.** We grouped related actions, exposed frequent tools, and restructured the layout around how teams actually worked; while leaving enough space for new features and system growth.

**Before**

**After**

\*\*Actions Tab\*\* High-frequency actions now left-aligned and clearly labeled \*\*Display Tab\*\* Gantt and Table tools relabeled and visually grouped \*\*Presets Tab\*\* Quick views separated for clarity and future scalability **Pain Points Identified**

**![Embedded widget][image2]**

**Our Design Response**

**![Embedded widget][image3]**

## **Modal Redesign**

We audited 40+ modals and focused on the 3 most critical. Position and Request modals were cleaned up based on heuristics and guidelines. Advanced Date Editor was restructured at the interaction level.

### **1\. Position Modal**

The Position Modal is where project managers define roles, assign dates, and initiate staffing. It's one of the most-used screens in RPM and a core point of failure in the tool. Confusion here delayed staffing decisions, triggered duplicate entries, and led to frequent support requests, often for simple tasks.

**Before**

**After**

**Pain Points Identified**

**![Embedded widget][image4]**

**Our Design Response**

**![Embedded widget][image5]**

### **2\. Request Modal**

The Request Modal is where staffing gets finalized. It connects the defined role (Position) with an actual resource, making it essential to both project planning and HR operations. The previous design caused confusion, decision delays, and downstream errors. It lacked visual hierarchy, scattered critical inputs, and forced users to dig for approval actions.

**Before**

**After**

**Pain Points Identified**

**![Embedded widget][image6]**

**Our Design Response**

**![Embedded widget][image7]**

### **3\. Advanced Date Editor**

With the scope defined, we began exploring improved flows, starting with the **Advanced Date Editor**, one of the most error-prone modals in the system due to the confusing user flow.

Before

**Sketching & Flows**

I mapped the original flow users followed when editing dates. The sequence was rigid, ambiguous, and offered no clear separation between Start and End Date interactions. With the old flow mapped I proposed splitting the logic for Start and End Date editing. This allowed users to make precise, independent adjustments, reducing accidental changes and supporting clearer validation.

Before

After

\*\*Updated Flow\*\* 1\. User selects whether to edit Start Date or End Date 2\. User chooses from three options: \- Set Date \- Move Date \- Use Original Dates (new option added for clarity) 3\. User inputs values 4\. System runs validation and displays contextual feedback I translated these sketches into a shared flow in Miro, allowing the team to validate logic and provide implementation feedback.

After

## **System Alignment**

Throughout the project, we worked closely with Ubisoft’s shared design system team **EGG** to adapt and expand the system to fit RPM’s needs. This collaboration helped us define consistent component behaviors, simplify handoff, and keep both UX and dev teams aligned.

Because of that shared foundation, developers were able to use the exact same components from our designs in production. The result: faster implementation, fewer inconsistencies, and a tighter feedback loop between teams.

This was about building a product that could scale with confidence, using internal resources in smarter, more integrated ways.

UX Mockup \- Position Modal

UI Design \- Position Modal

RPM Website \- Position Modal

## **What Came Next**

The end of this case study wasn’t the end of RPM’s evolution. Since completing the core redesigns, we’ve continued shipping high-impact updates that were made possible by the foundations we put in place.

1. **Date Syncing Between Position and Request**  
2. Solved a long-standing pain point by aligning start and end date logic, reducing user error and eliminating sync-related confusion across modals.  
3. **Expand and Contract in the Gantt**  
4. Our most-requested feature—bringing speed and flexibility to setting start or end dates for positions and requests directly in the Gantt view.  
5. **Excel Import & Export**  
6. Designed for power users, this feature supports massive data changes with confidence.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAApJREFUeF5jYAAAAAIAAd6ej78AAAAASUVORK5CYII=>