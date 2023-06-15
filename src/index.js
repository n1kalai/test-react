import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { MainPage } from "./components/hooks/MainPage";
import { PostPage } from "./components/hooks/PostPage";
import { AboutPage } from "./components/hooks/AboutPage";
import { Header } from "./components/hooks/Header";
import { Footer } from "./components/hooks/Footer";






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<Header/>
<Routes>
	<Route path="/" element={<MainPage/>} />
	<Route path="/:id" element={<PostPage/>} />
	<Route path="/about" element={<AboutPage/>}/>

	
</Routes>
<Footer/>

</BrowserRouter>

	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
