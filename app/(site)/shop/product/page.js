"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FaRegEye } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { TbShoppingCart } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { product } from '../../home/Products';



const Product = () => {
  
  const [priceData, setPriceData] = useState(null);
  const [productCount, SetProductCount] = useState(null);

  const handleClick = () => {
    if (priceData) {
      localStorage.removeItem("updatePrice");
    }
    if (productCount) {
      localStorage.removeItem("productCount");
    }
  };

  useEffect(() => {
    if ( window !== "undefined") {
      setPriceData(localStorage.getItem("updatePrice"));
      SetProductCount(localStorage.getItem("productCount"));
    }
  }, []);
  return (
    <div className=' container mb-[120px]'>
        <h1 className='text-4xl font-bold font-poppins text-center'>FEATURED PRODUCTS</h1>
        <div className='grid grid-cols-4 gap-6 mt-8'>
           {
            product.map((product) => (
                <div key={product.id} className='border border-[#E67E22] bg-[#F5E1C8] rounded-lg p-5 relative '>
                <div className='group'>
                <Link href={`/shop/productdetail/${product.id}`} onClick={handleClick} >
                <Image src={product.image} alt='jeera' width={100} height={100} className='w-full h-[300px]'/>
                </Link>
                <div className='hidden group-hover:block transition-all delay-700 duration-1000 absolute top-0 right-0 inset-x-0 p-5 z-10'>
                <Link href={`/shop/productdetail/${product.id}`} onClick={handleClick} >
                <Image src={product.image2} alt='jeera' width={100} height={100} className='w-full h-[300px]'/>
                </Link>
                </div>
                <div className=' z-50 group-hover:flex flex-col gap-2 hidden  transition-all delay-700 duration-1000 absolute top-5 right-5  p-6 '>
                <div className='bg-white text-black p-2 rounded-full cursor-pointer hover:bg-[#E67E22] hover:text-[#fff]'><TfiReload className='text-xl '/></div>
                <div className='bg-white text-black p-2 rounded-full cursor-pointer hover:bg-[#E67E22] hover:text-[#fff]'><FiHeart className='text-xl '/></div>
                <Link href={`/shop/productdetail/${product.id}`} className='bg-white text-black p-2 rounded-full cursor-pointer hover:bg-[#E67E22] hover:text-[#fff]'> <FaRegEye className='text-xl '/></Link>
                </div>
                </div>
                <div className='mt-6'>
                <Tooltip title={product.name}>
                 <Link href={`/shop/productdetail/${product.id}`} onClick={handleClick}  className='text-xl font-semibold font-poppins text-[#222222] hover:text-[#D35400] line-clamp-1'>{product.name}</Link>
                 </Tooltip>
                 <p className='text-lg font-bold text-[#E67E22] flex flex-row items-center gap-1 my-3'><span>{product.price}</span><FaBangladeshiTakaSign className='text-base'/></p>
 
                 <Link href={`/shop/productdetail/${product.id}`} onClick={handleClick} className='flex flex-row items-center justify-center inset-x-0 bg-[#E67E22] hover:bg-[#D35400] p-3 rounded-md text-black hover:text-[#fff] gap-1'><span className='text-base font-semibold font-poppins '>BUY NOW</span><TbShoppingCart className='text-xl font-bold'/></Link>

                </div>

             </div>
            ))
           }
          
        </div>
    </div>
  )
}

export default Product