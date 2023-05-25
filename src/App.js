
import "./App.css";
import CocktailsComponant from "./components/classComponants/cocktails";
import PostsComponent from "./components/classComponants/posts";


function App() {
	return (
	  <div className="App">
	 
  <div className='wrp'>
  <CocktailsComponant/>
  </div>
  
  <div className='posts-wrp'>
  <PostsComponant/>
  </div>
  
  
   </div>
	);
  }
  
  export default App;
