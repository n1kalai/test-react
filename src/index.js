import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom/dist'
import reportWebVitals from './reportWebVitals'

import './index.scss'
import './App.css'
// import { App } from './App'
import PostsPage from './PostsPage'
import About from './About'
import Layout from './Layout'
import Posts from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<PostsPage />} />
        <Route path='/blog' element={<About />} />
        <Route path='/pricing' element={<About />} />
        <Route path='/contact' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
