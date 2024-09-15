import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./toDo.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AppWithClass from "./AppWithClass";
import ToDoList from "./ToDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<ToDoList />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
