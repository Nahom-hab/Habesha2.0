import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Shop from './pages/shop'
import Navigation from './components/Navigation'
import ContactUs from './pages/contactUs'
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Family from './pages/Family';
import Couples from './pages/couples';
import CartPage from './pages/cart';
import AddProductPage from './pages/admin/addProduct';
import Female from './pages/female';
import Male from './pages/male';

export default function App() {
  return (
    <BrowserRouter >
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/family' element={<Family />}></Route>
        <Route path='/couples' element={<Couples />}></Route>
        <Route path='/male' element={<Male />}></Route>
        <Route path='/female' element={<Female />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>

        <Route path='/add' element={<AddProductPage />}></Route>





      </Routes>
      <Footer />
    </BrowserRouter >

  )
}
