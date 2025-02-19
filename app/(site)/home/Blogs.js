"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdArrowForward, MdOutlineDateRange, MdOutlineTextsms } from 'react-icons/md'
import { cardList } from '../blog/bloglist/page'


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
         <div>
               <div className=' grid md:grid-cols-3 gap-6 mt-6 container'>
                {
                    blogs.slice(0,3).map(cardList =>(
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
    </div>
  )
}

export default Blogs