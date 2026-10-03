import { FaGithub, FaHeart } from './icons';
import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import { useISTClock } from '../hooks/useISTClock';
export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="card-title">{children}{['top left', 'top right', 'bottom left', 'bottom right'].map(position => <span key={position} className={`corner ${position}`} aria-hidden="true" />)}</h2>;
}
export function Tooltip({ children, text }: { children: ReactNode; text: string }) {
  return <span className="tooltip-wrapper">{children}<span className="tooltip-bubble tooltip-top" role="tooltip">{text}</span></span>;
}
export function Navbar() {
  return <header className="navbar"><div className="navbar-inner"><nav className="navbar-links" aria-label="Main navigation">
    {[['Home', '/'], ['Projects', '/projects'], ['Resume', '/resume'], ['Analytics', '/analytics']].map(([label, path]) => <NavLink end to={path} key={path} className={({ isActive }) => `navbar-link${isActive ? ' navbar-link-active' : ''}`}>{label}</NavLink>)}
    <Link className="navbar-link" to="/#contact">Contact</Link>
  </nav><Tooltip text="Explore my GitHub"><a className="navbar-star" href={profile.github} target="_blank" rel="noreferrer" aria-label="Siddhartha on GitHub"><FaGithub /><span>GitHub</span></a></Tooltip></div></header>;
}
export function Footer() {
  const time = useISTClock();
  return <footer className="footer"><div className="footer-content"><p className="footer-quote">“Keep learning. Keep building.”</p><p className="footer-made">Built with care <FaHeart className="footer-heart" aria-label="love" /></p><div className="footer-bottom"><span className="footer-copyright">{new Date().getFullYear()}. {profile.displayName}</span><span className="footer-visitors">{time} IST</span></div></div></footer>;
}
