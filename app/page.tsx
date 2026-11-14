import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { JourneySection } from "@/components/journey-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { MotionObserver } from "@/components/motion-observer";
export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <MotionObserver />
      <SiteHeader />
      <main id="main">
        <Hero />
        <div className="specialties container">
          <span>FULL-STACK ENGINEERING</span>
          <i>✳</i>
          <span>REAL-TIME SYSTEMS</span>
          <i>✳</i>
          <span>AI & RETRIEVAL</span>
          <i>✳</i>
          <span>ALWAYS EXPLORING</span>
        </div>
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
