import "./App.css";
import { useState } from "react";
import Todolist from "./Todolist"

const App = () => {

	return(
		<Todolist />
	)
	// const [user, setUser] = useState({
	// 	first_name: "",
	// 	last_name: "",
	// 	number: 1231231,
	// 	sex: "",
	// });

	// const handleInputChange = (event) => {
	// 	const { name, value } = event.target;

	// 	setUser((prevState) => ({
	// 		...prevState,
	// 		[name]: value,
	// 	}));
	// };

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log(user);
	// };

	// return (
	// 	<form onSubmit={handleSubmit}>
	// 		<legend>registration</legend>
	// 		<input
	// 			placeholder="name"
	// 			name="first_name"
	// 			value={user.first_name}
	// 			onChange={handleInputChange}
	// 		/>
	// 		<input
	// 			onChange={handleInputChange}
	// 			placeholder="last name"
	// 			name="last_name"
	// 			value={user.last_name}
	// 		/>
	// 		<div>
	// 			<div>your sex</div>
	// 			<div>male</div>
	// 			<input
	// 				type="radio"
	// 				onChange={handleInputChange}
	// 				value="male"
	// 				name="sex"
	// 			/>
	// 			<div>female</div>
	// 			<input
	// 				type="radio"
	// 				onChange={handleInputChange}
	// 				value="female"
	// 				name="sex"
	// 			/>
	// 			<div>other</div>
	// 			<input
	// 				type="radio"
	// 				onChange={handleInputChange}
	// 				value="other"
	// 				name="sex"
	// 			/>
	// 		</div>
	// 		<button>submit</button>
	// 	</form>
	// );
};

export default App;
