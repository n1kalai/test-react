import{BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css";
import { Header } from './components/Header';
import Main from "./components/Main";
import PostDetails from './components/PostDetails';
import Error from './Error';
import { About } from './components/About';
import { Footer } from './components/Footer';


const App = () => {


	return (
		<>
		<BrowserRouter>
		<Header/>
		<Routes>
		<Route path="/" element={<Main/>}/>
		<Route path="/:id" element={<PostDetails/>}/>
		<Route path="/about" element={<About />} />
		<Route path="*" element={<Error/>}/>
		</Routes>
		<Footer/>
		</BrowserRouter>
		
		</>
	);
};

export default App;
