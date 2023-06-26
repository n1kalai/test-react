import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import LearningContext from "./components/context/LearningContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Provider } from "react-redux";
import Store from "./feature/store/store";
import Todo from "./components/TodoWithRedux/Todo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={Store}>
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<LearningContext />} />
			<Route path="/about" element={<About />} />
			<Route path="/:id" element={<UserPage />} />
			<Route path="/todo" element={<Todo />} />
			<Route path="*" element={<div>not GELA</div>} />
		</Routes>
		<Header />
	</BrowserRouter>
	</Provider>
	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
