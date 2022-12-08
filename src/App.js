import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './main.scss';

import Navbar from './components/elements/Navbar';
import Home from './components/pages/home/Home';
import Category from './components/pages/category/Category';
import Footer from './components/layout/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
