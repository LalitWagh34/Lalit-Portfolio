import { Network, ChevronRight } from "lucide-react";
export function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "intervue")
    return (
      <div className="product-stage interview-stage">
        <div className="mock-app interview-app" aria-hidden="true">
          <div className="mock-sidebar">
            <b className="mini-brand">
              ◈ intervue<span>workspace</span>
            </b>
            {[
              "Overview",
              "Practice arena",
              "Mock interviews",
              "Your progress",
            ].map((x, i) => (
              <div className={i === 1 ? "mock-nav active" : "mock-nav"} key={x}>
                {i === 1 ? "⌘" : "◻"} <span>{x}</span>
              </div>
            ))}
            <div className="mock-profile">
              <span>LW</span> Lalit’s workspace
            </div>
          </div>
          <div className="mock-main">
            <div className="mock-top">
              Practice arena <span>● All systems ready</span>
            </div>
            <h4>A little practice. A lot of progress.</h4>
            <p>Find your flow. Take on your next challenge.</p>
            <div className="arena-grid">
              <div className="arena-card">
                <div className="arena-icon">⌘</div>
                <b>1v1 Coding battle</b>
                <p>Two minds. One challenge.</p>
                <span>Enter the arena ↗</span>
              </div>
              <div className="arena-card pale">
                <div className="arena-icon">✳</div>
                <b>AI Mock interview</b>
                <p>Your next interview starts here.</p>
                <span>Start a session ↗</span>
              </div>
            </div>
            <div className="mock-bottom">
              <span>YOUR ACTIVITY</span>
              <div className="activity-bars">
                {[
                  25, 40, 32, 65, 48, 80, 60, 95, 70, 85, 55, 100, 72, 90, 65,
                  82, 50, 75, 95, 68, 80, 100, 75, 90,
                ].map((h, i) => (
                  <i key={i} style={{ height: h + "%" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="visual-caption">INTERFACE STUDY / INTERVUE</span>
      </div>
    );
  if (kind === "hnsw")
    return (
      <div className="product-stage search-stage">
        <div className="search-window" aria-hidden="true">
          <div className="window-head">
            <span>
              <i />
              <i />
              <i />
            </span>
            <small>vector-search.ts</small>
            <Network size={14} />
          </div>
          <div className="search-body">
            <span className="code-comment">
              // finding meaning in the connections
            </span>
            <div className="code-line">
              <em>const</em> results = <em>await</em> index.
              <strong>search</strong>({"{"}
            </div>
            <div className="code-line indent">
              query: <span>"something worth finding"</span>,
            </div>
            <div className="code-line indent">
              strategy: <span>"hybrid"</span>
            </div>
            <div className="code-line">{"}"});</div>
            <svg className="network-art" viewBox="0 0 400 120">
              <g stroke="currentColor" opacity=".25">
                {[
                  [50, 70, 130, 30],
                  [50, 70, 160, 95],
                  [130, 30, 230, 48],
                  [160, 95, 230, 48],
                  [230, 48, 320, 20],
                  [230, 48, 340, 90],
                  [130, 30, 160, 95],
                  [160, 95, 340, 90],
                  [320, 20, 340, 90],
                ].map((v, i) => (
                  <line key={i} x1={v[0]} y1={v[1]} x2={v[2]} y2={v[3]} />
                ))}
              </g>
              {[
                [50, 70],
                [130, 30],
                [160, 95],
                [230, 48],
                [320, 20],
                [340, 90],
              ].map((v, i) => (
                <g key={i}>
                  <circle
                    cx={v[0]}
                    cy={v[1]}
                    r={i === 3 ? 14 : 7}
                    fill={i === 3 ? "#d6efa6" : "#4c6656"}
                  />
                  <circle
                    cx={v[0]}
                    cy={v[1]}
                    r={i === 3 ? 23 : 13}
                    fill="none"
                    stroke="currentColor"
                    opacity=".2"
                  />
                </g>
              ))}
            </svg>
            <div className="search-status">
              <span>● Index connected</span>
              <span>HNSW + BM25 → RRF</span>
            </div>
          </div>
        </div>
        <span className="visual-caption">CONCEPT VISUAL / VECTOR SEARCH</span>
      </div>
    );
  return (
    <div className="product-stage tracker-stage">
      <div className="tracker-window" aria-hidden="true">
        <div className="tracker-head">
          <b>▧ ApplyTrack</b>
          <span>
            My applications <ChevronRight size={12} /> Board
          </span>
          <span>＋ New application</span>
        </div>
        <div className="kanban">
          {[
            {
              name: "Applied",
              color: "#8e8bd1",
              cards: ["Frontend Developer", "Software Engineer"],
            },
            {
              name: "Interviewing",
              color: "#d59448",
              cards: ["Full-stack Developer", "Backend Engineer"],
            },
            { name: "Offer", color: "#649b80", cards: ["Software Developer"] },
          ].map((col) => (
            <div className="kanban-col" key={col.name}>
              <div className="kanban-label">
                <i style={{ background: col.color }} />
                {col.name}
                <span>{col.cards.length}</span>
              </div>
              {col.cards.map((c, i) => (
                <div className="job-card" key={c}>
                  <span className="company-mark" style={{ color: col.color }}>
                    {["◈", "▦"][i % 2]}
                  </span>
                  <b>{c}</b>
                  <p>Application workspace</p>
                  <div>
                    <span>{i === 0 ? "Remote" : "Hybrid"}</span>
                    <small>↗</small>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="visual-caption">INTERFACE STUDY / APPLYTRACK</span>
    </div>
  );
}
