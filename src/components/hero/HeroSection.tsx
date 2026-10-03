import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  BsFillArrowThroughHeartFill,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
} from "../icons";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { Tooltip } from "../ui/Tooltip";
import { useISTClock } from "../../hooks/useISTClock";

export function HeroSection() {
  const time = useISTClock();
  return (
    <>
      <div className="hero-section-profile">
        <div className="hero-section-avatar-wrapper">
          <div
            className="hero-section-avatar initials-avatar"
            aria-label={`${profile.name} initials`}
          >
            {profile.initials}
            <span className="avatar-caption">software · ai</span>
          </div>
        </div>
        <div className="hero-section-profile-info">
          <div className="hero-section-profile-main">
            <div className="hero-section-profile-name-row">
              <h1 className="hero-section-profile-name">
                {profile.displayName}
                <BsFillArrowThroughHeartFill
                  className="heart"
                  aria-hidden="true"
                />
              </h1>
            </div>
            <div className="hero-section-profile-username">
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.handle}
              </a>
            </div>
            <div className="hero-section-profile-status-row">
              <span className="profile-status">
                Building software & AI systems
              </span>
            </div>
            <div className="hero-section-profile-meta-row">
              <span className="hero-section-profile-meta">
                <HiOutlineLocationMarker />
                {profile.location}
              </span>
              <span className="hero-section-profile-dot">•</span>
              <span className="hero-section-profile-meta">
                <HiOutlineClock />
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="hero-section container" aria-label="About me">
        <div className="about-me">
          <div className="about-me-content">
            <ul className="about-bio">
              <li className="about-bio-item">
                <i className="about-bio-marker" aria-hidden="true" />
                <span>
                  Hi, I am a{" "}
                  <strong className="bio-highlight">
                    Full Stack Software Engineer & AI Engineer.
                  </strong>
                </span>
              </li>
              <li className="about-bio-item">
                <i className="about-bio-marker" aria-hidden="true" />
                <span>
                  Building <strong className="bio-highlight">CoLearn</strong>{" "}
                  and <strong className="bio-highlight">PathPilot</strong>,
                  connecting collaborative software with practical AI.
                </span>
              </li>
              <li className="about-bio-item">
                <i className="about-bio-marker" aria-hidden="true" />
                <span>
                  Designing{" "}
                  <strong className="bio-highlight">AI benchmarks</strong>,
                  evaluating frontier models, and turning ideas into working
                  products.
                </span>
              </li>
            </ul>
          </div>
          <div className="hero-divider" />
          <div className="community-links">
            <a
              className="twitter-card"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="twitter-card-left">
                <FaGithub className="twitter-icon" />
              </span>
              <span className="twitter-card-middle">
                <span className="twitter-name">{profile.displayName}</span>
                <span className="twitter-handle">{profile.handle}</span>
              </span>
              <span className="twitter-card-right">
                <span className="twitter-follow-btn">GitHub</span>
              </span>
            </a>
            <a
              className="twitter-card"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="twitter-card-left">
                <FaLinkedin className="twitter-icon" />
              </span>
              <span className="twitter-card-middle">
                <span className="twitter-name">Let’s connect</span>
                <span className="twitter-handle">
                  Software engineering & AI
                </span>
              </span>
              <span className="twitter-card-right">
                <span className="twitter-follow-btn">LinkedIn</span>
              </span>
            </a>
          </div>
          <div className="contact-me">
            <Tooltip text={profile.email}>
              <a className="contact-btn" href={`mailto:${profile.email}`}>
                <FaEnvelope /> Email Me
              </a>
            </Tooltip>
            <span className="social-separator">|</span>
            <Tooltip text="LinkedIn">
              <a
                className="contact-btn icon-contact"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </Tooltip>
            <Tooltip text="GitHub">
              <a
                className="contact-btn icon-contact"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </Tooltip>
            <Tooltip text="Resume">
              <Link
                className="contact-btn icon-contact"
                to="/resume"
                aria-label="View resume"
              >
                <HiOutlineDocumentText />
              </Link>
            </Tooltip>
          </div>
        </div>
      </section>
    </>
  );
}
