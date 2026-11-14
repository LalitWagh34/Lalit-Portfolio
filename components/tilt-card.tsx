"use client";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

type TiltCardProps = { children: ReactNode; projectId: string };

/** Keep measurements on a stationary shell so the tilted surface never chases the pointer. */
export function TiltCard({ children, projectId }: TiltCardProps) {
  const shell = useRef<HTMLDivElement>(null);
  const surface = useRef<HTMLElement>(null);
  const frame = useRef<number | null>(null);

  function reset() {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    if (surface.current) surface.current.dataset.tilting = "false";
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = shell.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = Math.max(
      0,
      Math.min(1, (event.clientX - bounds.left) / bounds.width),
    );
    const y = Math.max(
      0,
      Math.min(1, (event.clientY - bounds.top) / bounds.height),
    );
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const card = surface.current;
      if (!card) return;
      card.style.setProperty(
        "--card-rotate-x",
        ((0.5 - y) * 9).toFixed(2) + "deg",
      );
      card.style.setProperty(
        "--card-rotate-y",
        ((x - 0.5) * 11).toFixed(2) + "deg",
      );
      card.style.setProperty("--card-light-x", (x * 100).toFixed(1) + "%");
      card.style.setProperty("--card-light-y", (y * 100).toFixed(1) + "%");
      card.dataset.tilting = "true";
      frame.current = null;
    });
  }

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    preference.addEventListener("change", reset);
    return () => {
      preference.removeEventListener("change", reset);
      reset();
    };
  }, []);

  return (
    <div
      ref={shell}
      className="project-card-shell"
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <article
        ref={surface}
        className="project-card"
        data-project={projectId}
        data-tilting="false"
      >
        {children}
      </article>
    </div>
  );
}
