import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const About = () => {
	useEffect(() => {
		const isDarkMode = localStorage.getItem("darkMode") === "dark";
		// const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
		// localStorage.setItem("saxeli", "mnishvneloba");
		if (isDarkMode) {
			document.body.classList.toggle("dark");
		}
		// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		// 	document.body.classList.toggle("dark");
		// }
	}, []);
	const handleMode = () => {
		console.log(myref.current);
		const isDarkMode = localStorage.getItem("darkMode") === "dark";
		if (isDarkMode) {
			localStorage.setItem("darkMode", "light");
		} else {
			localStorage.setItem("darkMode", "dark");
		}
		// document.body.classList.toggle("dark");
	};

	const myref = useRef();

	return (
		<div ref={myref}>
			about page
			<button onClick={handleMode}>set dark mode</button>
			<Link to="/" replace>
				home page
			</Link>
		</div>
	);
};
