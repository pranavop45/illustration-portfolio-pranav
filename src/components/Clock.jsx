import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // 12-hour format
      });
      setTime(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-black font-medium tracking-wide 
text-xs sm:text-sm lg:text-base 
px-1.5 py-0.5 
ml-[-4px] sm:ml-0">
      {time}
    </div>
  );
}
