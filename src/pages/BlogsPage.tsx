import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";

export function BlogsPage() {
  return (
    <PageLayout title="Writing">
      <div className="empty-card">
        <p>No posts published yet.</p>
        <Link className="uses-section-link" to="/projects">
          Explore my projects
        </Link>
      </div>
    </PageLayout>
  );
}
