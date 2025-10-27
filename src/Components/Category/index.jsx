import React from 'react'
import styles from './index.module.css'
import cat1 from '../../assets/banner-01.jpg'
import men from '../../assets/banner-02.jpg'
import cap from '../../assets/banner-03.jpg'
export default function Category() {
    return (
        <div className='flex justify-center ' id={styles.parent}  >
            <div className='container grid grid-cols-3 '>
                <div className=' relative border-1 border-[#e6e6e6] w-[368px] h-[248px]'>
                    <img src={cat1} className='w-100' alt="" />
                    <div className='absolute  top-0 left-0  flex flex-col  w-full h-full'>
                        <div className=' flex flex-col gap-14  pl-6 pt-6  transition-all duration-300 hover:bg-[#6775d6cc] hover:text-white ' id={styles.textcenter}>
                            <div className='flex flex-col gap-1  ' >
                                <span className='text-[28px] font-bold  w-full'>Women</span>
                                <span className='text-[14px]  leading-[1.7]'>Spring 2018</span>

                            </div>
                            <div className='text-[15px] leading-[1.4] uppercase text-white underline underline-offset-4 flex-none hover:flex transition-all '>
                                Shop Now
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' relative border-1 border-[#e6e6e6] w-[368px] h-[248px]'>
                    <img src={men} className='w-100' alt="" />
                    <div className='absolute  top-0 left-0  flex flex-col  w-full h-full'>
                        <div className=' flex flex-col gap-14  pl-6 pt-6  transition-all duration-300 hover:bg-[#6775d6cc] hover:text-white ' id={styles.textcenter}>
                            <div className='flex flex-col gap-1  ' >
                                <span className='text-[28px] font-bold  w-full'>Men</span>
                                <span className='text-[14px]  leading-[1.7]'>Spring 2018</span>

                            </div>
                            <div className='text-[15px] leading-[1.4] uppercase text-white underline underline-offset-4 flex-none hover:flex transition-all '>
                                Shop Now
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' relative border-1 border-[#e6e6e6] w-[368px] h-[248px]'>
                    <img src={cap} className='w-100' alt="" />
                    <div className='absolute  top-0 left-0  flex flex-col  w-full h-full'>
                        <div className=' flex flex-col gap-14  pl-6 pt-6  transition-all duration-300 hover:bg-[#6775d6cc] hover:text-white ' id={styles.textcenter}>
                            <div className='flex flex-col gap-1  ' >
                                <span className='text-[28px] font-bold  w-full'>Accessories</span>
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
    )
}
