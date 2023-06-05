import { useEffect, useState } from "react";


let interval;
const Timer = () => {
    const [timer, setTimer] = useState(10)

if (timer === 0) {
  clearInterval(interval)
}

    useEffect(() => {
       
        interval = setInterval(() => {
                setTimer((prevValue) => prevValue - 1)
                }, 1000)
        

    },[])

    return <div>{timer}</div>
}


export default Timer;