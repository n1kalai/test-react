import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.css";

import reportWebVitals from "./reportWebVitals";

import { ExplainReduserHook } from "./components/hooks/ExplainReduserHook";
import LearningContext from "./components/context/LearningContext";
import UseReducerHW from "./components/hooks/UseReducerHW";
import UseReducerPlay from "./components/hooks/UseReducerPlaygroud";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Header } from "./components/Header";
import { About } from "./pages/About";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<LearningContext />} />
			<Route path="/about" element={<About />} />
			<Route path="/:id" element={<UserPage />} />
			<Route path="*" element={<div>not GELA</div>} />
		</Routes>
		<Header />
	</BrowserRouter>
	// <React.StrictMode>
	// <LearningContext />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
