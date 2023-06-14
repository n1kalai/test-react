import { useReducer } from "react";

const colorsArr = ["red", "green", "blue", "violet", "purple", "tomato"];

const arrayToMap = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	"blabla",
	4,
	10,
	11,
	12,
	13,
	14,
	15,
];

const initialState = {
	activeIndexesArray: [],
};

const colorsReducer = (state, action) => {
	switch (action.type) {
		case "active":
			const includesIndex = state.activeIndexesArray.includes(action.payload);

			if (includesIndex) {
				// true - ინდექსი არის ერეიში
				const filteredArray = state.activeIndexesArray.filter(
					(item) => item !== action.payload
				);
				return {
					activeIndexesArray: filteredArray,
				};
			}

			// ინდექსი არ არის ერეიში

			return {
				activeIndexesArray: [...state.activeIndexesArray, action.payload],
			};
	}
};

const UseReducerPlay = () => {
	const [coloredDivs, dispatch] = useReducer(colorsReducer, initialState);

	const handleClick = (index) => {
		dispatch({ type: "active", payload: index });
	};

	return (
		<div>
			{arrayToMap.map((item, index) => (
				<p
					style={{
						width: "200px",
						aspectRatio: "16 / 9",
						border: "solid 1px black",
						float: "left",
						backgroundColor: coloredDivs.activeIndexesArray.includes(index) // [8]
							? colorsArr[Math.floor(Math.random() * colorsArr.length)]
							: "white",
					}}
					// key={index}
					onClick={() => handleClick(index)}
				>
					{item}
				</p>
			))}
		</div>
	);
};

export default UseReducerPlay;
