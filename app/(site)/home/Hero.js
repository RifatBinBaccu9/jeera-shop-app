"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className='Navbar  relative '>
      <Swiper
       slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, Pagination]}
        loop={true}
        className="h-[650px] w-full"
        // style={{width: "100%"}}
        
      >
        <SwiperSlide className=' bg-cover bg-no-repeat relative' style={{ backgroundImage: 'url(/banner.webp)' }} >
        <div className="absolute bg-black opacity-50 inset-0 "></div>
        <div className=" w-full h-[650px] flex flex-col justify-center items-center  text-white opacity-95">
          <h1 className="text-4xl w-[900px] text-center font-semibold font-poppins">"বিশ্বাসের সাথে কিনুন – আমাদের জিরা একবার ব্যবহার করলেই মন জয় করবে!"</h1>
          <div className=" text-center mt-8">
            <Link href={'/'} className=" text-xl rounded-full font-bold font-poppins px-6 py-3 bg-[#E67E22] z-50 hover:bg-[#f46430]">Order New</Link>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' bg-cover bg-no-repeat relative' style={{ backgroundImage: 'url(/banner3.webp)' }}><div className="absolute bg-black opacity-50 inset-0 "></div>
        <div className="w-full h-[650px] flex flex-col justify-center items-center  text-white opacity-95">
          <h1 className="text-4xl w-[900px] text-center font-semibold font-poppins">"বিশ্বাসের সাথে কিনুন – আমাদের জিরা একবার ব্যবহার করলেই মন জয় করবে!"</h1>
          <div className=" text-center mt-8">
            <Link href={'/'} className=" text-xl rounded-full font-bold font-poppins px-6 py-3 bg-[#E67E22] z-50 hover:bg-[#f46430]">Order New</Link>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' bg-cover bg-no-repeat relative' style={{ backgroundImage: 'url(/banner6.webp)' }}><div className="absolute bg-black opacity-50 inset-0 "></div>
        <div className="w-full h-[650px] flex flex-col justify-center items-center  text-white opacity-95">
          <h1 className="text-4xl w-[900px] text-center font-semibold font-poppins">"বিশ্বাসের সাথে কিনুন – আমাদের জিরা একবার ব্যবহার করলেই মন জয় করবে!"</h1>
          <div className=" text-center mt-8">
            <Link href={'/'} className=" text-xl rounded-full font-bold font-poppins px-6 py-3 bg-[#E67E22] z-50 hover:bg-[#f46430]">Order New</Link>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      <div className="">
          <button className="z-50 hidden sm:flex absolute top-[50%] left-0 justify-between items-center swiper-button-prev custom-prev bg-[#F5E1C8] hover:bg-white p-4 rounded-full ml-5">
            <FaArrowLeft className="text-2xl text-[#5A3E36] hover:text-black" />
          </button>
          <button className="z-50 hidden sm:flex absolute top-[50%] right-0 justify-between items-center swiper-button-next custom-next bg-[#F5E1C8] hover:bg-white p-4 rounded-full mr-5">
            <FaArrowRight  className="text-2xl text-[#5A3E36] hover:text-black" />
          </button>
        </div>
      </section>
    </>
  );
}
