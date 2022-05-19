 import React, { useState } from "react";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  console.log(current)
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <span className="fa fa-angle-left" onClick={prevSlide}></span>
      <span className="fa fa-angle-right" onClick={nextSlide}></span>
      {pictures.map((slide, index) => (
        <div
        className={index === current ? 'carousel__active' : 'carousel__inactive'}
        key={index}>
        {index === current && (<img
          src={slide}
          alt={`carousel-${index}`}
          key={`carousel-${index}`}
          className="carousel__image"
        />)}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
