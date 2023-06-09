import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import reportWebVitals from "./reportWebVitals";

import { ExplainReduserHook } from "./components/hooks/ExplainReduserHook";

import {Todoreducer} from "./components/todoreducer/Todoreducer"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		// <ExplainReduserHook />
		<Todoreducer/>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
