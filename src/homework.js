import React, {useState, useEffect} from "react";
import Clock from "./components/Clock";
import "./App.css"


const Appfunc = () => {

    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [timerMil, setTimerMil] = useState(0);
    const [isRunning, setIsRunning] = useState(null);

    useEffect(() => {

        let interval;
        if(isRunning){
            interval = setInterval(() => 

            {
                if(timerMil > 0) {
                    setTimerMil((timerMil) => timerMil-1);

                } else if(timerSeconds > 0){
                    setTimerSeconds((timerSeconds) => timerSeconds - 1);
                    setTimerMil(99);

                } else if(timerMinutes > 0){
                    setTimerMinutes((timerMinutes) => timerMinutes - 1);
                    setTimerSeconds(59)
                    setTimerMil(99);
                    
            }   else if(timerHours > 0){
                setTimerHours((timerHours) => timerHours - 1);
                setTimerMinutes(59)
                setTimerSeconds(59)
                setTimerMil(99);
                
            }

            }, 10);
    }
    return () => clearInterval(interval)
    }, [timerMil, timerHours, timerMinutes, timerSeconds, isRunning ]);


    const start =() => {
        if(timerMil !== 0 || timerHours !==  0 || timerMinutes !==  0 || timerSeconds !==  0 ){
           setIsRunning(true)
        }
    }

    const pause =() => {
        setIsRunning(false)
    }

    const stop = () => {
        resettimer()
    }

    const resettimer = () => {

        setIsRunning(false)
        setTimerHours(0);
        setTimerMinutes(0)
        setTimerSeconds(0)
        setTimerMil(0);

    }

    const ChangeMinutes = (e) => {
        setTimerMinutes(e.target.value)
    }

    const ChangeHours = (e) => {
        setTimerHours(e.target.value)
    };

    const ChangeSeconds = (e) => {
        setTimerSeconds(e.target.value)
    };

    return(
      
        <div >

            <Clock timerMil ={timerMil} timerHours ={timerHours} timerMinutes= {timerMinutes} timerSeconds={timerSeconds}
            ChangeMinutes={ChangeMinutes} ChangeHours={ChangeHours} ChangeSeconds={ChangeSeconds} />
            <div className="timer-container">
            <div className="clockcenter">

            {!isRunning && <button onClick={start}>start</button> }
            {isRunning && <button onClick={pause}>pause</button>}
            <button onClick={stop}>stop</button>
            </div>
           </div>


        </div>
       
    )

};

export default Appfunc