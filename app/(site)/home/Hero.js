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
        className="w-full h-[325px] sm:h-[400px] lg:h-[500px] xl:h-[650px]"
        
      >
        <SwiperSlide className=' bg-cover bg-no-repeat relative' style={{ backgroundImage: 'url(/banner.webp)' }} >
        <div className="absolute bg-black opacity-50 inset-0 "></div>
        <div className=" w-full h-[325px] sm:h-[400px] lg:h-[500px] xl:h-[650px] flex flex-col justify-center items-center  text-white opacity-95">
          <h1 className="text-base sm:text-xl lg:text-2xl xl:text-4xl w-[350px] sm:w-[500px] lg:w-[600px] xl:w-[900px] text-center font-semibold font-poppins">"বিশ্বাসের সাথে কিনুন – আমাদের জিরা একবার ব্যবহার করলেই মন জয় করবে!"</h1>
          <div className=" text-center mt-4 sm:mt-6 lg:mt-8">
            <Link href={'/'} className=" text-sm sm:text-base lg:text-lg xl:text-xl rounded-full font-normal sm:font-semibold lg:font-bold font-poppins px-3 sm:px-4 lg:px-6 py-[6px] sm:py-2 lg:py-3 bg-[#E67E22] z-50 hover:bg-[#f46430]">Order New</Link>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' bg-cover bg-no-repeat relative' style={{ backgroundImage: 'url(/banner3.webp)' }}><div className="absolute bg-black opacity-50 inset-0 "></div>
        <div className="w-full h-[325px] sm:h-[400px] lg:h-[500px] xl:h-[650px] flex flex-col justify-center items-center  text-white opacity-95">
          <h1 className="text-base sm:text-xl lg:text-2xl xl:text-4xl w-[350px] sm:w-[500px] lg:w-[600px] xl:w-[900px]  text-center font-semibold font-poppins">"বিশ্বাসের সাথে কিনুন – আমাদের জিরা একবার ব্যবহার করলেই মন জয় করবে!"</h1>
          <div className=" text-center mt-4 sm:mt-6 lg:mt-8">
            <Link href={'/'} className=" text-sm sm:text-base lg:text-lg xl:text-xl rounded-full font-normal sm:font-semibold lg:font-bold font-poppins px-3 sm:px-4 lg:px-6 py-[6px] sm:py-2 lg:py-3 bg-[#E67E22] z-50 hover:bg-[#f46430]">Order New</Link>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' bg-cover bg-no-repeat relative' style={{ backgroundImage: 'url(/banner6.webp)' }}><div className="absolute bg-black opacity-50 inset-0 "></div>
        <div className="w-full h-[325px] sm:h-[400px] lg:h-[500px] xl:h-[650px] flex flex-col justify-center items-center  text-white opacity-95">
          <h1 className="text-base sm:text-xl lg:text-2xl xl:text-4xl w-[350px] sm:w-[500px] lg:w-[600px] xl:w-[900px]  text-center font-semibold font-poppins">"বিশ্বাসের সাথে কিনুন – আমাদের জিরা একবার ব্যবহার করলেই মন জয় করবে!"</h1>
          <div className=" text-center mt-4 sm:mt-6 lg:mt-8">
            <Link href={'/'} className=" text-sm sm:text-base lg:text-lg xl:text-xl rounded-full font-normal sm:font-semibold lg:font-bold font-poppins px-3 sm:px-4 lg:px-6 py-[6px] sm:py-2 lg:py-3 bg-[#E67E22] z-50 hover:bg-[#f46430]">Order New</Link>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      <div className="">
          <button className="z-50 hidden sm:flex absolute top-[50%] left-0 justify-between items-center swiper-button-prev custom-prev bg-[#F5E1C8] hover:bg-white p-2 md:p-3 lg:p-4 rounded-full ml-5">
            <FaArrowLeft className="text-sm sm:text-base lg:text-lg xl:text-2xl text-[#5A3E36] hover:text-black" />
          </button>
          <button className="z-50 hidden sm:flex absolute top-[50%] right-0 justify-between items-center swiper-button-next custom-next bg-[#F5E1C8] hover:bg-white p-2 md:p-3 lg:p-4 rounded-full mr-5">
            <FaArrowRight  className="text-sm sm:text-base lg:text-lg xl:text-2xl text-[#5A3E36] hover:text-black" />
          </button>
        </div>
      </section>
    </>
  );
}
