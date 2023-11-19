import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start || typeof document === "null") return;

    // if (typeof document !== "null") {
      const scrollEl = document.getElementById("hero-wrapper");
      let locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
        getDirection: true,
      });

      locoScroll.on("scroll", (instance) => {
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          if (locoScroll) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          }
          return null;
        },
        scrollLeft(value) {
          if (locoScroll) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.x;
          }
          return null;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      const lsUpdate = () => {
        if (locoScroll) {
          locoScroll.update();
        }
      };

      ScrollTrigger.addEventListener("refresh", lsUpdate);
      ScrollTrigger.refresh();

      return () => {
        if (locoScroll) {
          ScrollTrigger.removeEventListener("refresh", lsUpdate);
          locoScroll.destroy();
          locoScroll = null;
          console.log("Kill", locoScroll);
        }
      };
    // }
  }, [start]);
}
