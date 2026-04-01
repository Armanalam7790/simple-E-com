import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
    const [Products, setProducts] = useState([])
    useEffect(()=>{
        (async()=>{
            try {
                let res = await axios.get(`https://dummyjson.com/products`)
                
                console.log(res.data.products);
                setProducts(res.data.products)
            } catch (error) {
                console.log('errors -', error);
                
            }
        })()
    },[])
  return (
    <div className='grid grid-cols-5 gap-4'>
       {
        Products.map((elem)=>{
            return <ProductCard key={elem.id} product={elem} />
        })
       }
    </div>
  )
}

export default Home