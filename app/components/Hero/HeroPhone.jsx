import React from 'react'
import imgSrc from '../../../public/89919__1_-removebg-preview.png'

const videoUrl =
  "https://storage.googleapis.com/creators-media/media/web-stories-hero-video-center-2.mp4";
export default function HeroPhone() {
  return (
    <div className='hero-phone-black'>
      <div className="hero-phone-template" style={{backgroundImage: `url(${imgSrc}),`, backgroundPosition: 'center', backgroundSize: "cover"}}>
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
  )
}
