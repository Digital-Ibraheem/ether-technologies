import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const Percentage = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [hover, setHover] = useState(false);

    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", function(e) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.body.scrollHeight;
            const winHeight = window.innerHeight;
            setScrollPercent(Math.round(((scrollTop) / (docHeight - winHeight)) * 100));
        });
    });

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      const cssPercent = `conic-gradient(#407BFF ${scrollPercent >= 95 ? 100 : scrollPercent}%, rgb(162, 191, 255) ${scrollPercent >= 95 ? 100 : scrollPercent}%)`;
  return (
    <div className={`scroll-percent ${scrollPercent > 0 && "scroll-percent-show"} `} onClick={scrollToTop} style={{background: cssPercent}}>
        <span onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className={`scroll-percent-label ${(scrollPercent >= 95 || hover === true) && 'scroll-percent-label-arrow'}`} id='scrollPercentLabel'>
          <FaArrowUp />
          <span>{`${scrollPercent}%`}</span>
        </span>
    </div>
  )
}

export default Percentage