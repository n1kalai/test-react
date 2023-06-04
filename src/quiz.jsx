import { useState } from "react";

const question = "what is Georgia capital city";
const options = [
  {
    answer: "Kakheti",
    isCorrect: false,
  },
  {
    answer: "Tbilisi",
    isCorrect: true,
  },
  {
    answer: "Gori",
    isCorrect: false,
  },
  {
    answer: "Batumi",
    isCorrect: false,
  },
];

const Quiz = () => {
  const [myOptions] = useState(options);
  const [answer, setAnswer] = useState({ isAnswered: false, value: false });

  const checkAnswer = (arg) => {
    setAnswer({ isAnswered: true, value: arg.isCorrect });
  };

  return (
    <div className="main-div">
      <h1 className="h1">{question}</h1>
      <ul className="ul">
        {myOptions.map((question) => (
          <li className="li" key={question.answer}>
            <button className="btn" onClick={() => checkAnswer(question)}>
              {question.answer}
            </button>
          </li>
        ))}
      </ul>
      {answer.isAnswered && (
        <div className="ansDiv">{answer.value ? "Correct" : "Wrong"}</div>
      )}
    </div>
  );
};
export default Quiz;
