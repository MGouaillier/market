import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import stock from './data/stock.json'
import Product from './types/ProductType'
import CartItem from './types/CartItemType'

// Components
import NavBar from './components/navbar/NavBar'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'

type CartContextType = {
  items: Array<CartItem>
  addToCart: Function
  removeFromCart: Function
}

export const ProductsContext = React.createContext<Array<Product>>([])
export const CartContext = React.createContext<CartContextType>(null!)

const App = () => {
  const [products, setProducts] = useState<Array<Product>>([])
  const [items, setItems] = useState<Array<CartItem>>([])

  const addToCart = (product: Product, quantity: number) => {
    setItems([{ product, quantity }])
  }

  const removeFromCart = () => {
    return console.log('removefromcart')
  }

  useEffect(() => {
    setProducts(stock)
  }, [products])

  return (
    <ProductsContext.Provider value={stock}>
      <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/products" element={<ProductsList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  )
}

export default App
