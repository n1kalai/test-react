import{BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css";
import Main from "./components/Main";
import PostDetails from './components/PostDetails';
import Error from './Error';


const App = () => {


	return (
		<>
		<BrowserRouter>
		<Routes>
		<Route path="/" element={<Main/>}/>
		<Route path="/:id" element={<PostDetails/>}/>
		<Route path="*" element={<Error/>}/>
		</Routes>
		</BrowserRouter>
		
		</>
	);
};

export default App;
