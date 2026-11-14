import { GraduationCap, Code2, Trophy, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "./ui";
const steps = [
  {
    icon: GraduationCap,
    label: "JUL 2026 — MAY 2028 · EXPECTED",
    title: "M.Tech · Software Engineering",
    body: "Maulana Azad National Institute of Technology, Bhopal. Building depth in software engineering, algorithms, and applied systems.",
  },
  {
    icon: GraduationCap,
    label: "AUG 2022 — MAY 2026",
    title: "B.E. · Computer Engineering",
    body: "Smt. Indira Gandhi College of Engineering, Mumbai University. Graduated with a CGPA of 8.63 / 10.",
  },
  {
    icon: Code2,
    label: "PROBLEM SOLVING",
    title: "450+ problems. One deliberate practice.",
    body: "450+ problems across LeetCode and Codeforces; LeetCode rating of 1657.",
  },
  {
    icon: Trophy,
    label: "GATE CSE 2026",
    title: "All India Rank 7402",
    body: "A milestone built on core computer science: data structures, algorithms, operating systems, and databases.",
  },
];
export function JourneySection() {
  return (
    <section className="section container journey-section" id="journey">
      <div className="journey-intro">
        <SectionHeading
          eyebrow="03 / THE JOURNEY"
          title="Strong foundations. A builder’s mindset."
        />
        <p>
          I’m pursuing an M.Tech in Software Engineering at MANIT Bhopal and
          seeking software engineering opportunities.
        </p>
        <p>
          My work centers on correctness, performance, and reliability — from
          C++ algorithms to asynchronous backends and real-time systems.
        </p>
        <div className="research-note">
          <span className="eyebrow">RESEARCH</span>
          <p>
            Co-authored a peer-reviewed paper on algorithmic architecture for
            AI-based screening systems, contributing to literature review,
            empirical evaluation, and technical documentation.
          </p>
        </div>
        <a
          className="inline-link"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          Read my full résumé <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="journey-timeline">
        {steps.map((step) => (
          <article className="journey-item" key={step.label}>
            <span className="timeline-icon">
              <step.icon size={18} />
            </span>
            <div>
              <span className="eyebrow">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
