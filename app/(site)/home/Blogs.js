"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa'
import { MdArrowForward, MdOutlineDateRange, MdOutlineTextsms } from 'react-icons/md'
import { cardList } from '../blog/bloglist/page'
import { Tooltip } from 'antd';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
       console.log(blogs);
       
       useEffect(() => {
           fetch(`/api/blog.json`)
           .then(res => res.json())
           .then(data => setBlogs(data))
       },[])
  return (
    <div>
         <div className='container pb-[120px]'>
         <div className=' flex flex-row justify-between items-center'>
        <h1 className='text-4xl font-bold font-poppins text-center'>Latest News</h1>
        <Link href={'/blog/bloglist'} className='flex flex-row items-center justify-center gap-2 text-base font-bold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-full px-5 py-2 '><span>All News</span><FaArrowRight /></Link>
        </div>
               <div className=' grid md:grid-cols-3 gap-6 mt-10 '>
                {
                    blogs.slice(0,3).map(cardList =>(
                        <div key={cardList.id} className='border border-[#FA8232] p-6 rounded-md'> 
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
                            <p className='text-base font-normal text-[#8f8777] mb-6 line-clamp-3'>{cardList.dis}</p>

                            <Link href={'/blog/blogedetail'} className='w-[162px] h-[48px] py-3 px-6 border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-md flex flex-row items-center justify-center gap-2'><span className='text-sm font-bold'>Read more</span> <MdArrowForward  className='text-xl'/></Link>
                        </div>
                        </div>
                    ))
                }
               </div>
            </div>
    </div>
  )
}

export default Blogs