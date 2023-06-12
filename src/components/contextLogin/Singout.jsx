import { useContext } from "react";
import { LoginContext } from "./Login";


const Singout = () => {
    const Context = useContext(LoginContext);

    const hendleSingout = () => {
        Context.setLogin({ isAuthenticated: false, name: "" });
    }
    const hendleLogin=()=>{
        Context.setLogin({isAuthenticated:true,name:"tengo minasovi"});
    }
    return (
        <div>
            <p>{Context.login.name}</p>
            {Context.login.isAuthenticated ? <button onClick={hendleSingout}>Singout</button> : <button onClick={hendleLogin}>Login</button>}
        </div>
    )
}
export default Singout