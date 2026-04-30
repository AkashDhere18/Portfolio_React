import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import PersonalDetails from './pages/PersonalDetails'
import contactMe from './pages/contactMe'
import ProjectDetails from './pages/ProjectDetails'
import Likes from './components/project/Likes'
import Comments from './components/project/Comments'



const App = () =>  {

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home  />}></Route>

        <Route path='/projects' element={<Projects  />}></Route>

        <Route path='/projects/:projectID' element={<ProjectDetails />}>
         <Route path='likes' element={<Likes />}></Route>
         <Route path='comments' element={<Comments />}></Route>
        </Route>

        <Route path='/personal_info' element={<PersonalDetails />}></Route>

        <Route path='/contact_me' element={<contactMe />}></Route>

      </Routes>
    
     <footer />
    </BrowserRouter>
  )
}

export default App
