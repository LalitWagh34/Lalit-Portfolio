"use client";
import { useEffect } from "react";
export function MotionObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(
      ".section-heading,.project-card-shell,.skill-card,.journey-item,.contact-card",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("will-reveal");
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("will-reveal"));
    };
  }, []);
  return null;
}
