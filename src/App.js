import "./App.css";
import { useState } from "react";

const App = () => {
	const [user, setUser] = useState({
		searchElement:"",
		searchArr:[]
		
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser((prevState)=>({
			...prevState,
			searchArr:[...prevState.searchArr,user.searchElement]

		}))
	};

	return (
		<div className="formi">
		<form onSubmit={handleSubmit}>
			<legend>TO DO LIST</legend>
			<input
				placeholder="name"
				name="searchElement"
				value={user.searchElement}
				onChange={handleInputChange}
			/>
			<button>submit</button>
		</form>
		{
			user.searchArr.map(ele =>{
				return <p className="para">{ele}</p>
			})
		}
		</div>
		
	);
};

export default App;
