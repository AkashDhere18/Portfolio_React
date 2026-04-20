import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


const App = () =>  {

  return (
    <BrowserRouter>
     <Navbar />
     <Home />
     <footer />
    </BrowserRouter>
  )
}

export default App
