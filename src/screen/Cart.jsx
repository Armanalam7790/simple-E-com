import React, { useContext } from 'react'
import { CartStore } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const Cart = () => {
 let {cart} =  useContext(CartStore)
  return (
    <div>
     <div className='flex gap-4 flex-wrap'>
      {cart.map((elem)=>{
        return <ProductCard key={elem.id} product={elem}/>
      })}
     </div>
    </div>
  )
}

export default Cart