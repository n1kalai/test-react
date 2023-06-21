import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.scss";
import "./App.css";

import reportWebVitals from "./reportWebVitals";

import { App } from "./App";
import { store } from "./app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

// create redux general statee
// provider -> store -> reducer = slice

// get something from state = useSelector
// modify something = useDispatcch

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
