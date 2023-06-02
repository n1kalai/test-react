import React, { useState } from 'react';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const handleClick = (index) => {
        setCurrent(index);
    };
    
    return (
        <section className="slider">
            <div className="main-slider">
                <img src={slides[current]} className="main-image" />
            </div>
            <div className="thumbnail-slider">
                {slides.map((slide, index) => (
                    <div
                        className={index === current ? "thumbnail active" : "thumbnail"}
                        key={index}
                        onClick={() => handleClick(index)} >
                        <img src={slide} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageSlider;
