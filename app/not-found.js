import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "./(site)/commone/Navbar";
import Footer from "./(site)/commone/Footer";

export default function NotFound(){
  return (
    <div>
      <Navbar />
      <div className="container flex flex-col justify-center items-center mt-2 mb-[124px] ">
      <Image src={"/notFound.png"} alt="notFound" width={500} height={500} />
      <h1 className="text-[36px] font-semibold ">404, Page not founds</h1>
      <p className="text-base font-normal text-[#475156] my-6 w-full sm:w-[536px] text-center">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>

      <div className="flex flex-row items-center gap-4">
        <Link href={"/"} className="flex flex-row items-center text-[#fff] bg-[#FA8232] rounded-sm gap-2 text-sm font-bold h-[48px] px-6 w-[141px] "><FaArrowLeftLong />Go Back</Link>
        <Link href={"/"} className="flex flex-row items-center text-[#FA8232] bg-[#fff] rounded-sm gap-2 text-sm font-bold h-[48px] px-6 w-[168px] border border-[#FFE7D6]"><IoHomeOutline />Go To home</Link>
      </div>
      </div>
      <Footer />
    </div>
  )
}