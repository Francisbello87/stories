import { useEffect, useRef } from "react"
import gsap from "gsap/dist/gsap";

export default function HeroFooter() {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof document === "null") return;

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ref.current,
        start: 'top center',
        scrub: true
      }
    })
    tl.to('.hero-container', {backgroundColor: 'gray', duration: 0.25}, '-=2')
  },[])
  return (
      <div ref={ref} className="hero-text-section !mt-52  !pt-80">
      <h1 id="hero-text">Stories meet their widest audience ever</h1>
    </div>
  )
}
