import React, {useState} from "react";
import "./App.css";
import Header from "./components/TodoList/Header"
import Form from "./components/TodoList/Form";
import List from "./components/TodoList/List";

const App = () => {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState([]);

	return (<div className="container">
		<div className="app-wrapper">
			<div>
				<Header />
			</div>
			<div>
				<Form
					input={input}
					setInput={setInput}
					todo={todo}
					setTodo={setTodo}
					 />
			
			</div>
			<div>
				<List 
				todo={todo} 
				setTodo={setTodo}
				/>
			</div>
		</div>
	</div>
	);
};

export default App;
