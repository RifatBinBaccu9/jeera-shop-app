"use client";
import Link from 'next/link'
import { IoHomeOutline, IoSearch } from 'react-icons/io5'
import { MdArrowForward, MdKeyboardArrowRight, MdOutlineDateRange, MdOutlineKeyboardArrowDown, MdOutlineTextsms } from 'react-icons/md'
import { Input, Radio } from 'antd';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { blogs } from '../../home/Blogs';



const BlogList = () => {
  
  return (
    <div className=''>
        <div className=' py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
       
        <MdKeyboardArrowRight />
        <span >Page</span> 
        <MdKeyboardArrowRight />
        <span className='text-[#FA8232]'>Blog</span> 
        </div>
        </div>

        <section className='container my-[72px] '>

            <div className=' flex flex-row justify-between'>
                <div className='px-4 py-3 select-none flex flex-row items-center border border-[#FA8232] rounded-md'>
                    <input type="text"  placeholder='Search...' className=' outline-none bg-[#FAF3E0] w-[400px]'/>
                    <IoSearch />
                </div>
                <div className=' flex flex-row items-center gap-5'>
                    <h1 className='text-base font-medium font-poppins'>Sort by:</h1>
                    <div className='flex flex-row items-center px-4 py-3 border border-[#FA8232] gap-[45px] rounded-md'>
                        <h1>Most Popular</h1>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
             </div>

            <div>
               <div className=' grid md:grid-cols-3 gap-6 mt-6'>
                {
                    blogs.map(cardList =>(
                        <div key={cardList.id} className='border border-[#FA8232] p-[32px] rounded-md'> 
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
                            <h1 className=' text-lg font-medium mt-2 mb-3'>{cardList.title}</h1>
                            <p className='text-base font-normal text-[#8f8777] mb-6'>{cardList.dis}</p>

                            <Link href={'/blogdetail'} className='w-[162px] h-[48px] py-3 px-6 text-[#FA8232] border border-[#ea833a] rounded-sm flex flex-row items-center justify-center gap-2'><span className='text-sm font-bold'>Read more</span> <MdArrowForward  className='text-xl'/></Link>
                        </div>
                        </div>
                    ))
                }
               </div>
            </div>

        </section>
    </div>
  )
}

export default BlogList