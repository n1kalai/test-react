import { useState } from "react";

const question= ["vin chaabara nagvis urnebi jartshi"
                    
                    ]
        

const answers= [{
    answer:"gela",
    corect:true,
},
{
    answer: "gocika",
    corect: false,
},
{
    answer: "shindlera",
    corect: false,

},];


const Quiz = () => { 
    const [choice]=useState(answers)
    const [finalAnswer,setFinalAnswer]= useState()
    const checkAnswer =(arg)=>{
        setFinalAnswer(arg.corect)
    }
    return (
        <div>
            <h1>
                {question} </h1>
                <ul>
                    {choice.map((question)=>{
                        return (
                        <li key={question.finalAnswer}>
                        <button onClick={()=>checkAnswer(question)}>{question.answer}
                        </button>
                        </li>
                    )})}
                </ul>
                <div>{finalAnswer && finalAnswer !== false ? "stolia":"alastolia"} </div>
        </div>
    )
}
export default Quiz