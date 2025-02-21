"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaApple, FaArrowRight } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation'; // Import useRouter

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123456") {
      setRememberMe(true);
      console.log("Login successful!");
      router.push("/dashboard"); 
    } else {
      setRememberMe(false);
      console.log("Login failed!");
    }
  };

  return (
    <div className='px-[32px] py-6'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='text-sm font-normal cursor-pointer'>Email Address</label>
        <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#FA8232] rounded-[2px] px-3 mb-4' />

        <div className='flex flex-col'>
          <div className='flex flex-row justify-between items-center mb-2'>
            <label htmlFor="password" className='text-sm font-normal  cursor-pointer'>Password</label>
            <div className='text-sm font-medium cursor-pointer text-[#FA8232]'>
              <Link href={"/forgetpassword"} >Forget Password</Link>
            </div>
          </div>
          <div className="relative flex items-center border border-[#FA8232] rounded-[2px] w-full h-[44px] bg-white px-3">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-none flex-1 text-sm font-normal"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3"
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
        </div>

        <button type='submit' className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase mt-5'>
          <span className='text-white'>Sign in</span> <FaArrowRight className='text-white' />
        </button>

        <div className='relative flex items-center justify-center text-sm font-normal text-[#77878F] border border-[#77878F] mt-6 mb-3'>
          <p className='absolute -top-4 bg-[#FAF3E0] rounded-full px-2 py-1'>Or</p>
        </div>

        <button className='text-sm font-bold border border-[#E4E7E9] rounded-[2px] w-full h-[44px] flex flex-row items-center justify-stretch px-4 mb-3'>
          <FcGoogle className='text-xl' /><span className='text-[#475156]'>Login with Google</span>
        </button>

        <button className='text-sm font-bold border border-[#E4E7E9] rounded-[2px] w-full h-[44px] flex flex-row items-center justify-stretch px-4'>
          <FaApple className='text-xl' /><span className='text-[#475156]'>Login with Apple</span>
        </button>
      </form>
    </div>
  );
};

export default SignIn;
