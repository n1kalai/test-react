import React from 'react';
import Carousel from './carusel';
import '../App.css';
import MyAutoCarousel from '../MyAutoCarusel';
import { ImageUrls } from './imiges';


const App = () => {
  

  return (
    <div className='App'>
      <h1>Cocktail Carousel</h1>
      <Carousel images={ImageUrls} />
      <MyAutoCarousel images={ImageUrls}/>
     
    </div>
  );
};

export default App;



