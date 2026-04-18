# AI Guidelines

This document defines how to use AI tools consistently in this project.

## Purpose

Use AI to improve speed and quality, not to replace engineering judgment.

## Core Principles

- Keep prompts specific and task-focused.
- Prefer small, verifiable changes over large rewrites.
- Preserve existing style and architecture unless a change is required.
- Ask AI for alternatives when tradeoffs matter.
- Verify all AI output before merging.
- before executing any tasks, always ask for clarifications.
- give shortest possible answers in the chat instead of long repetitive contents.

## Code Generation Standards

- Keep diffs minimal and focused on the requested change.
- Do not silently rename public symbols.
- Add brief comments only where logic is non-obvious.
- Avoid introducing unnecessary dependencies.
- Follow TypeScript strictness and existing lint rules.

## Testing and Validation

- Run lint and tests for changed areas.
- If no tests exist, add at least one meaningful test when practical.
- Manually verify UI changes on desktop and mobile breakpoints.
- Confirm no console errors or accessibility regressions.

## Security and Privacy

- Never paste secrets, API keys, or tokens into prompts.
- Do not expose private user data in examples.
- Treat AI suggestions as untrusted until reviewed.
- Validate input handling and output encoding on user-facing features.

## Frontend-Specific Guidance

- Maintain semantic HTML and keyboard accessibility.
- Ensure color contrast and readable typography.
- Avoid generic layouts; design with clear visual intent.
- Keep performance in mind: avoid heavy bundles and unnecessary rerenders.

## PR and Review Workflow

- In PR descriptions, mention which parts were AI-assisted.
- Include what was validated (lint, tests, manual checks).
- Review AI-generated code with the same rigor as human-written code.
- Request a second review for security-sensitive changes.

## When Not to Use AI

- Critical decisions requiring deep product or legal context.
- Any action involving credentials or production-only data.
- Bulk refactors without test coverage and rollback plan.

## Definition of Done (AI-Assisted Task)

- Requirements are fully met.
- Code is readable, minimal, and consistent with the codebase.
- Tests and lint pass for the impacted scope.
- Risks, assumptions, and limitations are documented.

## Quick Checklist

- [ ] Prompt includes clear goal and constraints.
- [ ] Output reviewed for correctness and style.
- [ ] Lint/tests/manual checks completed.
- [ ] No secrets or private data shared.
- [ ] PR notes include validation and AI-assisted scope.
