import { useContext,useReducer } from "react";
import  { SignContext } from "./ContextA";

const reducer = (state,action) => {
switch(action.type){
case 'signout':
    return { isAuthenticated : false, name:" "}

case "signin" : 
return  { isAuthenticated : true, name:'dato gogotishvili'}

default :
return state
}
}

const ContextB = () => { 
    const mainState=useContext(SignContext)
    
    const [state,dispatch]=useReducer(reducer,mainState)

    const signout= ()=> {
        dispatch ({type:'signout'})
    }

    const signin= () => {
        dispatch({type:'signin'})
    }

return (
    <div>

<h1>Hello {state.name}</h1>

{state.isAuthenticated ? (<button onClick={signout}>SignOut</button>) : <button onClick={signin}>SignIn</button>}


    </div>




)
}

export default ContextB










// {state.isAuthenticated ? (
//     <button onClick={signOut}>Sign Out</button>
// ) : (
//     <button onClick={() => signIn(GetContext.name)}>Sign In</button>
// )}