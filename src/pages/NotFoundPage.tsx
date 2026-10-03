import { Link } from "react-router-dom";
import { ContactMe } from "../components/contact/ContactMe";
import { PageLayout } from "../components/layout/PageLayout";

export function NotFoundPage() {
  return (
    <PageLayout title="Page not found">
      <div className="empty-card">
        <h1>404</h1>
        <p>This page doesn’t exist.</p>
        <Link className="uses-section-link" to="/">
          Back to home
        </Link>
      </div>
      <ContactMe />
    </PageLayout>
  );
}
