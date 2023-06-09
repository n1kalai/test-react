import { useReducer } from "react";

const personReducer = (state, action) => {
	switch (action.type) {
		case "changeName":
			return {
				...state,
				value: action.payload,
			};
		case "addNew":
			if (state.value === "") {
				return state;
			}
			return {
				...state,
				list: [...state.list, state.value],
				value: "",
			};
		case "delete":
			return {
				value: "",
				list: state.list.filter((item, index) => index !== action.payload),
			};
	}
};

const defaultState = {
	value: "",
	list: [],
};

// dispatch -> reducer -> state update = (return {} || state)

const UseReducerHW = () => {
	const [state, dispatch] = useReducer(personReducer, defaultState);

	const handleAddNewItem = () => {
		dispatch({ type: "addNew" });
	};

	const handleDeleteItem = (index) => {
		dispatch({ type: "delete", payload: index });
	};

	return (
		<div>
			<div>
				<input
					value={state.value}
					onChange={(e) =>
						dispatch({ type: "changeName", payload: e.target.value })
					}
				/>
				<button onClick={handleAddNewItem}>Add</button>
			</div>
			{state.list.map((item, index) => (
				<div
					onClick={() => handleDeleteItem(index)}
					style={{
						backgroundColor: "#cacaca",
						width: 200,
						padding: 20,
						marginBottom: 10,
						cursor: "pointer",
					}}
				>
					{item}
				</div>
			))}
		</div>
	);
};

export default UseReducerHW;
