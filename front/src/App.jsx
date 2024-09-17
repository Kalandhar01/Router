import { Contact } from 'lucide-react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import About from './router/About'
import Blog from './router/Blog'
import LandingPage from './router/LandingPage'


const App = () => {
  return (
    <>

      <Nav/>

    
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LandingPage/>}    />
        <Route  path="/About" element={<About/>}    />
        <Route  path="/Contact" element={<Contact/>}    />
        <Route  path="/Blog" element={<Blog/>}    />
        
          

      </Routes>
    </BrowserRouter>


      


      
    </>
  )
}

export default App
