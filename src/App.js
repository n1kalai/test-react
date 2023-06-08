import { useReducer } from "react";
import "./App.css";

const initialState = {
	number: 0
};

const reducer = (state, action) => {
	switch(action.type){
		case 'plusNumber':
			let addedNum = state.number+1; 
			let newObjPl = {...state, number: addedNum}
			return {...newObjPl};
		case 'minusNumber':
			if(state.number >= 1) {
				let minusNum = state.number-1;
				let newObjMin = {...state, number: minusNum}
				return {...newObjMin};
			}	return state;		
		default:
			return state;
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)	
	
	const handleAddNumber = () => {
		dispatch({type: 'plusNumber'})
	}

	const handleMinusNumber = () => {
		dispatch({type: 'minusNumber'})
	}

	return (
		<div className="main_cont">
			<button onClick={handleAddNumber}>plus 1</button>
			<button onClick={handleMinusNumber}>minus 1</button>
			<h1>{state.number}</h1>
		</div>
	);
};

export default App;