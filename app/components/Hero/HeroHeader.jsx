import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";

export default function HeroHeader() {
  useEffect(() => {
    if (typeof document === "null") return;

    // if (typeof document !== "null") {
    gsap.fromTo(
      "#hero-text",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.2 }
    );
    // }
  }, []);
  return (
    <div className="hero-text-section">
      <h1 id="hero-text">Stories meet their widest audience ever</h1>
    </div>
  );
}
