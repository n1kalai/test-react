import logo from "./logo.svg";
import "./App.css";
import { Languages } from "./components/Languages";
import { useState, useEffect } from "react";
import { fetchCocktails } from "./api/cocktails";
import Article from "./Article";

const cocktailsDefaultStatee = {
	data: [],
	isLoading: true,
	isLoaded: false,
	isError: false,
};

const App = () => {
	// const [number, setNumber] = useState(2);
	// const [name, setName] = useState("gela");
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

	// const onClick = () => {
	// 	// setNumber((previosValue) => previosValue + 1);
	// 	setName(Math.random());

	// };

	const handleClick = (id) => {

		console.log(`Deleting ${id}`);
	  };

	if (cocktails.isLoading) {
		return <h1>იტვირთება...</h1>;
	}

	return (
		<div>
		  {/* <button onClick={onClick}>
			{number} {name}
		  </button> */}
		  <div>
			{cocktails.data.map((cocktail) => (
			  <Article
				key={cocktail.idDrink}
				cocktail={cocktail}
				handleClick={handleClick}
			  />
			))}
		  </div>
		</div>
	  );
	};
	

export default App;











// import "./App.css";
// import { useState } from "react";

// const App = () => {
// 	const [user, setUser] = useState({
// 		first_name: "",
// 		last_name: "",
// 		number: 1231231,
// 		sex: "",
// 	});

// 	const handleInputChange = (event) => {
// 		const { name, value } = event.target;

// 		setUser((prevState) => ({
// 			...prevState,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(user);
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<legend>registration</legend>
// 			<input
// 				placeholder="name"
// 				name="first_name"
// 				value={user.first_name}
// 				onChange={handleInputChange}
// 			/>
// 			<input
// 				onChange={handleInputChange}
// 				placeholder="last name"
// 				name="last_name"
// 				value={user.last_name}
// 			/>
// 			<div>
// 				<div>your sex</div>
// 				<div>male</div>
// 				<input
// 					type="radio"
// 					onChange={handleInputChange}
// 					value="male"
// 					name="sex"
// 				/>
// 				<div>female</div>
// 				<input
// 					type="radio"
// 					onChange={handleInputChange}
// 					value="female"
// 					name="sex"
// 				/>
// 				<div>other</div>
// 				<input
// 					type="radio"
// 					onChange={handleInputChange}
// 					value="other"
// 					name="sex"
// 				/>
// 			</div>
// 			<button>submit</button>
// 		</form>
// 	);
// };

// export default App;
