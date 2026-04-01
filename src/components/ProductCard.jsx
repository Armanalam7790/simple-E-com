import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { CartStore } from '../context/CartContext'
import { toast } from 'react-toastify'

const ProductCard = ({product}) => {
  const {setcart, cart}=  useContext(CartStore)
   const navigate =  useNavigate()

   let HandlAddToCart  = ()=>{
     setcart((prev)=> [...prev ,product])
     toast.success('Item Add In Cart')
   }

   let isInCart  = cart.find((elem)=> elem.id === product.id)
  return (
    <div 
    
    className=' p-5 h-fit flex flex-col gap-4 rounded-xl border-2 border-blue-600'>
        <div 
        onClick={()=> navigate(`/product/${product.id}`)
         }
        className='flex items-center' >
            <img width={300} src={product.images[0]} alt="" />

        </div>

        <div>
            <h1>{product.title}</h1>
            <h1>{product.category}</h1>
            <h1>${product.price}</h1>

        </div>

        <div className='w-full flex justify-between items-center'>
            {isInCart? <div className='flex gap-3 items-center justify-center '> 
                <p className=' bg-red-600 text-white px-2'>-</p>
                <p>1</p>
                <p className=' bg-green-600 text-white px-2'>+</p>

            </div> : <button
            onClick={HandlAddToCart}
            className='border-2 border-green-700 p-3 rounded'>Add to Cart</button>}
            <button className='border-2 border-rempve-700 p-3 rounded'>Remove</button>

        </div>
    </div>
  )
}

export default ProductCard