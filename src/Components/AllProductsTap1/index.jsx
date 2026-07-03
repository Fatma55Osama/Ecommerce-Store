import React from "react";
import product1 from "../../assets/product-01.jpg";
import product2 from "../../assets/product-02.jpg";
import product3 from "../../assets/product-03.jpg";
import product4 from "../../assets/product-04.jpg";
import { GrFavorite } from "react-icons/gr";
import styles from "./index.module.css";
export default function AllProductsTap1({
  limit,
  filterType, // 'bestSeller' | 'topRated' | undefined
}) {
  const products = [
    { id: 1, name: "T-Shirt", img: product1, sales: "120$", rating: 4.8 },
    { id: 2, name: "Bag", img: product2, sales: "80$", rating: 4.2 },
    { id: 3, name: "Shoes", img: product3, sales: "200$", rating: 4.9 },
    { id: 4, name: "Watch", img: product4, sales: "60$", rating: 3.9 },
    { id: 5, name: "T-Shirt", img: product1, sales: "120$", rating: 4.8 },
    { id: 6, name: "Bag", img: product2, sales: "80$", rating: 4.2 },
    { id: 7, name: "Shoes", img: product3, sales: "200$", rating: 4.9 },
    { id: 8, name: "Watch", img: product4, sales: "60$", rating: 3.9 },
  ];

  let filteredProducts = [...products];

  if (filterType === "bestSeller") {
    filteredProducts.sort((a, b) => b.sales - a.sales);
  }

  if (filterType === "topRated") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-4 " id={styles.productall}>
      {filteredProducts.map((el) => {
        return (
          <div
            key={el.id}
            className="group relative overflow-hidden h-[430px] container w-70 flex flex-col gap-2 justify-center items-center "
          >
            <div className="w-full h-[334px] overflow-hidden relative">
              <img
                src={el.img}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                alt=""
              />

              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-[20px] bg-white text-[15px] text-[#333] px-8 py-2 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:bg-[#333] hover:text-white">
                {" "}
                Quick View
              </button>
            </div>
            <div className="flex flex-col  gap-4 mt-3 w-68">
              <div className="text-[#999] text-[16px] flex items-center justify-between w-full object-contain">
                <span>{el.name}</span>
                <GrFavorite />
              </div>
              <span className="text-[#666] text-[16px] leading-1.5">
                {el.sales}
              </span>
            </div>
          </div>
        );
      })}
      {/* <div className="h-[396px] container w-70 flex flex-col gap-4 justify-center items-center">
        <img
          src={product1}
          className="w-full h-[334px] object-contain"
          alt=""
        />
        <div className="flex flex-col  gap-4 mt-3 w-68">
          <div className="text-[#999] text-[16px] flex items-center justify-between w-full object-contain">
            <span>Esprit Ruffle Shirt</span>
            <GrFavorite />
          </div>
          <span className="text-[#666] text-[16px] leading-1.5">$16.64</span>
        </div>
      </div>
      <div className="h-[396px] container w-70 flex flex-col gap-4 justify-center items-center">
        <img
          src={product2}
          className="w-full h-[334px] object-contain"
          alt=""
        />
        <div className="flex flex-col  gap-4 mt-3 w-68">
          <div className="text-[#999] text-[16px] flex items-center justify-between w-full object-contain">
            <span>Esprit Ruffle Shirt</span>
            <GrFavorite />
          </div>
          <span className="text-[#666] text-[16px] leading-1.5">$16.64</span>
        </div>
      </div>
      <div className="h-[396px] container w-70 flex flex-col gap-4 justify-center items-center">
        <img
          src={product3}
          className="w-full h-[334px] object-contain"
          alt=""
        />
        <div className="flex flex-col  gap-4 mt-3 w-68">
          <div className="text-[#999] text-[16px] flex items-center justify-between w-full object-contain">
            <span>Esprit Ruffle Shirt</span>
            <GrFavorite />
          </div>
          <span className="text-[#666] text-[16px] leading-1.5">$16.64</span>
        </div>
      </div>
      <div className="h-[396px] container w-70 flex flex-col gap-4 justify-center items-center">
        <img
          src={product4}
          className="w-full h-[334px] object-contain"
          alt=""
        />
        <div className="flex flex-col  gap-4 mt-3 w-68">
          <div className="text-[#999] text-[16px] flex items-center justify-between w-full object-contain">
            <span>Esprit Ruffle Shirt</span>
            <GrFavorite />
          </div>
          <span className="text-[#666] text-[16px] leading-1.5">$16.64</span>
        </div>
      </div> */}
    </div>
  );
}
