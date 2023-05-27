import { useState } from "react";

const ToDoList = () => {
	const [item, setItem] = useState("");
	const [toDoItem, setToDoItem] = useState([]);

	function addItem() {
        const newItem = {
			id: Math.floor(Math.random() * 1000),
			value: item
		};
		setToDoItem(previousVal => [...previousVal, newItem]);
		setItem("");
	}

    function deleteItem(id) {
		const deletedItems = toDoItem.filter(item => item.id !== id);
		setToDoItem(deletedItems);
	}

	return (
		<div className="todo_cont"> 
            <h1>TODO LIST</h1>
			<input
				placeholder="search item..."
				name="todo-list"
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			
			<button className="add_button" onClick={() => addItem()}>Add</button>
			<ul>
				{toDoItem.map(needToDo => (
					<li key={needToDo.id}>
						<button className="del_button" onClick={() => deleteItem(needToDo.id)}>{needToDo.value}</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default ToDoList;