"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FeatureSlides from "./components/FeatureSlides";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (typeof document !== "null") {
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "null") {
      gsap.registerPlugin(ScrollTrigger);
      console.log(document);
    }
  }, []);

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <Hero />
      <FeatureSlides />
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}
