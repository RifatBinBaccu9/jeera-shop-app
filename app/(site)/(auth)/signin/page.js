"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { FaApple, FaArrowRight } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
     const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='px-[32px] py-6'>
         <form>

            <label htmlFor="email" className='text-sm font-normal cursor-pointer'>Email Address</label>
            <input type="email" id='email' className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#E4E7E9] rounded-[2px] px-3 mb-4'/>

            <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center mb-2'>
                <label htmlFor="password" className='text-sm font-normal  cursor-pointer'>Password</label>
                <div className='text-sm font-medium cursor-pointer text-[#2DA5F3]'>
                <Link href={"/forgetpassword"} >Forget Password</Link>
                </div>
            </div>
            <div className="relative flex items-center border border-[#E4E7E9] rounded-[2px] w-full h-[44px] bg-white px-3">
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
            <Link href={'/'} className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase mt-5'><span>Sign in</span> <FaArrowRight /></Link>
            
            <div className=' relative flex items-center justify-center text-sm font-normal text-[#77878F] border border-[#77878F] mt-6 mb-3'>
              <p className=' absolute -top-3 bg-white px-2'>Or</p>
            </div>

            
            <button className='text-sm font-bold  border border-[#E4E7E9] rounded-[2px] w-full  h-[44px] flex flex-row items-center justify-stretch px-4 mb-3'><FcGoogle className='text-xl'/><span className='text-[#475156]'>Login with Google</span></button>
            
            <button className='text-sm font-bold  border border-[#E4E7E9] rounded-[2px] w-full  h-[44px] flex flex-row items-center justify-stretch px-4'><FaApple className='text-xl'/><span className='text-[#475156]'>Login with Apple</span></button>
        </form>
    </div>
  )
}

export default SignIn