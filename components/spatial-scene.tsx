"use client";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { sceneLayers } from "@/data/scene";
import { SkillIcon } from "./skill-badge";
const scatterPositions = [
  { x: -112, y: -115, rotate: -8 },
  { x: 112, y: -95, rotate: 7 },
  { x: -120, y: -5, rotate: 5 },
  { x: 120, y: 15, rotate: -5 },
  { x: -100, y: 110, rotate: -6 },
  { x: 100, y: 125, rotate: 6 },
];
export function SpatialScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = sceneLayers.find((layer) => layer.id === activeId);
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty(
      "--pointer-x",
      ((event.clientX - bounds.left) / bounds.width - 0.5) * 12 + "deg",
    );
    ref.current?.style.setProperty(
      "--pointer-y",
      -((event.clientY - bounds.top) / bounds.height - 0.5) * 10 + "deg",
    );
  }
  function reset() {
    ref.current?.style.setProperty("--pointer-x", "0deg");
    ref.current?.style.setProperty("--pointer-y", "0deg");
  }
  return (
    <div
      ref={ref}
      className="spatial-scene"
      data-active-layer={activeId ?? "none"}
      onPointerMove={tilt}
      onPointerLeave={reset}
      onKeyDown={(event) => {
        if (event.key === "Escape") setActiveId(null);
      }}
      role="group"
      aria-label="Explore my interface, systems, and intelligence stack"
    >
      <div className="scene-grid" aria-hidden="true" />
      <div className="scene-assembly">
        {sceneLayers.map((layer) => (
          <div
            key={layer.code}
            className={"spatial-layer " + layer.className}
            data-active={activeId === layer.id}
          >
            <button
              type="button"
              className="layer-top"
              aria-label={"Explore " + layer.name + " technologies"}
              aria-pressed={activeId === layer.id}
              aria-controls="scene-technologies"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveId(layer.id);
              }}
              onFocus={() => setActiveId(layer.id)}
              onClick={() => setActiveId(layer.id)}
            >
              <span>{layer.code}</span>
              <strong>{layer.name.toUpperCase()}</strong>
              <span className="layer-circuit" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </button>
            <div className="layer-front" aria-hidden="true" />
            <div className="layer-side" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div
        id="scene-technologies"
        className="scene-tech-cloud"
        aria-live="polite"
        aria-atomic="true"
      >
        {active && (
          <ul
            key={active.id}
            className={"scatter-list scatter-" + active.id}
            aria-label={active.name + " technologies"}
          >
            {active.skills.map((skill, index) => {
              const position = scatterPositions[index];
              return (
                <li
                  className="scatter-position"
                  key={skill.name}
                  style={
                    {
                      "--scatter-x": position.x + "px",
                      "--scatter-y": position.y + "px",
                      "--scatter-rotate": position.rotate + "deg",
                      "--scatter-delay": index * 45 + "ms",
                    } as CSSProperties
                  }
                >
                  <div className="tech-chip">
                    <SkillIcon skill={skill} />
                    <span>{skill.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <span className="scene-coordinate coordinate-top">
        {active
          ? active.name.toUpperCase() + " / THE STACK"
          : "HOVER A LAYER TO EXPLORE"}
      </span>
      <div
        className="scene-layer-controls"
        role="group"
        aria-label="Choose a technology layer"
      >
        {sceneLayers.map((layer) => (
          <button
            type="button"
            key={layer.id}
            aria-pressed={activeId === layer.id}
            aria-controls="scene-technologies"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setActiveId(layer.id);
            }}
            onFocus={() => setActiveId(layer.id)}
            onClick={() => setActiveId(layer.id)}
          >
            {layer.name}
          </button>
        ))}
      </div>
      <span className="scene-particle particle-one" aria-hidden="true" />
      <span className="scene-particle particle-two" aria-hidden="true" />
      <span className="scene-particle particle-three" aria-hidden="true" />
    </div>
  );
}
