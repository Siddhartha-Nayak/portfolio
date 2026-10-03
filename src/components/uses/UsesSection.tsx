import { HiOutlineArrowRight } from "../icons";
import { Link } from "react-router-dom";
import { SectionTitle } from "../ui/SectionTitle";

export function UsesSection() {
  return (
    <section className="project-section">
      <SectionTitle>/uses</SectionTitle>
      <div className="uses-section-content">
        <p>
          Curious about my workflow? Explore the software and tools I use to
          build applications and evaluate AI systems.
        </p>
        <Link className="uses-section-link" to="/uses">
          See my tools <HiOutlineArrowRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
}
