import logo from './logo.svg';
import './App.css';
import Vizuali from './Vizuali';
import { useState, useEffect } from "react";
import {fetchPost} from "./api/Posts"


const defaultpostebi = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};


function App() {
  const [posts, setposts] = useState(defaultpostebi);
	console.log(posts);
	useEffect(() => {
		handleFetchPosts();
	}, []);

	const handleFetchPosts = async () => {
		const fetchedposts = await fetchPost();
		setposts({
			data: fetchedposts,
			isLoading: false,
			isLoaded: true,
			isError: false,
		});
	};



	if (posts.isLoading) {
		return <h1>loading...</h1>;
	}

	
  return (
    <Vizuali/>
  );
}

export default App;
