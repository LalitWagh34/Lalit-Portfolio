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
  explanation: string[];
  period: string;
  live?: string;
  screenshot?: string;
};
export const projects: Project[] = [
  {
    id: "intervue",
    explanation: [
      "Candidates can practice adaptive AI interviews, receive structured feedback, and compete in live coding rooms with synchronized scores and spectator code viewing.",
      "The Learn & Revise hub explains DSA and DBMS through interactive visualizers. Recall quizzes and spaced repetition help users revisit concepts, while company-specific practice tracks organize their preparation.",
    ],
    number: "01",
    name: "Intervue",
    category: "Full-stack · Real-time",
    title: "Interview practice, feedback, and revision in one place.",
    description:
      "An interview-preparation platform combining AI mock interviews, live coding contests, and interactive DSA and DBMS lessons.",
    detail:
      "Interview preparation often separates practice, feedback, and revision. I built Intervue to bring AI interviews, coding contests, and structured learning into one workspace.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Hono",
      "Bun",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Groq",
    ],
    repo: "intervue",
    period: "July 2026 - Present",
    live: "https://intervue-mu.vercel.app",
    screenshot: "/skills/intervue.png",
  },
  {
    id: "hnsw",
    explanation: [
      "Users add documents and ask questions. A custom HNSW index finds semantically similar passages, while BM25 adds keyword matches so exact terms are not lost.",
      "A LangGraph agent checks whether the retrieved passages are relevant, reformulates the query when needed, and generates an answer with source citations. Its retries are bounded so an unanswered question does not trigger an endless loop.",
    ],
    number: "02",
    name: "HNSW Search Engine",
    category: "AI · Infrastructure",
    title: "Find relevant information. Answer with supporting sources.",
    description:
      "A custom TypeScript vector search engine paired with an AI agent that retrieves documents, checks relevance, and answers with citations.",
    detail:
      "Useful document answers depend on finding the right context first. I built a search engine from scratch and connected it to an agent that checks its retrieved evidence before answering.",
    tags: [
      "TypeScript",
      "Python",
      "React",
      "Hono",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "HNSW",
      "BM25",
      "Groq",
    ],
    repo: "HNSW-Vector-Search-Engine",
    period: "Search infrastructure / AI",
  },
  {
    id: "applytrack",
    explanation: [
      "After connecting Gmail, mailbox notifications help detect application activity and update a Kanban board. Users can also capture job links from their phone and manage application stages manually.",
      "Background jobs process Gmail metadata and filter repeated events. The follow-up assistant uses application and candidate context to draft personalized emails, helping users keep track of when to follow up.",
    ],
    number: "03",
    name: "ApplyTrack",
    category: "Full-stack · Automation",
    title: "Track applications without maintaining a spreadsheet.",
    description:
      "A job-application tracker that turns Gmail activity into Kanban updates and helps candidates prepare timely follow-ups.",
    detail:
      "Manual application tracking makes follow-ups easy to miss. I built ApplyTrack to capture Gmail application activity, organize it on a board, and help draft personalized follow-ups.",
    tags: [
      "React",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Gmail API",
      "Pub/Sub",
      "Groq",
    ],
    repo: "ApplyTrack",
    period: "September - October 2026",
    live: "https://apply-track-1h5z.vercel.app/",
    screenshot: "/skills/applytrack.png",
  },
];
