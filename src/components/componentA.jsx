import { createContext } from "react";
import ComponentB from "./componentB";

export const LoginContext = createContext();

const ComponentA = () => {
    
    return (
        <div>
            <LoginContext.Provider value = {{isAuthenticated: true,
                                            name: 'Maia_Kiknavelidze'}}>
                <ComponentB />
            </LoginContext.Provider>
        </div>
    )
}

export default ComponentA;