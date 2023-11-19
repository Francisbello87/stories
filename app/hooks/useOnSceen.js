import { useState, useEffect } from "react";

function useOnScreen(ref, threshold = 0.3) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined" || !ref || !ref.current) {
      // Handle the case when the document or ref is undefined or null
      return;
    }

    if (typeof document !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry?.isIntersecting ?? false);
        },
        {
          rootMargin: "0px",
          threshold,
        }
      );
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [ref, threshold]);

  return isIntersecting;
}
export default useOnScreen;
