import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductListing from './pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { Toaster } from "@/components/ui/sonner"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

import ProductZoom from './components/ProductZoom';
import ProductDetailsComponent from './components/ProductDetailComponent';
import CartPage from './pages/Cart';
import Verify from './components/Verify';
import ForgotPasswordPage from './pages/ForgotPassword';
import CheckoutPage from './pages/Checkout';
import MyAccountPage from './pages/MyAccount';
const MyContext = createContext()
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCartPanel, setOpenCartPanel] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
   const handleOpenChange = (open) => {
    setIsOpen(open)
  }
  const toggleCartPanel = (newOpen) => {
    setOpenCartPanel(newOpen)
  }
  const values =  {
    setIsOpen,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel,
    isLogin,
    setIsLogin
  }
 

  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
          <Routes>
            <Route path='/' exact={true} element={<HomePage/>} />
            <Route path='/productListing' exact={true} element={<ProductListing/>} />
            <Route path='/productDetails/:id' exact={true} element={<ProductDetails/>} />
            <Route path='/login' exact={true} element={<LoginPage/>} />
            <Route path='/register' exact={true} element={<RegisterPage/>} />
            <Route path='/cart' exact={true} element={<CartPage/>} />
            <Route path='/verify' exact={true} element={<Verify/>} />
            <Route path='/forgot-password' exact={true} element={<ForgotPasswordPage/>} />
            <Route path='/checkout' exact={true} element={<CheckoutPage/>} />
            <Route path='/my-account' exact={true} element={<MyAccountPage/>} />


            
          </Routes>
         <Footer />
         </MyContext.Provider>
      </BrowserRouter>
       <Toaster richColors />

      <Dialog open={isOpen} onOpenChange={handleOpenChange} className="productDetailsModal" >
      <DialogContent className="sm:max-w-6xl">
          <div className='flex items-center w-full productDetailsModalContainer relative'>

            <div className='col1 w-[50%]'>
              <ProductZoom />
            </div>
            <div className='col-2 w-[50%] px-3 py-8'>
              <ProductDetailsComponent/>
            </div>
          </div>
      </DialogContent>
    </Dialog>
    
    </>
  )
}

export default App;
export {MyContext}