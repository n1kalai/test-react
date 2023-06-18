import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

// import { ExplainReduserHook } from "./components/hooks/ExplainReduserHook";
// import LearningContext from "./components/context/LearningContext";
// import UseReducerHW from "./components/hooks/UseReducerHW";
// import UseReducerPlay from "./components/hooks/UseReducerPlaygroud";

import Post from "./components/reactRouterHW/posts";
import MainPostsPage from "./components/reactRouterHW/mainPage";
import Header from "./components/reactRouterHW/header";
import { About } from "./components/reactRouterHW/about";
import { Footer } from "./components/reactRouterHW/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>

  // <MainPostsPage />

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPostsPage />} />
      <Route path="/:id" element={<Post />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
    <Footer />
  </BrowserRouter>

  //    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
