import type { Skill } from "./skills";
export type SceneLayer = {
  id: string;
  name: string;
  code: string;
  className: string;
  skills: Skill[];
};
export const sceneLayers: SceneLayer[] = [
  {
    id: "interface",
    name: "Interface",
    code: "01",
    className: "layer-interface",
    skills: [
      { name: "React", logo: "/skills/react.svg" },
      { name: "Next.js", logo: "/skills/nextjs.svg", monochrome: true },
      { name: "TypeScript", logo: "/skills/typescript.svg" },
      { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
    ],
  },
  {
    id: "systems",
    name: "Systems",
    code: "02",
    className: "layer-systems",
    skills: [
      { name: "Node.js", logo: "/skills/nodejs.svg" },
      { name: "Bun", logo: "/skills/bun.svg" },
      { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
      { name: "MySQL", logo: "/skills/mysql.svg" },
      { name: "Redis", logo: "/skills/redis.svg" },
      { name: "Hono", logo: "/skills/hono.svg" },
    ],
  },
  {
    id: "intelligence",
    name: "Intelligence",
    code: "03",
    className: "layer-ai",
    skills: [
      { name: "Machine Learning", symbol: "brain" },
      { name: "LLM Integration", symbol: "sparkles" },
      { name: "LangGraph", symbol: "graph" },
      { name: "Vector Search", symbol: "search" },
      { name: "HNSW", symbol: "algorithm" },
      { name: "RAG", symbol: "pubsub" },
    ],
  },
];
