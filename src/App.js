import './App.css';
import ImageCarousel from './components/carousel/CarouselSlider';
import { ImageData } from './components/carousel/Data';

function App() {
    return <ImageCarousel slides={ImageData} />;
}

export default App;