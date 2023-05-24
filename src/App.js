import logo from "./logo.svg";
import "./App.css";
import { Languages } from "./components/Languages";
import { useState, useEffect } from "react";
import { fetchCocktails } from "./api/cocktails";
// import Article from "./Article";
import AppWithClass from "./AppWithClass";

const cocktailsDefaultStatee = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};


const App = () => {
	// const [cocktails, setCocktails] = useState([])
	const [number, setNumber] = useState(1);
	const [name, setName] = useState("gela");
	const [cocktails, setCocktails] = useState(cocktailsDefaultStatee);
	console.log(cocktails);
	useEffect(() => {
		handleFetchCocktails();
	}, []);

	const handleFetchCocktails = async () => {
		const fetchedCocktails = await fetchCocktails();
		setCocktails({
			data: fetchedCocktails,
			isLoading: false,
			isLoaded: true,
			isError: false,
		});
	};

	const handleClick=(id) =>{
		const filteredArray1 = cocktails.filter(cocktl => cocktl.idDrink !== id);
		setCocktails(filteredArray1);

	}


	if (cocktails.isLoading) {
		return <h1>იტვირთება...</h1>;
	}

	return (<div>
		
		<AppWithClass   />
	</div>
		
	);
};

export default App;
