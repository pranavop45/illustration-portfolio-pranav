import React, { useEffect } from "react";

const CursorAnimation = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "22px";
    cursor.style.height = "22px";
    cursor.style.borderRadius = "50%";
    cursor.style.background = "rgba(0,255,255,0.8)";
    cursor.style.boxShadow = "0 0 25px rgba(0,255,255,0.6)";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "99999";
    cursor.style.transition = "transform 0.12s ease-out";
    document.body.appendChild(cursor);

    const handleMove = (e) => {
      cursor.style.transform = `translate(${e.clientX - 11}px, ${e.clientY - 11}px)`;
    };

    const handleHover = () => {
      cursor.style.transform += " scale(1.5)";
      cursor.style.background = "rgba(255,0,128,0.9)";
      cursor.style.boxShadow = "0 0 35px rgba(255,0,128,0.7)";
    };

    const handleLeave = () => {
      cursor.style.background = "rgba(0,255,255,0.8)";
      cursor.style.boxShadow = "0 0 25px rgba(0,255,255,0.6)";
    };

    window.addEventListener("mousemove", handleMove);
    document.querySelectorAll("a, button, img, svg").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cursor.remove();
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
};

export default CursorAnimation;
