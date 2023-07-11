import{BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css";
import { Header } from './styledHeaderAndFooter/Header';
import Main from './components/HomePage/Main';
import PostDetails from './components/HomePage/PostDetails';
import Error from './components/skeleton/ErrorPost';
import { About } from './components/AboutPage/About';
import { Footer } from './styledHeaderAndFooter/Footer';
import LiveSearch from './ProtectedRoutes/LiveSearch';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from './ProtectedRoutes/ProtectedRoute';
import { LoginModal } from './ProtectedRoutes/LoginModal';
import { Todo } from './Redux/Todo';



const staticPass='1234'

const App = () => {

const [user,setUser]=useState({
	isSignedIn:false,
	name:'',
})

const [logIn,setLogIn]=useState({nickname:'', pass:''});
const [showModal,setShowModal]=useState(false);


useEffect(()=>{
const LogedUser=localStorage.getItem('user');
if(LogedUser){
const parsed=JSON.parse(LogedUser);
setUser(parsed)
}
},[])


const handleLogIn = () => {
	const { nickname, pass } = logIn;
	if (pass === staticPass) {
	  localStorage.setItem('user', JSON.stringify({ isSignedIn: true, name: nickname }));
	  setUser({ isSignedIn: true, name: nickname });
	  setShowModal(false);
	} else {
	  alert('wrong password');
	}
  };

	return (
		<>
		<BrowserRouter>
		<Header user={user} setUser={setUser} setShowModal={setShowModal}/>
       
	   {showModal&&(
		 <LoginModal setShowModal={setShowModal} setLogIn={setLogIn} onLogin={handleLogIn}/>
	   )}


		<Routes>
		<Route path="/" element={<Main/>}/>
		<Route path="/:id" element={<PostDetails/>}/>
		<Route path="/about" element={<About />} />

		<Route element={<ProtectedRoute user={user}/>}>
		<Route path="/protectedPage" element={<LiveSearch/>} />
		</Route>
		
		<Route path="/todo" element={<Todo/>} />
		<Route path="*" element={<Error/>}/>
		</Routes>
		<Footer/>
		</BrowserRouter>
		
		</>
	);
};

export default App;
