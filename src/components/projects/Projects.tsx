import { HiOutlineArrowRight } from "../icons";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import { SectionTitle } from "../ui/SectionTitle";
import { ProjectCard } from "../projects/ProjectCard";

export function Projects() {
  return (
    <section className="project-section">
      <SectionTitle>My Projects</SectionTitle>
      {featuredProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
      <div className="view-all-projects right-side">
        <Link className="view-all-btn" to="/projects">
          More about my projects <HiOutlineArrowRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
}
