import React from 'react'
import { FaFacebook, FaGoogle, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Ether from "../assets/svgs/ether-blue-white.svg";


const Submitted = () => {
  return (
    <div className='submitted-background'>
        <div className="submitted">
            <h1 className='welcome-text hide move-in move-in-top'>Thank <span>You</span>!</h1>
            <p className='hide move-in move-in-top'>Your message has been successfully delivered. A team representative will be in touch with you within the next 24 hours.</p>
            <div className="submitted-navigation hide move-in move-in-bottom">
                <button className={`btn-solid home-btn`}>
                    <Link to='/'>Return Home</Link>
                </button>
                <h3>OR</h3>
                <div className="submitted-navigation-right">
                    <h4>Check Out Our Socials:</h4>
                    <div className="header-contact-icons footer-icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaGoogle />
                    </div>
                </div>
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

export default Submitted