import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { About } from './Pages/About'
import AboutUs from './Components/AboutUs'
import Rooms from './Components/Rooms'
import Testimonials from './Components/Testimonials'
import Accordions from './Components/Accordions'
import ContactSection from './Components/ContactSection'
import MapSection from './Components/MapSection'

const App = () => {
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