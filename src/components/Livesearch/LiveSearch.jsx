import { useState } from "react";
import { CocktailContainer } from "../cocktails/CocktailContainer";
import { useFetchdata } from "../../api/cocktails";



const fetchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const LiveSearch = () => {
	const [search, setSearch] = useState("");
	const [drinks, setDrinks] = useState({
		isLoading: false,
		isLoaded: false,
		isError: false,
		data: [],
	});

	

		const coctailsdata =  useFetchdata(fetchURL, search)
		console.log(coctailsdata, "dd")


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
		const response = await fetch(fetchURL + value);

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
			live searh

			<form>
				<input value={search} onChange={handleSearch} />
			</form>
			{drinks.isLoaded && drinks.data.length === 0 && <h1>No results</h1>}
			{drinks.isLoading && <div>loading...</div>}
			<div className="cocktails-container">
				{coctailsdata?.drinks?.map((cocktail) => (
					
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
