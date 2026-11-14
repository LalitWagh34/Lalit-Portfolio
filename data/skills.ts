export type Skill = {
  name: string;
  logo?: string;
  symbol?:
    | "database"
    | "radio"
    | "api"
    | "queue"
    | "pubsub"
    | "brain"
    | "sparkles"
    | "search"
    | "graph"
    | "algorithm"
    | "workflow";
  monochrome?: boolean;
};
export type SkillGroup = { name: string; code: string; items: Skill[] };
const brand = (name: string, file: string, monochrome = false): Skill => ({
  name,
  logo: `/skills/${file}.svg`,
  monochrome,
});
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    code: "01",
    items: [
      brand("C++", "cplusplus"),
      brand("TypeScript", "typescript"),
      brand("JavaScript", "javascript"),
      brand("Python", "python"),
      { name: "SQL", symbol: "database" },
    ],
  },
  {
    name: "Frontend",
    code: "02",
    items: [
      brand("React", "react"),
      brand("Next.js", "nextjs", true),
      brand("Tailwind CSS", "tailwindcss"),
      brand("HTML", "html5"),
      brand("CSS", "css3"),
    ],
  },
  {
    name: "Backend & APIs",
    code: "03",
    items: [
      brand("Node.js", "nodejs"),
      brand("Express", "express", true),
      brand("Fastify", "fastify", true),
      brand("Hono", "hono"),
      { name: "WebSocket", symbol: "radio" },
      { name: "REST APIs", symbol: "api" },
    ],
  },
  {
    name: "Databases & Messaging",
    code: "04",
    items: [
      brand("PostgreSQL", "postgresql"),
      brand("MongoDB", "mongodb"),
      brand("Redis", "redis"),
      brand("Prisma", "prisma", true),
      { name: "BullMQ", logo: "/skills/bullmq.png" },
      { name: "Pub/Sub", symbol: "pubsub" },
    ],
  },
  {
    name: "AI & Algorithms",
    code: "05",
    items: [
      { name: "Machine Learning", symbol: "brain" },
      { name: "LLM Integration", symbol: "sparkles" },
      { name: "Vector Search", symbol: "search" },
      { name: "HNSW", symbol: "graph" },
      { name: "DSA", symbol: "algorithm" },
    ],
  },
  {
    name: "Tools & Infrastructure",
    code: "06",
    items: [
      brand("Git", "git"),
      brand("GitHub", "github", true),
      brand("Docker", "docker"),
      brand("Vercel", "vercel", true),
      brand("GCP", "googlecloud"),
      { name: "CI/CD", symbol: "workflow" },
    ],
  },
];
