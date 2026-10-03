import { FiChevronDown } from "../icons";
import { useState } from "react";
import { experience } from "../../data/profile";
import { SectionTitle } from "../ui/SectionTitle";
import Calendar from "../calendar/Calendar";

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section className="experience-section">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="exp-timeline-container">
        <span className="exp-timeline-line" aria-hidden="true" />
        {experience.map((entry, index) => (
          <article className="exp-timeline-item" key={entry.company}>
            <span className="exp-timeline-dot" aria-hidden="true" />
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-header-left">
                  <span className="exp-logo">
                    <span className="handshake-mark">H</span>
                  </span>
                  <div className="exp-company-info">
                    <div className="exp-company-row">
                      <h3 className="exp-company-name">{entry.company}</h3>
                    </div>
                    <span className="exp-role-text">
                      {entry.role} · {entry.location}
                    </span>
                  </div>
                </div>
                <button
                  className="exp-expand-btn"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                  aria-controls={`experience-${index}`}
                  aria-label={`${expanded === index ? "Hide" : "Show"} experience details`}
                >
                  <FiChevronDown
                    className={`exp-expand-icon${expanded === index ? " open" : ""}`}
                  />
                </button>
              </div>
              <div
                id={`experience-${index}`}
                className={`exp-details${expanded === index ? " expanded" : ""}`}
                aria-hidden={expanded !== index}
              >
                <ul className="exp-bullets">
                  {entry.description.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Calendar />
    </section>
  );
}
