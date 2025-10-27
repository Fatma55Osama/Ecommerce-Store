import React, { useState } from 'react'
import styles from './index.module.css'
import { IoIosSearch } from 'react-icons/io'
import product1 from '../../assets/product-01.jpg'
import product2 from '../../assets/product-02.jpg'
import product3 from '../../assets/product-03.jpg'
import product4 from '../../assets/product-04.jpg'

import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { GrFavorite } from 'react-icons/gr'
import AllProductsTap1 from '../AllProductsTap1'
import WomenTap2 from '../WomenTap2'
import MenTap3 from '../MenTap3'
import BagTap4 from '../BagTap4'
import ShoesTap5 from '../ShoesTap5'
import WatchesTap6 from '../WatchesTap6'
export default function ProductVeiw() {
    const [activeTap, setActiveTap] = useState(0)
    const [likesTap] = useState(["All products", "Women", "Men", "Bag", "Shoes", "Watches"])
    return (
        <div className={styles.parent + " flex justify-center  "}>
            <div className='container'>
                <h3 className='uppercase font-bold text-[36px] text-[#222] '>Product Overview</h3>
                <div className='flex justify-between items-center'>
                    <div className='h-15 flex items-end' >
                        <ul className='text-[#888]  flex gap-8 '>
                            {
                                likesTap.map((el, index) => {
                                    return (
                                        <li className='text-[18px] hover:text-[#333]  hover:underline hover:underline-offset-5 cursor-pointer' onClick={() => (setActiveTap(index))}>
                                            <a className={activeTap == index ? ' text-[#333] underline underline-offset-5 cursor-pointer ' : null} > {el}</a>

                                        </li>
                                    )
                                })
                            }
                            {/* 
                            <li className='text-[18px] hover:text-[#333] hover:underline hover:underline-offset-5 cursor-pointer'>Women</li>
                            <li className='text-[18px] hover:text-[#333] hover:underline hover:underline-offset-5 cursor-pointer'>Men</li>
                            <li className='text-[18px] hover:text-[#333] hover:underline hover:underline-offset-5 cursor-pointer'>Bag</li>
                            <li className='text-[18px] hover:text-[#333]  hover:underline hover:underline-offset-5 cursor-pointer'>Shoes</li>
                            <li className='text-[18px] hover:text-[#333]  hover:underline hover:underline-offset-5 cursor-pointer'>Watches</li> */}
                        </ul>

                    </div>

                    <div>
                        <button className='flex justify-center gap-4 items-center h-[40px] w-[111px] border-1 border-[#e6e6e6] text-[#888] hover:bg-[#717fe0] hover:text-white rounded-[3px]'><IoIosSearch className=' text-[20px]' /> Search</button>
                    </div>
                </div>
                {activeTap == 0 ? <AllProductsTap1 /> : null}
                {activeTap == 1 ? <WomenTap2 /> : null}
                {activeTap == 2 ? <MenTap3 /> : null}
                {activeTap == 3 ? <BagTap4 /> : null}
                {activeTap == 4 ? <ShoesTap5 /> : null}
                {activeTap == 5 ? <WatchesTap6 /> : null}
                {/* <div className='grid grid-cols-4' id={styles.productall}>
                    <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                        <img src={product1} className='w-full h-[334px] object-contain' alt="" />
                        <div className='flex flex-col  gap-4 mt-3 w-68'>
                            <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                            <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                        </div>
                    </div>
                    <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                        <img src={product2} className='w-full h-[334px] object-contain' alt="" />
                        <div className='flex flex-col  gap-4 mt-3 w-68'>
                            <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                            <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                        </div>
                    </div>
                    <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                        <img src={product3} className='w-full h-[334px] object-contain' alt="" />
                        <div className='flex flex-col  gap-4 mt-3 w-68'>
                            <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                            <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                        </div>
                    </div>
                    <div className='h-[396px] container w-70 flex flex-col gap-4 justify-center items-center'>
                        <img src={product4} className='w-full h-[334px] object-contain' alt="" />
                        <div className='flex flex-col  gap-4 mt-3 w-68'>
                            <div className='text-[#999] text-[16px] flex items-center justify-between w-full object-contain'><span>Esprit Ruffle Shirt</span><GrFavorite /></div>
                            <span className='text-[#666] text-[16px] leading-1.5'>$16.64</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
