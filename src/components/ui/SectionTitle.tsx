import type { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="card-title">
      {children}
      {["top left", "top right", "bottom left", "bottom right"].map(
        (position) => (
          <span
            key={position}
            className={`corner ${position}`}
            aria-hidden="true"
          />
        ),
      )}
    </h2>
  );
}
