import React, { useState } from "react";
import styles from "./index.module.css";
import { IoIosSearch } from "react-icons/io";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import AllProductsTap1 from "../AllProductsTap1";
import WomenTap2 from "../WomenTap2";
import MenTap3 from "../MenTap3";
import BagTap4 from "../BagTap4";
import ShoesTap5 from "../ShoesTap5";
import WatchesTap6 from "../WatchesTap6";
export default function ProductVeiw({ title, tabs, showSearch = true }) {
  const [activeTap, setActiveTap] = useState(0);

  return (
    <div className={styles.parent + " flex justify-center  "}>
      <div className="container">
        <h3 className="uppercase font-bold text-[36px] text-[#222] ">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <div className="h-15 flex items-end">
            <ul className="text-[#888]  flex gap-8 ">
              {tabs.map((el, index) => {
                return (
                  <li
                    className="text-[18px] hover:text-[#333]  hover:underline hover:underline-offset-5 cursor-pointer"
                    onClick={() => setActiveTap(index)}
                  >
                    <a
                      className={
                        activeTap == index
                          ? " text-[#333] underline underline-offset-5 cursor-pointer "
                          : null
                      }
                    >
                     {el.label}
                  
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            {showSearch && (
              <button
                className="flex justify-center gap-4 items-center
              h-[40px] w-[111px] border border-[#e6e6e6] text-[#888]
              hover:bg-[#717fe0] hover:text-white rounded-[3px]"
              >
                <IoIosSearch className="text-[20px]" />
                Search
              </button>
            )}
          </div>
        </div>
       <div className="mt-8">
          {tabs[activeTap].component}
        </div>
      </div>
    </div>
  );
}
