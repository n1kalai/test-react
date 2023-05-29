import "./App.css";
import { useState } from "react";

const App = () => {
	const [user, setUser] = useState({
		val:"",
		list:[],
	});

	const handleInputChange = async(event) => {
		const { name, value } = event.target;

		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
		const res=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
		const data=await res.json()
		// return data
		setUser((prevstate)=>({
			...prevstate,
			list:data.drinks
			
		}))
		console.log(user.list)
		
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
	};

	return (<>
		<form onSubmit={handleSubmit}>
			<legend>LIVE SEARCH</legend>
			<input
				placeholder="text"
				name="val"
				value={user.val}
				onChange={handleInputChange}
			/>

		</form>

		<button>submit</button>
		{user.val===""?<div>NOT FOUND</div>:user.list?.map((ele)=>{
			return(<>
			
				{ele.strDrink.includes(user.val)?<div key={ele.idDrink}>{ele.strDrink}</div>:<div>NOT FOUND</div>}
				
				</>
			)
		})}
		</>
	);
};

export default App;
