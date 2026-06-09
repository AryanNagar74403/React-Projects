import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Footer from './components/Footer'
import Men from './pages/Men'
import Women from './pages/Women'
const App = () => {
  return (
    <div>
        
      <Navbar/>
      <Navbar2/>
      <Routes>
         <Route path='/about' element={<About/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/product/men' element={<Men/>}/>
         <Route path='/product/women' element={<Women/>}/>

      </Routes>
   <Footer/>
    </div>
  )
}

export default App
