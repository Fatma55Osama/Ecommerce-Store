import React from "react";
import { IoMdClose } from "react-icons/io";
import tshirt from "../../assets/product-01.jpg";
export default function VeiwCart() {
  return (
    <div className="flex justify-center items-center">
      <div className="container mt-35">
        <div className="w-[70%]">
          <div className="mb-[30px] border-1 p-[15px] border-[#dee0ea]">
            <div className="text-[.8125rem]">
              Add <span className="font-bold text-[#EE403D]">$137.31</span> to
              cart and get free shipping!
            </div>
            <div>
              <progress
                className="progress w-56 text-[#EE403D]"
                value="40"
                max="100"
              ></progress>
            </div>
          </div>
          <div>
            {/*Cart items */}
            <table className=" w-full   ">
              <thead className="border-b-2 border-[#EEEEEE]">
                <tr className=" text-[#BEBFC0]  pb-2">
                  <th>&nbsp;</th>
                  <th className="text-[0.875rem] font-[500] pe-75 ">Product</th>
                  {/* <th>&nbsp;</th> */}
                  <th className="text-[0.875rem] font-[500] px-10 ">Price</th>
                  <th className="text-[0.875rem] font-[500] px-10 ">Quantity</th>
                  <th className="text-[0.875rem] font-[500] px-10 ">Subtotal</th>
                </tr>
              </thead>
              <tbody className="border-b-2 border-[#EEEEEE]">
                <tr>
                  <td>
                    <div className="relative">
                      <div className="absolute rounded-4xl w-[15px] h-[15px] bg-[#FF0000] me-10 ">
                        <IoMdClose className="text-white text-[15px]" />
                      </div>
                      <img
                        src={tshirt}
                        className="w-[60px] h-[90px] mt-1 ms-2 object-contain"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="px-10 ">
                    <h6 className="text-[#212529] font-[500] text-[14px]">
                      Basic Colored Sweatpants With Elastic Hems
                    </h6>
                    <dl className="flex gap-2">
                      <dt className="text-[#212529]  text-[14px]">Color: </dt>
                      <dd>
                        <p className="text-[#212529]  text-[14px]">Black</p>
                      </dd>
                      <dt className="text-[#212529]  text-[14px]">Size: </dt>
                      <dd>
                        <p className="text-[#212529]  text-[14px]">L</p>
                      </dd>
                    </dl>
                  </td>
                  {/* Price */}
                  <td className="px-10 text-[15px]">$45.77</td>

                  {/* Quantity */}
                  <td className="px-10">1</td>

                  {/* Subtotal */}
                  <td className="px-10 text-[15px]">$45.77</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
}
