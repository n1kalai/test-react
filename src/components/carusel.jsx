import React, { useState } from 'react';


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel">
        <button className="arrow left-arrow" onClick={goToPrevSlide}>
          &lt;
        </button>
        <img className="slide" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="arrow right-arrow" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    );
  };
  

export default Carousel;