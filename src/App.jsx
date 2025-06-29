import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' exact={true} element={<HomePage/>} />
            <Route path='/productListing' exact={true} element={<ProductListing/>} />
            <Route path='/productDetails/:id' exact={true} element={<ProductDetails/>} />
          </Routes>
         <Footer />
      </BrowserRouter>
    
    </>
  )
}

export default App;