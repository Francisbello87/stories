// "use client";
// import { useEffect, useState } from "react";
// import Hero from "./components/Hero";
// import gsap from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import dynamic from "next/dynamic";
// import FeatureSlides from "./components/FeatureSlides";

// export default function Home() {
//   const [loader, setLoader] = useState(true);


// const DynamicHeader = dynamic(() => import("./components/Hero"), {
//   ssr: false,
// });
//   useEffect(() => {
//     if (typeof window !== "null") {
//       setTimeout(() => {
//         setLoader(false);
//       }, 500);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== "null") {
//       gsap.registerPlugin(ScrollTrigger);
//       console.log(window);
//     }
//   }, []);

//   return loader ? (
//     <div className="loader" />
//   ) : (
//     <div>
//       <Hero />
//       <FeatureSlides />
//       <div className="footer">Build your ideal story today.</div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FeatureSlides from "./components/FeatureSlides";

const DynamicHeader = dynamic(() => import("./components/Hero"), {
  ssr: false,
});

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (typeof window !== null) {
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== null) {
      gsap.registerPlugin(ScrollTrigger);
      console.log(window);
    }
  }, []);

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <DynamicHeader />
      <FeatureSlides />
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}
