// useReducer დახმარებით შექმენით TODO ლისტი, სურათი დამატებულია მაგალითის

import { useReducer } from "react";


const firstState = {
    inputval: "",
    todop: []
}

const reducer = (state, action) => {
    switch(action.type){
        case "write":
            return {...state, inputval: action.payload};
        case "additem":
            
            const todoObj = {
                id: Math.floor(Math.random()*1000),
                value: state.inputval
            } 
            return {...state, todop : [...state.todop, todoObj], inputval: "" }
        
        case "delete":                       
            const filteredArr = state.todop.filter((el) => el.id !== action.payload);
            return {...state, todop: filteredArr }

        default: return state;

    }   
}

const AppInput = () => {   
const [state, dispach] = useReducer(reducer, firstState)


// 2
const handleChange = (value) => {
    dispach({type: "write", payload: value})
}

const handelClick = () => {
    dispach({type: "additem"})
}

const handledelete = (id) => {
    dispach({type: "delete", payload: id})
}
    return(
   
        <div> 
            {/* 1 */}
            <input type="text" value={state.inputval} onChange={(e)=> handleChange(e.target.value)}></input>
            <button onClick={handelClick}>add</button>
     
        {state.todop.map((el, index) => (
            <p onClick={(e) => handledelete(el.id)} key={el.id}>{el.value}</p>
        ))}
        </div>

    )
}

export default AppInput;