import React, { useEffect } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { About } from './Pages/About'
import AboutUs from './Components/AboutUs'
import Rooms from './Components/Rooms'
import Testimonials from './Components/Testimonials'
import Accordions from './Components/Accordions'
import ContactSection from './Components/ContactSection'
import MapSection from './Components/MapSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';

const App = () => {

useEffect(()=>{
  AOS.init({
    duration:600,
  })
},[])


  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    {/* <About/> */}
    <Rooms/>
    <Testimonials/>
    <Accordions/>
    <ContactSection/>
    <MapSection/>
    </>
  )
}

export default App