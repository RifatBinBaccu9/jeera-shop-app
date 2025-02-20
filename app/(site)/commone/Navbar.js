"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct Hook for App Router
import { LuFacebook, LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
import { Drawer } from "antd";

// link
const linkNav = [
  { id: 1, href: "/", name: "Home" },
  { id: 2, href: "/about", name: "About" },
  { id: 3, href: "/shop/product", name: "Shop" },
  { id: 4, href: "/blog/bloglist", name: "Blog" },
  { id: 5, href: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const pathname = usePathname();

  // Drawer
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div>
      <div className="bg-[#F5E1C8] h-8 sm:h-[40px] lg:h-14">
        <div className="flex flex-row justify-between items-center px-10 text-[#222222] container">
          <div className="flex flex-row items-center text-sm sm:text-base lg:text-lg font-normal font-poppins gap-2 sm:gap-3 lg:gap-4">
            <h1>0176869221</h1>
            <div className="border h-8 sm:h-10 lg:h-14 w-[1px]"></div>
            <h1>rifat@gmail.com</h1>
          </div>

          <div className="flex flex-row items-center gap-3 sm:gap-5 lg:gap-6 text-sm sm:text-base lg:text-xl">
            <Link
              href={"/"}
              className="hover:text-[#D35400] hover:bg-[#242424] border bg-white p-1 sm:p-[6px] lg:p-2 rounded-full"
            >
              <LuFacebook />
            </Link>
            <Link
              href={"/"}
              className="hover:text-[#D35400] hover:bg-[#242424] border bg-white p-1 sm:p-[6px] lg:p-2 rounded-full"
            >
              <FaWhatsapp />
            </Link>
            <div className="hover:text-[#D35400] hover:bg-[#242424] border bg-white p-1 sm:p-[6px] lg:p-2 rounded-full">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>

      <div className="container z-50 h-[50px] sm:h-[70px] lg:h-[100px] flex flex-row justify-between items-center">
        {/* Logo section */}
        <div className="flex flex-row items-center">
          <Image
            src={"/logo2.png"}
            alt="logo"
            width={50}
            height={50}
            className="w-[45px] sm:w-[70px] lg:w-[90px] h-[45px] sm:h-[70px] lg:h-[90px]"
          />
          <h1 className="text-xl sm:text-3xl text-[40px] font-bold font-poppins text-[#222222]">
            ZiranGo
          </h1>
        </div>

        {/* Link section */}
        <div className="hidden lg:flex flex-row items-center gap-9">
          {linkNav.map((links) => (
            <Link
              key={links.id}
              href={links.href}
              className={`text-lg font-medium font-poppins ${
                pathname === links.href
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-[#222222] hover:text-red-600 "
              }`}
            >
              {links.name}
            </Link>
          ))}
        </div>

        {/* Login & Buy section */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-5">
          <Link href={"/"}>
            <IoMdHeartEmpty className="text-base sm:text-2xl lg:text-3xl text-[#222222] hover:text-[#D35400]" />
          </Link>
          <Link href={"/"}>
            <HiOutlineShoppingBag className="text-base sm:text-2xl lg:text-3xl text-[#222222] hover:text-[#D35400]" />
          </Link>
          <Link href={"/auths"}>
            <LuUserRound className="text-base sm:text-2xl lg:text-3xl text-[#222222] hover:text-[#D35400]" />
          </Link>
          <div onClick={showDrawer} className="lg:hidden">
            <CgMenuRightAlt className="text-base sm:text-2xl lg:text-3xl text-[#222222] hover:text-[#D35400]" />
          </div>
        </div>

        {/* Drawer & Menu section */}
        <Drawer
          placement="left"
          onClose={onClose}
          open={open}
          width={200}
          className="menu !w-[200px] sm:!w-[250px] !bg-[#F5E1C8]"
        >
          <div className="flex flex-row items-center">
            <Image
              src={"/logo2.png"}
              alt="logo"
              width={50}
              height={50}
              className="w-[30px] sm:w-[50px] lg:w-[80px] h-[30px] sm:h-[50px] lg:h-[80px]"
            />
            <h1 className="text-xl sm:text-3xl text-[40px] font-bold font-poppins text-[#222222]">
              ZiranGo
            </h1>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-3 my-6">
            {linkNav.map((links) => (
              <Link key={links.id} href={links.href}>
                <div
                  className={`text-sm sm:text-base md:text-lg font-medium font-poppins rounded-sm text-[#222222] hover:text-[#D35400] p-1 ${
                    pathname === links.href
                      ? "text-red-600 border-b-2 border-red-600"
                      : "hover:bg-[#a8a8a8] rounded-md py-1 px-3"
                  }`}
                >
                  {links.name}
                </div>
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
