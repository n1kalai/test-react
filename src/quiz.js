import "./quiz.css";
import { useState } from "react";

const Quiz = () => {
    const [showResult, setShowResult] = useState([]);

    const questions = [
        "The blue whale is the biggest animal to have ever lived.",
        "Humans lose more than 80% of heat from their feet.",
        "Pepperoni is the most popular pizza topping in the US.",
        "The unicorn is the national animal of Scotland."
    ]

    const answers =[true, false, true, true];
    const plusScore = 'you are right!';
    const minusScore = 'sorry, try again';

    const showAnswer = (index, yourAnswer) => {
        const newShowAnswer = [...showResult];
        if (answers[index] === yourAnswer) {
            newShowAnswer[index] = plusScore; 
        } else {
            newShowAnswer[index] = minusScore; 
        }
        setShowResult(newShowAnswer);
    }

    return (
        <div className="main_div">
                {questions.map((ques, index) => {
                    return (<form key={index}  className="quiz_cont">
                                <p className="question">{ques}</p>
                                <ul>
                                    <li onClick={() => showAnswer(index, true)}>
                                        True
                                    </li>
                                    <li onClick={() => showAnswer(index, false)}>
                                        False
                                    </li>
                                    {showResult[index] && <p className="answer">{showResult[index]}</p>}
                                </ul>                               
                            </form>
                            )
                } )}
        </div>
    );
}

export default Quiz;