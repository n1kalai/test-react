import "./App.css";
import { useState } from "react";

// შექმენით ინფუტი რომელშიც რაღაცას ჩაწერთ, 
// მაგ ტექსტს მიაბავთ მოთხოვნას და გააგზავნით მოცემულ api
// ზე (https://www.thecocktaildb.com/api/json/v1/1/search.php?s=შეყვანილი სტრინგი) 
// და მიღებულ დატას გამოიტანთ მომხმარებლისთვის


const FetchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const App = () => {
	

	const [search, setSearch] = useState("");
	const [drinks, setDrinks] = useState({

		isLoading: false,
		data: [],
		isloaded:  false,
		isError: false

	})

	const handleSearch = async (e) => {

		const {value} = e.target;
		setDrinks({

			isLoading: true,
			data: [],
			isloaded: false,
			isError: false

		})
		
		setSearch(value);

		const response = await fetch(FetchURL + value);
		const data = await response.json();
		const { drinks } = data;

		setDrinks({

			isLoading: false,
			data: drinks || [],
			isloaded:  true,
			isError: false,

		})

	}


	return(
		<div>
			<form>
			<input value={search} onChange={handleSearch}></input>
			</form>

			{drinks.data && drinks.data.map((e) => (

			<div key={e.idDrink}>{e.strDrink}</div>
			
			))}

		</div>
	)

	
			}




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

export default App;
