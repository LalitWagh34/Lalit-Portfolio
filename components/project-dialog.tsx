"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { LinkButton, Tags } from "./ui";
import { ArchitectureDiagram } from "./architecture-diagram";
const tabs = ["Overview", "Architecture", "Decisions"] as const;
export function ProjectDialog({
  project,
  onClose,
  initialTab = "Overview",
}: {
  project: Project | null;
  onClose: () => void;
  initialTab?: (typeof tabs)[number];
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  useEffect(() => {
    if (project) {
      setTab(initialTab);
      ref.current?.showModal();
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    } else ref.current?.close();
  }, [project, initialTab]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="dialog-title"
    >
      {project && (
        <div className="dialog-content">
          <div className="dialog-top">
            <span className="eyebrow">PROJECT / {project.number}</span>
            <button
              className="icon-button"
              aria-label="Close project"
              onClick={onClose}
            >
              <X size={21} />
            </button>
          </div>
          <h2 id="dialog-title">{project.name}</h2>
          <p className="dialog-subtitle">{project.title}</p>
          <span className="project-period">{project.period}</span>
          <div
            className="dialog-tabs"
            role="tablist"
            aria-label="Project detail views"
          >
            {tabs.map((item, i) => (
              <button
                key={item}
                id={"tab-" + item}
                role="tab"
                aria-selected={tab === item}
                aria-controls="project-panel"
                tabIndex={tab === item ? 0 : -1}
                onClick={() => setTab(item)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const next =
                      tabs[
                        (i + (event.key === "ArrowRight" ? 1 : 2)) % tabs.length
                      ];
                    setTab(next);
                    document.getElementById("tab-" + next)?.focus();
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div
            id="project-panel"
            className="dialog-panel"
            role="tabpanel"
            aria-labelledby={"tab-" + tab}
          >
            {tab === "Overview" ? (
              <>
                <p>{project.detail}</p>
                <Tags items={project.tags} />
                <h3 className="detail-heading">What I built</h3>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <h3 className="detail-heading">Engineering challenge</h3>
                <p>{project.challenge}</p>
              </>
            ) : tab === "Decisions" ? (
              <>
                <h3 className="detail-heading">Design tradeoffs</h3>
                <p>{project.decision}</p>
                <h3 className="detail-heading">The hard part</h3>
                <p>{project.challenge}</p>
              </>
            ) : (
              <ArchitectureDiagram projectId={project.id} />
            )}
          </div>
          {project.live && (
            <LinkButton external secondary href={project.live}>
              Open live app
            </LinkButton>
          )}{" "}
          <LinkButton external href={profile.github + "/" + project.repo}>
            View source code
          </LinkButton>
        </div>
      )}
    </dialog>
  );
}
