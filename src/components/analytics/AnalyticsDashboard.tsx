import { FiSettings } from "../icons";

export function AnalyticsDashboard() {
  return (
    <>
      <div className="analytics-stats">
        {["Visitors", "Page Views"].map((label) => (
          <div className="analytics-stat-card" key={label}>
            <span className="analytics-stat-label">{label}</span>
            <span className="analytics-stat-value">—</span>
            <span className="analytics-stat-change analytics-stat-change-neutral">
              No data yet
            </span>
          </div>
        ))}
      </div>
      <div className="analytics-chart-card">
        <div className="analytics-chart-topbar">
          <span className="analytics-chart-topbar-left">
            <FiSettings className="analytics-chart-gear" />
            <span className="analytics-chart-codelabel">~/analytics.tsx</span>
          </span>
          <span className="analytics-period-label">Last 7 days</span>
        </div>
        <div className="analytics-chart-legend">
          <span className="analytics-legend-item">
            <i className="analytics-legend-dot analytics-legend-visitors" />{" "}
            Visitors
          </span>
          <span className="analytics-legend-item">
            <i className="analytics-legend-dot analytics-legend-pageviews" />{" "}
            Page Views
          </span>
        </div>
        <div className="analytics-empty-chart">
          Visitor statistics will appear when analytics is connected.
        </div>
      </div>
    </>
  );
}
