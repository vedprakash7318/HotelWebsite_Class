import React from 'react'
import "./CSS/Hero.css"
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="video-wrapper">
                    <video autoPlay muted loop src="public/Video/hero_video.mp4"></video>
                </div>
                <div className="hero-content">
                    <p  data-aos="fade-right">Luxury Hotel Experience</p>
                    <h1 class="animate__animated animate__hinge">A unique Experience <br />
                        where to stay</h1>
                        <div className='tripAdvison-container'>
                            <img src="public/Images/TripAdvisor_Logo_white.svg" alt="tripAdvison" data-aos="fade-up" />
                            
                        </div>
                </div>
            </section>


        </>
    )
}

export default Hero