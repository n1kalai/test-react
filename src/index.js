import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../src/App.css"
import { MainPage } from "./styledComponents/MainPage";
import { PostsPage} from "./styledComponents/PostsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "./styledComponents/About";
import { Header } from "./styledComponents/Header"
import { Footer } from "./styledComponents/Footer";






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		
	<BrowserRouter>	
	<Header />
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/post/:id" element={<PostsPage />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<div>not found</div>} />
    	</Routes>
		<Footer />
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();