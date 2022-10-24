import React from 'react'
import './css/Arrows.css';

function Arrows({prevSlide, nextSlide}) {
  return (
    <div className='arrows'>
        <span className='arrow__prev' onClick={prevSlide}>
          &#10094;
        </span>

        <span className='arrow__next' onClick={nextSlide}>
          &#10095;
        </span>
    </div>
  )
}

export default Arrows;