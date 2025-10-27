import React from 'react'
import logo from '../../assets/logo-01.png'
import { usepathsnavadmin } from '../../store'
import { Link, useLocation } from 'react-router-dom'
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as TfiIcons from "react-icons/tfi"
import { IoMdArrowDropright } from 'react-icons/io';

export default function NavbarAdmin() {
  const { navItemsadmin } = usepathsnavadmin()
  const allicon = {
    ...MdIcons,
    ...TbIcons,
    ...RiIcons,
    ...BiIcons,
    ...TfiIcons,
  }
  const location = useLocation()
  return (
    <div className={` w-1/5 overflow-y-auto  h-screen border-r border-[#e9ecef] shadow-[0_0_3px_#3c485826] customscroll `}  >
      <div className='border-b-1 border-[#e9ecef] p-5'>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        {
          navItemsadmin.map((el, index) => {
            const IconComponent = allicon[el.icon];
             const isActive = el.link?.some((item) => item.path === location.pathname);
            return (
              <div key={index} className="collapse collapse-arrow ">
                <input type="checkbox" name="my-accordion-2" />
                <div className={`collapse-title font-semibold flex items-center gap-1.5 ${isActive ? "text-[#396cf0]" : ""}`}> <div className='w-[30px] h-[30px] text-[13px] rounded-[5px] bg-[#f8f9fa] flex items-center justify-center'>{IconComponent && <IconComponent />}</div> {el.name}</div>
                <div className="collapse-content text-sm flex flex-col gap-5 mt-2 text-[#161c2d] font-medium">{el.link?.map((item, i) => (
                  <div key={i} className={`flex items-center gap-1.5 ml-7 ${item.path == location.pathname ? "text-[#396cf0]" : ""}`}>
                    <IoMdArrowDropright />
                    <Link to={item.path}>{item.label}</Link>
                  </div>
                ))}</div>
              </div>
            )

          })
        }


      </div>
    </div>
  )
}
