"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { LinkButton, Tags } from "./ui";
export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) {
      ref.current?.close();
      return;
    }
    ref.current?.showModal();
    if (ref.current) ref.current.scrollTop = 0;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog simple-project-dialog"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="dialog-title"
    >
      {project && (
        <div className="dialog-content">
          <div className="dialog-top">
            <span className="eyebrow">PERSONAL PROJECT / {project.number}</span>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Close project"
            >
              <X size={21} />
            </button>
          </div>
          <h2 id="dialog-title">{project.name}</h2>
          <p className="dialog-subtitle">{project.title}</p>
          <div className="project-byline">
            <span>Designed & built by Lalit Wagh</span>
            <span>{project.period}</span>
          </div>
          <div className="project-explanation">
            <p>{project.detail}</p>
            {project.explanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="project-stack">
            <h3>Built with</h3>
            <Tags items={project.tags} />
          </div>
          {project.screenshot && (
            <Image
              className="dialog-screenshot"
              src={project.screenshot}
              alt={project.name + " application screenshot"}
              width={1920}
              height={1140}
              sizes="(max-width: 850px) 90vw, 780px"
            />
          )}
          <div className="dialog-actions">
            {project.live && (
              <LinkButton external secondary href={project.live}>
                Open live app
              </LinkButton>
            )}
            <LinkButton external href={profile.github + "/" + project.repo}>
              View source code
            </LinkButton>
          </div>
        </div>
      )}
    </dialog>
  );
}
