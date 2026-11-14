"use client";
import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/profile";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    navigation.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="wordmark" href="#about">
          lalit<span>.dev</span>
        </a>
        <nav
          id="main-nav"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              className={active === item.href ? "active" : ""}
              aria-current={active === item.href ? "location" : undefined}
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="github-link"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={16} />
          <span>Resume</span>
        </a>
        <button
          className="icon-button menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
