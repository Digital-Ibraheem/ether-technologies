import React, { useRef } from 'react'
import Wave3 from '../assets/svgs/wave3.svg'
import { HiUserGroup } from 'react-icons/hi'
import Designer from '../assets/images/Designer.png'
import { useIsVisible } from '../assets/hooks/useIsVisible'

const WhoWeAre = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2); 
  return (
    <div className='our-services past-projects who-we-are' style={{backgroundColor: '#407BFF'}}>
        <img src={Wave3} alt="" />
        <div className={`our-services-container who-we-are-title hide ${isVisible1 && "move-in move-in-top"}`}>
            <h2 ref={ref1} className='our-services-title'>How We <span>Work</span>.</h2>
            <HiUserGroup className='phone' />
        </div>
        <div className="who-we-are-container">
            <div className={`who-we-are-left hide ${isVisible2 && "move-in move-in-left"}`}>
                <img src={Designer} alt="" />
            </div>
            <div className={`who-we-are-right hide ${isVisible2 && "move-in move-in-right"}`}>
                <p ref={ref2}>At Ether Tech, our vision is to hand code lightning-quick, beautiful websites with zero bloat. We oversee every step of the process, from the initial idea to the final launch, ensuring top-notch performance and user-friendliness. Our approach sets us apart from other web design agencies and bests website builders.</p>
                <br></br>
                <p>To boost your site's visibility, we use smart SEO techniques and engaging content. Our targeted marketing strategies drive traffic and turn visitors into loyal customers, making sure your website not only ranks high but also performs exceptionally well. Whether you need website development or web design services, Ether Tech is your go-to solution.</p>
                {/* <button className='btn-solid home-btn'>View Our Bundles</button>  */}
                {/* Will scroll down to bundles section OR "How We Transform Businesses" and scrolls to/goes to blog post */}
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre