import { featuresSlides } from "@/app/data";
import cn from "classnames";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import FeatureSlide from "./FeatureSlide";
import gsap from "gsap/dist/gsap";

function RenderImages({ activeIndex }) {
  return featuresSlides.map(({ imageUrl }, index) => (
    <Image
      loader={() => imageUrl}
      key={imageUrl}
      src={imageUrl}
      className={cn({ "as-primary": activeIndex === index })}
      // style={{backgroundImage: `url(${imageUrl})`}}
      alt=""
      layout="fill"
      objectFit="contain"
    />
  ));
}

export default function FeatureSlides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);

  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          markers: true,
          pin: true,
        },
      });
    }

    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);
  return (
    <div ref={featureSliderRef} className="feature-slides-container">
      <div className="feature-slides-left">
        {featuresSlides.map((feature, index) => (
          <FeatureSlide
            key={feature.imageUrl}
            title={feature.title}
            description={feature.desc}
            index={index}
            updateActiveImage={setActiveIndex}
          />
        ))}
      </div>
      <div ref={featureSlidesRightRef} className="feature-slide-right">
        <RenderImages activeIndex={activeIndex} />
      </div>
    </div>
  );
}
