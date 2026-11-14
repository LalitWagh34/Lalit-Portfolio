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

## Supplied screenshots and interactive stack

Intervue and ApplyTrack previews now use the supplied `public/skills/intervue.png` and `public/skills/applytrack.png`. The search-engine preview remains illustrative. The supplied `mainpicture.jpg` replaces the earlier GitHub avatar and appears in the hero and journey section.

LeetCode links point to the user-supplied https://leetcode.com/u/Lalit2804/; no live rating or solved count is inferred from it.

`data/scene.ts` holds the technologies revealed by each interactive 3D layer. Interface includes React, Next.js, TypeScript, and Tailwind CSS. Systems includes the requested Node.js, Bun, PostgreSQL, MySQL, Redis, and Hono. Intelligence includes Machine Learning, LLM Integration, LangGraph, Vector Search, HNSW, and RAG, matching the supplied skills and inspected search-system repository. LangChain is not claimed without supporting project evidence.

Technology clouds reveal on surface hover, keyboard focus, or control selection. Touch controls provide the same content. Escape clears the selected layer. Reduced-motion mode reveals the badges statically.

## Recruiter-focused project review

Re-read the current GitHub documentation and compared it with portfolio copy. Intervue README blob: 9b1eedeb5d34d1dbca7188a174316eb43e5ab9ff; system-architecture.md blob: aecbf4af1542590481224f3ab8e39e78259daed8. The important addition is the Learn & Revise hub: DSA/DBMS concept lessons, interactive visualizers, recall quizzes, and spaced-repetition progress.

Also re-read ApplyTrack README.md / ARCHITECTURE.md and HNSW-Vector-Search-Engine README.md. All project overviews now have a short problem/solution summary and three contributions. Detailed endpoint names, exhaustive feature lists, marketing claims, and benchmark numbers are omitted from these summaries.

Architecture maps are intentionally high-level summaries: Intervue has four components, ApplyTrack five, and HNSW five. ApplyTrack groups API and background workers in one labeled backend block; HNSW groups its index and rank-fusion pipeline in the retrieval block. These groupings simplify presentation without claiming a change to the repositories. Original documentation remains linked in each diagram. This review verifies alignment with documentation, not independent runtime correctness of those projects.
