import "./App.css";
import { useState } from "react";

const App = () => {
	const [user, setUser] = useState({
		first_name: "",
		// last_name: "",
		// number: 1231231,
		// sex: "",
		list:[],
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		
		setUser((prevState) => ({
			...prevState,
			[name]: value,
			
		}));
		
	};
	const btn =()=>{
		// console.log(user.first_name)
		setUser((prevState)=>({
			...prevState,
			list:[...prevState.list,user.first_name]
		}))
		// return(<h1>{user.first_name}</h1>)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
	};
	const onDelete =(index)=>{
		setUser((prevstate)=>({
			...prevstate,
			list:[...prevstate.list.slice(0,index),...prevstate.list.slice(index+1)]
		}))
	}

	return (<>
		<form onSubmit={handleSubmit}>
			<legend>TO DO LIST</legend>
			<input
				id="opa"
				placeholder="add item"
				name="first_name"
				value={user.first_name}
				onChange={handleInputChange}
			/>
			
			
		</form>
		<button onClick={()=>btn()}>ADD</button>
		{user.list.map((ele)=>{
			return(<div onClick={()=>onDelete(user.list.indexOf(ele))}>{ele}</div>)
		})}
		</>
	);
};

export default App;
