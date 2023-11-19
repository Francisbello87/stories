import useOnScreen from "@/app/hooks/useOnSceen";
import React, { useEffect, useRef } from "react";

export default function FeatureSlide(props ) {
  const { title, description, index, updateActiveImage } = props;
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (typeof document !== "null") {
     if (onScreen) {
       updateActiveImage(index);

       console.log(index);
     }
    }
    
  }, [onScreen, index]);
  return (
    <div ref={ref} className="feature-slide">
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  );
}
