import { useContext } from "react"
import { Ramecontext } from "./ComponentA"

const ComponentB = ()=>{
    let mycontext = useContext(Ramecontext)
    console.log(mycontext)


    const handlechangelogin = ()=>{
        mycontext.setObj({isAuthenticated : true, name: "guri xazaradze" })
        // console.log(mycontext)
        
    }

    const handlechangesignout = ()=>{
        mycontext.setObj({ isAuthenticated: false, name: ""  })
        // console.log(mycontext)
        
    }

    return(
        <div>
        {mycontext.isAuthenticated? 
        <div> <h1>{`Hello ${mycontext.name}`}</h1> 
        <button onClick={handlechangesignout}> sign out </button> </div>
        
         : 

        <div><button onClick={handlechangelogin}>log in </button>
        
         </div>}
           
        </div>
    )

}
export default ComponentB