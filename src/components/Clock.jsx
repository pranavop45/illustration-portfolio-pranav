import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-black font-semibold tracking-wide text-sm lg:text-base border border-black px-3 py-1 rounded-md bg-white shadow-sm">
      {time}
    </div>
  );
}
