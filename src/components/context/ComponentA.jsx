import { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";

export const ColorContext = createContext();

const ComponentA = () => {
	const [color, setColor] = useState("red");
	return (
		<div>
			ComponentA
			<ColorContext.Provider value={{ contextColor: color, setColor }}>
				<ComponentB />
			</ColorContext.Provider>
		</div>
	);
};

export default ComponentA;
