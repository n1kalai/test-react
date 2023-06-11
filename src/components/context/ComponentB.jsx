import { useContext, useReducer } from "react";
import { AuthContext } from "./ComponentA";

const AuthorizationReducer = (state, action) => {
    switch (action.type) {
        case "signOut":
            return {
                isAuthenticated: false,
            };
        case "signIn":
            return {
                isAuthenticated: true,
                name: action.name,
            };
        default:
            return state;
    }
};

const ComponentB = () => {
    const GetContext = useContext(AuthContext);

    const [state, dispatch] = useReducer(AuthorizationReducer, GetContext);

    const signOut = () => {
        dispatch({ type: "signOut" });
    };

    const signIn = (name) => {
        dispatch({ type: "signIn", name });
    };

    return (
        <div className="auth-wrapper">
            <h2>Hello</h2> <h2>{state.name}</h2>
            {state.isAuthenticated ? (
                <button onClick={signOut}>Sign Out</button>
            ) : (
                <button onClick={() => signIn(GetContext.name)}>Sign In</button>
            )}
        </div>
    );
};

export default ComponentB;
