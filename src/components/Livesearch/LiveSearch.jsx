import { useState } from "react";
import { CocktailContainer } from "../cocktails/CocktailContainer";


const fetchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const LiveSearch = () => {
	const [search, setSearch] = useState("");
	const [drinks, setDrinks] = useState({
		isLoading: false,
		isLoaded: false,
		isError: false,
		data: [],
	});
	const handleSearch = async (e) => {
		const { value } = e.target;

		setSearch(value);
		if (value.trim() === "") {
			setDrinks({
				isLoading: false,
				isLoaded: true,
				isError: false,
				data: [],
			});
			return;
		}

		setDrinks({
			isLoading: true,
			isLoaded: true,
			isError: false,
			data: [],
		});
		const response = await fetch(`${fetchURL}${value}`);

		const data = await response.json();
		const { drinks } = data;
		setDrinks({
			isLoading: false,
			isLoaded: true,
			isError: false,
			data: drinks || [],
		});
	};

	return (
		<div>
			Live Searcgih
			<form>
				<input placeholder="Search..." value={search} onChange={handleSearch} />
			</form>
			{drinks.isLoaded && drinks.data.length === 0 && <h1>No results</h1>}
			{drinks.isLoading && <div>loading...</div>}
			<div className="cocktails-container">
				{drinks.data.map((cocktail) => (
					<CocktailContainer
						onDelete={() => {}}
						cocktail={cocktail}
						title={cocktail.strDink}
					/>
				))}
			</div>
		</div>
	);
};

export default LiveSearch;
