import type { ReactNode } from "react";

export function Tooltip({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <span className="tooltip-wrapper">
      {children}
      <span className="tooltip-bubble tooltip-top" role="tooltip">
        {text}
      </span>
    </span>
  );
}
