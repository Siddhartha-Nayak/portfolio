import { FaGithub } from "../icons";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
interface Contribution {
  date: string;
  count: number;
  level: number;
}
interface CalendarResponse {
  contributions: Contribution[];
}
export default function Calendar() {
  const [days, setDays] = useState<Contribution[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => {
    let disposed = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=last`,
      { signal: controller.signal },
    )
      .then((response) => {
        if (!response.ok) throw new Error("Activity unavailable");
        return response.json() as Promise<CalendarResponse>;
      })
      .then((data) => {
        if (
          !Array.isArray(data.contributions) ||
          !data.contributions.length ||
          !data.contributions.every(
            (day) =>
              typeof day.date === "string" &&
              Number.isInteger(day.count) &&
              day.count >= 0 &&
              Number.isInteger(day.level) &&
              day.level >= 0 &&
              day.level <= 4,
          )
        )
          throw new Error("Invalid contribution data");
        setDays(data.contributions);
        setState("ready");
      })
      .catch(() => {
        if (!disposed) setState("error");
      })
      .finally(() => window.clearTimeout(timeout));
    return () => {
      disposed = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);
  const leading = days.length
    ? new Date(`${days[0].date}T12:00:00Z`).getUTCDay()
    : 0;
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const months = days.flatMap((day, index) =>
    day.date.endsWith("-01") ? [{ date: day.date, index }] : [],
  );
  return (
    <article
      className="calendar-container"
      aria-label="GitHub contribution activity"
    >
      {state === "loading" && (
        <p className="calendar-message" role="status">
          Loading GitHub activity…
        </p>
      )}
      {state === "error" && (
        <div className="calendar-fallback">
          <FaGithub />
          <p>GitHub activity is unavailable right now.</p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            View my contributions on GitHub ↗
          </a>
        </div>
      )}
      {state === "ready" && (
        <>
          <div className="contribution-scroll">
            <svg
              className="contribution-months"
              width={Math.ceil((days.length + leading) / 7) * 15}
              height={24}
              aria-label="Contribution calendar months"
            >
              {months.map((month) => (
                <text
                  key={month.date}
                  x={Math.floor((month.index + leading) / 7) * 15}
                  y={14}
                >
                  {new Date(`${month.date}T12:00:00Z`).toLocaleDateString(
                    "en",
                    { month: "short", timeZone: "UTC" },
                  )}
                </text>
              ))}
            </svg>
            <div className="contribution-grid">
              {Array.from({ length: leading }, (_, index) => (
                <span key={`blank-${index}`} />
              ))}
              {days.map((day) => (
                <span
                  key={day.date}
                  className={`contribution-day contribution-level-${day.level}`}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          </div>
          <div className="calendar-summary">
            <span>{total.toLocaleString()} contributions in the last year</span>
            <span className="calendar-legend">
              Less{" "}
              {Array.from({ length: 5 }, (_, index) => (
                <i key={index} className={`contribution-level-${index}`} />
              ))}{" "}
              More
            </span>
          </div>
        </>
      )}
    </article>
  );
}
