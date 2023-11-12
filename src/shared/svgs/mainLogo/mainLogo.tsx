import Link from 'next/link'
import React from 'react'

const MainLogo = () => {
  return (
    <Link href={'/'}>
       <div className="logo mainLogo  cursor-pointer min-[140px] text-white">
        <span className="logo-text text-red-500">C</span>
        <span className="logo-text">r</span>
        <span className="logo-text">y</span>
        <span className="logo-text">p</span>
        <span className="logo-text">t</span>
        <span className="logo-text">o</span>
        <span className="logo-text text-red-500">C</span>
        <span className="logo-text">o</span>
        <span className="logo-text">i</span>
        <span className="logo-text">n</span>
      </div>
    </Link>
   
  )
}

export default MainLogo