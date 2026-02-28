import React from "react";
import Navbar from "../../Components/Navbar";
import SwiperSlides from "../../Components/SwiperSlid";
import Category from "../../Components/Category";
import ProductVeiw from "../../Components/ProductVeiw";
import AllProductsTap1 from '../../Components/AllProductsTap1'
import WomenTap2 from '../../Components/WomenTap2'
import MenTap3 from '../../Components/MenTap3'
import BagTap4 from '../../Components/BagTap4'
import ShoesTap5 from '../../Components/ShoesTap5'
import WatchesTap6 from '../../Components/WatchesTap6'

const homeTabs = [
  {
    label: "All products",
    component: <AllProductsTap1 limit={8} filterType="bestSeller" />,
  },
  {
    label: "Women",
    component: <WomenTap2 limit={8} filterType="topRated" />,
  },
  {
    label: "Men",
    component: <MenTap3 limit={8} filterType="bestSeller" />,
  },
  {
    label: "Bag",
    component: <BagTap4 limit={6} filterType="topRated" />,
  },
  {
    label: "Shoes",
    component: <ShoesTap5 limit={6} filterType="bestSeller" />,
  },
  {
    label: "Watches",
    component: <WatchesTap6 limit={6} filterType="topRated" />,
  },
];
export default function Homepage() {
  return (
    <div className="">
      <div>
        <SwiperSlides />
        <Category />
        <ProductVeiw title="Product Overview" tabs={homeTabs} showSearch={true} />
      </div>
    </div>
  );
}
