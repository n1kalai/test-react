import "./App.css";
import { useLayoutEffect, useState } from "react";

const App = () => {
	const [user, setUser] = useState({
		write:"",
		result:[]
	});
	const handleInputChange  = async (event) => {
		const { name, value } = event.target;

		setUser((prevState) => ({
			...prevState,
			[name]: value,

		}));
		const wordfetch = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
		const data = await wordfetch.json()
		setUser({ 
			result:data.drinks
	})
		
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
	};

	return (
		<div>
		<form onSubmit={handleSubmit}>
			<legend>LIVE SEARCH-np</legend>
			<input
				placeholder="Go  search"
				name="first_name"
				value={user.first_name}
				onChange={handleInputChange}
			/>
			
			
		</form>
		
		{
			user.write ==="" || user.result === null ? <div>not found</div>:
		user.result?.map(ele =>{
			return <ul><li>{ele.strDrink}</li></ul>
		} )
		}
		</div>
	);
};

export default App;
