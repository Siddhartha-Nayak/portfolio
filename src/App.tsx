import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { BlogsPage } from "./pages/BlogsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { UsesPage } from "./pages/UsesPage";
import ClickSpark from "./components/ClickSpark";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash)
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          });
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  return (
    <ClickSpark>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/uses" element={<UsesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </ClickSpark>
  );
}
