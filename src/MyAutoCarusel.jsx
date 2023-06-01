import React, { useState } from 'react';


const MyAutoCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-left-column">
        <img className="carousel-selected-image" src={images[selectedImageIndex]} alt="Selected" />
      </div>
      <div className="carousel-right-column">
        {images.map((image, index) => (
          <img
            key={index}
            className={`carousel-pic ${index === selectedImageIndex ? 'carousel-active-thumbnail' : ''}`}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAutoCarousel;