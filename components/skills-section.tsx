"use client";
import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./ui";
import { SkillBadge } from "./skill-badge";
export function SkillsSection() {
  const [category, setCategory] = useState("All skills");
  const groups =
    category === "All skills"
      ? skillGroups
      : skillGroups.filter((group) => group.name === category);
  const count = groups.reduce((total, group) => total + group.items.length, 0);
  return (
    <section className="skills-section" id="skills">
      <div className="section container">
        <SectionHeading
          eyebrow="02 / THE TOOLKIT"
          title="The stack behind the work."
          description="Languages, frameworks, and ideas I use to turn a problem into working software."
        />
        <div className="skills-toolbar">
          <div
            className="skills-filters"
            role="group"
            aria-label="Filter skills by category"
          >
            {["All skills", ...skillGroups.map((group) => group.name)].map(
              (name) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={category === name}
                  onClick={() => setCategory(name)}
                >
                  {name}
                </button>
              ),
            )}
          </div>
          <span className="skills-count" role="status">
            {count} skills / {groups.length}{" "}
            {groups.length === 1 ? "category" : "categories"}
          </span>
        </div>
        <div className="skill-groups-grid">
          {groups.map((group) => (
            <article
              className="skill-group-card"
              key={group.code}
              data-category={group.code}
            >
              <div className="skill-group-heading">
                <h3>{group.name}</h3>
                <span>{group.code}</span>
              </div>
              <ul className="skill-badges" aria-label={group.name}>
                {group.items.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
