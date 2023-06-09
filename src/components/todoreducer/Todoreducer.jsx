import { useReducer } from "react"

const initialstate = {
    val:"",
    list:[]
}


const todoredu = (state,action)=>{
    
    switch(action.type){
        case "input":
            return { ...state, val: action.payload };
        case "add":
            return{...state, val:"",list:[...state.list,state.val]}
           
           
        case "delete":
            let filteredaray = state.list.filter(ele=>state.list.indexOf(ele)!==action.payload)
            return{...state, list:filteredaray}
        default:
            return state
    }
}


export const Todoreducer = ()=>{


    const[state,dispatch] = useReducer(todoredu,initialstate)

    
    
const daamate = ()=>{
    dispatch( {type:"add"})
}

const handledelete = (index)=>{
    dispatch({type:"delete",payload:index})
}
const changevalue =(op)=>{
    dispatch({type:"input",payload:op})
}



    return(
        <div className="todo-container">
			
				<input  onChange={(e)=>changevalue(e.target.value)}
                type="text" 
                value={state.val}
                placeholder="add item..."
                />
				<button  onClick={daamate}>Add</button>

			
            <ul>
                {state.list.map((ele,index)=>{
                    return(<li key={index} onClick={()=>handledelete(index)}>{ele}</li>)
                })}
            </ul>
		</div>
    )
}

