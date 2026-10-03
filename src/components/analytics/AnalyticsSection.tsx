import { SectionTitle } from "../ui/SectionTitle";
import { AnalyticsDashboard } from "../analytics/AnalyticsDashboard";

export function AnalyticsSection() {
  return (
    <section className="project-section">
      <SectionTitle>/analytics</SectionTitle>
      <AnalyticsDashboard />
    </section>
  );
}
