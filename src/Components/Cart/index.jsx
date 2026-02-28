import React from "react";
import styles from "./index.module.css";
import { IoMdClose } from "react-icons/io";
import { useCartmodal } from "../../store";
import tshirt from "../../assets/product-01.jpg";
import { Link } from "react-router-dom";
export default function Cart() {
  const {closeModal } = useCartmodal();

  return (
    <div>
      <div
        className={styles.modal + " flex justify-end"}
        onClick={() => closeModal()}
      >
        <div
          className={styles.contantmodal + " flex justify-center"}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container">
            <div className="flex justify-between">
              <span className="uppercase text-[#333] text-[18px]">
                Your Cart
              </span>
              <IoMdClose
                onClick={() => closeModal()}
                className=" text-[#333] text-[18px]"
              />
            </div>
            <div className="mt-3 ">
              <div className="h-40 hide-scrollbar overflow-y-auto flex flex-col gap-3">
                {/* Cart items */}
                <div className=" flex items-start gap-4">
                  <img src={tshirt} width={50} height={75} alt="" />
                  <div>
                    <h3 className="text-[0.875rem] mb-[2px]">
                      Basic Colored Sweatpants With Elastic Hemsb Black - L
                    </h3>
                    <span className="text-[0.8125rem]  font-[500]">
                      1 ×<span>$19.90</span>
                    </span>
                    {/* <div className="text-[0.875rem] mb-[7px] flex gap-2">
                        <span>Color: Black</span>
                        <span>Size: L</span>
                    </div> */}
                  </div>
                  <IoMdClose className="text-[1.5rem] font-[600]" />
                </div>
                {/*Cart items*/}
                <div className=" flex items-start gap-4">
                  <img src={tshirt} width={50} height={75} alt="" />
                  <div>
                    <h3 className="text-[0.875rem] mb-[2px]">
                      Basic Colored Sweatpants With Elastic Hemsb Black - L
                    </h3>
                    <span className="text-[0.8125rem]  font-[500]">
                      1 ×<span>$19.90</span>
                    </span>
                    {/* <div className="text-[0.875rem] mb-[7px] flex gap-2">
                        <span>Color: Black</span>
                        <span>Size: L</span>
                    </div> */}
                  </div>
                  <IoMdClose className="text-[1.5rem] font-[600]" />
                </div>
                
              </div>

              <div>
                <div className="flex flex-col mb-[0.9375rem] border-t-1 border-[#dee0ea] ">
                  <p className=" mt-1 flex justify-between">
                    <strong className="text-[0.875rem] text-gray-500 font-[500] optional:[0.4]">
                      Subtotal:
                    </strong>
                    <span className="text-[1.125rem] font-[600] text-[#EE403D]">
                      $112.69
                    </span>
                  </p>
                  <span className="text-[0.8125rem] mt-1">
                    You have 4 items in your cart
                  </span>
                </div>
                <div className="mb-[20px] border-1 p-[20px] border-[#dee0ea]">
                  <div className="text-[.8125rem]">
                    Add{" "}
                    <span className="font-bold text-[#EE403D]">$137.31</span>{" "}
                    to cart and get free shipping!
                  </div>
                  <div>
                    <progress
                      className="progress w-56 text-[#EE403D]"
                      value="40"
                      max="100"
                    ></progress>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to={'/veiwcart'} onClick={()=>closeModal()} className="text-white text-center bg-[#aeb9be] rounded-[4px] text-[0.8125rem] py-3 w-full">
                    View Cart
                  </Link>
                  <button className="text-white bg-[#EE403D] rounded-[4px] text-[0.8125rem] py-3 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
