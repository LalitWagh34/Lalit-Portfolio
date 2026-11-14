"use client";
import { useRef, type PointerEvent } from "react";
const layers = [
  { name: "INTERFACE", code: "01", className: "layer-interface" },
  { name: "SYSTEMS", code: "02", className: "layer-systems" },
  { name: "INTELLIGENCE", code: "03", className: "layer-ai" },
];
export function SpatialScene() {
  const ref = useRef<HTMLDivElement>(null);
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
      onPointerMove={tilt}
      onPointerLeave={reset}
      role="img"
      aria-label="Animated three dimensional software layers: interface, systems, and intelligence"
    >
      <div className="scene-grid" />
      <div className="scene-assembly">
        {layers.map((layer) => (
          <div key={layer.code} className={"spatial-layer " + layer.className}>
            <div className="layer-top">
              <span>{layer.code}</span>
              <strong>{layer.name}</strong>
              <div className="layer-circuit">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="layer-front" />
            <div className="layer-side" />
          </div>
        ))}
        <div className="scene-core" />
      </div>
      <span className="scene-coordinate coordinate-top">
        SOFTWARE / IN THREE DIMENSIONS
      </span>
      <span className="scene-coordinate coordinate-bottom">
        INTERFACE → SYSTEMS → INTELLIGENCE
      </span>
      <span className="scene-particle particle-one" />
      <span className="scene-particle particle-two" />
      <span className="scene-particle particle-three" />
    </div>
  );
}
