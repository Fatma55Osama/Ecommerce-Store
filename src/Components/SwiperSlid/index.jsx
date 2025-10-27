import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import './index.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slid1 from '../../assets/slide-01.jpg'
import slid2 from '../../assets/slide-02.jpg'
import slid3 from '../../assets/slide-03.jpg'
import { Link } from 'react-router-dom';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
export default function SwiperSlides() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className='h-[700px]'>
            <Swiper navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
                autoplay={{
                    delay: 5000,     // ← كل 5 ثواني
                    disableOnInteraction: false, // ← بيكمل حتى لو المستخدم ضغط
                }}
                onBeforeInit={(swiper) => {
                    // نربط المراجع يدويًا هنا
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                }}
                modules={[Navigation,Autoplay]} className="mySwiper h-full">
                <SwiperSlide style={{ backgroundImage: `url(${slid1})` }} className='bg-cover w-full h-100 bg-center relative flex'>
                    <div className='absolute h-full w-1/2 flex flex-col justify-center items-center '>
                        <div className='flex flex-col gap-7'>
                            <div><span className='text-[28px] leading-1.5 text-[#333]'>Women Collection 2018</span></div>
                            <div><h2 className='text-[60px] leading-[1.1] uppercase text-[#333]  font-bold' style={{ fontFamily: "var(--font-Playfair)" }}>NEW SEASON</h2></div>
                            <div className=' h-10'><Link className='inline-block  rounded-4xl bg-[#717fe0] text-white text-[15px] font-medium uppercase' style={{ padding: "10px 40px 10px 40px" }}>Shop Now</Link></div>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${slid2})` }} className='bg-cover w-full h-100 bg-center '>
                    <div className='absolute h-full w-1/2 flex flex-col justify-center items-center '>
                        <div className='flex flex-col gap-7'>
                            <div><span className='text-[28px] leading-1.5 text-[#333]'>Men New-Season</span></div>
                            <div><h2 className='text-[60px] leading-[1.1] uppercase text-[#333]  font-bold' style={{ fontFamily: "var(--font-Playfair)" }}>Jackets & Coats</h2></div>
                            <div className=' h-10'><Link className='inline-block  rounded-4xl bg-[#717fe0] text-white text-[15px] font-medium uppercase' style={{ padding: "10px 40px 10px 40px" }}>Shop Now</Link></div>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${slid3})` }} className='bg-cover w-full h-100 bg-center '>
                    <div className='absolute h-full w-1/2 flex flex-col justify-center items-center '>
                        <div className='flex flex-col gap-7'>
                            <div><span className='text-[28px] leading-1.5 text-[#333]'>Men Collection 2018</span></div>
                            <div><h2 className='text-[60px] leading-[1.1] uppercase text-[#333]  font-bold' style={{ fontFamily: "var(--font-Playfair)" }}>	New arrivals</h2></div>
                            <div className=' h-10'><Link className='inline-block  rounded-4xl bg-[#717fe0] text-white text-[15px] font-medium uppercase' style={{ padding: "10px 40px 10px 40px" }}>Shop Now</Link></div>
                        </div>

                    </div>
                </SwiperSlide>
                <div ref={prevRef} className="custom-prev absolute top-1/2 left-4 z-50 cursor-pointer">
                    <AiFillCaretLeft className="text-5xl text-[#0000004d]" />
                </div>
                <div ref={nextRef} className="custom-next absolute top-1/2 right-4 z-50 cursor-pointer">
                    <AiFillCaretRight className="text-5xl  text-[#0000004d]" />
                </div>
            </Swiper>
        </div >
    )
}
