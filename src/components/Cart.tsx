import React, { useContext } from 'react'
import { CartContext } from '../App'

const Cart = () => {
  const { items } = useContext(CartContext)
  console.log(items)
  return (
    <div>
      {items.map((item) => (
        <span key={item.product.id}>
          {item.product.name} {item.quantity}
        </span>
      ))}
    </div>
  )
}

export default Cart
