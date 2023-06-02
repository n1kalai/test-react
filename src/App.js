import "./App.css";
import ImageSlider from "./components/slider/ImageSlider";
import { ImgData } from "./components/slider/ImgData";

function App() {
  return <ImageSlider slides={ImgData} />;
}

export default App;