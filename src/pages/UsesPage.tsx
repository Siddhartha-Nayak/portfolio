import { usesData } from "../data/uses";
import { PageLayout } from "../components/layout/PageLayout";

export function UsesPage() {
  return (
    <PageLayout title="/uses">
      <p className="page-description">
        The technologies behind my full-stack applications, RAG systems, and AI
        benchmarking work.
      </p>
      {usesData.map((category) => (
        <section className="uses-category" key={category.category}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </PageLayout>
  );
}
