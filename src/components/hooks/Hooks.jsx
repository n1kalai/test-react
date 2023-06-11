import { useCallback, useMemo, useRef, useState } from "react"
import { useFetchCocktails } from "./useFetchCocktails"
import { useLocalStorage } from "./useLocalStorage"
import { AnotherCompo } from "./AnotherComponent"
import MyVideo from "../../mov_bbb.mp4"
const Hooks = () => {
    const [number,setNumber] = useState(0)
    const [name,setName] = useState('gel')

    const myref= useRef('gela')
    const anotherRef = useRef(null)
    const usedForHook = useMemo(() => {

        return name
    },[name])



   const cachedFunction = () => {
       console.log(myref.current)
       myref.current.play()
    //    myref.current.cl
   }
   const pauseVideo = () => {
       console.log(myref.current)
       myref.current.playbackRate = 5
    //    myref.current.cl
   }
   

    return <div>
               
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={cachedFunction}>show name </button>
                <button onClick={pauseVideo}>pause </button>
               <h1 > {usedForHook}</h1>
               <video ref={myref} width="400" controls controlsList="nodownload">
                    <source src={MyVideo} type="video/mp4"/>
                    
  
                </video>
            </div>
}

export default Hooks