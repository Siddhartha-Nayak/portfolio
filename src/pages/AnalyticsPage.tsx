import { AnalyticsDashboard } from "../components/analytics/AnalyticsDashboard";
import { PageLayout } from "../components/layout/PageLayout";

export function AnalyticsPage() {
  return (
    <PageLayout title="/analytics">
      <AnalyticsDashboard />
    </PageLayout>
  );
}
