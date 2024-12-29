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
import AddProductPage from './pages/admin/AddProduct';
import Female from './pages/female';
import Male from './pages/male';
import ViewProduct from './pages/ViewProduct';
import Payment from './pages/Payment';
import OrderSuccess from './pages/OrderSuccsus';
import PrivacyPolicy from './pages/PrivactPolicy';
import TermsAndService from './pages/TermsAndService';
import FetchProducts from './hooks/fetchproducts';
import useProduct from './zustand/useProduct';

export default function App() {
  const { products } = useProduct()
  if (products?.length === 0) {
    FetchProducts()
  }

  return (
    <BrowserRouter >
      <Navigation />
      <div className='mt-16'>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/contactUs' element={<ContactUs />}></Route>
          <Route path='/aboutUs' element={<AboutUs />}></Route>
          <Route path='/family' element={<Family />}></Route>
          <Route path='/couples' element={<Couples />}></Route>
          <Route path='/male' element={<Male />}></Route>
          <Route path='/view/:id' element={<ViewProduct />}></Route>
          <Route path='/female' element={<Female />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/add' element={<AddProductPage />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/success' element={<OrderSuccess />}></Route>
          <Route path='/privacy' element={<PrivacyPolicy />}></Route>
          <Route path='/terms' element={<TermsAndService />}></Route>



        </Routes>
        <Footer />
      </div>

    </BrowserRouter >

  )
}
