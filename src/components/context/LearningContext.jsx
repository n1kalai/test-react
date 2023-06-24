import { useSelector } from "react-redux";
import ComponentA from "./ComponentA";

const LearningContext = () => {
	const username = useSelector((state) => state);
	console.log(username)
	return (
		<div>
			context
			my name is:
		
			<ComponentA componentAProps="parentparentprops" />
		</div>
	);
};

export default LearningContext;
