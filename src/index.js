import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import AppWithPosts from "./Main-Pages/App";
import reportWebVitals from "./reportWebVitals";
import AppWithClass from "./Main-Pages/AppWithClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  // <React.StrictMode>
  <AppWithPosts />
  // <AppWithClass/>
  // </React.StrictMode>
=======
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
>>>>>>> 225e962b2bc58a4c6ab08637b9e345826c9b7dfc
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
