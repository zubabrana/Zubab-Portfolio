# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Component structure
Keep page sections in focused React components instead of expanding App.jsx. Each interactive section owns its state; reusable photo viewing is a separate controlled component. Store gallery, reel, and screen-credit data under src/data.

## Deployment ownership — user instruction
Do not deploy, publish, push source to hosting, or change site sharing. The user will handle deployment themselves. Keep all future website work local unless the user explicitly changes this instruction. The previous Sites deployment has not been removed: no unpublish connector action was available, and browser control failed. Do not treat the hosted copy as an approved deployment.
