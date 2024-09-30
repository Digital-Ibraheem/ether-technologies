import React, { useRef } from 'react'
import { useIsVisible } from '../assets/hooks/useIsVisible';

const ServiceGrid = () => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

  return (
    <div className='our-services contact-form'>
        <div className={`our-services-container service-grid`}>
        <div className="blob2"></div>
            <div className={`service hide ${isVisible1 && "move-in"}`}>
                <div className="service-fade"></div>
                <div className="service-gradient"></div>
                <h3>Design</h3>
                <p>A unique design, crafted to your business's needs and catered to your vision.</p>
            </div>
            <div className={`service hide ${isVisible1 && "move-in"}`}>
<div className="service-fade"></div>
                <div className="service-gradient"></div>
                <h3>Development</h3>
                <p>No unnecessary code. Every line is written with purpose to ensure fast loading.</p>
            </div>
            <div className={`service hide ${isVisible1 && "move-in"}`}>
<div className="service-fade"></div>
                <div className="service-gradient"></div>
                <h3 ref={ref1}>Optimization</h3>
                <p>Search Engine Optimized(SEO), allowing your site to rank high on Google.</p>
            </div>
            <br />
            <div className={`service hide ${isVisible2 && "move-in move-in-right"}`}>
<div className="service-fade"></div>
                <div className="service-gradient"></div>
                <h3>Branding</h3>
                <p>Your brand, redefined with a cohesive visual identity that resonates with your audience and sets you apart from the competition.</p>
            </div>
            <div className={`service hide ${isVisible2 && "move-in move-in-right"}`}>
<div className="service-fade"></div>
                <div className="service-gradient"></div>
                <h3>Marketing</h3>
                <p>Targeted marketing strategies designed to amplify your brand's reach and drive meaningful engagement with your customers.</p>
            </div>
            <div className={`service hide ${isVisible2 && "move-in move-in-right"}`}>
<div className="service-fade"></div>
                <div className="service-gradient"></div>
                <h3 ref={ref2}>Consulting</h3>
                <p>Expert consulting services that provide actionable insights and tailored solutions to elevate your business's online performance.</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceGrid