"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading, Tags } from "./ui";
import { ProjectVisual } from "./project-visual";
import { ProjectDialog } from "./project-dialog";
import { TiltCard } from "./tilt-card";
const filters = ["All projects", "Full-stack", "AI & systems"] as const;
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <TiltCard projectId={project.id}>
      <button
        className="project-preview"
        onClick={() => onOpen(project)}
        aria-label={"Explore " + project.name}
      >
        {project.screenshot ? (
          <div className="project-screenshot">
            <Image
              src={project.screenshot}
              alt={project.name + " application screenshot"}
              width={1920}
              height={1140}
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 360px"
            />
          </div>
        ) : (
          <ProjectVisual kind={project.id} />
        )}
        <span className="preview-arrow">
          <ArrowUpRight size={20} />
        </span>
      </button>
      <div className="project-body">
        <div className="project-category">
          <span>{project.category}</span>
          <span>/{project.number}</span>
        </div>
        <h3>
          <button onClick={() => onOpen(project)}>{project.name}</button>
        </h3>
        <p>{project.description}</p>
        <Tags items={project.tags} />
        <div className="compact-project-actions">
          <button
            className="project-action project-action-primary"
            onClick={() => onOpen(project)}
          >
            View project <ArrowUpRight size={16} />
          </button>
          <a
            className="project-action"
            href={profile.github + "/" + project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={project.name + " source code"}
          >
            <Github size={16} /> Source
          </a>
        </div>
      </div>
    </TiltCard>
  );
}
export function ProjectsSection() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter(
    (project) =>
      filter === "All projects" ||
      (filter === "Full-stack" ? project.id !== "hnsw" : project.id === "hnsw"),
  );
  return (
    <section className="section container" id="projects">
      <SectionHeading
        eyebrow="01 / SELECTED PROJECTS"
        title="Ideas, brought to life."
        description="Full-stack products and search systems, designed and built end to end."
      />
      <div className="project-toolbar">
        <div className="project-filters" aria-label="Project categories">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={item === filter}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <a
          href={profile.github + "?tab=repositories"}
          target="_blank"
          rel="noreferrer"
        >
          All repositories <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelected}
          />
        ))}
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
