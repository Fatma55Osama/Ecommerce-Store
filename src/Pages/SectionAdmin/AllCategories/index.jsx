import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
// import cap from '../../../assets/banner-03.jpg'
// import styles from './index.module.css'
import product1 from "../../../assets/product-1.jpg";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function AllCategories() {
  return (
    <div className="w-full h-full bg-[#f3f3f9] flex flex-col justify-between">
      <div className="container mx-auto flex flex-col ">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#444] text-lg  ms-5 mt-5 font-medium mb-8">
            <span>Categories</span>
            <IoIosArrowForward className="mx-2 text-gray-500" />
            <TbCategoryFilled className="text-xl text-gray-600" />
            <IoIosArrowForward className="mx-2 text-gray-500" />
            <span className="text-sm text-gray-500">All Categories</span>
          </div>
          <button className="bg-[#396cf0] text-white px-4 py-2 mr-7 rounded-md">
            Add Category
          </button>
        </div>

        {/* <div className='container grid grid-cols-3 ms-5'>
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
        </div> */}
        <div className="container px-4">
          <div className=" bg-white shadow-[0_1px_2px_rgba(56,65,74,0.15)] rounded-[0.25rem]  py-[1rem] border-0 border-[#dee2e6]">
            <div className=" px-[1rem] flex justify-between border-b-1 pb-1.5 border-[#dee2e6]">
              <h5 className="text-[1.00625rem] font-[600]">Category List </h5>
              <input
                type="text"
                placeholder="Search Category"
                className="rounded-4xl py-1.5 pl-4 pr-10 text-[14px] border-1 border-gray-300 outline-none"
              />
            </div>
            <table className="w-full border-collapse">
              <thead className="bg-[#e9ecef4d] border-b border-[#dee2e6]">
                <tr>
                  <th className="py-2 px-4 font-[600] text-[0.875rem] text-left">
                    <div className="flex items-center gap-6">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-[20px] h-[20px] border-gray-400 checkbox checkbox-primary"
                      />
                      Category Name
                    </div>
                  </th>

                  <th className="py-2 px-4 font-[600] text-[0.875rem] text-left">
                    <div className="flex items-center gap-2">
                      <span>Total Products</span>
                      <div className="flex flex-col leading-none -space-y-1.5">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>

                  <th className="py-2 px-4 font-[600] text-[0.875rem] text-left">
                    <div className="flex items-center gap-2">
                      <span>Status</span>
                      <div className="flex flex-col leading-none -space-y-1.5">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>

                  <th className="py-2 px-4 font-[600] text-[0.875rem] text-left">
                    <div className="flex items-center gap-2">
                      <span>Actions</span>
                      <div className="flex flex-col leading-none -space-y-1.5">
                        <MdKeyboardArrowUp />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#dee2e6]">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-6">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-[20px] h-[20px] border-gray-400 checkbox checkbox-primary"
                      />
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[36px] h-[36px] rounded-[0.25rem]"
                          src={product1}
                          alt=""
                        />
                        <div>
                          <p className="text-[0.875rem] font-[500] text-[#212529]">
                            Category 1
                          </p>
                          <p className="text-[0.8125rem] text-[#6c757d]">
                            Description for category 1
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className=" px-10">2020</td>
                  <td className=" px-4">
                    <span className=" bg-[#dcf6e5] px-1.5 rounded-[0.25rem] text-[0.65rem] font-[500] py-1 text-[#17c653]">
                      Success
                    </span>
                  </td>
                  <td className=" px-4">
                    <div className="flex gap-4">
                      <Link className="flex justify-center items-center text-[#0d6efd] rounded nav-link w-[30px] h-[30px] bg-[#0d6efd26]  hover:bg-[#0d6efd] hover:text-white">
                        <GoPencil className="w-[12px] font-[600]" />
                      </Link>
                      <Link className="flex justify-center items-center text-[#f8285a] rounded nav-link w-[30px] h-[30px] bg-[#fedfe6]  hover:bg-[#f8285a] hover:text-white">
                        <RiDeleteBin6Line className="w-[12px] font-[600]" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#dee2e6]">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-6">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-[20px] h-[20px] border-gray-400 checkbox checkbox-primary"
                      />
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[36px] h-[36px] rounded-[0.25rem]"
                          src={product1}
                          alt=""
                        />
                        <div>
                          <p className="text-[0.875rem] font-[500] text-[#212529]">
                            Category 1
                          </p>
                          <p className="text-[0.8125rem] text-[#6c757d]">
                            Description for category 1
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className=" px-10">2020</td>
                  <td className=" px-4">
                    <span className=" bg-[#dcf6e5] px-1.5 rounded-[0.25rem] text-[0.65rem] font-[500] py-1 text-[#17c653]">
                      Success
                    </span>
                  </td>
                  <td className=" px-4">
                    <div className="flex gap-4">
                      <Link className="flex justify-center items-center text-[#0d6efd] rounded nav-link w-[30px] h-[30px] bg-[#0d6efd26]  hover:bg-[#0d6efd] hover:text-white">
                        <GoPencil className="w-[12px] font-[600]" />
                      </Link>
                      <Link className="flex justify-center items-center text-[#f8285a] rounded nav-link w-[30px] h-[30px] bg-[#fedfe6]  hover:bg-[#f8285a] hover:text-white">
                        <RiDeleteBin6Line className="w-[12px] font-[600]" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#dee2e6]">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-6">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-[20px] h-[20px] border-gray-400 checkbox checkbox-primary"
                      />
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[36px] h-[36px] rounded-[0.25rem]"
                          src={product1}
                          alt=""
                        />
                        <div>
                          <p className="text-[0.875rem] font-[500] text-[#212529]">
                            Category 1
                          </p>
                          <p className="text-[0.8125rem] text-[#6c757d]">
                            Description for category 1
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className=" px-10">2020</td>
                  <td className=" px-4">
                    <span className=" bg-[#dcf6e5] px-1.5 rounded-[0.25rem] text-[0.65rem] font-[500] py-1 text-[#17c653]">
                      Success
                    </span>
                  </td>
                  <td className=" px-4">
                    <div className="flex gap-4">
                      <Link className="flex justify-center items-center text-[#0d6efd] rounded nav-link w-[30px] h-[30px] bg-[#0d6efd26]  hover:bg-[#0d6efd] hover:text-white">
                        <GoPencil className="w-[12px] font-[600]" />
                      </Link>
                      <Link className="flex justify-center items-center text-[#f8285a] rounded nav-link w-[30px] h-[30px] bg-[#fedfe6]  hover:bg-[#f8285a] hover:text-white">
                        <RiDeleteBin6Line className="w-[12px] font-[600]" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
