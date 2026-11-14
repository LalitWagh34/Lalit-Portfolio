"use client";
import { useId, useState } from "react";
import { ArrowUpRight, Network } from "lucide-react";
import { architectures } from "@/data/architectures";
export function ArchitectureDiagram({ projectId }: { projectId: string }) {
  const graph = architectures[projectId];
  const [selected, setSelected] = useState<string | null>(null);
  const marker = useId().replace(/:/g, "");
  if (!graph) return null;
  const active = graph.nodes.find((node) => node.id === selected);
  return (
    <div className="architecture-diagram">
      <div className="architecture-heading">
        <Network size={15} />
        <span>How it works</span>
      </div>
      <p className="architecture-summary">{graph.summary}</p>
      <p className="architecture-help">
        Select a component to explore its responsibility.
      </p>
      <div
        className="architecture-canvas"
        tabIndex={0}
        role="region"
        aria-label="System diagram; scroll horizontally on small screens"
      >
        <svg
          viewBox="0 0 700 380"
          role="group"
          aria-label="Interactive system architecture"
        >
          <defs>
            <marker
              id={marker}
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path d="M0 0 L7 3.5 L0 7" fill="currentColor" />
            </marker>
          </defs>
          {graph.edges.map((edge, i) => {
            const from = graph.nodes.find((n) => n.id === edge.from)!;
            const to = graph.nodes.find((n) => n.id === edge.to)!;
            const horizontal = from.y === to.y;
            const direction = to.x > from.x ? 1 : -1;
            const x1 = horizontal ? from.x + direction * 97 : from.x;
            const y1 = horizontal
              ? from.y
              : from.y + (to.y > from.y ? 31 : -31);
            const x2 = horizontal ? to.x - direction * 101 : to.x;
            const y2 = horizontal ? to.y : to.y + (to.y > from.y ? -35 : 35);
            return (
              <g
                key={i}
                className="architecture-edge"
                data-active={
                  !selected || edge.from === selected || edge.to === selected
                }
              >
                <path
                  d={"M" + x1 + "," + y1 + " L" + x2 + "," + y2}
                  markerEnd={"url(#" + marker + ")"}
                />
                <text
                  x={(x1 + x2) / 2}
                  y={(y1 + y2) / 2 - 7}
                  textAnchor="middle"
                >
                  {edge.label}
                </text>
              </g>
            );
          })}
          {graph.nodes.map((node) => (
            <g
              key={node.id}
              className="architecture-node"
              role="button"
              tabIndex={0}
              aria-label={node.label + ": " + node.sublabel}
              aria-pressed={selected === node.id}
              onClick={() => setSelected(node.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(node.id);
                }
              }}
            >
              <rect
                x={node.x - 96}
                y={node.y - 30}
                width="192"
                height="60"
                rx="9"
              />
              <text x={node.x} y={node.y - 3} textAnchor="middle">
                {node.label}
              </text>
              <text
                className="node-sublabel"
                x={node.x}
                y={node.y + 15}
                textAnchor="middle"
              >
                {node.sublabel}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="architecture-detail" aria-live="polite">
        <strong>{active?.label || "Key design choice"}</strong>
        <p>{active?.detail || graph.takeaway}</p>
      </div>
      <details className="architecture-text">
        <summary>Read the flow as text</summary>
        <ul>
          {graph.edges.map((edge, i) => (
            <li key={i}>
              {graph.nodes.find((n) => n.id === edge.from)?.label} →{" "}
              {graph.nodes.find((n) => n.id === edge.to)?.label}: {edge.label}
            </li>
          ))}
        </ul>
      </details>
      <div className="architecture-sources">
        <span>Explore the technical details</span>
        {graph.sources.map((source) => (
          <a
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noreferrer"
          >
            {source.label}
            <ArrowUpRight size={12} />
          </a>
        ))}
      </div>
    </div>
  );
}
