# Claude Code Instructions (Autonomous + Documented Workflow)

## Mission
You are the primary implementer for this repository.
Optimize for: correctness, maintainability, calm trustworthy UI, and zero-run-cost static hosting on Cloudflare Pages.

You MUST keep an auditable development trail in /docs:
- what was changed
- why it was changed
- what alternatives were considered
- what decision was taken
- what commands were run (when relevant)
- what prompts/requests from the user drove the changes
- what tradeoffs remain

Assume you have broad permissions inside this repo (including git), but you must follow the safety boundaries below.

---

## Safety boundaries (hard rules)
- Never access files outside this repository.
- Never exfiltrate secrets or user private data.
- Never run destructive system-wide commands.
- Never force-push or rewrite published history unless explicitly instructed.
- Do not add paid services, databases, or backend requirements without explicit instruction.
- Keep the site static and Cloudflare Pages-friendly.

---

## Repository conventions
- Use React + TypeScript + Tailwind CSS.
- Use Vite build output (`dist/`) for Cloudflare Pages static deployment.
- Avoid "AI-looking UI": no flashy gradients, no neon, no heavy shadows, no excessive animations, no overly-generic hero patterns.
- Prefer semantic HTML and accessibility by default.

---

## Docs-first workflow (MANDATORY)
### Docs directory structure (create if missing)
Maintain these files under /docs (create and keep updated):

1) /docs/CHANGELOG.md
   - Human-readable release notes for noteworthy changes
   - Grouped by date

2) /docs/DEVLOG.md
   - Running developer diary
   - Must capture: what you did today, why, decisions, and uncertainties

3) /docs/DECISIONS.md
   - Decision log (mini ADRs)
   - Each entry: context, options considered, decision, rationale, consequences

4) /docs/REVIEW_NOTES.md
   - "Self-review" checklist notes before committing
   - Accessibility, SEO basics, visual polish, performance checks

5) /docs/PROMPTS.md
   - Append-only log of user prompts/requests that drove work
   - Include timestamp and a short paraphrase (do not include secrets)

6) /docs/COMMANDS.md
   - Commands executed (build/dev/test) and important outputs/errors (summarized)

> These docs should be concise and skimmable. Prefer bullet points.

### When to write docs
- BEFORE making a significant change: add a brief note in /docs/DEVLOG.md: what you intend to do.
- AFTER implementing: update /docs/DEVLOG.md with what was done and results.
- When you choose between alternatives: create/append a structured entry in /docs/DECISIONS.md.
- Before each commit: add a short self-review entry in /docs/REVIEW_NOTES.md.
- After each commit: update /docs/CHANGELOG.md if user-visible.

### What counts as a "decision"
Any of these MUST go into /docs/DECISIONS.md:
- framework/library/tool choice
- folder structure
- UI layout decisions impacting the design direction
- SEO approach
- deployment/build output settings
- any tradeoff taken to keep the site static/free

---

## Prompt capture (MANDATORY)
Whenever the user provides a request or requirements:
- Append to /docs/PROMPTS.md:
  - date/time (local)
  - short quote/paraphrase
  - link it to the work items you will do next
- If the user changes their mind, record that as a new entry.

---

## Execution and verification
- Prefer making changes directly; do not ask questions unless blocked.
- Run `npm run build` after meaningful UI or routing changes.
- If build fails, fix it immediately and record the root cause + resolution in /docs/DEVLOG.md and /docs/COMMANDS.md.

---

## Git workflow (if allowed)
You may commit frequently with small logical commits.
Rules:
- Do not mix unrelated changes in one commit.
- Commit message format:
  - feat: ...
  - fix: ...
  - chore: ...
  - docs: ...
  - refactor: ...
- Before committing:
  - update /docs/REVIEW_NOTES.md with a short checklist result
  - ensure docs reflect the change (DEVLOG/DECISIONS as needed)
- After committing:
  - update /docs/CHANGELOG.md if user-visible
- Push is allowed only if remote is configured and no policies are violated.

---

## UI/UX quality bar (anti-AI-looking)
### Visual principles
- Conservative typography and spacing
- Minimal color palette (neutral + deep green accent)
- Prefer plain backgrounds; avoid gradients unless subtle and justified
- Avoid “template hero” clichés:
  - no giant gradient blobs
  - no exaggerated glassmorphism
  - no excessive card grids
- Favor real-business layout patterns:
  - clear header with contact info
  - calm hero statement
  - simple sections with readable widths
  - straightforward footer

### Accessibility and semantics
- One H1 per page.
- Use proper landmarks: header/nav/main/footer.
- Ensure focus styles are visible.
- Ensure sufficient contrast.
- Use descriptive link text.

### SEO basics
- Per page: title + meta description.
- Use structured headings.
- Ensure meaningful text content (avoid image-only sections).

---

## Autonomy rules (how to proceed without asking)
When requirements are clear:
1) Create a short plan in /docs/DEVLOG.md.
2) Implement.
3) Verify with build.
4) Update docs:
   - DEVLOG (what happened)
   - DECISIONS (if any decision)
   - REVIEW_NOTES (self-review)
   - CHANGELOG (if user-visible)
   - COMMANDS (key commands)
   - PROMPTS (if driven by a new user request)
5) Commit with an appropriate message.

If blocked by missing info:
- Make the safest assumption consistent with:
  - static hosting
  - conservative real-company UI
  - minimal dependencies
- Record the assumption in /docs/DECISIONS.md.
- Proceed.

---

## Documentation formatting rules
- Keep entries short.
- Use dates: YYYY-MM-DD
- Use bullet lists, and include "Context / Options / Decision / Rationale / Consequences" for decisions.

END.
