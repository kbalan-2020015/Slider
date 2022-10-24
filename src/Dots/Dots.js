import React from 'react';
import './css/Dots.css';

function Dots({activeIndex, onClick, data}) {
  return (
    <div className='dots'>
        {data?.map((slide, index) => (
            <span key={index} className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`} onClick={() => onClick(index)}></span>
        ))}
    </div>
  )
}

export default Dots