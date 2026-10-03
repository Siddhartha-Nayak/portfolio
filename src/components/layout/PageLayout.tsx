import { FiArrowLeft } from "../icons";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../ui/SectionTitle";

export function PageLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="standard-container subpage">
      <Link className="back-link" to="/">
        <FiArrowLeft /> Home
      </Link>
      <div>
        <SectionTitle>{title}</SectionTitle>
      </div>
      {children}
    </main>
  );
}
