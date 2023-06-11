import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Career from './pages/career/Career'
import Home from './pages/home/Home'
import News from './pages/news/News'
import Partner from './pages/partner/Partner'
import Products from './pages/products/Products'

function App() {


  return (


    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/partners" element={<Partner />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
