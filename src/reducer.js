// დავალება 1:
// useReducer დახმარებით შექმენით პატარა მთვლელი. დაგჭირდებათ 2 ღილაკი,
//  მიმატება გამოკლებისთვის და საწყისი რიცხვი, მაგალითად 0

import { useReducer } from "react";


const firstState = {

    number: 0

}

const reducer = (state, action) => {
    switch(action.type){
        case "plus": 
            const newnumber = state.number + 1;
            return {...state, number:newnumber}


        case "minus":
            if(state.number === 0){
                return state
            }
            const newnumbertwo = state.number - 1;
            return {...state, number:newnumbertwo}

        default: return state

    }
    

}


const App = () => {    

const [state, dispach] = useReducer(reducer, firstState)

const plusClick = () => {
    dispach({type: "plus"})

}

const minusClick = () => {
    dispach({type: "minus"})
    
}
    return(
        <div>
            <p>{state.number}</p>
            <button onClick={plusClick}>plus</button>
            <button onClick={minusClick}>minus</button>
        </div>
    )
}

export default App;