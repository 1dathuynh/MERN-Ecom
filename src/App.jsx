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
import { Button } from "@/components/ui/button"
import { IoCloseSharp } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer"
import ProductZoom from './components/ProductZoom';
import ProductDetailsComponent from './components/ProductDetailComponent';
import CartPannel from './components/CartPanel';
const MyContext = createContext()
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCartPanel, setOpenCartPanel] = useState(true)
  const values =  {
    setIsOpen,
    setOpenCartPanel
  }
  const handleOpenChange = (open) => {
    setIsOpen(open)
  }
  const toggleCartPanel = (newOpen) => {
    setOpenCartPanel(newOpen)
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
          </Routes>
         <Footer />
         </MyContext.Provider>
      </BrowserRouter>

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


      {/* Cart Panel */}
      <Drawer direction='right' open={openCartPanel} onOpenChange={toggleCartPanel}>
        <DrawerContent className="!w-[500px]">
          <div className='flex items-center justify-between py-4 px-4 border-b border-[rgba(0, 0, 0, 0.1)]'>
            <h3>Shopping Cart (1)</h3>
            <DrawerClose><IoCloseSharp className='text-[20px] cursor-pointer' /></DrawerClose>
          </div>

          <CartPannel />
        </DrawerContent>
      </Drawer>

    
    </>
  )
}

export default App;
export {MyContext}