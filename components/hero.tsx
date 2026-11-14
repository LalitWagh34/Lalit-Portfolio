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
          Engineering student. I build useful products and enjoy understanding
          the systems beneath them.
        </p>
        <p>
          From real-time coding arenas to vector search engines, my work brings
          together <strong>full-stack engineering</strong>, thoughtful
          interfaces, and <strong>practical AI.</strong>
        </p>
        <div className="hero-actions">
          <LinkButton external href={profile.resume}>
            View résumé
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
          <img src={profile.avatar} alt="" width={38} height={38} />
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
