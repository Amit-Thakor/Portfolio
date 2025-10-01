import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ResumeSection } from "@/components/resume-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
