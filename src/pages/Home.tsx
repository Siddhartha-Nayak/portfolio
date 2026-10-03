import { HeroSection } from "../components/hero/HeroSection";
import { SkillSection } from "../components/skills/SkillSection";
import { Experience } from "../components/experience/Experience";
import { Projects } from "../components/projects/Projects";
import { UsesSection } from "../components/uses/UsesSection";
import { AnalyticsSection } from "../components/analytics/AnalyticsSection";
import { ContactMe } from "../components/contact/ContactMe";

export function Home() {
  return (
    <main className="home-container">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <UsesSection />
      <AnalyticsSection />
      <ContactMe />
    </main>
  );
}
