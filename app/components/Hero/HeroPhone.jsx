import React, { useEffect, useRef } from "react";
import imgSrc from "../../../public/89919__1_-removebg-preview.png";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const videoUrl =
  "https://storage.googleapis.com/creators-media/media/web-stories-hero-video-center-2.mp4";
export default function HeroPhone() {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (typeof document === "null") return;

    // if (typeof document !== "null") {
    gsap.registerPlugin(ScrollTrigger);
    function intro() {
      const tl = gsap.timeline();
      tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }
    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "+=120 top",
          end: "+=1000",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });
      tl.to(phoneRef.current, { scale: 1.2 }, "+=0.2");
      tl.to(
        ".hero-container",
        { backgroundColor: "black", duration: 0.25, color: "white" },
        "-=0.5"
      );
      return tl;
    }
    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
    // }
  }, []);
  return (
    <div className="hero-phone-black" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{
          backgroundImage: `url(${imgSrc}),`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <video
          className="collage-element"
          playsInline=""
          autoPlay
          webkit-playsInline=""
          loop
          src={videoUrl}
        />
      </div>
    </div>
  );
}
