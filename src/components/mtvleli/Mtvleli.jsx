import { useReducer, useState } from "react"


let initialstate = 0

const mtveliReducer =(state,action)=>{
   
    switch(action.type){
        case "miamate":
            return state+action.payload

        case "gamoakeli":
            return state-action.payload
        
        default:
            return state
    }


}


export const Mtvleli =()=>{

    const [state, dispatch] = useReducer(mtveliReducer,initialstate)

    const plus =()=>{
        dispatch({type : 'miamate', payload: 1})
    }

    const minus =()=>{
        dispatch({type : 'gamoakeli', payload: 1})
    }




    return (
        <div>
            <h1> {state} </h1>
            <button onClick={plus}> +</button>
            <button onClick={minus}>-</button>
        </div>
    )

}