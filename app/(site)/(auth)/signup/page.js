"use client";
import { Checkbox } from 'antd';
import ConfigProvider, { ConfigConsumer } from 'antd/es/config-provider';
import Link from 'next/link'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { FaApple, FaArrowRight } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
     const [showPassword, setShowPassword] = useState(false);

     const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return (
    <div className='px-[32px] pb-6'>
         <form >
   <div className=' space-y-3'>
     {/* Email  */}
     <div> 
    <label htmlFor="name" className='text-sm font-normal cursor-pointer'>Name</label>
    <input type="text" id='name' className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#E4E7E9] rounded-sm mt-2'/>
    </div>

     {/* Email  */}
     <div> 
    <label htmlFor="email" className='text-sm font-normal cursor-pointer'>Email Address</label>
    <input type="email" id='email' className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#E4E7E9] rounded-sm mt-2'/>
    </div>

    {/* Password */}
     <div className='flex flex-col'>
      <label htmlFor="password" className='text-sm font-normal mb-2 cursor-pointer'>Password</label>
               
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

    {/* Confirm password */}
    <div className='flex flex-col'>
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

    {/* ch */}
    <div className='flex flex-row items-start gap-2'>
   
<Checkbox onChange={onChange}></Checkbox>

        <span className=' text-sm font-normal '>Are you agree to Clicon <span className='text-[#2DA5F3]'><Link href={'#'} >Terms of Condition</Link></span> and <span className='text-[#2DA5F3]'><Link href={'#'} >Privacy Policy</Link></span>.
        </span>
    </div>
   </div>

            <Link href={"/"} className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase mt-5'><span className='text-white'>Sign in</span> <FaArrowRight className='text-white'/></Link>
            
            <div className=' relative flex items-center justify-center text-sm font-normal text-[#77878F] border border-[#77878F] mt-6 mb-3'>
              <p className=' absolute -top-3 bg-white px-2'>Or</p>
            </div>

            
            <button className='text-sm font-bold  border border-[#E4E7E9] rounded-[2px] w-full  h-[44px] flex flex-row items-center justify-stretch px-4 mb-3'><FcGoogle className='text-xl'/><span className='text-[#475156]'>Login with Google</span></button>
            
            <button className='text-sm font-bold  border border-[#E4E7E9] rounded-[2px] w-full  h-[44px] flex flex-row items-center justify-stretch px-4'><FaApple className='text-xl'/><span className='text-[#475156]'>Login with Apple</span></button>
        </form>
    </div>
  )
}

export default SignUp