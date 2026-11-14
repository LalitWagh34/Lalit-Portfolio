# Portfolio sources and implementation notes

Reviewed 2026-11-14.

## Personal information

User-supplied resume: https://drive.google.com/file/d/1e5SoCzWR_4HLxFmvEa7A1GlgtLX7A7Ef/view

Education dates, CGPA, coding-problem count, LeetCode rating, GATE rank, and research contribution come from this resume. Coding statistics are described as recorded in the resume rather than presented as live counters. No paper title or publication link was supplied; neither is invented.

## Architecture evidence

- Intervue: https://github.com/LalitWagh34/intervue/blob/main/system-architecture.md and apps/server/src/index.ts. Corrected earlier Socket.IO label: this server uses Hono on Bun with native WebSocket upgrades at /ws/rooms.
- ApplyTrack: https://github.com/LalitWagh34/ApplyTrack/blob/main/ARCHITECTURE.md and server/src/modules/webhooks/webhooks.routes.ts. Diagram summarizes Gmail metadata notifications, Pub/Sub ingress, Fastify, Redis/BullMQ workers, PostgreSQL/Prisma, and Groq.
- HNSW: https://github.com/LalitWagh34/HNSW-Vector-Search-Engine/blob/main/README.md, agent-service/server.py, and backend-api/package.json. Diagram separates Hono retrieval from FastAPI/LangGraph orchestration. The agent service exposes /query and /stream; mock and live LLM providers are documented.

Architecture diagrams are repository-backed summaries, not an independent deployment audit or live monitoring. Each diagram links to its evidence. Project preview illustrations remain explicitly labeled interface studies.

## Visual and motion design

Charcoal surfaces with cyan, mint, amber, and rose role accents. The hero uses CSS perspective and transformed planes for actual layered 3D geometry without a WebGL dependency. Pointer tilt is decorative and disabled for touch/reduced motion. Scroll reveals progressively enhance visible HTML. All animation is disabled when reduced motion is requested; the 3D layers retain static depth.

## Content editing

- `data/profile.ts`: contact links, resume, stack.
- `data/projects.ts`: features, engineering challenges, decisions, live URLs.
- `data/architectures.ts`: diagram nodes, directed connections, explanations, source references.
- `components/spatial-scene.tsx`: decorative interactive 3D scene.
- `components/architecture-diagram.tsx`: keyboard-selectable SVG nodes with a text alternative and evidence links.
