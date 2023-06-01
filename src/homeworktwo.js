import React, {useState, useEffect} from "react";
import Clock from "./components/Clock";
import "./App.css"


// შექმენით quiz, სადაც მომხმარებლებს შეუძლიათ 
// უპასუხონ კითხვას და მიიღონ მყისიერი გამოხმაურება 
// მათ პასუხებზე. (სწორია/არასწორია)
// გამოიყენეთ პირობითი 
// რენდერი ( conditional rendering ) და useState

const Func = () => {

    const [userInput, setUserInput] = useState("");
    const answer = 5;
    const [result, setresult] = useState(null)

    const changeInput =(event) => {

        setUserInput(event.target.value)
        console.log(event.target.value)

    }

    const handleSubmit = (event) => {

       event.preventDefault();

       if (userInput == answer) {
        setresult("Correct answer!");
      } else {
        setresult("Incorrect answer!");
      }
  
      setUserInput("");
  
    }
     
    return(
        <div className="timer-container">
        <div className="timer">
        <div className="clock">
        <form onSubmit={handleSubmit}>
        <p>Quizz</p>
        <label>what is your age?</label><br /><br />
        <input type="text" value={userInput} id="test" onChange={changeInput}></input><br /><br />
        <button>Click</button>

        </form>
       


        {/* { userInput == answer ? <p>it's right</p>:<p>it's not right</p>} */}
        {result && <p>{result}</p>}

       
        </div>
        </div>
        </div>
    )
    }

export default Func

