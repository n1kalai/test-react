import React, { useState } from 'react';

const ImageCarousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if ( slides.length === 0 ) {
        return "No Images";
    }

    return (
        <section className='carousel'>
            {length > 1 && (
                <div>
                    <div className='left-arrow' onClick={prevSlide}>{"<"}</div>
                    <div className='right-arrow' onClick={nextSlide}>{">"}</div>
                </div>
            )}

            {slides.map((slide, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide} alt='travel image' className='image' />
                    )}
                </div>
            ))}
        </section>
    );
};

export default ImageCarousel;
