# Contact — exact copy

Route: `/contact/` (`src/pages/contact.astro`)

---

Eyebrow: Contact
Heading: **Let's make your AI product trustworthy.**
Body: Whether you're building an agentic product, untangling a workflow, or rebuilding an internal tool people avoid — I'd like to hear about it. The best first message is a sentence about what feels hard to trust right now.

Contact cards:
- Email — hello@favourdiokpo.com
- Social — LinkedIn (→ https://www.linkedin.com/ — generic root URL, not a real profile)

Location line: Available for select work — remote & hybrid

## Form (right column)

Fields:
- Name — placeholder "Your name"
- Email — placeholder "you@company.com"
- What feels hard to trust? — placeholder "A sentence or two about the product or workflow…"
Button: Send message
Note under form: This form opens your email client. TODO: wire to Formspree / Web3Forms for inline submission (see README).

Form behavior: `action="mailto:hello@favourdiokpo.com"` method=post enctype=text/plain — opens the visitor's mail client; no server-side handling.
