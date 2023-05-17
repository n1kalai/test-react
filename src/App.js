import logo from "./logo.svg";
import "./App.css";
import { Languages } from "./components/Languages";
import { useState } from "react";

const App = () => {
	const [number, setNumber] = useState(1);
	const onClick = () => {
		setNumber((previosValue) => previosValue + 1);
	};

	return (
		<div>
			<div className="App">
				<Languages title="HTML5" logo={logo} onClick={onClick} />
				<Languages
					onClick={onClick}
					ushangi={{ textShadow: "0 0 .1px green" }}
					title="CSS3"
					logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
				/>

				<Languages
					onClick={onClick}
					title="JavaScript"
					logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
				/>
				<Languages
					onClick={onClick}
					className="props-from-classname"
					title="TypeScript"
					logo={logo}
				/>
			</div>
			<p className="number">
				{number % 2 === 0 ? (
					<Languages
						onClick={onClick}
						className="props-from-classname"
						title="TypeScript"
						logo={logo}
					/>
				) : (
					"odd"
				)}
			</p>
		</div>
	);
};

export default App;
