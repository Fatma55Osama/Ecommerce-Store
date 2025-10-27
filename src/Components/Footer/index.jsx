import React from 'react'
import styles from './index.module.css'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
export default function Footer() {
  return (
    <div className='bg-[#222] h-100 flex items-center justify-center '>
      <div className='container  h-full flex flex-col justify-center gap-8 ' id={styles.footer}>
        <div className='my-10 grid grid-cols-3 h-60'>
          <ul className='flex flex-col gap-6'>
            <h5 className='text-white font-bold text-[15px] '>CATEGORIES</h5>
            <div className='flex flex-col gap-4' >
              <li className='text-[#b2b2b2] text-[14px]'>Women</li>
              <li className='text-[#b2b2b2] text-[14px]'>Men</li>
              <li className='text-[#b2b2b2] text-[14px]'>Shoes</li>
              <li className='text-[#b2b2b2] text-[14px]'>Watches</li>
            </div>

          </ul>
          <ul className='flex flex-col gap-3'>
            <h5 className='text-white font-bold text-[15px] '>HELP</h5>
            <li className='text-[#b2b2b2] text-[14px]'>Track Order</li>
            <li className='text-[#b2b2b2] text-[14px]'>Returns</li>
            <li className='text-[#b2b2b2] text-[14px]'>Shipping</li>
            <li className='text-[#b2b2b2] text-[14px]'>FAQs</li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <li>
              <h5 className='text-white font-bold text-[15px]'>GET IN TOUCH</h5>
            </li>
            <li className='text-[#b2b2b2] w-70 text-[13px] leading-7'>
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </li>
            <li>
              <div className='flex gap-5'  style={{ paddingTop: "27px" }}>
                <FaFacebookF className='text-[#b2b2b2] text-[19px]' />
                <FaInstagram className='text-[#b2b2b2] text-[19px]' />
                <FaPinterestP className='text-[#b2b2b2] text-[19px]' />
              </div>
            </li>
          </ul>

        </div>
        <div className='text-[#888] text-[13px] flex justify-center h-10 items-end '><p className='flex items-center gap-1'>
          Copyright ©2025 All rights reserved | Made with <span><MdOutlineFavoriteBorder /></span> by Colorlib & distributed by ThemeWagon</p></div>
      </div>

    </div>
  )
}
