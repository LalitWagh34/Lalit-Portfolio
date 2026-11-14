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
  screenshot?: string;
  decision: string;
};
export const projects: Project[] = [
  {
    id: "intervue",
    number: "01",
    name: "Intervue",
    category: "Full-stack · Real-time",
    title: "Interview practice, feedback, and revision in one place.",
    description:
      "An interview-preparation platform combining AI mock interviews, live coding contests, and interactive DSA and DBMS lessons.",
    detail:
      "Interview preparation often separates practice, feedback, and revision. I built Intervue to bring AI interviews, coding contests, and structured learning into one workspace.",
    features: [
      "AI mock interviews with adaptive questions and feedback on technical accuracy, problem solving, and communication.",
      "Live coding rooms with synchronized scores, spectator code viewing, and server-enforced contest rules.",
      "DSA and DBMS lessons with step-by-step visualizers and spaced-repetition quizzes to reinforce concepts.",
    ],
    challenge:
      "Keeping contest scores and penalties consistent when multiple participants send updates at the same time.",
    decision:
      "The server controls contest state, so clients cannot decide results independently. PostgreSQL stores results and learning progress; Groq powers interview questions and feedback.",
    tags: ["React", "Hono", "Bun", "PostgreSQL", "Groq"],
    repo: "intervue",
    period: "July 2026 - Present",
    live: "https://intervue-mu.vercel.app",
    screenshot: "/skills/intervue.png",
  },
  {
    id: "hnsw",
    number: "02",
    name: "HNSW Search Engine",
    category: "AI · Infrastructure",
    title: "Find relevant information. Answer with supporting sources.",
    description:
      "A custom TypeScript vector search engine paired with an AI agent that retrieves documents, checks relevance, and answers with citations.",
    detail:
      "Useful document answers depend on finding the right context first. I built a search engine from scratch and connected it to an agent that checks its retrieved evidence before answering.",
    features: [
      "Implemented the HNSW approximate-nearest-neighbor index from scratch in TypeScript.",
      "Combined semantic search with BM25 keyword matching to retrieve both meaning and exact terms.",
      "Added a LangGraph agent that checks relevance and grounding, retries within a limit, and cites source chunks.",
    ],
    challenge:
      "Balancing search speed and retrieval quality, while preventing repeated reasoning loops when documents cannot answer a question.",
    decision:
      "TypeScript handles the in-memory search index; Python handles the agent workflow. Hybrid ranking combines semantic and keyword matches, and bounded retries prevent endless reasoning loops.",
    tags: ["TypeScript", "HNSW", "BM25", "Python", "LangGraph"],
    repo: "HNSW-Vector-Search-Engine",
    period: "Search infrastructure / AI",
  },
  {
    id: "applytrack",
    number: "03",
    name: "ApplyTrack",
    category: "Full-stack · Automation",
    title: "Track applications without maintaining a spreadsheet.",
    description:
      "A job-application tracker that turns Gmail activity into Kanban updates and helps candidates prepare timely follow-ups.",
    detail:
      "Manual application tracking makes follow-ups easy to miss. I built ApplyTrack to capture Gmail application activity, organize it on a board, and help draft personalized follow-ups.",
    features: [
      "Connected Gmail and Google Pub/Sub to detect application activity and update the tracking board.",
      "Processed mailbox events in background queues, with Redis deduplication and encrypted OAuth tokens.",
      "Added AI follow-up drafts and mobile job-link capture through a progressive web app.",
    ],
    challenge:
      "Handling repeated mailbox notifications without creating duplicate applications or processing email bodies.",
    decision:
      "Background workers handle mailbox processing outside user requests. Redis deduplicates notifications, while metadata-only Gmail access limits the email data processed.",
    tags: ["React", "Fastify", "BullMQ", "Redis", "PostgreSQL"],
    repo: "ApplyTrack",
    period: "September - October 2026",
    live: "https://apply-track-1h5z.vercel.app/",
    screenshot: "/skills/applytrack.png",
  },
];
