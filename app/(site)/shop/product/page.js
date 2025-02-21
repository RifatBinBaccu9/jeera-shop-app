"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaRegEye } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { TbShoppingCart } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { product as allProducts } from '../../home/Products';
import { IoSearch } from 'react-icons/io5';


const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    let updatedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === "Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "High to Low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [searchQuery, sortOption]);

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
    <div className='container mb-[120px] mt-[80px]'>
      {/* Search and Sort Section */}
      <div className='flex flex-row justify-between gap-3'>
        <div className='px-4 py-3 flex items-center border border-[#FA8232] rounded-md bg-[#FAF3E0]'>
          <input
            type="text"
            placeholder='Search...'
            className='outline-none bg-[#FAF3E0] w-full md:w-[400px] '
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch />
        </div>

        <div className='flex flex-row items-center gap-5'>
          <h1 className='text-base font-medium hidden sm:block'>Sort by:</h1>
       
            <select
  className="px-1 sm:px-4 py-3 border border-[#FA8232] bg-[#F5E1C8] rounded-md outline-none"
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
>
  <option 
    value="All Products"
    className="bg-[#F5E1C8] text-[#7A3E2C] hover:bg-[#F1A7A0] focus:bg-[#F7D6B5] rounded-md"
  >
    All Products
  </option>
  <option 
    value="Low to High"
    className="bg-[#F5E1C8] text-[#7A3E2C] hover:bg-[#F1A7A0] focus:bg-[#F7D6B5] rounded-md"
  >
    Low to High
  </option>
  <option 
    value="High to Low"
    className="bg-[#F5E1C8] text-[#7A3E2C] hover:bg-[#F1A7A0] focus:bg-[#F7D6B5] rounded-md"
  >
    High to Low
  </option>
</select>



        </div>
      </div>

      {/* Product Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
           {
            filteredProducts.map((product) => (
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
         <div>
         <Link href={'/shop/product'} className='sm:hidden flex flex-row items-center justify-center gap-2 text-base font-bold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-full px-5 py-2 '><span>All Product</span><FaArrowRight /></Link>
         </div>
        </div>
    </div>
  );
};

export default Product;
