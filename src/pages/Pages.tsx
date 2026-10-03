import { FiArrowLeft, FiPrinter } from '../components/icons';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Layout';
import { AnalyticsDashboard, ContactMe, ProjectCard } from '../components/PortfolioSections';
import { allProjects } from '../data/projects';
import { education, experience, profile, skillCategories } from '../data/profile';
import { usesData } from '../data/uses';
function Page({ title, children }: { title: string; children: ReactNode }) {
  return <main className="standard-container subpage"><Link className="back-link" to="/"><FiArrowLeft /> Home</Link><div><SectionTitle>{title}</SectionTitle></div>{children}</main>;
}
export function ProjectsPage() { return <Page title="My Projects"><p className="page-description">End-to-end applications at the intersection of collaborative software and AI.</p>{allProjects.map(project => <div key={project.name}><ProjectCard project={project} /><div className="project-notes"><h3>What I built</h3><ul>{project.description.map(text => <li key={text}>{text}</li>)}</ul></div></div>)}</Page>; }
export function UsesPage() { return <Page title="/uses"><p className="page-description">The technologies behind my full-stack applications, RAG systems, and AI benchmarking work.</p>{usesData.map(category => <section className="uses-category" key={category.category}><h3>{category.category}</h3><ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul></section>)}</Page>; }
export function AnalyticsPage() { return <Page title="/analytics"><AnalyticsDashboard /></Page>; }
export function BlogsPage() { return <Page title="Writing"><div className="empty-card"><p>No posts published yet.</p><Link className="uses-section-link" to="/projects">Explore my projects</Link></div></Page>; }
export function ResumePage() {
  return <Page title="Resume"><div className="resume-actions"><button className="contact-link-btn" onClick={() => window.print()}><FiPrinter /> Print / Save as PDF</button></div><article className="resume-document"><h1>{profile.name}</h1><p className="resume-roles">{profile.roles}</p><p className="resume-contact">{profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a><br /><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></p><h2>Professional Summary</h2><p>{profile.summary}</p><h2>Experience</h2>{experience.map(entry => <section key={entry.company}><h3>{entry.role}</h3><p className="resume-meta">{entry.company} · {entry.location}</p><ul>{entry.description.map(text => <li key={text}>{text}</li>)}</ul></section>)}<h2>Technical Skills</h2>{skillCategories.map(category => <p key={category.label}><strong>{category.label}:</strong> {category.items.join(', ')}</p>)}<h2>Projects</h2>{allProjects.map(project => <section key={project.name}><h3>{project.name}</h3><p className="resume-meta">{project.tech.join(' · ')}</p><ul>{project.description.map(text => <li key={text}>{text}</li>)}</ul></section>)}<h2>Education</h2><h3>{education.degree}</h3><p>{education.school} · {education.period} · GPA: {education.gpa}</p></article></Page>;
}
export function NotFoundPage() { return <Page title="Page not found"><div className="empty-card"><h1>404</h1><p>This page doesn’t exist.</p><Link className="uses-section-link" to="/">Back to home</Link></div><ContactMe /></Page>; }
