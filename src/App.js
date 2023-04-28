import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './pages';
import Product from './pages/product';
import Contact from './pages/contact';
import Signup from './pages/signup';
import './App.css';

function App() { 
  
  return (
   
      <Router>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/product' element={<Product/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/sign-up' element={<Signup/>} />
      </Routes>
      <Footer />
    </Router>
   
  );
}
export default App;