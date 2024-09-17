import { createContext } from "react";
import ComponentB from "./ComponentB";

export const LoginContext = createContext();

const ComponentA = () => {
    
    return (
        <div>
            <LoginContext.Provider value = {{isAuthenticated: true,
                                            name: 'nini_gibradze'}}>
                <ComponentB />
            </LoginContext.Provider>
        </div>
    )
}

export default ComponentA;