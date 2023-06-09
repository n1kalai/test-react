import { useState,useReducer } from "react"

const initialState={
    start:0,
}



const showNext = (state,action)=>{
    switch(action.type){
        case "next":
            return {...state,start:state.start + 1}
            
            case "prev":
            return {...state,start:state.start - 1}
                
        }
}




export const Reducer = () => {
    const [state, dispatch] = useReducer(showNext,initialState)
    const clickNext = () => {
        dispatch({type:"next"})
    }
    const clickPrev = () =>{
        dispatch({type:"prev"})
    }

    



            
            
            
            
            
            
        

            return(
                <div>
                    <h1>{state.start}</h1>
                    <button onClick={clickPrev}>Prev</button>
                    <button onClick={clickNext}>Next</button>
                </div>
        
        
        
        
        )

} 

export default Reducer