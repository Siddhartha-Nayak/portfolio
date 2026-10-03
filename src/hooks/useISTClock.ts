import { useEffect, useState } from "react";
export function useISTClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
}
