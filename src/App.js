import "./App.css";
import { useState } from "react";

const App = () => {
	const [user, setUser] = useState({
		items: [],
		itemsArr: [],

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
		setUser((prevState) => ({
			...prevState,
			items: [],
			itemsArr: [...prevState.itemsArr, user.items],
		}))
	};
	const handleDeleteItem = (index) => {
		setUser((prevState) => ({
			...prevState,
			itemsArr: [...prevState.itemsArr.slice(0, index), ...prevState.itemsArr.slice(index + 1)],
		}))
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<div className="form-input">
			<h1 className="form-title">Todo List</h1>
			<input
				placeholder="item"
				name="items"
				value={user.items}
				onChange={handleInputChange}
			/>
			<button onClick={handleSubmit} className="btn">add</button>

			</div>
			<div className="form-items">{
				user.itemsArr.map((item) => {
					return <p onClick={() => handleDeleteItem(user.itemsArr.indexOf(item))} className="item">{item}</p>
				})
				}
			</div>
		</form>
	);
};

export default App;
