import { createContext } from "react";
import ComponentSecond from "./ComponentSecond";


export const Cont = createContext();

const ComponentsFirst = () => {

    return(
        <div>

        <Cont.Provider value = {{isIn: true,
        name: ""}}>
            <ComponentSecond />

        </Cont.Provider >

        </div>

    )

}


export default ComponentsFirst

