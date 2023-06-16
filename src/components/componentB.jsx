import { useContext, useReducer, useState } from "react";
import { LoginContext } from "./componentA";


const LogInReducer = (state, action) => {
    switch (action.type) {
      case "logOut":
        return { isAuthenticated: false, name: "" };
      case "logIn":
        return { isAuthenticated: true, name: action.payload };
      default:
        return state;
    }
  };
  
  const ComponentB = () => {
    const { isAuthenticated, name } = useContext(LoginContext);
    const [state, dispatch] = useReducer(LogInReducer, { isAuthenticated, name });
    const [inputName, setInputName] = useState(""); 
  
    const handleSignIn = () => {
      dispatch({ type: "logIn", payload: inputName });
      setInputName(""); 
    };
  
    return (
      <div className="wrp">
        <h1>Hello {state.name}</h1>
        {state.isAuthenticated ? (
          <button onClick={() => dispatch({ type: "logOut" })}>Sign out</button>
        ) : (
          <>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter your name"
            />
            <button onClick={handleSignIn}>Sign in</button>
          </>
        )}
      </div>
    );
  };
  
  export default ComponentB;
