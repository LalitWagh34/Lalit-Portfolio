import {
  Binary,
  BrainCircuit,
  Braces,
  Database,
  GitBranch,
  Network,
  Radio,
  Search,
  Sparkles,
  Workflow,
  ListTodo,
} from "lucide-react";
import type { Skill } from "@/data/skills";
const symbols = {
  database: Database,
  radio: Radio,
  api: Braces,
  queue: ListTodo,
  pubsub: GitBranch,
  brain: BrainCircuit,
  sparkles: Sparkles,
  search: Search,
  graph: Network,
  algorithm: Binary,
  workflow: Workflow,
};
export function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = symbols[skill.symbol ?? "api"];
  return (
    <li className="skill-badge">
      <span className="skill-badge-icon" aria-hidden="true">
        {skill.logo ? (
          <img
            src={skill.logo}
            alt=""
            width={22}
            height={22}
            loading="lazy"
            decoding="async"
            className={skill.monochrome ? "monochrome-logo" : undefined}
          />
        ) : (
          <Icon size={21} strokeWidth={1.6} />
        )}
      </span>
      <span>{skill.name}</span>
    </li>
  );
}
