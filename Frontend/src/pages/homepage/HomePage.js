import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Footer/>
      </div>
  
  )
}

export default HomePage