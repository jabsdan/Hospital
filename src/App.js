import React, { lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Products = lazy(()=> import("./components/pages/Products"))
const Services = lazy(()=> import("./components/pages/Services"))
const SignUp = lazy(()=> import("./components/pages/SignUp"))


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home/>
        <Routes>
          <Route path='/' element={<home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;