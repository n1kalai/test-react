import { createContext, useState } from "react"
import ComponentB from "./ComponentB"

export const Ramecontext = createContext()


const ComponentA = ()=>{
    const [obj,setObj] = useState({isAuthenticated : true, name: "guri xazaradze" })

    return(
        <div>
            <Ramecontext.Provider value={{...obj,setObj} } >
            <ComponentB/>
            </Ramecontext.Provider>
        </div>
    )

}

export default ComponentA