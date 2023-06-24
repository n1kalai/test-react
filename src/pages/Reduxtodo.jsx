
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillValue, deleteTodo, add } from "../features/todo/todoreducer";
import { bindActionCreators } from "redux";

export const Reduxtodo = () => {

    const {value, todos} = useSelector(state => state.todo)
    console.log(todos)
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(add())
	
	};
	const handleInputChange = (e) => {
        dispatch(fillValue(e.target.value))
	};
	const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index))
	};

	return (
		<div className="todo-container">
			<form onSubmit={handleSubmit}>
				<input onChange={handleInputChange} value={value}  />
				<button>Add</button>
			</form>
			<ul>
				{todos.map((item, index) => (
					<li onClick={() => handleDeleteTodo(index)} key={item}>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

