import React, { useRef } from 'react'
import Wave2 from '../assets/svgs/wave2.svg'
import { BsCodeSlash } from 'react-icons/bs'
import { useIsVisible } from '../assets/hooks/useIsVisible';
import { FaGithub } from 'react-icons/fa';

const PastProjects = ({myRef}) => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  return (
    <div className='our-services past-projects'>
        <img src={Wave2} alt="" />
        <div ref={myRef} className="our-services-container">
            <div className="blob2"></div>
            <h2 ref={ref1} className={`our-services-title hide ${isVisible1 && "move-in move-in-top"}`}>Past <span>Projects</span>.</h2>
            <BsCodeSlash className={`phone hide ${isVisible1 && "move-in move-in-top"}`}/>
            <div ref={ref2} className={`our-services-row container hide ${isVisible2 && "move-in move-in-right"}`}>
                <div className="our-service container past-project">
                    <h4>INXSON</h4>
                    <p>INXSON.com delivers immersive 3D audiobooks for children. The website includes payment processing and authentication systems.</p>
                    <a href='https://inxson.com/' target="_blank" rel="noopener noreferrer" className='btn-solid home-btn'>Visit INXSON</a>
                    <div className="inner-gradient"></div>
                    <div className="mute-background"></div>
                </div>
                <div className="our-service container past-project">
                    <h4>Dawcon Construction</h4>
                    <p>An Ottawa-based construction company who sought and obtained a professional, robust website to effectively showcase their identity and services.</p>                    
                    <a href='https://dawcon.ca/' target="_blank" rel="noopener noreferrer" className='btn-solid home-btn'>Visit Dawcon</a>
                    <div className="inner-gradient"></div>
                    <div className="mute-background"></div>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/digital-ibraheem'>
                        <FaGithub className='github-icon' />
                    </a>
                </div>
                <div className="our-service container past-project">
                    <h4>Portfolio Website</h4>
                    <p>A simple yet sleek website created to showcase a developer's portfolio.</p>
                    <a href='https://ibraheemdawod.com/' target="_blank" rel="noopener noreferrer" className='btn-solid home-btn'>Visit Portfolio</a>
                    <div className="inner-gradient"></div>
                    <div className="mute-background"></div>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/Digital-Ibraheem/Portfolio-Website'>
                        <FaGithub className='github-icon' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PastProjects