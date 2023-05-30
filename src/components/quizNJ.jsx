import React, { useState } from "react";
import "./../index.scss";
const Quiz = () => {
  const [answer, setAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (selectedAnswer) => {
    setAnswer(selectedAnswer);

    const isAnswerCorrect = selectedAnswer === true;
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <div className="quiz">
      <h2>Quiz 1</h2>
      <p>How many oceans are there on earth?</p>
      <div className="answers-buttons">
        <button
          className={answer === false ? "incorrect" : ""}
          onClick={() => handleSubmit(false)}
        >
          3
        </button>
        <button
          className={answer === true ? "correct" : ""}
          onClick={() => handleSubmit(true)}
        >
          5
        </button>
        <button
          className={answer === false ? "incorrect" : ""}
          onClick={() => handleSubmit(false)}
        >
          8
        </button>
        <button
          className={answer === false ? "incorrect" : ""}
          onClick={() => handleSubmit(false)}
        >
          27
        </button>
      </div>
      {answer !== null && (
        <div>
          <p>{isCorrect ? "Correct" : "Incorrect"}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
