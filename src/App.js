import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './main.scss';

import Navbar from './components/elements/Navbar';
import Home from './components/pages/home/Home';
import Category from './components/pages/category/Category';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Account from './components/pages/auth/Account';
import Checkout from './components/pages/checkout/Checkout';



function App() {
  return (
    <Provider store={store}>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
