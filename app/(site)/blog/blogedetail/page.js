"use client";
import { Radio } from 'antd'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdOutlineDateRange, MdOutlineTextsms } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';

const BlogDetail = () => {
   
  return (
    <div className=' '>
        <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
       
        <MdKeyboardArrowRight />
        <span >Page</span> 
        <MdKeyboardArrowRight />
        <span className=''>Blog</span> 
        <MdKeyboardArrowRight />
        <span className='text-[#FA8232]'>Blog Details</span> 
        </div>
        </div>
        <div className=' w-[1024px] mx-auto px-3 my-[80px]'>
            <div className='w-full flex flex-row items-center justify-center'>
                <Image src={'/jeera.jfif'} alt='unsplash_qhnutBbnzOc.png' width={900} height={900} className=' border border-[#E67E22] p-6 rounded-md w-[700px] h-[300px] md:h-[400px] lg:h-[500px]'/>
            </div>

            <div className=' '>
              <div className=' '>
               <div>
                <div>
                  <div className=' grid grid-cols-2 md:grid-cols-4 items-center gap-4  mt-6'>
                                                  <span className='flex flex-row items-center gap-1'>
                                                  <FaCanadianMapleLeaf  className='text-[#FA8232]'/>
                                                  <span>Electronics</span>
                                                  </span>
                                                  <span className='flex flex-row items-center gap-1'>
                                                  <FaRegUserCircle className='text-[#FA8232]'/>
                                                  <span>Marvin McKinney</span>
                                                  </span>
                                                  <span className='flex flex-row items-center gap-1'>
                                                  <MdOutlineDateRange className='text-[#FA8232]'/>
                                                  <span>8 Sep, 2020</span>
                                                  </span>
                                                  <span className='flex flex-row items-center gap-1'>
                                                  <MdOutlineTextsms className='text-[#FA8232]'/>
                                                  <span>738</span>
                                                  </span>
                                              </div>
                </div>
                <h1 className=' text-2xl  sm:text-[32px] font-semibold mt-4 mb-6'>How artist collective Meow Wolf’s website complements their immersive venues</h1>
               </div>

               <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-3'>
                  <Image src={'/jeera.jfif'} alt='image' width={40} height={40}/>
                  <h1 className='text-sm font-medium'>Cameron Williamson</h1>
                </div>
                <div className=''>
                  <Image src={'/jeera.jfif'} alt='image' width={180} height={40}/>
                </div>
               </div>

               <div>
                <p className='py-[32px]'>Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum, ut interdum tellus. Donec quis ex quis metus sodales facilisis ut nec ex. Ut commodo lacus vel odio venenatis, sit amet lacinia lacus cursus. Ut sodales laoreet dapibus. Sed aliquam nisl odio, sed blandit erat placerat sed. Mauris eleifend, magna in convallis congue, orci est fermentum leo, at tincidunt massa ligula semper dolor. Nunc tristique enim in risus tristique rutrum eget ac eros.
                </p>
                <div className='flex flex-row gap-6 p-[40px] bg-[#dcd0cb] border-l-8 border-[#FA8232]'>
                 <div className=' hidden sm:block'>
                  <Image src={'/jeera.jfif'} alt='image' width={56} height={56} />
                 </div>
                 <p>Vintage meets vogue is the only way to describe this serif typeface. Neue World encompasses the mode high-fashion aesthetic of the 1960s with a commercial take.</p>
                </div>

                <div className='my-[32px]'>
                  <p className='mb-4'>Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu turpis. Ut nisl velit, mattis at augue vel, molestie egestas justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat volutpat. Praesent vitae orci blandit, semper felis ac, interdum lacus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui. Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam venenatis quis. Nunc ligula lectus, posuere sit amet ultrices ut, porttitor efficitur mauris. Aliquam bibendum vitae turpis sed molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in enim. Sed fringilla, mi porttitor sodales vehicula, felis enim gravida nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit interdum eget.
                  </p>
                </div>
               </div>

               <div className='grid grid-cols-2 gap-6'>
                <div>
                  <Image src={'/jeera.jfif'} alt='image' width={900} height={900} />
                </div>
                <div>
                <Image src={'/jeera.jfif'} alt='image' width={900} height={900} />
                </div>
               </div>

               <p className='mt-[32px] mb-[72px] text-base font-normal'>Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus bibendum. Aenean in dignissim orci. Suspendisse at augue eget neque dictum vestibulum eu ac orci. Integer imperdiet lectus nec urna mollis euismod. Proin et risus nulla. Cras at diam in risus feugiat accumsan. Nulla sit amet blandit mi, a convallis mauris. Quisque lacus dolor, cursus ac quam ac, tempus ultrices sem. Ut porttitor.</p>

               <div className='mb-[48px]'>
                <div>
                  <h1 className='text-xl font-medium mb-6'>Leave a Commends</h1>
                  <div className='flex flex-row  gap-4'>

                    <div className='w-full mb-4 '>
                      <label htmlFor="name" className='mb-2'>Full Name</label>
                    <input type="text" id='name' className='p-2 h-[44px] w-full outline-none border border-[#FA8232] rounded-md bg-[#FAF3E0] '/>
                    </div>
                   <div className='w-full'>
                    <label htmlFor="email" className='mb-2'>Email Address</label>
                   <input type="text" id='email' className='p-2 h-[44px] w-full outline-none border border-[#FA8232] rounded-md bg-[#FAF3E0]'/>
                   </div>
                  </div>
                  <div>
                    <label htmlFor="dest" className=''>Descripi</label>
                    <textarea name="" id="dest" placeholder='What’s your thought about this blog...' className=' mt-3 p-3 h-[124px] w-full outline-none border border-[#FA8232] rounded-md bg-[#FAF3E0]'></textarea>
                   
                   <div className='text-base font-normal px-6 h-[48px] bg-[#FA8232] w-[178px]  flex items-center justify-center text-white rounded-sm mt-6'>
                   Post Commends
                   </div>
                   </div>

                </div>
               </div>

               <div className='mb-[72px]'>
                <h1 className='text-xl font-medium mb-6'>Commends</h1>

                <div>
                  <div className='flex flex-row  gap-3'>
                    <div className=''> <Image src={'/wou.png'} alt='imgae' width={100} height={100} className='  w-[100px] h-[40px] sm:h-[70px]'/></div>
                    <div>
                      <div className='flex flex-row mb-2'><span className='font-normal text-sm'>Annette Black</span><span className='text-sm font-normal text-[#475156]'>26 Apr, 2021</span></div>
                      <h1 className='text-sm font-normal text-[#475156]'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</h1>
                      <hr className='my-6 border border-[#E4E7E9]'/>
                    </div>
                  </div>
                  <div className='flex flex-row  gap-3'>
                     <div className=''> <Image src={'/wou.png'} alt='imgae' width={100} height={100} className='  w-[100px] h-[40px] sm:h-[70px]'/></div>
                    <div>
                      <div className='flex flex-row mb-2'><span className='font-normal text-sm'>Annette Black</span><span className='text-sm font-normal text-[#475156]'>26 Apr, 2021</span></div>
                      <h1 className='text-sm font-normal text-[#475156]'>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</h1>
                      <hr className='my-6 border border-[#E4E7E9]'/>
                    </div>
                  </div>
                 
                  <div className='text-base border border-[#FFE7D6] text-[#FA8232] rounded-sm flex flex-row justify-center items-center font-normal w-[160px] h-[48px] px-6 gap-2'>
                  <TfiReload />
                  <span>Load More</span>
                  </div>
                </div>
               </div>
              </div>
            
            </div>
        </div>
    </div>
  )
}

export default BlogDetail