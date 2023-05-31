import React, { useState } from "react";
import "./App.css";

function App() {
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const questions = [
		{
			text: "Which choice is not a value of the type attribute of the <input> element?",
			options: [
				{ id: 0, text: "Range", isCorrect: false },
				{ id: 1, text: "Date", isCorrect: false },
				{ id: 2, text: "Password", isCorrect: false },
				{ id: 3, text: "Adress", isCorrect: true },
			],
		},
		{
			text: "Which attribute must have a unique value each time it is used in an HTML document?",
			options: [
				{ id: 0, text: "ID", isCorrect: true },
				{ id: 1, text: "Title", isCorrect: false },
				{ id: 2, text: "Class", isCorrect: false },
				{ id: 3, text: "Style", isCorrect: false },
			],
		},
		{
			text: "What is the <label> element used for? ",
			options: [
				{ id: 0, text: "to explain what needs to be entered into a form field", isCorrect: true },
				{ id: 1, text: "to identify the difference parts of a figure", isCorrect: false },
				{ id: 2, text: "to identify the difference parts of a figure", isCorrect: false },
				{ id: 3, text: "as a heading for tables", isCorrect: false },
			],
		},
		{
			text: "Which part of the URL https://app.uniswap.org/pool specifies the domain name",
			options: [
				{ id: 0, text: "https", isCorrect: false },
				{ id: 1, text: "uniswap.org", isCorrect: true },
				{ id: 2, text: "app.uniswap", isCorrect: false },
				{ id: 3, text: "org", isCorrect: false },
			],
		},
		{
			text: "Which CSS property will not trigger layout recalculation?",
			options: [
				{ id: 0, text: "Top", isCorrect: false },
				{ id: 1, text: "Opacity", isCorrect: true },
				{ id: 2, text: "Width", isCorrect: true },
				{ id: 3, text: "Height", isCorrect: false },
			],
		},
	];


	const optionClicked = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
	};

	const restartGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResults(false);
	};

	return (
		<div className="App">
			<h1>Quiz App</h1>
			<h2>Score: {score}</h2>
			{showResults ? (
				<div className="final-results">
					<span>Final Results:</span>
					<h2>
						{score} out of {questions.length} correct - (
						{(score / questions.length) * 100}%)
					</h2>
					<button onClick={() => restartGame()}>Restart game</button>
				</div>
			) : (
				<div className="question-card">
					<h2>
						Question: {currentQuestion + 1} out of {questions.length}
					</h2>
					<h3 className="question-text">{questions[currentQuestion].text}</h3>

					<ul>
						{questions[currentQuestion].options.map((option) => {
							return (
								<li
									key={option.id}
									onClick={() => optionClicked(option.isCorrect)}
								>
									{option.text}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;