import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import CostumHookDG from "./components/hooks/CostumHookDG";
import LoadingHook from "./components/LoadingHook";
import MapOdd from "./components/MapOdd";
import Lenght from "./components/hooks/Lenght";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <CostumHookDG /> */}
		{/* <LoadingHook/> */}
		<MapOdd/>
		{/* <Lenght/> */}
		
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
