import { useEffect, useState } from "react"
let interval;

const Timer = () => {
    const [timer,setTimer] = useState(0)

    const handleStartTimer = () => {
        interval = setInterval(() => {
            setTimer(prevValue => prevValue - 1)
        },1000)
    } 

    if(timer === 0) {
        console.log(timer)
        clearInterval(interval)
    }



    return <div>
      
        <input 
            type="number" 
            onChange={(e) => setTimer(e.target.value)} 
        />
                <button onClick={handleStartTimer}>start</button>

                {timer > 0 && <div> {timer}</div>}
            </div>
}

export default Timer