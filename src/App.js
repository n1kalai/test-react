import "./App.css";
import { useState } from "react";

const App = () => {
	const [todo, setTodo] = useState("");
	const [todoItems, setTodoItems] = useState([
		"Learn React",
		"Learn Vue",
		"Learn Node",
	]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (todo.trim() === "") {
			return;
		}
		setTodoItems((oldTodos) => [...oldTodos, todo]);
		setTodo("");
	};

	const handleInputChange = (e) => {
		setTodo(e.target.value);
	};

	// 1 varianti
	// const handleDeleteTodo = (index) => {
	// 	const newTodoItems = todoItems.filter((todoItem, ind) => ind !== index);
	// 	setTodoItems(newTodoItems);
	// };

	// 2 varianti
	// const handleDeleteTodo = (todoName) => {
	// 	const newTodoItems = [...todoItems];
	// 	const todoToDeleteIndex = newTodoItems.indexOf(todoName);
	// 	delete newTodoItems[todoToDeleteIndex];
	// 	// newTodoItems.splice(todoToDeleteIndex, 1);
	// 	// newTodoItems.slice(todoToDeleteIndex, 1);
	// 	setTodoItems(newTodoItems);
	// };

	const handleDeleteTodo = (index) => {
		if (todoItems.length === 1) {
			alert("ver washliii");
			return;
		}
		const newTodoItems = todoItems.filter((todoItem, ind) => ind !== index);
		setTodoItems(newTodoItems);
	};

	return (
		<div className="todo-container">
			<form onSubmit={handleSubmit}>
				<input onChange={handleInputChange} value={todo} />
				<button>Add</button>
			</form>
			<ul>
				{todoItems.map((item, index) => (
					// 1 variant
					// <li onClick={() => handleDeleteTodo(index)} key={item}>
					// 	{item}
					// </li>

					// 2 variant
					// <li onClick={() => handleDeleteTodo(item)} key={item}>
					// 	{item}
					// </li>

					<li onClick={() => handleDeleteTodo(index)} key={item}>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
