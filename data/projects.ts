export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  detail: string;
  features: string[];
  challenge: string;
  period: string;
  live?: string;
  decision: string;
};
export const projects: Project[] = [
  {
    id: "intervue",
    number: "01",
    name: "Intervue",
    category: "Full-stack · Real-time",
    title: "A better place to prepare. Together.",
    description:
      "An all-in-one technical interview platform bringing AI mock interviews, real-time coding battles, and interview prep into one workspace.",
    tags: ["React", "Hono", "Bun", "PostgreSQL", "Groq"],
    repo: "intervue",
    period: "July 2026 - Present",
    live: "https://intervue-mu.vercel.app",
    features: [
      "Adaptive AI mock interviews with structured rubric feedback",
      "Authoritative multiplayer rooms, live standings, and spectator code streaming",
      "Company prep kits, curated DSA sheets, and coding-profile progress sync",
    ],
    challenge:
      "Keeping room state, submissions, and anti-cheat penalties consistent while clients exchange live events.",
    detail:
      "Intervue brings several parts of technical interview preparation into a shared platform: AI mock interviews, a real-time 1v1 coding arena, preparation kits, and unified coding profiles.",

    decision:
      "Room state is server-authoritative: the Hono/Bun server authenticates WebSocket upgrades and applies room decisions centrally. PostgreSQL persists participants, submissions, and audit records.",
  },
  {
    id: "hnsw",
    number: "02",
    name: "HNSW Search Engine",
    category: "AI · Infrastructure",
    title: "Under the hood of semantic search.",
    description:
      "A vector search engine built in TypeScript, exploring HNSW indexing, hybrid retrieval, and an agentic RAG system.",
    tags: ["TypeScript", "HNSW", "BM25", "RAG"],
    repo: "HNSW-Vector-Search-Engine",
    period: "Search infrastructure / AI",
    features: [
      "Custom TypeScript HNSW graph with diversity-aware pruning",
      "Dense + BM25 retrieval fused with reciprocal rank fusion",
      "LangGraph reasoning, bounded retries, grounding checks, and streamed citations",
    ],
    challenge:
      "Balancing approximate retrieval quality with latency, then ensuring the reasoning loop terminates on insufficient context.",
    detail:
      "A search infrastructure project combining a TypeScript HNSW vector index with BM25 retrieval and reciprocal rank fusion, alongside an agentic RAG system.",

    decision:
      "The in-memory HNSW graph favors retrieval speed while PostgreSQL persists document data. A separate Python service runs the LangGraph loop, keeping graph search and agent orchestration independently organized.",
  },
  {
    id: "applytrack",
    number: "03",
    name: "ApplyTrack",
    category: "Full-stack · Productivity",
    title: "Less tracking. More moving forward.",
    description:
      "A focused job application workspace with a Kanban board and Gmail integration to keep applications and follow-ups organized.",
    tags: ["React", "Fastify", "BullMQ", "Redis", "Prisma"],
    repo: "ApplyTrack",
    period: "September - October 2026",
    live: "https://apply-track-1h5z.vercel.app/",
    features: [
      "Gmail metadata ingestion through Google Pub/Sub",
      "BullMQ ingestion, watch renewal, and follow-up queues",
      "Encrypted OAuth tokens, AI follow-up drafts, and mobile PWA capture",
    ],
    challenge:
      "Handling duplicate mailbox notifications without creating duplicate application records or exposing email bodies.",
    detail:
      "A job application tracker with a Linear-inspired Kanban workflow, Gmail OAuth and Pub/Sub auto-tracking, and mobile share intent support.",

    decision:
      "Mailbox ingestion runs asynchronously in BullMQ. Redis locks deduplicate events, metadata-only Gmail access limits the email data processed, and OAuth tokens are encrypted at rest.",
  },
];
