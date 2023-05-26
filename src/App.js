import logo from "./logo.svg";
import "./App.css";
import { Languages } from "./components/Languages";
import { useState, useEffect } from "react";
import { fetchCocktails } from "./api/cocktails";

const cocktailsDefaultStatee = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};

const App = () => {
	const [number, setNumber] = useState(1);
	const [name, setName] = useState("gela");
	const [cocktails, setCocktails] = useState(cocktailsDefaultStatee);

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

	const onClick = () => {
		setName(Math.random());
	};

	if (cocktails.isLoading) {
		return <h1>იტვირთებაa...</h1>;
	}

	return (
		<button onClick={onClick}>
			{number} {name}
		</button>
	);
};

export default App;
