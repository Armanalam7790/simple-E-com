import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { CartStore } from '../context/CartContext'

const Navbar = () => {
 let  {cartlength} =  useContext(CartStore)
  return (
    <div className='h-[10%] flex justify-between items-center px-[10%]  bg-emerald-700'>
        <h1 className='3xl font-bold'>logo</h1>

        <div className='flex gap-10 text-xl font-semibold '>
            <NavLink className={({isActive})=> isActive? 'text-red-400': 'text-white'} to='/'>home</NavLink>
            <NavLink className={({isActive})=> isActive? 'text-red-400 relative': 'text-white relative'} to='/cart'>
              cart
              <span className='absolute bottom-2 text-[14px] bg-red-600 p-1 rounded-full text-amber-50'>{cartlength}</span>
              </NavLink>

        </div>

       <div>Login</div>

        </div>
  )
}

export default Navbar