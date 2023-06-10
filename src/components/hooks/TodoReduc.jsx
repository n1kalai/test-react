import { useReducer} from "react";

const todoReducer=(state,action)=>{
switch(action.type){
	case 'addTodo':
		return{
			...state, write:action.payload
		}
		case 'addTo':
			return{
				...state, 
				todoWrite:[...state.todoWrite,action.payload]
			}
			case 'delete':
				return {
					write:'',
					todoWrite:state.todoWrite.filter((_item,index) => index !==action.payload)
				}
}
}
const initialState={
    write:"",
    todoWrite:[],
}




const App = () => {
	const [state,dispatch]=useReducer(todoReducer,initialState)
	
	const addClick = ()=>{
		dispatch({type:"addTo", payload:state.write})
	}

const clickDelete = (index) => { 
	dispatch({type:'delete',payload:index})

}

return(
	<div>
		<div><input value={state.write} onChange={(e) => dispatch({type:'addTodo', payload:e.target.value})}/><button onClick={addClick}>AddTodo</button></div>
		{state.todoWrite.map((item,index)=><div style={{cursor:'pointer'}} onClick={()=>clickDelete(index)}>{item}</div>)}
	</div>

) 

}


export default App