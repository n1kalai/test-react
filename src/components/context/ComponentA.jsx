import { createContext } from "react";
import ComponentB from "./ComponentB";

export const AuthContext = createContext();

const ComponentA = () => {
    return (
        <div>
            <AuthContext.Provider
                value={{
                    isAuthenticated: true,
                    name: "Giorgi Gokadze"
                }}>
                <ComponentB />
            </AuthContext.Provider>
        </div>
    )
}

export default ComponentA