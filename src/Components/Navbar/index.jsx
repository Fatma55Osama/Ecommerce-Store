import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-01.png'
import { pathsnav, useCartmodal } from '../../store'
import { Link, useLocation } from 'react-router-dom'
import { IoSearchSharp } from 'react-icons/io5'
import { HiShoppingCart } from 'react-icons/hi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import Cart from '../../Components/Cart'

export default function Navbar() {
    const { navItems } = pathsnav()
    const location = useLocation()
    const [isActive, setisActive] = useState()
    const [isScrolled, setIsScrolled] = useState(false);
    const { modalindex,openModal } = useCartmodal()
    useEffect(() => {
        setisActive(location.pathname)
    }, [location.pathname])
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`
        z-50 w-full top-0 left-0 transition-all duration-300 
        ${isScrolled ? 'fixed bg-white shadow-md' : 'absolute bg-transparent '}
      `}>
            <div className={`flex justify-center items-center h-20 ${isScrolled ? 'border-b border-b-gray-200' : 'border-b-0'}`} >
                <div className='container grid grid-cols-4 h-full  items-center justify-between' >
                    <div className=' container  col-span-3 h-full  flex items-center gap-20'>
                        <div className='h-full flex items-center justify-end '>

                            <img src={logo} alt="Logo"  height={17}  className='object-fill w-[110px] sm:w-[133px]' />
                        </div>
                        <div className='text-center h-full  justify-between gap-8 items-center hidden sm:flex '>
                            {
                                navItems.map((el, index) => {
                                    return (
                                        <Link key={index} to={el.path} className={` font-[500] text-[#333] text-[14px]  mx-2 ${isActive == el.path ? "text-blue-500" : ""}`}>
                                            {el.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='flex items-center justify-end  h-full mr-6' >
                        <div className='flex items-center gap-6 mr-6  '>
                            <IoSearchSharp className='text-[26px] text-[#333]' />
                            <HiShoppingCart onClick={()=>openModal(true)} className='text-[26px] cursor-pointer text-[#333]' />
                            <MdOutlineFavoriteBorder className='text-[26px] text-[#333]' />
                        </div>

                    </div>
                </div>
                {modalindex && <Cart/>}
            </div>
        </div>

    )
}
