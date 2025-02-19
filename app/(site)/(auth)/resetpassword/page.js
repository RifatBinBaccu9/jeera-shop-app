"use client";
import Link from 'next/link'
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
   <div>
     <div className=' bg-[#F2F4F5] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <span>User Account</span>
        <MdKeyboardArrowRight />
        <span>Sign In</span>
        <MdKeyboardArrowRight />
        <span >Forget Password</span> 
        <MdKeyboardArrowRight />
        <span className='text-[#2DA5F3]'>Reset Password</span> 
        </div>
        </div>

     <div className='w-full flex flex-col justify-center items-center my-[100px] select-none rounded-sm'>
         <form className='w-[400px] sm:w-[424px] border p-[32px]'>
            <h1 className='text-xl font-semibold text-center mb-3'>Reset Password</h1>
            <p className='text-sm font-normal text-center mb-6  text-[#5F6C72]'>Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc, fringilla sit amet nunc.</p>
           
        
        {/* Password */}
             <div className='flex flex-col'>
              <label htmlFor="password" className='text-sm font-normal mb-2 cursor-pointer'>Password</label>
                       
            <div className="relative flex items-center border border-[#E4E7E9] w-full h-[44px] bg-white rounded-sm mt-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder='8+ characters'
                className="outline-none border-none flex-1 text-sm font-normal px-3"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3"
              >
                {showPassword ? <BsEye /> : <BsEyeSlash /> }
              </button>
            </div>
            </div>
        
            {/* Confirm password */}
            <div className='flex flex-col mt-6'>
            <label htmlFor="password" className='text-sm font-normal mb-2 cursor-pointer'>Confirm Password</label>
                        
            <div className="relative flex items-center border border-[#E4E7E9] w-full h-[44px] bg-white rounded-sm mt-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="outline-none border-none flex-1 text-sm font-normal"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3"
              >
                {showPassword ? <BsEye /> : <BsEyeSlash /> }
              </button>
            </div>
            </div>
            
          
            
            <button className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase'><span>Reset Password</span> <FaArrowRight /></button>
            
         
        </form>
    </div>
   </div>
  )
}

export default ResetPassword