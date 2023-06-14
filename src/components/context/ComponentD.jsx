import { useContext } from "react";
import { ColorContext } from "./ComponentA";
import { useNavigate } from "react-router-dom";

const ComponentD = ({ company, userId }) => {
	const { setUsers, componentAProps } = useContext(ColorContext);
	const push = useNavigate();

	const handleNavigate = () => {
		push(`/${userId}`);
	};

	return (
		<>
			<p style={{ color: "green", borderBottom: "solid 1px silver" }}>
				{company.name}
				<br />
				{componentAProps}
			</p>
			<button onClick={handleNavigate}> View details</button>
			<button onClick={() => push(1)}> go forward</button>
		</>
	);
};

export default ComponentD;
