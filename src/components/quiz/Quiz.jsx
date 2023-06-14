import { useRef, useState } from "react";

const question = "What is the best programming language?";
const options = [
	{
		answer: "JavaScript",
		isCorrect: false,
	},
	{
		answer: "Java",
		isCorrect: false,
	},
	{
		answer: "Python",
		isCorrect: true,
	},
	{
		answer: "C++",
		isCorrect: false,
	},
];

const generateRandomNumber = () => {
	return Math.floor(Math.random() * 2);
};

const Quiz = () => {
	const [myOptions, setOption] = useState(options);
	const [answer, setAnswer] = useState({ isAnswered: false, value: false });
	const [inputValue, setInputValue] = useState("");
	const checkAnswer = (cvladi) => {
		setAnswer({ isAnswered: true, value: cvladi.isCorrect });
	};

	const div = useRef();

	const addNewAnswer = () => {
		setOption((prevState) => [
			...prevState,
			{ answer: inputValue, isCorrect: Boolean(generateRandomNumber()) },
		]);
	};

	return (
		<div ref={(e) => console.log(e)}>
			<div>
				<h1 style={{ display: "inline-block" }}>{question}</h1>
				<button> new quiz</button>
			</div>
			<div>
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button onClick={addNewAnswer}>add answers</button>
			</div>
			<ul>
				{myOptions.map((question) => (
					<li key={question.answer}>
						<button onClick={() => checkAnswer(question)}>
							{question.answer}
						</button>
					</li>
				))}
			</ul>
			{answer.isAnswered && <div>{answer.value ? "Correct" : "Wrong"}</div>}
		</div>
	);
};

export default Quiz;
