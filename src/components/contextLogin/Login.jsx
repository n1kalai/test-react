import { createContext, useState} from "react";
import Singout from "./Singout";

export const LoginContext=createContext();

const Login = () => {
    const [login,setLogin]=useState({isAuthenticated:true,name:"tengo minasovi"});
 
    return (
        <div>
            <LoginContext.Provider value={{login,setLogin}}>
            <Singout  />
            </LoginContext.Provider>
        </div>
    )
}   
export default Login;