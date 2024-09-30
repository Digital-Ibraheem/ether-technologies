import React, { useRef } from 'react'
import Development from '../assets/images/development.png'
import Design from '../assets/images/design.png'
import Optimization from '../assets/images/optimization.png'
import { MdOutlineConstruction } from 'react-icons/md'
import { useIsVisible } from '../assets/hooks/useIsVisible'
import { Link } from 'react-router-dom'

const OurServices = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <div className='our-services'>
        <div className="our-services-container">
            <div className="blob"></div>
            <h2 ref={ref1} className={`our-services-title hide ${isVisible1 && "move-in move-in-top"}`}>Our <span>Services</span>.</h2>
            <MdOutlineConstruction className={`phone hide ${isVisible1 && "move-in move-in-top"}`} />
            <div  className={`our-services-row container hide ${isVisible2 && "move-in"}`}>
                <div className="our-service container">
                    <img ref={ref2} src={Design} alt="" />
                    <h3>Design.</h3>
                    <p>A unique design, crafted to your business's needs and catered to your vision.</p>
                </div>
                <div className="our-service container">
                    <img src={Development} alt="" />
                    <h3>Development.</h3>
                    <p>No unnecessary code. Every line is written with purpose to ensure fast loading.</p>
                </div>
                <div className="our-service container">
                    <img src={Optimization} alt="" />
                    <h3>Optimization.</h3>
                    <p>Search Engine Optimized(SEO), allowing your site to rank high on Google.</p>
                </div>
            </div>
            <button ref={ref3} className={`btn-solid home-btn hide ${isVisible3 && "move-in move-in-bottom"}`}>
                <Link to='/services'>View Our Services</Link>
            </button>
        </div>
    </div>
  )
}

export default OurServices