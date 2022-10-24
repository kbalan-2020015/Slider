import './css/Slide.css';

function Slide({activeIndex, data}) {

  return (
    <div className="slide">
      {data?.map((slide, index) => (
        <div key={index} className={index === activeIndex ? 'slides active' : 'inactive'}>
          <img className='slide__img' src={slide.imagen} alt='images'/>
          <h2 className='slide__title'>{slide.id}</h2>
          <h2 className='slide__name'>{slide.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Slide;