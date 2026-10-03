import { ProjectCard } from "../components/projects/ProjectCard";
import { allProjects } from "../data/projects";
import { PageLayout } from "../components/layout/PageLayout";

export function ProjectsPage() {
  return (
    <PageLayout title="My Projects">
      <p className="page-description">
        End-to-end applications at the intersection of collaborative software
        and AI.
      </p>
      {allProjects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
          <div className="project-notes">
            <h3>What I built</h3>
            <ul>
              {project.description.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
