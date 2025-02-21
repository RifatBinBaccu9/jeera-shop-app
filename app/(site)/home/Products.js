"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaRegEye } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { TbShoppingCart } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';

export const product = [
  {
    "id": 1,
    "name": "এপ্রিকট (Apricot) – 1KG",
    "price": 120,
    "oldPrice": 1999,
    "discount": "21% OFF",
    "rating": 4.7,
    "feedback": "21,671 User feedback",
    "sku": "A264671",
    "availability": "In Stock",
    "brand": "Apple",
    "category": "Fruits",
    "description": "এক গ্লাস পানিতে দুই চামচ সিড মিক্স, একটু মধু ও একটু পিঙ্ক সল্ট মিশিয়ে সহজেই সরবত বানিয়ে খেতে পারেন।",
    "image": "/Apricot1.jfif",
    "image2": "/Apricot2.jfif",
  },
  {
    "id": 2,
    "name": "কালোজিরা (Black Cumin) – 1KG",
    "price": 500,
    "oldPrice": 750,
    "discount": "15% OFF",
    "rating": 4.8,
    "feedback": "12,534 User feedback",
    "sku": "B265432",
    "availability": "In Stock",
    "brand": "Organic Farms",
    "category": "Spices & Herbs",
    "description": "বিশুদ্ধ কালোজিরা, যা স্বাস্থ্যের জন্য অত্যন্ত উপকারী।",
    "image": "/BlackCumin1.jfif",
    "image2": "/BlackCumin2.jfif"
  },
  {
    "id": 3,
    "name": "ধনিয়া (Coriander) – 1KG",
    "price": 320,
    "oldPrice": 450,
    "discount": "10% OFF",
    "rating": 4.5,
    "feedback": "8,927 User feedback",
    "sku": "C298743",
    "availability": "In Stock",
    "brand": "Herbal Spice",
    "category": "Spices & Herbs",
    "description": "তাজা ও সুগন্ধিযুক্ত ধনিয়া, যা খাবারের স্বাদ ও গন্ধ বাড়ায়।",
    "image": "/Coriander1.jfif",
    "image2": "/Coriander2.jfif"
  },
  {
    "id": 4,
    "name": "মেথি (Fenugreek) – 1KG",
    "price": 280,
    "oldPrice": 380,
    "discount": "8% OFF",
    "rating": 4.6,
    "feedback": "6,823 User feedback",
    "sku": "F295761",
    "availability": "In Stock",
    "brand": "Organic Spice",
    "category": "Spices & Herbs",
    "description": "খাঁটি মেথি, যা হজমের জন্য উপকারী।",
    "image": "/Fenugreek1.jfif",
    "image2": "/Fenugreek2.jfif"
  },
  {
    "id": 5,
    "name": "গোল মরিচ (Black Pepper) – 500GM",
    "price": 650,
    "oldPrice": 850,
    "discount": "12% OFF",
    "rating": 4.9,
    "feedback": "15,238 User feedback",
    "sku": "P264573",
    "availability": "In Stock",
    "brand": "Pure Spices",
    "category": "Spices & Herbs",
    "description": "উচ্চমানের গোল মরিচ, যা মশলা হিসেবে ব্যবহৃত হয়।",
    "image": "/BlackPepper1.jfif",
    "image2": "/BlackPepper2.jfif"
  },
  {
    "id": 6,
    "name": "এলাচ (Cardamom) – 250GM",
    "price": 900,
    "oldPrice": 1200,
    "discount": "18% OFF",
    "rating": 4.7,
    "feedback": "9,532 User feedback",
    "sku": "E264892",
    "availability": "In Stock",
    "brand": "Premium Spices",
    "category": "Spices & Herbs",
    "description": "সুগন্ধি এলাচ, যা রান্নায় অতুলনীয় স্বাদ যোগ করে।",
    "image": "/Cardamom1.jfif",
    "image2": "/Cardamom2.jfif"
  },
  {
    "id": 7,
    "name": "লবঙ্গ (Cloves) – 250GM",
    "price": 550,
    "oldPrice": 750,
    "discount": "15% OFF",
    "rating": 4.8,
    "feedback": "7,412 User feedback",
    "sku": "L287912",
    "availability": "In Stock",
    "brand": "Herbal Essence",
    "category": "Spices & Herbs",
    "description": "খাঁটি লবঙ্গ, যা রান্না ও স্বাস্থ্য উপকারিতার জন্য বিখ্যাত।",
    "image": "/Cloves1.jfif",
    "image2": "/Cloves2.jfif"
  },
  {
    "id": 8,
    "name": "দারুচিনি (Cinnamon) – 500GM",
    "price": 400,
    "oldPrice": 600,
    "discount": "10% OFF",
    "rating": 4.6,
    "feedback": "11,895 User feedback",
    "sku": "D278346",
    "availability": "In Stock",
    "brand": "Organic Spice",
    "category": "Spices & Herbs",
    "description": "সুগন্ধি দারুচিনি, যা রান্নায় ব্যবহৃত হয়।",
    "image": "/Cinnamon1.jfif",
    "image2": "/Cinnamon2.jfif"
  },
  {
    "id": 9,
    "name": "মধু (Honey) – 1KG",
    "price": 750,
    "oldPrice": 950,
    "discount": "10% OFF",
    "rating": 4.9,
    "feedback": "25,342 User feedback",
    "sku": "H298734",
    "availability": "In Stock",
    "brand": "Natural Honey",
    "category": "Organic Products",
    "description": "খাঁটি মধু, যা স্বাস্থ্যের জন্য উপকারী।",
    "image": "/honey.jfif",
    "image2": "/honey2.jfif"
  },
  {
    "id": 10,
    "name": "বিস্কুট (Biscuits) – 500GM",
    "price": 200,
    "oldPrice": 250,
    "discount": "5% OFF",
    "rating": 4.3,
    "feedback": "5,342 User feedback",
    "sku": "B334765",
    "availability": "In Stock",
    "brand": "Fresh Bites",
    "category": "Snacks",
    "description": "স্বাস্থ্যকর ও মজাদার বিস্কুট।",
    "image": "/biscuits.jfif",
    "image2": "/biscuits2.jfif"
  },
  {
    "id": 11,
    "name": "বাদাম (Almonds) – 1KG",
    "price": 1200,
    "oldPrice": 1500,
    "discount": "20% OFF",
    "rating": 4.8,
    "feedback": "9,872 User feedback",
    "sku": "A332765",
    "availability": "In Stock",
    "brand": "Nutri Nuts",
    "category": "Dry Fruits",
    "description": "সুস্বাদু ও স্বাস্থ্যকর বাদাম।",
    "image": "/almonds.jfif",
    "image2": "/almonds2.jfif"
  },
  {
    "id": 12,
    "name": "পেস্তা (Pistachios) – 500GM",
    "price": 1600,
    "oldPrice": 1900,
    "discount": "15% OFF",
    "rating": 4.7,
    "feedback": "8,452 User feedback",
    "sku": "P392874",
    "availability": "In Stock",
    "brand": "Nutri Nuts",
    "category": "Dry Fruits",
    "description": "পেস্তা বাদাম, যা স্বাস্থ্য উপকারী ও পুষ্টিকর।",
    "image": "/pistachios.jfif",
    "image2": "/pistachios2.jfif"
  }
]

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
        <div className=' flex flex-row justify-between items-center'>
        <h1 className='text-4xl font-bold font-poppins text-center'>Featured Products</h1>
        <Link href={'/shop/product'} className='hidden sm:flex flex-row items-center justify-center gap-2 text-base font-bold border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-full px-5 py-2 '><span>All Product</span><FaArrowRight /></Link>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
           {
            product.slice(0,8).map((product) => (
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
  )
}

export default Product