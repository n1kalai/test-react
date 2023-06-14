import { useContext, useReducer } from "react";
import {Cont} from "./ComponentFirst"

const LogInReducer = (state, action) => {
    switch(action.type) {
        case 'logOut':
            return {isAuthenticated: false,
                    name: ''}
        case 'logIn':
            return {isAuthenticated: true,
                name: 'salome' }
        default:
            return state;
    }
}

const ComponentSecond = () => {

    const MyCont = useContext(Cont);

    const [state, dispach] = useReducer(LogInReducer, MyCont);

    const signOut = () => {
        
        dispach({type: 'logOut'});
    }

    const logIn = () => {
        dispach({type: 'logIn'});
    }

    return (
        <div className="login_div">
            <h1>Hello {state.name}</h1>
            {state.isAuthenticated ? <button onClick={signOut}>Sign out</button> : <button onClick={logIn}>Log in</button>}
        </div>
    )
}

export default ComponentSecond;