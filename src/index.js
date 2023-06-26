import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.css";

import reportWebVitals from "./reportWebVitals";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import MainPage from "./components/Pages/MainPage";
import PostPage from "./components/Pages/PostPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/:id" element={<PostPage />} />
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
