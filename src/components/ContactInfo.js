import React from 'react'
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";


const ContactInfo = () => {
  return (
    <div className='contact-info'>
        <div className="contact-info-container">
            <div className="contact-info-email">
              <a href="mailto:info@ethertechnologies.ca"><LuMail /> info@ethertechnologies.ca</a>
            </div>
            <div className="contact-info-email">
              <a href="tel:+16133553311">
                <LuPhone />
                +1 (613) 355-3311
              </a>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo