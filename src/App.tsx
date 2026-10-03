import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './components/PortfolioSections';
import { AnalyticsPage, BlogsPage, NotFoundPage, ProjectsPage, ResumePage, UsesPage } from './pages/Pages';
import ClickSpark from './components/ClickSpark';
export default function App() {
  const location = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  return <ClickSpark><Navbar /><Routes>
    <Route path="/" element={<Home />} /><Route path="/home" element={<Home />} />
    <Route path="/projects" element={<ProjectsPage />} /><Route path="/resume" element={<ResumePage />} />
    <Route path="/uses" element={<UsesPage />} /><Route path="/analytics" element={<AnalyticsPage />} />
    <Route path="/blogs" element={<BlogsPage />} /><Route path="*" element={<NotFoundPage />} />
  </Routes><Footer /></ClickSpark>;
}
