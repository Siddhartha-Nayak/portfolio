import { FaGithub } from "../icons";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import { Tooltip } from "../ui/Tooltip";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <nav className="navbar-links" aria-label="Main navigation">
          {[
            ["Home", "/"],
            ["Projects", "/projects"],
            ["Resume", "/resume"],
            ["Analytics", "/analytics"],
          ].map(([label, path]) => (
            <NavLink
              end
              to={path}
              key={path}
              className={({ isActive }) =>
                `navbar-link${isActive ? " navbar-link-active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link className="navbar-link" to="/#contact">
            Contact
          </Link>
        </nav>
        <Tooltip text="Explore my GitHub">
          <a
            className="navbar-star"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Siddhartha on GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </Tooltip>
      </div>
    </header>
  );
}
