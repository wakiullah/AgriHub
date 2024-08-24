
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Offer from './components/Offers/Offer'
import Products from './components/Products.jsx/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignIn/SignUp'
import Footer from './components/Footer/Footer'
import Cart from './Pages/Cart/Cart'
import NewsLetter from './Pages/Newsletter/NewsLetter'
import Faq from './Pages/Faq/Faq'
import Contact from './Pages/Contact/Contact'
import CreateProduct from './Pages/CreateProduct.jsx/CreateProduct'
import { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './Firebase/Firebase'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/newsletter' element={<NewsLetter />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add_product' element={<CreateProduct />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products' >
          <Route path=':priduct_id' element={<ProductDetails />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
