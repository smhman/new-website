import { useEffect, useState } from "preact/hooks";

const formatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  weekday: "long",
  year: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Europe/Copenhagen",
  timeZoneName: "short"
});

export function Clock() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());

    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const formattedTime = formatter.format(now);
  const displayTime = formattedTime.replace(" at", " ·");

  // Replace "24:00" with "00:00"
  const adjustedTime = displayTime.replace("24:00", "00:00");

  return <>{adjustedTime}</>;
}
