import { featuresSlides } from '@/app/data'
import cn from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import FeatureSlide from './FeatureSlide'


function RenderImages({activeIndex}) {

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
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='feature-slides-container'>
        <div className="feature-slides-left">
            {
                featuresSlides.map((feature, index) =>(
                    <FeatureSlide
                    key={feature.imageUrl}
                    title={feature.title}
                    description={feature.desc}
                    index={index}
                    updateActiveImage={setActiveIndex}
                    />
                ))
            }
        </div>
        <div className="feature-slide-right">
            <RenderImages activeIndex={activeIndex} />
        </div>
    </div>
  )
}