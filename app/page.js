"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Hero from './components/Hero'

export default function Home() {
  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
    setTimeout(() =>{
      setLoader(false)
    }, 500)
  }, [])
  return loader? (
   <div className='loader' />
  ):(<div>
    <Hero/>
  </div>)
}
