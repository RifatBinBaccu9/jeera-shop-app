import Link from "next/link"
import { LuFacebook, LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegHeart, FaWhatsapp } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const linkNav = [
    { id : 1, href : "/", name : "Home" },
    { id : 2, href : "/about", name : "About" },
    { id : 3, href : "/shop/product", name : "Shop" },
    { id : 4, href : "/blog", name : "Blog" },
    { id : 5, href : "/contact", name : "Contact Us" },
]

const Navbar = () => {
  return (
   <div className=" ">
    <div className="  bg-[#F5E1C8] h-14">
      <div className="flex flex-row justify-between items-center px-10 text-[#222222] container">
      <div className=" flex flex-row items-center text-lg font-normal font-poppins gap-4">
            <h1>0176869221</h1>
            <div className=" border h-14 w-[1px]"></div>
            <h1>rifat@gmail.com</h1>
        </div>

        <div className=" flex flex-row items-center gap-6 text-xl">
            <Link href={'/'} className=" hover:text-[#D35400] hover:bg-[#242424] border bg-white p-2 rounded-full"><LuFacebook  /></Link>
            <Link href={'/'} className=" hover:text-[#D35400] hover:bg-[#242424] border bg-white p-2 rounded-full"><FaWhatsapp /></Link>
            <Link href={'/'} className=" hover:text-[#D35400] hover:bg-[#242424] border bg-white p-2 rounded-full"><FaXTwitter /></Link>
        </div>
      </div>
    </div>
            <div className="container z-50  h-[100px] flex flex-row justify-between items-center">
        {/* Logo section */}
        <div className="flex flex-row items-center">
            <Image src={'/logo2.png'} alt="logo" width={50} height={50} className="w-[90px] h-[90px] "/>
            <h1 className="text-[40px] font-bold font-poppins text-[#222222]">ZiranGo</h1>
        </div>

        {/* Link section */}
        <div className="flex flex-row items-center gap-9">
            {
                linkNav.map((links) => (
                    <Link href={links.href} key={links.id} className="text-lg font-medium font-poppins text-[#222222] hover:text-[#D35400]">{links.name}</Link>
                ))
            }
        </div>

        {/* Login & Buy section */}
        <div className="flex flex-row items-center gap-5">
            <Link href={'/'}><IoMdHeartEmpty className="text-3xl text-[#222222] hover:text-[#D35400]"/></Link>
            <Link href={'/'}><HiOutlineShoppingBag className="text-3xl text-[#222222] hover:text-[#D35400]"/></Link>
            <Link href={'/auths'}><LuUserRound className="text-3xl text-[#222222] hover:text-[#D35400]"/></Link>
        </div>
            </div>
    {/* <hr className="border z-50 w-full"/> */}
    
   </div>
  )
}

export default Navbar