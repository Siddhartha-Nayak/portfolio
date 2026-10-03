import { FiPrinter } from "../components/icons";
import { allProjects } from "../data/projects";
import {
  education,
  experience,
  profile,
  skillCategories,
} from "../data/profile";
import { PageLayout } from "../components/layout/PageLayout";

export function ResumePage() {
  return (
    <PageLayout title="Resume">
      <div className="resume-actions">
        <button className="contact-link-btn" onClick={() => window.print()}>
          <FiPrinter /> Print / Save as PDF
        </button>
      </div>
      <article className="resume-document">
        <h1>{profile.name}</h1>
        <p className="resume-roles">{profile.roles}</p>
        <p className="resume-contact">
          {profile.location} ·{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <br />
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <h2>Professional Summary</h2>
        <p>{profile.summary}</p>
        <h2>Experience</h2>
        {experience.map((entry) => (
          <section key={entry.company}>
            <h3>{entry.role}</h3>
            <p className="resume-meta">
              {entry.company} · {entry.location}
            </p>
            <ul>
              {entry.description.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </section>
        ))}
        <h2>Technical Skills</h2>
        {skillCategories.map((category) => (
          <p key={category.label}>
            <strong>{category.label}:</strong> {category.items.join(", ")}
          </p>
        ))}
        <h2>Projects</h2>
        {allProjects.map((project) => (
          <section key={project.name}>
            <h3>{project.name}</h3>
            <p className="resume-meta">{project.tech.join(" · ")}</p>
            <ul>
              {project.description.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </section>
        ))}
        <h2>Education</h2>
        <h3>{education.degree}</h3>
        <p>
          {education.school} · {education.period} · GPA: {education.gpa}
        </p>
      </article>
    </PageLayout>
  );
}
