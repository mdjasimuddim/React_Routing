import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Blog from './Pages/Blog'
import User from './Pages/User'
import Error from './Pages/Error'
import Navbar from './Componets/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/about' element = {<About />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path = '/blogs' element = {<Blogs />} />
          <Route path = '/blogs/:title' element = {<Blog />} />
          <Route path = '/user' element = {<User />} />
          <Route path = '*' element = {<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App