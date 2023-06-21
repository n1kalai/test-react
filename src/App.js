import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "./features/todoSlice";

const App = () => {
	const [inputValue, setInputValue] = useState("");
	const savedItems = useSelector((state) => state.todo.savedItems);

	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAddItem = () => {
		if (inputValue.trim() !== "") {
			dispatch(addItem(inputValue));
			setInputValue("");
		}
	};

	const handleDeleteItem = (id) => {
		dispatch(deleteItem(id));
	};

	return (
		<div className="to-do-app">
			<h1>TODO LIST</h1>
			<input
				placeholder="add item..."
				value={inputValue}
				onChange={handleInputChange}
			/>

			<button id="add-button" onClick={handleAddItem}>
				Add
			</button>
			<div className="list-box">
				<ul>
					{savedItems.map((todoItem) => (
						<li key={todoItem.id}>
							<span>{todoItem.value}</span>
							<button
								id="del-btn"
								onClick={() => handleDeleteItem(todoItem.id)}
							>
								DEL
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;