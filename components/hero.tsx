import Image from "next/image";
import { ArrowDown, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { LinkButton } from "./ui";
import { SpatialScene } from "./spatial-scene";
export function Hero() {
  return (
    <section className="hero container" id="about">
      <div className="hero-copy">
        <div className="hero-intro">
          <span className="status-dot" /> HELLO WORLD, I'M LALIT
        </div>
        <h1>
          Building software.
          <br />
          <span>Following curiosity.</span>
        </h1>
        <div className="role-line">
          Software Engineer <span>×</span> M.Tech @ MANIT Bhopal
        </div>
        <p>
          Hi, I’m <strong>{profile.name}</strong> — an M.Tech Software
          Engineering student at MANIT Bhopal. 
        </p>
        <p>
          I build full-stack applications, backend systems, real-time applications, and AI-powered products. My interests lie in Full Stack Systems,  AI , particularly <strong>System design</strong>,<strong>Machine learning</strong>, and <strong>LLMs</strong>.    
          
          
        </p>
        <div className="hero-actions">
          <LinkButton external href={profile.resume}>
            View resume
          </LinkButton>
          <LinkButton secondary href="#contact">
            Let’s connect
          </LinkButton>
        </div>
        <div className="hero-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            className="leetcode-link"
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode profile"
          >
            <img src="/skills/leetcode.svg" alt="" width={19} height={19} />
            <span>LeetCode</span>
          </a>
          <span />
          <small>
            <MapPin size={13} />
            {profile.location}
          </small>
        </div>
      </div>
      <div className="hero-visual">
        <SpatialScene />
        <div className="hero-profile-chip">
          <Image src={profile.avatar} alt="Lalit Wagh" width={56} height={56} />
          <span>
            Lalit Wagh<small>Software engineer · builder</small>
          </span>
        </div>
      </div>
      <a className="scroll-cue" href="#projects">
        <ArrowDown size={14} /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}
