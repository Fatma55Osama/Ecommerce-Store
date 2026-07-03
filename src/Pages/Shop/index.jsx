import React from "react";
import styles from "./index.module.css";
import ProductVeiw from "../../Components/ProductVeiw";
import WatchesTap6 from "../../Components/WatchesTap6";
import ShoesTap5 from "../../Components/ShoesTap5";
import BagTap4 from "../../Components/BagTap4";
import MenTap3 from "../../Components/MenTap3";
import WomenTap2 from "../../Components/WomenTap2";
import AllProductsTap1 from "../../Components/AllProductsTap1";
export default function Shop() {
  const shopTabs = [
    { label: "All products", component: <AllProductsTap1 /> },
    { label: "Women", component: <WomenTap2 /> },
    { label: "Men", component: <MenTap3 /> },
    { label: "Bag", component: <BagTap4 /> },
    { label: "Shoes", component: <ShoesTap5 /> },
    { label: "Watches", component: <WatchesTap6 /> },
  ];

  return (
    <div>
      <div className={`${styles.banner} mt-20 h-100`}>
        <div className="contentBanner flex flex-col justify-center h-full gap-5 p-[10px] sm:p-[100px]">
          <h2 className="text-[2rem]  w-80 sm:[w-90] sm:text-[2.375rem]">
            Plus-Size Styles for Every Season
          </h2>
          <p className="text-[0.8rem] text-[#75767c] w-70 sm:[w-90] sm:text-[1rem]">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas.
          </p>
        </div>
      </div>
      <ProductVeiw  tabs={shopTabs} showSearch={true} />
         <div className="flex flex-col justify-center items-center">
          <div className="container flex justify-center items-center pb-5">
            <button className="uppercase bg-[#e6e6e6] hover:bg-[#333] hover:text-white px-14 py-3 rounded-[23px]  transition-colors duration-300">
             Load More
            </button>
          </div>
        </div>
    </div>
  );
}
