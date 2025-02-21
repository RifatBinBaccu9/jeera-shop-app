"use client";
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'
import { MdArrowForward, MdOutlineDateRange,  MdOutlineTextsms } from 'react-icons/md'
import {  Tooltip } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import { blogs } from '../../home/Blogs';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on search query, including Bangla text
  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.dis.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className=''>
        

        <section className='container my-[72px] '>

            <div className=' flex flex-col sm:flex-row justify-between'>
            <h1 className='text-3xl xl:text-4xl font-bold font-poppins text-center mb-5 sm:mb-0'>Latest News</h1>
                <div className='px-1 sm:px-4 py-2  sm:py-3 select-none flex flex-row items-center border border-[#FA8232] rounded-md'>
                    <input 
                      type="text"  
                      placeholder='Search...' 
                      className=' outline-none bg-[#FAF3E0] w-full md:w-[400px]' 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoSearch />
                </div>
              
             </div>

            <div>
               <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
               {
                    filteredBlogs.map(cardList =>(
                       
                        <div key={cardList.id} className='border border-[#FA8232] p-6 rounded-md'> 
                        <div className='w-full rounded-md h-[280px]'>
                            <Image src={cardList.image} alt='image' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                            <div className='flex flex-row items-center justify-between mt-6'>
                                <span className='flex flex-row items-center gap-1'>
                                <FaRegUserCircle className='text-[#FA8232]'/>
                                <Tooltip title={cardList.name}>
                                <span className=' line-clamp-1'>{cardList.name}</span>
                                </Tooltip>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineDateRange className='text-[#FA8232]'/>
                                <Tooltip title={cardList.date}>
                                <span className=' line-clamp-1'>{cardList.date}</span>
                                </Tooltip>
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

                            <Link href={`/blog/blogedetail/${cardList.id}`} className='w-[162px] h-[48px] py-3 px-6 border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-md flex flex-row items-center justify-center gap-2'><span className='text-sm font-bold'>Read more</span> <MdArrowForward  className='text-xl'/></Link>
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
