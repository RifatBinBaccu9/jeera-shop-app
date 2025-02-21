"use client";
import Image from "next/image"
import { MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaInstagram, FaTwitter, FaFacebookF} from "react-icons/fa";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const Footer = () => {
  const [isEmailSun, setEmailSub] = useState("")
  const handelChange = (e) =>{
  e.preventDefault();
  console.log(isEmailSun);
  
  }
  return (
    <footer className="bg-[#FAF3E0] text-[#222222] ">
      <hr className=""/>
      <div className="container pt-[50px]">
     
     <div className="lg:flex justify-between font-jost w-full lg:gap-[100px] ">
      <div className="">
         <div className="flex flex-row items-center justify-center sm:justify-start mb-6">
                    <Image src={'/logo2.png'} alt="logo" width={50} height={50} className="w-[45px] sm:w-[70px] lg:w-[90px] h-[45px] sm:h-[70px] lg:h-[90px] "/>
                    <h1 className="text-xl sm:text-3xl text-[40px] font-bold font-poppins text-[#222222]">ZiranGo</h1>
                </div>

         <div className="sm:flex lg:flex-col sm:flex-row lg:justify-start justify-between lg:space-y-5 lg:mb-0 mb-8  lg:space-x-0 sm:space-x-5 sm:space-y-0 space-y-3">
          <p className="flex gap-2"><MdOutlinePhoneInTalk className=" w-6 h-6"/><span className="text-base font-jost font-normal lg:w-[258px] w-full">(704) 555-0127</span></p>
          <p className="flex gap-2"><MdOutlineMail className=" w-6 h-6"/><span className="text-base font-jost font-normal lg:w-[258px] w-full">krist@example.com</span></p>
          <p className="flex gap-2"><GrLocation className=" w-6 h-6"/><span className="text-base font-jost font-normal lg:w-[258px] w-full">3891 Ranchview Dr. Richardson, 
          California 62639</span></p>
         </div>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-4 sm:justify-between justify-center lg:gap-0 gap-4">
       <div className=" sm:col-span-1 col-span-2">
        <ul className="space-y-4 font-normal">
          <li className="text-base font-bold pb-[4px]">Information</li>
          <li><Link href={'/'}>My Account</Link></li>
          <li><Link href={'/'}>Login</Link></li>
          <li><Link href={'/'}>My Cart</Link></li>
        </ul>
       </div>

       <div className="sm:col-span-1 col-span-2">
       <ul className="space-y-4 font-normal">
          <li className="text-base font-bold pb-[4px]">Product</li>
          <li><Link href={'/'}>About Us</Link></li>
          <li><Link href={'/'}>Delivery Information</Link></li>
          <li><Link href={'/'}>Privacy Policy</Link></li>
          <li><Link href={'/'}>Terms & Conditions</Link></li>
        </ul>
       </div>

      <div className="sm:col-span-1 col-span-4 sm:mt-0 mt-5 ">
        <h1 className="text-base font-bold">Subscribe</h1>
        <p className="py-5 font-normal">Enter your email below to be the first to know
        about new collections and product launches.</p>
       <form onSubmit={handelChange}>
       <label htmlFor="emailSub" className="border border-[#E67E22] bg-[#FAF3E0]  flex items-center select-none py-3 px-4 rounded-lg">
        <HiOutlineMail className="w-6 h-6 cursor-pointer"/>
        <input type="email" onChange={(e)=>setEmailSub(e.target.value)} id="emailSub" placeholder="Your email" className="text-base font-jost font-normal outline-none bg-[#FAF3E0]   border-none w-full  px-[12px]"/>
        <button type="submit"><FaArrowRightLong className="w-5 h-5 cursor-pointer hover:text-[#E67E22]"/></button>
        </label>
       </form>
       </div>
     </div>
      </div>

  
  <hr className="mt-[50px] border "/>
        <div className="sm:container flex sm:flex-row flex-col sm:justify-between justify-center items-center  py-2">
          <div className="">
           <Image src="/cashon.png" alt="visa" width={100} height={100} className="w-full h-full"/>
          </div>

          <div className="flex justify-center sm:pt-0 pt-5">
          <p className="text-base font-normal font-jost">
            &copy; 2023 ZiranGo All Rights are reserved️.
          </p>
        </div>

        <div className="sm:flex md:text-2xl items-center text-lg gap-5 hidden ">
        <FaFacebookF className=" hover:text-[#E67E22]"/>
        <FaInstagram className=" hover:text-[#E67E22]"/>
        <FaTwitter className=" hover:text-[#E67E22]"/>
        </div>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer