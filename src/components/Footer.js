import React from 'react'
import Wave2 from '../assets/svgs/wave2.svg'
import Ether from "../assets/svgs/ether-blue-white.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='our-services past-projects footer-section'>
        <img src={Wave2} alt="" />
        <footer className="footer-container">
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-left-top">
                        <img
                            src={Ether}
                            alt="ether logo"
                            className="header-logo"
                            ariaHidden="true"
                            decoding="async"
                        />
                        <p>info@ethertechnologies.ca<br></br>(613) 355-3311</p>
                    </div>
                    {/* <div className="header-contact-icons footer-icons">
                        <FaFacebook />
                        <RiInstagramFill />
                        <FaLinkedin />
                        <FaGoogle />
                    </div> */}
                </div>
                <div className="footer-right">
                    <div className="footer-navigation">
                        <h4 className='footer-navigation-title'>Navigation</h4>
                        <p><Link to='/'>Home</Link></p>
                        <p><Link to='/services'>Services</Link></p>
                        <p><Link to='/blog'>Blog</Link></p>
                        <p><Link to='/contact'>Contact</Link></p>
                    </div>
                    <div className="footer-navigation">
                        <h4 className='footer-navigation-title'>Services</h4>
                        <p>Design</p>
                        <p>Development</p>
                        <p>Marketing</p>
                        <p>SEO</p>
                    </div>
                </div>
            </div>
            <p>Copyright &copy; 2024 | Ether Technologies | All Rights Reserved</p>
        </footer>
    </div>
  )
}

export default Footer