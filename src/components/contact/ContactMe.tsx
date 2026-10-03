import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  HiOutlineDocumentText,
} from "../icons";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";

export function ContactMe() {
  return (
    <section className="contact-me-section" id="contact">
      <div className="contact-me-card">
        <h2 className="contact-me-title">Let’s Connect</h2>
        <p className="contact-me-description">
          Feel free to reach out through any of these platforms
        </p>
        <div className="contact-links">
          <a
            className="contact-link-btn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="contact-link-icon" /> LinkedIn
          </a>
          <a
            className="contact-link-btn"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="contact-link-icon" /> GitHub
          </a>
          <a className="contact-link-btn" href={`mailto:${profile.email}`}>
            <FaEnvelope className="contact-link-icon" /> Email
          </a>
          <Link className="contact-link-btn" to="/resume">
            <HiOutlineDocumentText className="contact-link-icon" /> Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
