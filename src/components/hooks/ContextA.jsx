import { createContext } from "react";
import ContextB from "./ContextB";




export const SignContext= createContext()

const ContextA = () => {
return (    
    <div>
        
        <SignContext.Provider value={ {isAuthenticated : false, name:''}}>

    <ContextB/>

        </SignContext.Provider>
    </div>
)
}

export default ContextA