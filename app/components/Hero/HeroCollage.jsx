import { photos, videos } from "@/app/data";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";

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
      <Image
        loader={() => src}
        src={src}
        className="collage-element"
        alt=""
        width={300}
        height={300}
      />
    </div>
  );
}
export default function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    if (typeof document === "null") return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(".hero-element", { y: 300 }, { y: 0, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src, index) => (
          <ImageELement key={index} src={src} />
        ))}
        <VideoELement src={leftVideo} />
      </div>
      <div className="right-column">
        {rightImages.map((src, index) => (
          <ImageELement key={index} src={src} />
        ))}
        <VideoELement src={rightVideo} />
      </div>
    </div>
  );
}
