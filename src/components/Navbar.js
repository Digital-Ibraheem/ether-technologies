import React, { useRef } from 'react'
import Header from './Header.js';
import Wave from '../assets/svgs/wave.svg'
import { useIsVisible } from '../assets/hooks/useIsVisible.js';

const Navbar = ({setScrolled, firstWord, secondWord}) => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className='welcome-container'>
        <Header setScrolled={setScrolled} />
        <div className={`home-welcome ${!firstWord ? 'hidden' : ''}`}>  
            <h1 ref={ref1} className={`welcome-text hide ${isVisible1 && "move-in move-in-bottom"}`}>{firstWord} <span>{secondWord}</span>.</h1>
        </div>
        <img src={Wave} className='wave' alt="" />
    </div>
  )
}

export default Navbar