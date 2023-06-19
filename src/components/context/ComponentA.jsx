import { createContext, useEffect, useState } from "react";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";

export const ColorContext = createContext();

const ComponentA = ({ componentAProps }) => {
	const [color, setColor] = useState("red");
	const [users, setUsers] = useState(undefined);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			ComponentA
			<ColorContext.Provider
				value={{
					contextColor: color,
					setColor,
					users,
					setUsers,
					componentAProps,
				}}
			>
				<ComponentB />
			</ColorContext.Provider>
		</div>
	);
};

export default ComponentA;
