import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Plans from '../components/Plans'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
        <HeroSection/>
        <Services/>
        <Plans/>
        <About/>
        <Footer/>
    </>
 
  )
}

export default Home