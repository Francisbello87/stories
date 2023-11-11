import { photos, videos } from "@/app/data";
import React from "react";

function VideoELement({ src }) {
  return (
    <div className=" hero-element">
      <video
        className="collage-element"
        playsInline=""
        autoPlay
        webkit-playsInline=""
        loop
        src={src}
      />
    </div>
  );
}

function ImageELement({ src }) {
  return (
    <div className=" hero-element">
      <img src={src} className="collage-element" alt="" />
    </div>
  );
}
export default function HeroCollage() {
    const leftImages = photos.slice(0,2)
    const rightImages = photos.slice(2, photos.length)

    const [leftVideo, rightVideo] = videos

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageELement src={src} />
        ))}
        <VideoELement src={leftVideo} />
      </div>
      <div className="right-column">
        {rightImages.map((src) => (
          <ImageELement src={src} />
        ))}
        <VideoELement src={rightVideo} />
      </div>
    </div>
  );
}
