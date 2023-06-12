import { useContext } from "react";
import { ColorContext } from "./ComponentA";

const ComponentD = () => {
	const Mycontext = useContext(ColorContext);
	console.log(Mycontext);
	const handleChangeColor = () => {
		Mycontext.setColor("blue");
	};
	return (
		<div>
			ComponentD{" "}
			<button
				onClick={handleChangeColor}
				style={{ color: Mycontext.contextColor }}
			>
				change color
			</button>
		</div>
	);
};

export default ComponentD;
