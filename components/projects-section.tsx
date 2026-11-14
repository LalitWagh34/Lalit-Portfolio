"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading, Tags } from "./ui";
import { ProjectVisual } from "./project-visual";
import { ProjectDialog } from "./project-dialog";
const filters = ["All projects", "Full-stack", "AI & systems"] as const;
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project, tab?: "Overview" | "Architecture") => void;
}) {
  return (
    <article className="project-card" data-project={project.id}>
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
            <span>Actual product / {project.name}</span>
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
        <ul className="project-highlights">
          {project.features.slice(0, 2).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <button
          className="architecture-cta"
          onClick={() => onOpen(project, "Architecture")}
        >
          Explore architecture <ArrowUpRight size={14} />
        </button>
        <div className="project-links">
          <button onClick={() => onOpen(project)}>
            Inside the project <ArrowUpRight size={14} />
          </button>
          <a
            href={profile.github + "/" + project.repo}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} /> Source
          </a>
        </div>
      </div>
    </article>
  );
}
export function ProjectsSection() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All projects");
  const [initialTab, setInitialTab] = useState<"Overview" | "Architecture">(
    "Overview",
  );
  function openProject(
    project: Project,
    tab: "Overview" | "Architecture" = "Overview",
  ) {
    setInitialTab(tab);
    setSelected(project);
  }
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter(
    (project) =>
      filter === "All projects" ||
      (filter === "Full-stack" ? project.id !== "hnsw" : project.id === "hnsw"),
  );
  return (
    <section className="section container" id="projects">
      <SectionHeading
        eyebrow="01 / PROOF OF WORK"
        title="Ideas, brought to life."
        description="Products and experiments at the intersection of software and intelligence."
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
            onOpen={openProject}
          />
        ))}
      </div>
      <p className="visual-disclosure">
        Intervue and ApplyTrack show actual product screenshots. The search
        engine preview is an illustrative visualization.
      </p>
      <ProjectDialog
        project={selected}
        initialTab={initialTab}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
