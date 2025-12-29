import React from 'react'
import './CSS/Header.css'
// import Logo_back from '/public/Images/logo_black.png'
const Header = () => {
  return (
    <>
        <div className="header">
            <div className="logo">
                <img src="public/Images/logo_black.png" alt="logo" className='black_logo'/>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Rooms</li>
                    <li>Gallery</li>
                    <li>Activities</li>
                </ul>
                <button>Contact Us</button>
            </div>
        </div>
    
    </>
  )
}

export default Header