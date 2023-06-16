import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/PostWithRouter/MainPage.jsx";
import PostPage from "./components/PostWithRouter/PostPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/:id" element={<PostPage />} />
			<Route path="*" element={<div>not GELA</div>} />
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

		// <CocktailHook />

	// <LearningContext />

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











