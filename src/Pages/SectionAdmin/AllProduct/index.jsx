import React from 'react'
import FooterAdmin from '../../../Components/FooterAdmin'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import cloth from '../../../assets/product-15.jpg'
export default function AllProduct() {
    return (
        <div className='w-full h-full bg-[#eff2fb] flex flex-col justify-between'>
            <div className="container mx-auto">
                <div className="mt-6  flex justify-between">
                    <h4 className="text-[20px] text-[#444] px-6 flex items-center font-[500]">
                        Products
                        <IoIosArrowForward className="text-[18px] font-[900]" />
                        <MdOutlineProductionQuantityLimits className="text-[18px]" />
                        <IoIosArrowForward className="text-[18px] font-[900]" />
                        <span className="text-[14px]">All Products</span>
                    </h4>
                    <button className='bg-[#396cf0] text-white px-4 py-2 mr-7 rounded-md'>Add Product</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-6 mt-4">
                    {/* هنا يمكن إضافة كروت المنتجات */}
                    <div className='bg-white p-2 rounded-2xl shadow-md'>
                        <div>
                            <img src={cloth} className='rounded-2xl' alt="Product" />
                        </div>
                        <div className='p-1 flex flex-col gap-1'>
                            <p className=" text-[#212529] text-[.9375rem] font-[600] mt-2">Product Name</p>
                            <div className='flex justify-between'>
                                <span className='text-[#8492a6] text-[.9rem] font-[600]'>16.00$</span>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 w-[15px] bg-[#f1b561]" aria-label="1 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 w-[15px] bg-[#f1b561]" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 w-[15px] bg-[#f1b561]" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 w-[15px] bg-[#f1b561]" aria-label="4 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 w-[15px] bg-[#f1b561]" aria-label="5 star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>)
}
