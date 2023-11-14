"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerEffect(ScrollTrigger)
  },[])

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <Hero />
    </div>
  );
}
