import { FaAws, FaBrain, FaEnvelope, FaGithub, FaJava, FaLinkedin, BsFillArrowThroughHeartFill, HiOutlineArrowRight, HiOutlineClock, HiOutlineDocumentText, HiOutlineLocationMarker, FiChevronDown, FiExternalLink, FiSettings, SiBootstrap, SiCss3, SiDocker, SiExpress, SiFirebase, SiGit, SiHtml5, SiJavascript, SiJenkins, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedux, SiSpringboot, SiSupabase, SiTailwindcss } from './icons';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { experience, profile } from '../data/profile';
import { featuredProjects } from '../data/projects';
import type { ProjectData } from '../data/projects';
import { SectionTitle, Tooltip } from './Layout';
import { useISTClock } from '../hooks/useISTClock';
import Calendar from './calendar/Calendar';

export function HeroSection() {
  const time = useISTClock();
  return <>
    <div className="hero-section-profile">
      <div className="hero-section-avatar-wrapper"><div className="hero-section-avatar initials-avatar" aria-label={`${profile.name} initials`}>{profile.initials}<span className="avatar-caption">software · ai</span></div></div>
      <div className="hero-section-profile-info"><div className="hero-section-profile-main">
        <div className="hero-section-profile-name-row"><h1 className="hero-section-profile-name">{profile.displayName}<BsFillArrowThroughHeartFill className="heart" aria-hidden="true" /></h1></div>
        <div className="hero-section-profile-username"><a href={profile.github} target="_blank" rel="noreferrer">{profile.handle}</a></div>
        <div className="hero-section-profile-status-row"><span className="profile-status">Building software & AI systems</span></div>
        <div className="hero-section-profile-meta-row"><span className="hero-section-profile-meta"><HiOutlineLocationMarker />{profile.location}</span><span className="hero-section-profile-dot">•</span><span className="hero-section-profile-meta"><HiOutlineClock />{time}</span></div>
      </div></div>
    </div>
    <section className="hero-section container" aria-label="About me"><div className="about-me"><div className="about-me-content"><ul className="about-bio">
      <li className="about-bio-item"><i className="about-bio-marker" aria-hidden="true" /><span>Hi, I am a <strong className="bio-highlight">Full Stack Software Engineer & AI Engineer.</strong></span></li>
      <li className="about-bio-item"><i className="about-bio-marker" aria-hidden="true" /><span>Building <strong className="bio-highlight">CoLearn</strong> and <strong className="bio-highlight">PathPilot</strong>, connecting collaborative software with practical AI.</span></li>
      <li className="about-bio-item"><i className="about-bio-marker" aria-hidden="true" /><span>Designing <strong className="bio-highlight">AI benchmarks</strong>, evaluating frontier models, and turning ideas into working products.</span></li>
    </ul></div><div className="hero-divider" />
    <div className="community-links">
      <a className="twitter-card" href={profile.github} target="_blank" rel="noreferrer"><span className="twitter-card-left"><FaGithub className="twitter-icon" /></span><span className="twitter-card-middle"><span className="twitter-name">{profile.displayName}</span><span className="twitter-handle">{profile.handle}</span></span><span className="twitter-card-right"><span className="twitter-follow-btn">GitHub</span></span></a>
      <a className="twitter-card" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="twitter-card-left"><FaLinkedin className="twitter-icon" /></span><span className="twitter-card-middle"><span className="twitter-name">Let’s connect</span><span className="twitter-handle">Software engineering & AI</span></span><span className="twitter-card-right"><span className="twitter-follow-btn">LinkedIn</span></span></a>
    </div>
    <div className="contact-me"><Tooltip text={profile.email}><a className="contact-btn" href={`mailto:${profile.email}`}><FaEnvelope /> Email Me</a></Tooltip><span className="social-separator">|</span>
      <Tooltip text="LinkedIn"><a className="contact-btn icon-contact" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></Tooltip>
      <Tooltip text="GitHub"><a className="contact-btn icon-contact" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a></Tooltip>
      <Tooltip text="Resume"><Link className="contact-btn icon-contact" to="/resume" aria-label="View resume"><HiOutlineDocumentText /></Link></Tooltip>
    </div></div></section>
  </>;
}
interface Skill { name: string; icon: IconType; color: string }
const technologies: Skill[] = [
  { name: 'Java', icon: FaJava, color: '#e76f00' }, { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' }, { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' }, { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' }, { name: 'Express', icon: SiExpress, color: '#b3b3b3' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' }, { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' }, { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' }, { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
];
const tools: Skill[] = [
  { name: 'Git', icon: SiGit, color: '#f05032' }, { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' }, { name: 'AWS', icon: FaAws, color: '#ff9900' },
  { name: 'Jenkins', icon: SiJenkins, color: '#d24939' }, { name: 'Firebase', icon: SiFirebase, color: '#dd2c00' },
  { name: 'Supabase', icon: SiSupabase, color: '#3fcf8e' }, { name: 'LLMs', icon: FaBrain, color: '#b3b3b3' },
  { name: 'RAG', icon: FaBrain, color: '#b3b3b3' }, { name: 'Prompt Engineering', icon: FaBrain, color: '#b3b3b3' },
  { name: 'AI Benchmarking', icon: FaBrain, color: '#b3b3b3' },
];
function SkillRow({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  return <div className="marquee-container" tabIndex={0} aria-label={reverse ? 'Tools and AI skills' : 'Languages and frameworks'}><div className={`marquee${reverse ? ' reverse' : ''}`}>{[0, 1, 2].map(repeat => items.map(({ name, icon: Icon, color }) => <span className="skill-pill" key={`${repeat}-${name}`} aria-hidden={repeat > 0}><Icon className="skill-icon" color={color} /><span className="skill-name">{name}</span></span>))}</div></div>;
}
export function SkillSection() { return <section className="skill-section"><SectionTitle>My Skills</SectionTitle><SkillRow items={technologies} /><SkillRow items={tools} reverse /></section>; }
export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return <section className="experience-section"><SectionTitle>Work Experience</SectionTitle><div className="exp-timeline-container"><span className="exp-timeline-line" aria-hidden="true" />{experience.map((entry, index) => <article className="exp-timeline-item" key={entry.company}><span className="exp-timeline-dot" aria-hidden="true" /><div className="exp-card"><div className="exp-header"><div className="exp-header-left"><span className="exp-logo"><span className="handshake-mark">H</span></span><div className="exp-company-info"><div className="exp-company-row"><h3 className="exp-company-name">{entry.company}</h3></div><span className="exp-role-text">{entry.role} · {entry.location}</span></div></div><button className="exp-expand-btn" onClick={() => setExpanded(expanded === index ? null : index)} aria-expanded={expanded === index} aria-controls={`experience-${index}`} aria-label={`${expanded === index ? 'Hide' : 'Show'} experience details`}><FiChevronDown className={`exp-expand-icon${expanded === index ? ' open' : ''}`} /></button></div><div id={`experience-${index}`} className={`exp-details${expanded === index ? ' expanded' : ''}`} aria-hidden={expanded !== index}><ul className="exp-bullets">{entry.description.map(text => <li key={text}>{text}</li>)}</ul></div></div></article>)}</div><Calendar /></section>;
}
export function ProjectCard({ project }: { project: ProjectData }) {
  return <article className="project-card"><div className="banner"><img src={project.banner} alt={`${project.name} project illustration`} width={600} height={340} loading="lazy" /></div><div className="project-details"><div className="project-header-row"><h3 className="project-name">{project.name}</h3><div className="project-link-icons">{project.live && <a className="project-pill" href={project.live} target="_blank" rel="noreferrer"><FiExternalLink /> Live</a>}{project.github && <a className="project-pill" href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}</div></div><p className="project-desc">{project.desc}</p><span className="project-tech-label">Technologies Used:</span><div className="project-tech">{project.tech.map(technology => <span key={technology}>{technology}</span>)}</div></div></article>;
}
export function Projects() { return <section className="project-section"><SectionTitle>My Projects</SectionTitle>{featuredProjects.map(project => <ProjectCard key={project.name} project={project} />)}<div className="view-all-projects right-side"><Link className="view-all-btn" to="/projects">More about my projects <HiOutlineArrowRight className="arrow-icon" /></Link></div></section>; }
export function UsesSection() { return <section className="project-section"><SectionTitle>/uses</SectionTitle><div className="uses-section-content"><p>Curious about my workflow? Explore the software and tools I use to build applications and evaluate AI systems.</p><Link className="uses-section-link" to="/uses">See my tools <HiOutlineArrowRight className="arrow-icon" /></Link></div></section>; }
export function AnalyticsDashboard() {
  return <><div className="analytics-stats">{['Visitors', 'Page Views'].map(label => <div className="analytics-stat-card" key={label}><span className="analytics-stat-label">{label}</span><span className="analytics-stat-value">—</span><span className="analytics-stat-change analytics-stat-change-neutral">No data yet</span></div>)}</div><div className="analytics-chart-card"><div className="analytics-chart-topbar"><span className="analytics-chart-topbar-left"><FiSettings className="analytics-chart-gear" /><span className="analytics-chart-codelabel">~/analytics.tsx</span></span><span className="analytics-period-label">Last 7 days</span></div><div className="analytics-chart-legend"><span className="analytics-legend-item"><i className="analytics-legend-dot analytics-legend-visitors" /> Visitors</span><span className="analytics-legend-item"><i className="analytics-legend-dot analytics-legend-pageviews" /> Page Views</span></div><div className="analytics-empty-chart">Visitor statistics will appear when analytics is connected.</div></div></>;
}
export function AnalyticsSection() { return <section className="project-section"><SectionTitle>/analytics</SectionTitle><AnalyticsDashboard /></section>; }
export function ContactMe() {
  return <section className="contact-me-section" id="contact"><div className="contact-me-card"><h2 className="contact-me-title">Let’s Connect</h2><p className="contact-me-description">Feel free to reach out through any of these platforms</p><div className="contact-links"><a className="contact-link-btn" href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin className="contact-link-icon" /> LinkedIn</a><a className="contact-link-btn" href={profile.github} target="_blank" rel="noreferrer"><FaGithub className="contact-link-icon" /> GitHub</a><a className="contact-link-btn" href={`mailto:${profile.email}`}><FaEnvelope className="contact-link-icon" /> Email</a><Link className="contact-link-btn" to="/resume"><HiOutlineDocumentText className="contact-link-icon" /> Resume</Link></div></div></section>;
}
export function Home() { return <main className="home-container"><HeroSection /><SkillSection /><Experience /><Projects /><UsesSection /><AnalyticsSection /><ContactMe /></main>; }
