import "./App.css";
import { useState } from "react";

const App = () => {
	const [user, setUser] = useState({
		searchText: "",
		coctailList: [],
		
	});

	const handleInputChange = async (event) => {
		const { name, value } = event.target;

		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
		const data = await response.json();
		setUser((prevState) => ({
			...prevState,
			coctailList: data.drinks,
		}))
	};

	
	
	const handleSubmit = async (event) => {
		event.preventDefault();



		console.log(user.coctailList);
	};
	
	return (
		<div>

		<form>
			<legend>registration</legend>
			<input
				placeholder="cocktail name"
				name="searchText"
				id="searchText"
				value={user.searchText}
				onChange={handleInputChange}
			/>
			
			</form>
			{
			user.searchText.trim() === "" || user.coctailList === null ? <li>not found</li>:	user.coctailList?.map((coctail) =>
			<li key={coctail.idDrink}>{coctail.strDrink}</li>
			)
		}

		</div>
			
					

	);
};

export default App;
