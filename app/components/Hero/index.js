import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import "./hero.styles.scss";
import HeroHeader from "./HeroHeader";
import HeroCollage from "./HeroCollage";
import HeroPhone from "./HeroPhone";
import HeroUsedby from "./HeroUsedby";
import HeroFooter from "./HeroFooter";
import useLocoScroll from "@/app/hooks/useLocoScroll";

export default function Hero() {
  useLocoScroll()

  useEffect(() => {
    gsap.set('.hero-container', {autoAlpha: 1})
  },[])
  return (
    <div id="hero-wrapper" className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
        <HeroPhone />
      </div>
      <HeroUsedby />
      <HeroFooter />
    </div>
  );
}
