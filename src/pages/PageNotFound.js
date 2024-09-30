import React from 'react'
import { Link } from 'react-router-dom'
import Ether from "../assets/svgs/ether-blue-white.svg";

const PageNotFound = () => {
  return (
    <div className='submitted-background'>
        <div className="submitted">
            <h1 className='welcome-text hide move-in move-in-top'>Error <span>404</span>!</h1>
            <h3 className='hide move-in move-in-top'>Page Not Found</h3>
            <p className='hide move-in move-in-top'>Sorry, it seems the URL you have entered is not valid. Please return to home or re-enter the URL.</p>
            <div className="submitted-navigation hide move-in move-in-bottom">
                <button className={`btn-solid home-btn`}>
                    <Link to='/'>Return Home</Link>
                </button>
                {/* <h3>OR</h3>
                <div className="submitted-navigation-right">
                    <h4>Check Out Our Socials:</h4>
                    <div className="header-contact-icons footer-icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaGoogle />
                    </div>
                </div> */}
            </div>
            <Link to="/">
                <img
                    src={Ether}
                    alt="ether logo"
                    className="header-logo submitted-logo hide move-in move-in-bottom"
                    ariaHidden="true"
                    decoding="async"
                />
            </Link>
        </div>
    </div>
  )
}

export default PageNotFound