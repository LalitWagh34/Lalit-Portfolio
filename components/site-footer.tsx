import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <div>
        <a className="wordmark" href="#about">
          lalit<span>.dev</span>
        </a>
        <p>Built with intention. Always evolving.</p>
      </div>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <div className="footer-links">
        <a
          aria-label="GitHub"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} />
        </a>
        <a
          aria-label="LinkedIn"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a aria-label="Email" href={"mailto:" + profile.email}>
          <Mail size={18} />
        </a>
        <a aria-label="Back to top" href="#about">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
