import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'

const ProductDetaits = () => {
 const navigate  =  useNavigate()
 let {id}   =  useParams()
 const [singleProduct, setsingleProduct] = useState({})
 const [isLoading, setisLoading] = useState(false)
 console.log(id);
 console.log(singleProduct);
 
 useEffect(()=>{
   if (id) {
      (async()=>{
          try {
              let res   =  await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(res);
            setsingleProduct(res.data)
            setisLoading(false)
          } catch (error) {
            console.log('api errors' , error);
            
          }
            
    })()
   }
   setisLoading(true)
 },[id])
   if (isLoading) {
    return <h1 className='text-3xl text-red-300'>Loading product detail</h1>
   }
  return (
    <div className='flex flex-col gap-4'>
        <h1>Here is Product</h1>
        <div>
            
            
             <img width={300} src={singleProduct?.images?.[0]} alt="" />
             <h1>{singleProduct?.description}</h1>
              
        </div>
   
   <div>
   <button onClick={() => navigate(`/product/${id}/more`)}>
  More Details
</button>
    <Outlet />
   </div>
    </div>
  )
}

export default ProductDetaits