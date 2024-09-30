import React, { useRef } from 'react'
import Wave from '../assets/svgs/wave2.svg'
import Services1 from '../assets/images/services1.png'
import Services2 from '../assets/images/services2.png'
import { useIsVisible } from '../assets/hooks/useIsVisible'

const ServiceDescription = () => {
    const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2); 

  return (
    <div className='our-services contact-form' style={{backgroundColor: '#141414'}}>
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className='service-description-parent'>
            <div className="blob"></div>
            <div className="service-description-container">
                <div className="service-description">
                    <img className={`hide ${isVisible1 && "move-in"}`} src={Services1} alt="" />
                    <div>
                        <h3 className={`hide ${isVisible1 && "move-in move-in-top"}`}><span>Beyond</span> Traditional Web Design & Development</h3>
                        <p className={`hide ${isVisible1 && "move-in move-in-bottom"}`} ref={ref1}>We write all our code by hand, avoiding website builders entirely. This ensures no extra, bloated code, resulting in a fast and high-ranking website. Each stage of design and development is overseen by our team, ensuring top quality and performance.<br></br><br></br>Our developers work closely on every step, from the first idea to the final launch. This hands-on method ensures your website is attractive, efficient, and user-friendly. </p>
                    </div>
                </div>
                <div className="service-description">
                    <img className={`hide ${isVisible2 && "move-in move-in-right"}`} src={Services2} alt="" />
                    <div>
                        <h3 className={`hide ${isVisible2 && "move-in move-in-top"}`}><span>Maximize Visibility</span> with Strategic Optimization & Marketing</h3>
                        <p className={`hide ${isVisible2 && "move-in move-in-bottom"}`} ref={ref2}>We boost your website's visibility on Google by using effective keywords and Search Engine Optimization(SEO) techniques. Our professional copywriters create engaging content to help your site score high on search engines.<br></br><br></br>With targeted marketing strategies, we drive traffic to your site and turn visitors into loyal customers. Our approach ensures your website not only ranks high but also performs exceptionally well, making it attractive and user-friendly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDescription