import React from 'react'

import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import "./App.css"
export default function App() {

    return(
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project/:id" element={<ProjectView/>} />
  
    </Routes>
   
    <ToastContainer position="bottom-right" theme="dark"/>
  </BrowserRouter>
  )

}
