import { useReducer } from "react";



const reduser = (state, action) => {
     switch (action.type) {
          case "increment":
               return {
                    counter: state.counter + 1
               }
          case "decrement":
               return {
                    counter: state.counter - 1
               }
          default:
               return state
     }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reduser, {
        counter: 0
    })
    const hendleCountDown = () => {
        dispatch({ type: "decrement"  })

    }
    const hendleCountUp = () => {
        dispatch({ type: "increment"  })
    }


    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={hendleCountUp} >+</button>
            <button onClick={hendleCountDown}>-</button>
        </div>
    );
}
export default Counter;