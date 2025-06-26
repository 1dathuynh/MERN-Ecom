import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' exact={true} element={<HomePage/>} />
            <Route path='/productListing' exact={true} element={<ProductListing/>} />
            
          </Routes>
         <Footer />
      </BrowserRouter>
    
    </>
  )
}

export default App;