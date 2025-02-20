"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa'
import { MdArrowForward, MdOutlineDateRange, MdOutlineTextsms } from 'react-icons/md'
import { Tooltip } from 'antd';

import { FaArrowLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Navigation } from 'swiper/modules';

export const blogs = [
  {
    "id": 9,
    "image": "/blog0.jfif",
    "title": "রান্নায় জিরার ব্যবহার ও এর উপকারিতা",
    "dis": "জিরা শুধু স্বাদ বাড়ায় না, এটি খাবারকে আরও স্বাস্থ্যকর করে তোলে। রান্নায় জিরার বিভিন্ন ব্যবহারের কথা জানুন।",
    "name": "Sumaiya Khan",
    "date": "March 15, 2025",
    "sms": "897"
  },
  {
    "id": 8,
    "image": "/blog3.jfif",
    "title": "জিরা চা: ওজন কমানোর সহজ উপায়",
    "dis": "জিরা চা মেটাবলিজম বাড়ায়, হজম প্রক্রিয়ায় সাহায্য করে এবং ওজন কমানোর ক্ষেত্রে অত্যন্ত কার্যকর।",
    "name": "Rakibul Islam",
    "date": "March 10, 2025",
    "sms": "654"
  },
  {
    "id": 7,
    "image": "/blog2.jfif",
    "title": "জিরার ভেষজ গুণ ও তার ব্যবহার",
    "dis": "প্রাচীনকাল থেকেই জিরা ভেষজ উপাদান হিসেবে ব্যবহৃত হয়ে আসছে। এটি নানা ধরনের শারীরিক সমস্যার সমাধানে কার্যকর।",
    "name": "Salma Akter",
    "date": "March 2, 2025",
    "sms": "812"
  },
  {
    "id": 6,
    "image": "/blog7.jfif",
    "title": "গ্যাস ও বদহজম কমাতে জিরার ভূমিকা",
    "dis": "জিরা গ্যাসের সমস্যা কমায় এবং বদহজম দূর করতে কার্যকর। এটি হজম প্রক্রিয়া উন্নত করে এবং আরাম দেয়।",
    "name": "Imran Hossain",
    "date": "February 25, 2025",
    "sms": "721"
  },
  {
    "id": 5,
    "image": "/blog6.jfif",
    "title": "ত্বকের যত্নে জিরার ভূমিকা",
    "dis": "জিরা অ্যান্টিব্যাকটেরিয়াল ও অ্যান্টিঅক্সিডেন্ট উপাদানে সমৃদ্ধ, যা ত্বকের উজ্জ্বলতা বৃদ্ধি করে এবং ব্রণের সমস্যা কমাতে সাহায্য করে।",
    "name": "Nausheen Akter",
    "date": "February 20, 2025",
    "sms": "678"
  },
  {
    "id": 4,
    "image": "/blog1.jfif",
    "title": "জিরা পানির উপকারিতা ও প্রস্তুতির সহজ উপায়",
    "dis": "জিরা পানি খেলে হজমশক্তি ভালো হয়, শরীর ডিটক্সিফাই হয় এবং কোলেস্টেরল নিয়ন্ত্রণে থাকে। এটি ঘরে তৈরি করাও বেশ সহজ।",
    "name": "Tania Rahman",
    "date": "February 12, 2025",
    "sms": "923"
  },
  {
    "id": 3,
    "image": "/blog4.jfif",
    "title": "ওজন কমাতে জিরা কতটা কার্যকর?",
    "dis": "জিরার মধ্যে থাকা অ্যান্টিঅক্সিডেন্ট উপাদান ওজন কমাতে সাহায্য করে। এটি মেটাবলিজম বাড়িয়ে শরীরের অতিরিক্ত চর্বি কমায়।",
    "name": "Arafat Hossain",
    "date": "February 5, 2025",
    "sms": "845"
  },
  {
    "id": 2,
    "image": "/blog9.jfif",
    "title": "জিরা কেন প্রতিদিনের খাদ্য তালিকায় রাখা উচিত?",
    "dis": "জিরা হজম শক্তি বাড়ায়, গ্যাসের সমস্যা কমায় এবং শরীর থেকে টক্সিন বের করে দেয়। এটি নিয়মিত খেলে শরীর সুস্থ ও সতেজ থাকে।",
    "name": "Sabrina Islam",
    "date": "January 28, 2025",
    "sms": "612"
  },
  {
    "id": 1,
    "image": "/blog5.jfif",
    "title": "জিরার উপকারিতা ও ব্যবহারের বিস্ময়কর দিক",
    "dis": "জিরা শুধু রান্নার স্বাদ বাড়ায় না, এটি স্বাস্থ্য উপকারিতার এক অসাধারণ উৎস। হজম শক্তি বৃদ্ধি, ওজন নিয়ন্ত্রণ, রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি এবং ত্বকের যত্নসহ নানা ক্ষেত্রে জিরার উপকারিতা অপরিসীম।",
    "name": "Mohammad Hasan Ali",
    "date": "January 15, 2025",
    "sms": "738"
  }
]

const Blogs = () => {
   
  return (
    <div>
         <div className='container pb-[120px] '>
         <div className=' container flex flex-row justify-between items-center relative'>
        <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold font-poppins text-center'>Latest News</h1>
       
        <div className="">
          <button className="z-50 flex absolute top-0 right-16 md:right-20 lg:right-24 swiper-button-next custom-next items-center  bg-[#F5E1C8] hover:bg-white p-2 md:p-3 lg:p-4 rounded-full ml-5">
            <FaArrowLeft className="text-sm sm:text-base lg:text-lg xl:text-2xl text-[#5A3E36] hover:text-black" />
          </button>
          <button className="z-50 flex absolute top-0 right-0  items-center  swiper-button-prev custom-prev bg-[#F5E1C8] hover:bg-white p-2 md:p-3 lg:p-4 rounded-full mr-5">
            <FaArrowRight  className="text-sm sm:text-base lg:text-lg xl:text-2xl text-[#5A3E36] hover:text-black" />
          </button>
        </div>
        </div>
               <div className=' mt-10 '>
               <Swiper
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
        loop={true}
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
            1240: { slidesPerView: 3, spaceBetween: 20 },
            1620: { slidesPerView: 3, spaceBetween: 20 },
          }}
        className="w-full "
        
      >  
                {
                    blogs.map(cardList =>(
                        <SwiperSlide key={cardList.id} >
                        <div className='border border-[#FA8232] p-6 rounded-md'> 
                        <div className='w-full rounded-md h-[280px]'>
                            <Image src={cardList.image} alt='image' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                            <div className='flex flex-row items-center justify-between mt-6'>
                                <span className='flex flex-row items-center gap-1'>
                                <FaRegUserCircle className='text-[#FA8232]'/>
                                <span>{cardList.name}</span>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineDateRange className='text-[#FA8232]'/>
                                <span>{cardList.date}</span>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineTextsms className='text-[#FA8232]'/>
                                <span>{cardList.sms}</span>
                                </span>
                            </div>
                            <Tooltip title={cardList.title}>
                            <h1 className=' text-lg font-medium mt-2 mb-3 line-clamp-1'>{cardList.title}</h1>
                            </Tooltip>
                            <p className='text-base font-normal text-[#8f8777] mb-6 line-clamp-2'>{cardList.dis}</p>

                            <Link href={'/blog/blogedetail'} className='w-[162px] h-[48px] py-3 px-6 border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-md flex flex-row items-center justify-center gap-2'><span className='text-sm font-bold'>Read more</span> <MdArrowForward  className='text-xl'/></Link>
                        </div>
                        </div>
                </SwiperSlide>
                    ))
                }
        </Swiper>
               </div>
            </div>
    </div>
  )
}

export default Blogs