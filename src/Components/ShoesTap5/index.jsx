import React from 'react'

import product9 from '../../assets/product-09.jpg'

import { GrFavorite } from 'react-icons/gr'
import styles from './index.module.css'
export default function ShoesTap5() {
  return (
 <div className='grid grid-cols-4 ' id={styles.productall}>
            <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                <img src={product9} className='w-full h-[334px] object-contain' alt="" />
                <div className='flex flex-col  gap-4 mt-3 w-68'>
                    <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                    <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                </div>
            </div>
   

        </div>  )
}
