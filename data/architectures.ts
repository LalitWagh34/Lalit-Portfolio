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
  summary: string;
  takeaway: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  sources: { label: string; url: string }[];
};
const source = (repo: string, path: string, label: string) => ({
  label,
  url: `https://github.com/LalitWagh34/${repo}/blob/main/${path}`,
});
export const architectures: Record<string, Architecture> = {
  intervue: {
    summary:
      "The browser connects to one backend for interviews, live contests, and revision. The backend stores progress in PostgreSQL and calls Groq for AI feedback.",
    takeaway:
      "The backend owns contest rules and learning progress; the frontend focuses on the practice experience.",
    nodes: [
      {
        id: "web",
        label: "Practice workspace",
        sublabel: "React · interviews, contests, lessons",
        x: 350,
        y: 45,
        detail:
          "Candidates practice interviews, join coding rooms, and study DSA/DBMS through visualizers and recall quizzes.",
      },
      {
        id: "api",
        label: "Application server",
        sublabel: "Hono + Bun · HTTP / WebSocket",
        x: 350,
        y: 175,
        detail:
          "Authenticates users, coordinates live rooms, evaluates recall sessions, and schedules concept reviews.",
      },
      {
        id: "db",
        label: "Progress & results",
        sublabel: "PostgreSQL + Prisma",
        x: 180,
        y: 315,
        detail:
          "Stores interview evaluations, contest submissions, lesson revisions, and spaced-repetition progress.",
      },
      {
        id: "ai",
        label: "AI interviewer",
        sublabel: "Groq · questions and feedback",
        x: 520,
        y: 315,
        detail:
          "Generates adaptive questions and evaluates answers using structured technical and communication criteria.",
      },
    ],
    edges: [
      { from: "web", to: "api", label: "Practice requests / live updates" },
      { from: "api", to: "db", label: "Save progress" },
      { from: "api", to: "ai", label: "Questions / evaluation" },
    ],
    sources: [
      source("intervue", "README.md", "Project README"),
      source("intervue", "system-architecture.md", "Full architecture"),
    ],
  },
  applytrack: {
    summary:
      "Gmail events reach the backend through Pub/Sub. Background workers update application records, while the web app displays the board and requests AI follow-up drafts.",
    takeaway:
      "Queues handle mailbox processing asynchronously; deduplication prevents repeated events from producing duplicate work.",
    nodes: [
      {
        id: "gmail",
        label: "Mailbox events",
        sublabel: "Gmail API + Google Pub/Sub",
        x: 160,
        y: 45,
        detail:
          "Gmail publishes mailbox changes through Pub/Sub. Processing reads email headers and metadata rather than bodies.",
      },
      {
        id: "web",
        label: "Application board",
        sublabel: "React · mobile PWA",
        x: 540,
        y: 45,
        detail:
          "Candidates view application stages, capture job links on mobile, and request follow-up drafts.",
      },
      {
        id: "backend",
        label: "API & background jobs",
        sublabel: "Fastify · BullMQ · Redis",
        x: 350,
        y: 175,
        detail:
          "Fastify verifies events and handles user requests. BullMQ workers process mailbox changes; Redis provides queues and deduplication locks.",
      },
      {
        id: "db",
        label: "Application records",
        sublabel: "PostgreSQL + Prisma",
        x: 180,
        y: 315,
        detail:
          "Stores applications, status history, and follow-up state. Stored OAuth token material is encrypted.",
      },
      {
        id: "ai",
        label: "Follow-up assistant",
        sublabel: "Groq · personalized drafts",
        x: 520,
        y: 315,
        detail:
          "Uses candidate and application context to generate follow-up drafts for the user to review.",
      },
    ],
    edges: [
      { from: "gmail", to: "backend", label: "Mailbox notifications" },
      { from: "web", to: "backend", label: "Board requests" },
      { from: "backend", to: "db", label: "Update applications" },
      { from: "backend", to: "ai", label: "Draft a follow-up" },
    ],
    sources: [
      source("ApplyTrack", "README.md", "Project README"),
      source("ApplyTrack", "ARCHITECTURE.md", "Full architecture"),
    ],
  },
  hnsw: {
    summary:
      "Documents enter the search service. A separate agent retrieves relevant passages, checks their usefulness, and calls an LLM to produce a cited answer.",
    takeaway:
      "Search and reasoning are separate: hybrid retrieval finds evidence, and the agent checks it before answering.",
    nodes: [
      {
        id: "web",
        label: "Document chat",
        sublabel: "React · upload and ask",
        x: 350,
        y: 45,
        detail:
          "Users ingest documents, ask questions, and inspect the source chunks cited in answers.",
      },
      {
        id: "retrieval",
        label: "Hybrid search",
        sublabel: "TypeScript · HNSW + BM25",
        x: 160,
        y: 175,
        detail:
          "Combines semantic vector matches and keyword matches using reciprocal rank fusion. The custom HNSW graph stays in memory.",
      },
      {
        id: "agent",
        label: "Answer & checks",
        sublabel: "Python · FastAPI + LangGraph",
        x: 540,
        y: 175,
        detail:
          "Retrieves context, grades relevance, generates an answer, and checks grounding. Query retries are limited.",
      },
      {
        id: "db",
        label: "Document storage",
        sublabel: "PostgreSQL + Prisma",
        x: 160,
        y: 315,
        detail:
          "Persists documents, chunks, and logs used by the retrieval service.",
      },
      {
        id: "llm",
        label: "Language model",
        sublabel: "Groq / Gemini",
        x: 540,
        y: 315,
        detail:
          "Supports relevance checks and answer generation. An offline mock provider is also available for local testing.",
      },
    ],
    edges: [
      { from: "web", to: "retrieval", label: "Ingest documents" },
      { from: "web", to: "agent", label: "Ask a question" },
      { from: "agent", to: "retrieval", label: "Find evidence" },
      { from: "retrieval", to: "db", label: "Store / load chunks" },
      { from: "agent", to: "llm", label: "Check / generate" },
    ],
    sources: [
      source("HNSW-Vector-Search-Engine", "README.md", "README & architecture"),
    ],
  },
};
