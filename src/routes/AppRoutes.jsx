import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../screen/Home'
import Cart from '../screen/Cart'
import ProductDetaits from '../screen/ProductDetaits'
import More from '../components/More'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            {/* <Route path='/product/:id' element={<ProductDetaits />}>

            <Route path='more' element={<More />} />

              </Route> */}

                      <Route path='/product/:id' element={<ProductDetaits />}>
        <Route path='more' element={<More />} />
      </Route>

        </Routes>
    </div>
  )
}

export default AppRoutes