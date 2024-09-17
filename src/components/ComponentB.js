import { useContext, useReducer } from "react";
import { LoginContext } from "./ComponentA";

const LogInReducer = (state, action) => {
    switch(action.type) {
        case 'logOut':
            return {isAuthenticated: false,
                    name: ''}
        case 'logIn':
            return {isAuthenticated: true,
                name: 'nini_gibradze' }
        default:
            return state;
    }
}

const ComponentB = () => {
    const Mycontext = useContext(LoginContext);

    const [state, dispach] = useReducer(LogInReducer, Mycontext);

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

export default ComponentB;