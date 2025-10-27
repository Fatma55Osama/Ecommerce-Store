import React from 'react'
import NavbarAdmin from '../NavbarAdmin'
import { Outlet } from 'react-router-dom'
import FooterAdmin from '../FooterAdmin'
import HeadOutlet from '../Headoutlet'

export default function MainLayoutAdmin() {
  return (
    <div  className='w-full flex flex-row min-h-screen justify-between '>
        <NavbarAdmin/>

        <div className="flex-1 flex flex-col justify-between">
        <HeadOutlet />

        <div className="flex-1 overflow-y-auto bg-[#f5f7fb] hide-scrollbar">
          <Outlet />
        </div>

        <FooterAdmin />
      </div>
    </div>
  )
}
