import React from 'react'
import Wave5 from '../assets/svgs/wave5.svg'
import { BsCodeSlash } from 'react-icons/bs'

const OurBundles = () => {
  return (
    <div className='our-services past-projects welcome-container'>
        <img src={Wave5} alt="" />
        <div className="our-services-container">
            <h2 className='our-services-title'>Our <span>Bundles.</span></h2>
            <BsCodeSlash className='phone' />
            <div className="our-services-row container">
                <div className="our-service container past-project our-blog-post our-bundle">
                    <h4>INXSON</h4>
                    <p>INXSON.com delivers immersive 3D audiobooks for children. The website includes payment processing and authentication systems.</p>
                    <button className='btn-solid home-btn'>Visit INXSON</button>
                    <div className="inner-gradient"></div>
                </div>
                <div className="our-service container past-project our-blog-post our-bundle">
                    <h4>Dawcon Construction</h4>
                    <p>An Ottawa-based construction company who sought and obtained a professional, robust website to effectively showcase their identity and services.</p>                    
                    <button className='btn-solid home-btn'>Visit Dawcon</button>
                    <div className="inner-gradient"></div>
                </div>
                <div className="our-service container past-project our-blog-post our-bundle">
                    <h4>Portfolio Website</h4>
                    <p>A simple yet sleek website created to showcase a developer's portfolio.</p>
                    <button className='btn-solid home-btn'>Visit Portfolio</button>
                    <div className="inner-gradient"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurBundles