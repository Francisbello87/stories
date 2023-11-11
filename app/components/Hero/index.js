import React from "react";
import "./hero.styles.scss";
import HeroHeader from "./HeroHeader";
import HeroCollage from "./HeroCollage";
import HeroPhone from "./HeroPhone";
import HeroUsedby from "./HeroUsedby";
import HeroFooter from "./HeroFooter";

export default function Hero() {
  return (
    <div className="hero-container">
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
