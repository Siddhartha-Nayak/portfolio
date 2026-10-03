import { FaGithub, FiExternalLink } from "../icons";
import type { ProjectData } from "../../data/projects";

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <article className="project-card">
      <div className="banner">
        <img
          src={project.banner}
          alt={`${project.name} project illustration`}
          width={600}
          height={340}
          loading="lazy"
        />
      </div>
      <div className="project-details">
        <div className="project-header-row">
          <h3 className="project-name">{project.name}</h3>
          <div className="project-link-icons">
            {project.live && (
              <a
                className="project-pill"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink /> Live
              </a>
            )}
            {project.github && (
              <a
                className="project-pill"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>
        <p className="project-desc">{project.desc}</p>
        <span className="project-tech-label">Technologies Used:</span>
        <div className="project-tech">
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
