import React from 'react'
import product1 from '../../assets/product-01.jpg'
import product2 from '../../assets/product-02.jpg'
import product3 from '../../assets/product-03.jpg'
import product4 from '../../assets/product-04.jpg'
import product5 from '../../assets/product-05.jpg'
import product11 from '../../assets/product-11.jpg'
import product12 from '../../assets/product-12.jpg'
import { GrFavorite } from 'react-icons/gr'
import styles from './index.module.css'
export default function MenTap3() {
    return (
        <div className='grid grid-cols-4 ' id={styles.productall}>
            <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                <img src={product3} className='w-full h-[334px] object-contain' alt="" />
                <div className='flex flex-col  gap-4 mt-3 w-68'>
                    <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                    <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                </div>
            </div>
            <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                <img src={product11} className='w-full h-[334px] object-contain' alt="" />
                <div className='flex flex-col  gap-4 mt-3 w-68'>
                    <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                    <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                </div>
            </div>
            <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                <img src={product12} className='w-full h-[334px] object-contain' alt="" />
                <div className='flex flex-col  gap-4 mt-3 w-68'>
                    <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                    <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                </div>
            </div>

        </div>)
}
