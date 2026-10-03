import {
  FaAws,
  FaBrain,
  FaGithub,
  FaJava,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
} from "../icons";
import type { IconType } from "react-icons";
import { SectionTitle } from "../ui/SectionTitle";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}
const technologies: Skill[] = [
  { name: "Java", icon: FaJava, color: "#e76f00" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss3, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express", icon: SiExpress, color: "#b3b3b3" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Redux", icon: SiRedux, color: "#764abc" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
];
const tools: Skill[] = [
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "AWS", icon: FaAws, color: "#ff9900" },
  { name: "Jenkins", icon: SiJenkins, color: "#d24939" },
  { name: "Firebase", icon: SiFirebase, color: "#dd2c00" },
  { name: "Supabase", icon: SiSupabase, color: "#3fcf8e" },
  { name: "LLMs", icon: FaBrain, color: "#b3b3b3" },
  { name: "RAG", icon: FaBrain, color: "#b3b3b3" },
  { name: "Prompt Engineering", icon: FaBrain, color: "#b3b3b3" },
  { name: "AI Benchmarking", icon: FaBrain, color: "#b3b3b3" },
];
function SkillRow({
  items,
  reverse = false,
}: {
  items: Skill[];
  reverse?: boolean;
}) {
  return (
    <div
      className="marquee-container"
      tabIndex={0}
      aria-label={reverse ? "Tools and AI skills" : "Languages and frameworks"}
    >
      <div className={`marquee${reverse ? " reverse" : ""}`}>
        {[0, 1, 2].map((repeat) =>
          items.map(({ name, icon: Icon, color }) => (
            <span
              className="skill-pill"
              key={`${repeat}-${name}`}
              aria-hidden={repeat > 0}
            >
              <Icon className="skill-icon" color={color} />
              <span className="skill-name">{name}</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}
export function SkillSection() {
  return (
    <section className="skill-section">
      <SectionTitle>My Skills</SectionTitle>
      <SkillRow items={technologies} />
      <SkillRow items={tools} reverse />
    </section>
  );
}
