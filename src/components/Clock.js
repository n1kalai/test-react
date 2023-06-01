import React from "react";

const Clock = ({timerMil, timerHours, timerMinutes, timerSeconds, ChangeMinutes, ChangeHours, ChangeSeconds  }) => 
{
    return(
        <div>
           <section className="timer-container">
            <section className="timer">
                <div className="clock">            
                    <div>
                        <label>Hours</label>                  
                        <input type="text" value = {timerHours} onChange={ChangeHours}/>                    
                    </div>
                    <div>
                        <label>Minutes</label>
                        <input type="text" value = {timerMinutes} onChange={ChangeMinutes}/>                     
                    </div>
                    <div>
                        <label>Seconds</label>
                        <input type="text" value = {timerSeconds} onChange={ChangeSeconds}/>                
                    </div>
                    <div>
                        <label>Milliseconds</label>                
                        <input type="text" value = {timerMil} />                   
                    </div>
                </div>
            </section>
           </section>
        </div>
    )
};

export default Clock