"use client";
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ForgetPassword = () => {
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
        <span className='text-[#2DA5F3]'>Forget Password</span> 
        </div>
        </div>

     <div className='w-full flex flex-col justify-center items-center my-[100px] select-none rounded-sm'>
         <form className='w-[400px] sm:w-[424px] border p-[32px]'>
            <h1 className='text-xl font-semibold text-center mb-3'>Forget Password</h1>
            <p className='text-sm font-normal text-center mb-6  text-[#5F6C72]'>Enter the email address or mobile phone number associated with your Clicon account.</p>
           
                <label htmlFor="password" className='text-sm font-normal  cursor-pointer mb-2'>Email Address</label>
            <input type="email" id='email' className='w-full  h-[44px] outline-none text-sm font-normal bg-white border border-[#E4E7E9] rounded-[2px] px-3 mb-6'/>

            
          
            
            <Link href={'/resetpassword'} className='flex flex-row items-center justify-center gap-2 text-sm font-bold bg-[#FA8232] text-white rounded-[2px] w-full h-[44px] uppercase'><span>Send Code</span> <FaArrowRight /></Link>
            
           <div>
            <div className='flex flex-row items-center gap-[6px] mt-6 mb-2'>
                <span className='text-sm font-normal text-[#5F6C72]'>Already have account?</span>
                <span className='text-sm font-medium text-[#2DA5F3]'>
                    <Link href={'/loginsignup'}>Sign In</Link>
                </span>
            </div>
            <div className='flex flex-row items-center gap-[6px] mb-6'>
                <span className='text-sm font-normal text-[#5F6C72]'>Don’t have account?</span>
                <span className='text-sm font-medium text-[#2DA5F3]'>
                    <Link href={'/loginsignup'}>Sign Up</Link>
                </span>
            </div>

            <hr className='border border-[#E4E7E9]'/>

            <p className='text-sm font-medium text-[#000000] mt-6'>You may contact <span className='text-[#FA8232]'>Customer Service</span> for help restoring access to your account.</p>
           </div>
        </form>
    </div>
   </div>
  )
}

export default ForgetPassword