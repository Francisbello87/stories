import React from "react";
import "./hero.styles.scss";
import HeroHeader from "./HeroHeader";
import HeroCollage from "./HeroCollage";
import HeroPhone from "./HeroPhone";
import HeroUsedby from "./HeroUsedby";
import HeroFooter from "./HeroFooter";
import useLocoScroll from "@/app/hooks/useLocoScroll";

export default function Hero() {
  useLocoScroll()
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
