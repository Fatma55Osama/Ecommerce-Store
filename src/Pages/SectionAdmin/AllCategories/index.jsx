import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { TbCategoryFilled } from 'react-icons/tb'
import cap from '../../../assets/banner-03.jpg'
import styles from './index.module.css'

export default function AllCategories() {
  return (
    <div className='w-full h-full bg-[#eff2fb] flex flex-col justify-between'>
      <div className="container mx-auto flex flex-col ">
        <div className="flex items-center text-[#444] text-lg  ms-5 mt-5 font-medium mb-8">
          <span>Categories</span>
          <IoIosArrowForward className="mx-2 text-gray-500" />
          <TbCategoryFilled className="text-xl text-gray-600" />
          <IoIosArrowForward className="mx-2 text-gray-500" />
          <span className="text-sm text-gray-500">All Categories</span>
        </div>
        <div className='container grid grid-cols-3 ms-5'>
          <div className=' relative border-1 border-[#e6e6e6] w-[80%] h-[100%]'>
            <img src={cap} className='w-100' alt="" />
            <div className='absolute  top-0 left-0  flex flex-col w-[100%] h-[100%]'>
              <div className=' flex flex-col gap-1 h-[100%]  transition-all duration-300 hover:bg-[#6775d6cc] hover:text-white ' id={styles.textcenter}>
                <div className='flex flex-col gap-1  ' >
                  <span className='text-[23px] font-bold  w-full'>Accessories</span>
                  <span className='text-[14px]  leading-[1.7]'>New Trend</span>

                </div>
                <div className='text-[15px] leading-[1.4] uppercase text-white underline underline-offset-4 flex-none hover:flex transition-all '>
                  Shop Now
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
