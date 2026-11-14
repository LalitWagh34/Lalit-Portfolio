export type ArchitectureNode = {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  detail: string;
};
export type ArchitectureEdge = { from: string; to: string; label: string };
export type Architecture = {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  sources: { label: string; url: string }[];
};
const source = (repo: string, path: string) => ({
  label: path,
  url: "https://github.com/LalitWagh34/" + repo + "/blob/main/" + path,
});
export const architectures: Record<string, Architecture> = {
  intervue: {
    nodes: [
      {
        id: "web",
        label: "React 19 + Vite",
        sublabel: "Frontend · Vercel",
        x: 350,
        y: 45,
        detail:
          "The React SPA hosts interview, practice, and arena views. The arena client connects to /ws/rooms; interview coaching also uses SSE.",
      },
      {
        id: "api",
        label: "Hono on Bun",
        sublabel: "REST / SSE / WebSocket",
        x: 350,
        y: 175,
        detail:
          "The server entry point mounts API routes and authenticates the native Bun WebSocket upgrade. RoomSocketManager maintains authoritative room state.",
      },
      {
        id: "db",
        label: "PostgreSQL + Prisma",
        sublabel: "Neon · persistent state",
        x: 120,
        y: 315,
        detail:
          "Shared database models persist users, sessions, rooms, participants, submissions, and interview evaluations.",
      },
      {
        id: "ai",
        label: "Groq inference",
        sublabel: "Llama 3.3 · evaluation",
        x: 350,
        y: 315,
        detail:
          "The interview and evaluation services generate adaptive questions and rubric-based feedback through Groq.",
      },
      {
        id: "sync",
        label: "Coding profiles",
        sublabel: "LeetCode / Codeforces",
        x: 580,
        y: 315,
        detail:
          "External profile synchronization feeds progress and activity views.",
      },
    ],
    edges: [
      { from: "web", to: "api", label: "HTTPS + WSS /ws/rooms" },
      { from: "api", to: "db", label: "Prisma queries" },
      { from: "api", to: "ai", label: "Interview / evaluation" },
      { from: "api", to: "sync", label: "Profile sync" },
    ],
    sources: [
      source("intervue", "system-architecture.md"),
      source("intervue", "apps/server/src/index.ts"),
    ],
  },
  applytrack: {
    nodes: [
      {
        id: "gmail",
        label: "Gmail API",
        sublabel: "users.watch · metadata",
        x: 120,
        y: 40,
        detail:
          "Mailbox watches publish changes. Workers fetch headers and metadata, rather than email bodies.",
      },
      {
        id: "pubsub",
        label: "Google Pub/Sub",
        sublabel: "Mailbox delta push",
        x: 350,
        y: 40,
        detail:
          "Push notifications carry mailbox changes to the verified Fastify webhook.",
      },
      {
        id: "web",
        label: "React PWA",
        sublabel: "Kanban · Share Target",
        x: 580,
        y: 40,
        detail:
          "The browser client uses JWT-protected REST endpoints. Android Share Target captures job links.",
      },
      {
        id: "api",
        label: "Fastify API",
        sublabel: "JWT · webhook verification",
        x: 350,
        y: 175,
        detail:
          "The webhook verifies incoming requests and dispatches mailbox jobs. API modules manage applications, profile context, and follow-up drafts.",
      },
      {
        id: "queue",
        label: "Redis + BullMQ",
        sublabel: "Deduplication · workers",
        x: 120,
        y: 315,
        detail:
          "Redis locks deduplicate events. BullMQ runs email ingestion, watch renewal, and follow-up radar jobs.",
      },
      {
        id: "db",
        label: "PostgreSQL / Prisma",
        sublabel: "Applications · timelines",
        x: 350,
        y: 315,
        detail:
          "Neon PostgreSQL stores application state and timeline events. OAuth token material is encrypted with AES-256-GCM.",
      },
      {
        id: "ai",
        label: "Groq Llama 3.3",
        sublabel: "Follow-up drafting",
        x: 580,
        y: 315,
        detail:
          "Profile and resume-derived context supports personalized follow-up drafts. PDF parsing is performed in memory.",
      },
    ],
    edges: [
      { from: "gmail", to: "pubsub", label: "Mailbox delta" },
      { from: "pubsub", to: "api", label: "Push webhook" },
      { from: "web", to: "api", label: "REST + JWT" },
      { from: "api", to: "queue", label: "Enqueue / locks" },
      { from: "queue", to: "gmail", label: "Fetch metadata" },
      { from: "queue", to: "db", label: "Persist updates" },
      { from: "api", to: "db", label: "CRUD" },
      { from: "api", to: "ai", label: "Draft context" },
    ],
    sources: [
      source("ApplyTrack", "ARCHITECTURE.md"),
      source("ApplyTrack", "server/src/modules/webhooks/webhooks.routes.ts"),
    ],
  },
  hnsw: {
    nodes: [
      {
        id: "web",
        label: "React + TypeScript",
        sublabel: "Chat · ingestion · evaluation",
        x: 350,
        y: 40,
        detail:
          "The UI sends ingestion requests to the backend and streams the agent reasoning steps from the Python service.",
      },
      {
        id: "retrieval",
        label: "Hono retrieval API",
        sublabel: "TypeScript · Node / Bun",
        x: 140,
        y: 175,
        detail:
          "Dense HNSW retrieval and BM25 keyword search are combined using reciprocal rank fusion. The index lives in process memory.",
      },
      {
        id: "agent",
        label: "FastAPI + LangGraph",
        sublabel: "Python reasoning service",
        x: 560,
        y: 175,
        detail:
          "The agent retrieves, grades relevance, reformulates queries, generates an answer, and checks grounding. Retries are bounded.",
      },
      {
        id: "index",
        label: "HNSW + BM25",
        sublabel: "RRF · hybrid retrieval",
        x: 120,
        y: 315,
        detail:
          "A custom TypeScript HNSW graph finds approximate neighbors; BM25 supplies sparse matches; RRF fuses their rankings.",
      },
      {
        id: "db",
        label: "PostgreSQL / Prisma",
        sublabel: "Documents · chunks · logs",
        x: 350,
        y: 315,
        detail:
          "Persistent storage holds documents, chunks, evaluation logs, and conversation state; the graph itself is in memory.",
      },
      {
        id: "llm",
        label: "Groq / Gemini / Mock",
        sublabel: "Provider adapter",
        x: 580,
        y: 315,
        detail:
          "The Python service supports live providers and an offline mock. /stream returns server-sent events for each reasoning step.",
      },
    ],
    edges: [
      { from: "web", to: "retrieval", label: "Ingestion API" },
      { from: "web", to: "agent", label: "HTTP / SSE" },
      { from: "agent", to: "retrieval", label: "/api/retrieve" },
      { from: "retrieval", to: "index", label: "Hybrid query" },
      { from: "retrieval", to: "db", label: "Prisma" },
      { from: "agent", to: "llm", label: "Reason / generate" },
    ],
    sources: [
      source("HNSW-Vector-Search-Engine", "README.md"),
      source("HNSW-Vector-Search-Engine", "agent-service/server.py"),
      source("HNSW-Vector-Search-Engine", "backend-api/package.json"),
    ],
  },
};
