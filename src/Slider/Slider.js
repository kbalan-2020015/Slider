import './css/Slider.css';
import Slide from '../Slide/Slide';
import data from '../data';
import Arrows from '../Arrows/arrows';
import Dots from '../Dots/Dots';
import { useEffect, useState } from 'react';

const len = data.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);

      return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider">
      <Slide activeIndex={activeIndex} data={data}/>
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      <Dots activeIndex={activeIndex} data={data} onClick={(activeIndex) => setActiveIndex(activeIndex)}/>
    </div>
  );
}

export default Slider;