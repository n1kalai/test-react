import "./App.css";
import { useState } from "react";
import Input from "./components/Input";

const App = () => {
	const [item, setItem] = useState("");
	const [savedItems, setSavedItems] = useState([]);

	function addItem() {
		if (!item) {
			alert("Enter an item...");
			return;
		}

		const myItem = {
			id: Math.floor(Math.random() * 100),
			value: item
		};
		setSavedItems(oldList => [...oldList, myItem]);
		setItem("");
	}

	function deleteItem(id) {
		const deletedItems = savedItems.filter(item => item.id !== id);
		setSavedItems(deletedItems);
	}

	return (
		<div className="to-do-app">
			<h1>TODO LIST</h1>

			<Input
				value={item}
				onChange={e => setItem(e.target.value)}
				placeholder="add item..."
			/>

			<button id="add-button" onClick={() => addItem()}>Add</button>
			<ul>
				{savedItems.map(todoItem => (
					<li key={todoItem.id}>
						<span>{todoItem.value}</span>{" "}
						<button id="del-btn" onClick={() => deleteItem(todoItem.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};

// test

export default App;
