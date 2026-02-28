import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import profileicon from '../../assets/admin.jpg'

export default function HeadOutlet() {
  return (
    <div className='shadow-[0_0_3px_#3c485826] py-2.5 bg-white flex justify-between'>
        <div className='flex items-center gap-4 ml-5'>
            <div className='rounded-full w-[33px] h-[33px] bg-[#396cf01a] border border-[#396cf01a] shadow-[0_3px_5px_0_#396cf04d] flex justify-center items-center'><IoMenu className='text-[#396cf0] text-[18px]'/></div>
            <div className='relative'>
                <input type="text" placeholder='Search Keywords...' className='rounded-4xl py-1.5 pl-4 pr-10 text-[14px] border-1 border-gray-200 outline-none' />
              <  IoMdSearch className='absolute top-1/2 right-3 transform -translate-y-1/2' />
            </div>
        </div>
        <div className='flex items-center gap-3 mr-5 rounded-4xl  px-2 py-1 hover:bg-[#ebf2fa]'>
            <span className='text-[14px] text-[#484c72] font-[500]'>Ella Jones</span>
            <img src={profileicon} alt="Profile" className='rounded-full w-[30px] h-[30px] object-cover' />
        </div>
    </div>
  )
}
 