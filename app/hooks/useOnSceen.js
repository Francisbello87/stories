import { useState, useEffect } from "react";

function useOnScreen(ref, threshold = 0.3) {

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {

     if (!ref || !ref.current) {
       // Handle the case when the ref is undefined or null
       return;
     }
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
  }, [ref, threshold]); 

  return isIntersecting;
}
export default useOnScreen;