import React from 'react'
import Navbar from '../../Components/Navbar'
import SwiperSlides from '../../Components/SwiperSlid'
import Category from '../../Components/Category'
import ProductVeiw from '../../Components/ProductVeiw'
export default function Homepage() {
  return (
    <div className=''>
        <div>
         <SwiperSlides/>
         <Category/>
         <ProductVeiw/>
        </div>
    </div>
  )
}
