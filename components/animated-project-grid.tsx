"use client";
import { useLayoutEffect, useRef, type ReactNode } from "react";
type Snapshot = {
  left: number;
  top: number;
  width: number;
  height: number;
  clone: HTMLElement;
};
/** Animate grid layout changes without touching the independent 3D card surface. */
export function AnimatedProjectGrid({
  children,
  filterKey,
}: {
  children: ReactNode;
  filterKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const previous = useRef(new Map<string, Snapshot>());
  const previousHeight = useRef(0);
  useLayoutEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const nodes = Array.from(
      grid.querySelectorAll<HTMLElement>(
        ".project-card-shell:not([data-exiting])",
      ),
    );
    const next = new Map<string, Snapshot>();
    const animations: Animation[] = [];
    const ghosts: HTMLElement[] = [];
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    for (const node of nodes) {
      const id =
        node.querySelector<HTMLElement>("[data-project]")!.dataset.project!;
      next.set(id, {
        left: node.offsetLeft,
        top: node.offsetTop,
        width: node.offsetWidth,
        height: node.offsetHeight,
        clone: node.cloneNode(true) as HTMLElement,
      });
    }
    const nextHeight = grid.offsetHeight;
    if (previous.current.size && !reduced) {
      for (const node of nodes) {
        const id =
          node.querySelector<HTMLElement>("[data-project]")!.dataset.project!;
        const current = next.get(id)!;
        const old = previous.current.get(id);
        if (old) {
          const x = old.left - current.left;
          const y = old.top - current.top;
          if (x || y)
            animations.push(
              node.animate(
                [
                  { transform: `translate(${x}px,${y}px)` },
                  { transform: "translate(0,0)" },
                ],
                { duration: 260, easing: "cubic-bezier(.2,.7,.2,1)" },
              ),
            );
        } else
          animations.push(
            node.animate(
              [
                { opacity: 0, transform: "translateY(14px) scale(.98)" },
                { opacity: 1, transform: "translateY(0) scale(1)" },
              ],
              { duration: 240, easing: "ease-out" },
            ),
          );
      }
      for (const [id, old] of previous.current) {
        if (next.has(id)) continue;
        const ghost = old.clone;
        ghost.dataset.exiting = "true";
        ghost.setAttribute("aria-hidden", "true");
        ghost.inert = true;
        Object.assign(ghost.style, {
          position: "absolute",
          left: old.left + "px",
          top: old.top + "px",
          width: old.width + "px",
          height: old.height + "px",
          pointerEvents: "none",
          zIndex: "0",
        });
        const surface = ghost.querySelector<HTMLElement>("[data-tilting]");
        if (surface) surface.dataset.tilting = "false";
        grid.appendChild(ghost);
        ghosts.push(ghost);
        const animation = ghost.animate(
          [
            { opacity: 1, transform: "translateY(0) scale(1)" },
            { opacity: 0, transform: "translateY(-8px) scale(.97)" },
          ],
          { duration: 150, easing: "ease-out", fill: "forwards" },
        );
        animation.onfinish = () => ghost.remove();
        animations.push(animation);
      }
      const height = nextHeight;
      if (previousHeight.current !== height)
        animations.push(
          grid.animate(
            [
              { height: previousHeight.current + "px" },
              { height: height + "px" },
            ],
            { duration: 260, easing: "cubic-bezier(.2,.7,.2,1)" },
          ),
        );
    }
    previous.current = next;
    previousHeight.current = nextHeight;
    return () => {
      animations.forEach((animation) => animation.cancel());
      ghosts.forEach((ghost) => ghost.remove());
    };
  }, [filterKey]);
  return (
    <div ref={ref} className="projects-grid">
      {children}
    </div>
  );
}
