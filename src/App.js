import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/cart'
import Home from './components/Home'
import NavBar from './components/NavBar'
import NotFound from "./components/NotFound";
import Error from "./Loaders/Error";


function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        
      </BrowserRouter>

	
    </div>
  );
}

export default App;
