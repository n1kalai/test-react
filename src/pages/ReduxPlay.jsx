import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	reset,
	setDynamicNumber,
} from "../features/counter/counterReduser";

export const ReduxPlay = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<div>
			hi reedux {counter.value}
			<button onClick={() => dispatch(increment())}>+ 1</button>
			<button onClick={() => dispatch(decrement())}>- 1</button>
			<button onClick={() => dispatch(reset())}>reset</button>
			<button onClick={() => dispatch(setDynamicNumber(Math.random()))}>
				dynamic numbeer
			</button>
		</div>
	);
};
