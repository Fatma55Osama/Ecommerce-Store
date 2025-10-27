import React from 'react'
import FooterAdmin from '../../../Components/FooterAdmin'
import HeadOutlet from '../../../Components/Headoutlet'
import { FaCut, FaRegCalendarCheck, FaUserPlus } from 'react-icons/fa'
import { MdPayments } from 'react-icons/md'
import CardChart from '../../../Components/CardChart'
import { IoHomeSharp } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'

export default function Dashboard() {
  return (
    <div className='w-full h-full bg-[#eff2fb] flex flex-col justify-between'>
      {/* <HeadOutlet /> */}
      <div className="h-full w-full flex flex-col items-center gap-4">
        <div className="container mx-auto">
          {/* العنوان */}
          <div className="mt-6">
            <h4 className="text-[20px] text-[#444] px-6 flex items-center font-[500]">
              Dashboard
              <IoIosArrowForward className="text-[18px] font-[900]" />
              <IoHomeSharp className="text-[18px]" />
              <IoIosArrowForward className="text-[18px] font-[900]" />
              <span className="text-[14px]">Dashboard</span>
            </h4>
          </div>

          {/* الكروت */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-4">
            <CardChart icon={<FaRegCalendarCheck size={24} />} color="bg-[#ddd9f3]" coloricon="bg-[#6f42c1]" lineColor="#6f42c1" title="Orders" value="650" />
            <CardChart icon={<FaCut size={24} />} color="bg-[#f2e2d9]" coloricon="bg-[#fd7e14]" lineColor="#fd7e14" title="Products" value="54" />
            <CardChart icon={<FaUserPlus size={24} />} color="bg-[#d7e9e2]" coloricon="bg-[#4caf50]" lineColor="#4caf50" title="Customers" value="129" />
            <CardChart icon={<MdPayments size={24} />} color="bg-[#d1e5fa]" lineColor="#2196f3" coloricon="bg-[#2196f3]" title="Revenue" value="20125" />
          </div>
          {/* الترحيب بالادمن */}
          <div className="px-6 mt-8">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">Welcome back, Admin 👋</h2>
                <p className="text-gray-500 mt-2">
                  We're glad to see you again! Here’s an overview of your system today.
                </p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Admin"
                className="w-24 h-24 mt-4 md:mt-0"
              />
            </div>
          </div>

        </div>
      </div>



      {/* <FooterAdmin /> */}
    </div>
  )
}
