import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import App from "./App"; / not using;
import reportWebVitals from "./reportWebVitals";
// import AppWithClass from "./AppWithClass"; / not using this one.
import CocktailsWithFunc from "./CocktailsWithFunc";
import PostsCommentsFunc from "./PostsWithFunc";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	// => task 1 - cocktails <=
	<CocktailsWithFunc />
	// vvv task 2 - posts&comments vvv
	// <PostsCommentsFunc />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
