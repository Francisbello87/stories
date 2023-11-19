import { useState, useEffect } from "react";

function useOnScreen(ref, threshold = 0.3) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (typeof document === "null" || !ref || !ref.current) {
      // Handle the case when the document or ref is null or null
      return;
    }

    // if (typeof document !== "null") {
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
    // }
  }, [ref, threshold]);

  return isIntersecting;
}
export default useOnScreen;
