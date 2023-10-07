import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from './component/SideBar/SideBar'
import Login from './component/Login/Login';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        <Route path="SideBar" element={<SideBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
