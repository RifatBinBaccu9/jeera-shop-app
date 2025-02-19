"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosRemove } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ConfigProvider, Menu, Rate, Tabs } from "antd";
import { FaAward, FaBangladeshiTakaSign, FaHandshakeSimple, FaRegHeart, FaTencentWeibo, FaTwitter } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { BsCopy } from "react-icons/bs";
import { MdFacebook, MdKeyboardArrowRight, MdOutlineShoppingCart, MdPayment } from "react-icons/md";
import { IoAddOutline, IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { TbShoppingCart, TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useParams } from "next/navigation";
import Product, { product } from "../../product/page";
import { useContext, useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { UserContext } from "../../../context/UserContext";

const categories = [
    {id : 1, image: "/jeera.jfif"},
    {id : 2, image: "/jeera.jfif"},
    {id : 3, image: "/jeera.jfif"},
    {id : 4, image: "/jeera.jfif"},
    {id : 5, image: "/jeera.jfif"},
    {id : 6, image: "/jeera.jfif"},
  ];


const Productdetails = () => {
    const {id} = useParams();

    const products = product.find(product => product.id == id);
    const { price } = products;
    const [selectedImage, setSelectedImage]= useState("/jeera.jfif");

    const productfilter = product.filter(product => product.id !== id);


    const [updatePrice, setUpdatePrice] = useState(products?.price ?? 0);
    const [productCount, setProductCount] = useState(1);
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true); 
  
      const storedPrice = localStorage.getItem("updatePrice");
      const storedCount = localStorage.getItem("productCount");
  
      if (storedPrice) setUpdatePrice(Number(storedPrice));
      if (storedCount) setProductCount(Number(storedCount));
    }, []);
  
    useEffect(() => {
      if (isClient) {
        localStorage.setItem("updatePrice", updatePrice);
        localStorage.setItem("productCount", productCount);
      }
    }, [updatePrice, productCount, isClient]);
  
    const handlePriceIncrement = () => {
      setUpdatePrice((prevPrice) => prevPrice + (products?.price ?? 0));
      setProductCount((prevCount) => prevCount + 1);
    };
  
    const handlePriceDecrement = () => {
      setUpdatePrice((prevPrice) => (prevPrice - (products?.price ?? 0) > 0 ? prevPrice - (products?.price ?? 0) : prevPrice));
      setProductCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    };
  return (
    <div>
    <div className=' bg-[#f4ebd9] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <span>Shop</span>
        </Link>
        <MdKeyboardArrowRight />
        <span className='text-[#E67E22]'>{products.name}</span> 
        </div> 
        </div> 

        <div className=" grid grid-cols-2 gap-[60px] container my-[60px]">
         <div className="  mb-10 lg:mb-0 ">
            <div className="border border-[#E67E22] p-6 rounded-lg">
            <Image src={selectedImage} alt='laptop' width={800} height={800} className="w-full h-[200px] sm:h-[450px] "/>
            </div>
            <section className="mt-6 relative ">
  <div className="px-5">
  <Swiper
    slidesPerView={6}
    loop={true}
    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    modules={[Navigation]}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 5, spaceBetween: 10 },
      1024: { slidesPerView: 5, spaceBetween: 10 },
      1280: { slidesPerView: 5, spaceBetween: 10 },
    }}
  >
    {categories.map((category, index) => (
      <SwiperSlide key={index} className="!lg:w-[96px] !lg:h-[96px]">
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => setSelectedImage(category.image)}>
          <div className="w-full h-full rounded-md border border-[#E67E22] p-2">
            <Image
              src={category.image}
              width={900}
              height={900}
              alt={'image'}
              className="w-full h-full"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>

  {/* Custom Navigation Buttons */}
  <div className="">
    {/* Previous Button */}
    <button className="z-50 hidden sm:flex absolute top-1/2 transform -translate-y-1/2  left-0 custom-prev items-center justify-center w-10 h-10 bg-[#E67E22] text-white rounded-full shadow-lg hover:bg-[#d35400] transition-all duration-300">
      <IoIosArrowRoundBack className="text-4xl" />
    </button>

    {/* Next Button */}
    <button className="z-50  hidden sm:flex absolute top-1/2  transform -translate-y-1/2  right-0 custom-next items-center justify-center w-10 h-10 bg-[#E67E22] text-white rounded-full shadow-lg hover:bg-[#d35400] transition-all duration-300">
      <IoIosArrowRoundForward className="text-4xl" />
    </button>
  </div>
</section>

         </div>

         <div className=" ">
          <h1 className="text-3xl text-center sm:text-start   font-medium mt-5 sm:mt-2 mb-6">{products.name}</h1>
          <div className="flex flex-col sm:flex-row items-center gap-[6px]">
            <div className="flex flex-row gap-2 items-center">
            <div className=""><Rate disabled defaultValue={4} /></div>
            <div className="text-sm font-semibold">4.7 Star Rating</div>
            </div>
            <div className="text-sm font-normal">(21,671 User feedback)</div>
          </div>

          <div className="sm:gap-3 gap-0 mt-4">
            <div className="grid grid-cols-2 justify-between items-center">
               <span><span className="text-sm font-normal text-[#5F6C72]">Sku:</span> <span  className="text-sm font-medium text-black">A264671</span></span>
               <span><span className="text-sm font-normal text-[#5F6C72]">Availability:</span > <span className="text-sm font-medium text-black">In Stock</span></span>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
            <span><span className="text-sm font-normal text-[#5F6C72]">Brand:</span> <span  className="text-sm font-medium text-black">Apple</span></span>
            <span><span className="text-sm font-normal text-[#5F6C72]">Category:</span> <span  className="text-sm font-medium text-black">Electronics Devices</span></span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center sm:justify-start py-6">
            <div className="flex flex-row items-center">
             <span className="text-2xl font-semibold text-[#E67E22]">${price}.00</span>
             <span className="text-lg font-normal text-[#5F6C72] line-through ml-1">$1999.00</span>
            </div>
            <div>
                <h3 className="text-sm font-semibold px-[10px] py-[5px] bg-[#EFD33D] text-black rounded-sm ml-3">21% OFF</h3>
            </div>
          </div>
          
          <h1 className="text-lg font-normal font-poppins mb-5">এক গ্লাস পানিতে দুই চামচ সিড মিক্স, একটু মধু ও একটু পিঙ্ক সল্ট মিশিয়ে সহজেই সরবত বা জুস বানিয়ে খেতে পারেন সিড মিক্স কম্বো। এটি আপনাকে সহজেই হাইড্রেটেড রাখবে এবং তৃষ্ণা বা পানিশূন্যতা মেটাতে সহায়তা করবে।</h1>
          <hr className="border "/>

          

          <div className="sm:grid grid-cols-2 items-center gap-4 justify-between pt-6 select-none space-y-6 sm:space-y-0">
            <div className=" w-full border-[2px] border-[#E67E22] rounded-sm h-[56px] px-5 flex flex-row justify-between items-center">
            <IoIosRemove className="text-xl text-black cursor-pointer" onClick={ handlePriceDecrement }/>
            <span className="text-lg font-medium font-poppins">{productCount}</span>
            <IoAddOutline className="text-xl  cursor-pointer" onClick={ handlePriceIncrement}/>
            </div>

            <div className=" h-[56px] w-full">
              <Link href={`/shop/productdetail/order/${id}`} className="flex flex-row items-center justify-center rounded-sm text-xl text-white gap-3 font-normal h-full w-full  bg-[#FA8232]"><span>Buy Now</span><MdOutlineShoppingCart /></Link>
            </div>
          </div>

           <div className="flex flex-col sm:flex-row justify-between items-center py-6">
            <div className="flex flex-row items-center gap-6 pb-4 sm:pb-0">
                <div className="flex flex-row items-center text-sm font-normal gap-[6px]">
                    <FaRegHeart />
                    <span>Add to Wishlist</span>
                </div>
                <div className="flex flex-row items-center text-sm font-normal gap-[6px]">
                <TfiReload />
                <span>Add to Compare</span>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <p className="text-sm font-normal">Share product:</p>
                <div className="flex flex-row items-center text-sm font-normal gap-3">
                <BsCopy />
                <MdFacebook />
                <FaTwitter />
                <FaTencentWeibo />
                </div>
            </div>
           </div>

           <div className="p-5  border border-[#E67E22] rounded-sm">
            <h1 className="text-sm font-normal mb-3">100% Guarantee Safe Checkout</h1>
            <div className="flex flex-row items-center justify-between">
            <Image src={'/cashon-removebg-preview.png'} alt="image" width={100} height={100} />
            <Image src={'/bkash-removebg-preview.png'} alt="image" width={100} height={100} />
            <Image src={'/nagad-removebg-preview.png'} alt="image" width={100} height={100} />
            <Image src={'/rokat-removebg-preview.png'} alt="image" width={100} height={100} />
            </div>
           </div>
         </div>
        </div>

        <div className="container py-[100px]">
      <div className="relative flex justify-center items-center select-none pagedtprodrer  border border-[#E67E22] rounded-sm bg-[#F5E1C8] shadow-lg p-6">
        <div className="flex flex-row items-center justify-center w-full">
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemActiveColor: "#000000",
                  inkBarColor: "#FA8232",
                },
              },
            }}
          >
            <Tabs
              defaultActiveKey="1"
              className="w-full"
              items={[
                {
                  label: <span className="text-lg font-medium">Description</span>,
                  key: "1",
                  children: (
                    <div className="w-full p-4">
                      <h2 className="text-2xl font-bold text-orange-600 mb-4">{products.name}</h2>
                      <div className="grid gap-6 md:grid-cols-4">
                        {/* Description Section */}
                        <div className="col-span-2">
                          <h3 className="text-xl font-semibold text-orange-600 mb-4">Description</h3>
                          <p className="text-gray-700 leading-relaxed">
                            The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.
                          </p>
                          <p className="text-gray-700 mt-4">
                            Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, and a 16-core Neural Engine.
                          </p>
                        </div>

                        {/* Features Section */}
                        <div className="col-span-1">
                          <h3 className="text-xl font-semibold text-orange-600 mb-4">Features</h3>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2"><FaAward className="text-orange-600" /> Free 1 Year Warranty</li>
                            <li className="flex items-center gap-2"><TbTruckDelivery className="text-orange-600" /> Free & Fast Delivery</li>
                            <li className="flex items-center gap-2"><FaHandshakeSimple className="text-orange-600" /> Money-back Guarantee</li>
                            <li className="flex items-center gap-2"><RiCustomerService2Fill className="text-orange-600" /> 24/7 Support</li>
                            <li className="flex items-center gap-2"><MdPayment className="text-orange-600" /> Secure Payment</li>
                          </ul>
                        </div>

                        {/* Shipping Information Section */}
                        <div className="col-span-1">
                          <h3 className="text-xl font-semibold text-orange-600 mb-4">Shipping Information</h3>
                          <ul className="space-y-3 text-gray-700">
                            <li>Courier: 2-4 days, free shipping</li>
                            <li>Local Shipping: up to one week, $19.00</li>
                            <li>UPS Ground Shipping: 4-6 days, $29.00</li>
                            <li>Global Export: 3-4 days, $39.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: <span className="text-lg font-medium">Additional Information</span>,
                  key: "2",
                  children: <p className="p-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>,
                },
                {
                  label: <span className="text-lg font-medium">Review</span>,
                  key: "4",
                  children: <p className="p-4 text-gray-700">Customer reviews go here.</p>,
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>

         <div>
        
                <div className='container my-[72px]'>
                   
                   <h1 className='text-2xl font-semibold mb-4'>Related Products</h1>
                   <div className='grid grid-cols-4 gap-6 mt-8'>
           {
            productfilter.slice(0,4).map((product) => (
                <div key={product.id} className='border border-[#E67E22] bg-[#F5E1C8] rounded-lg p-5 relative '>
                <div className='group'>
                <Link href={`/productdetail/${product.id}`}>
                <Image src={product.image} alt='jeera' width={100} height={100} className='w-full h-[300px]'/>
                </Link>
                <div className='hidden group-hover:block transition-all delay-700 duration-1000 absolute top-0 right-0 inset-x-0 p-5 z-10'>
                <Link href={`/productdetail/${product.id}`}>
                <Image src={product.image2} alt='jeera' width={100} height={100} className='w-full h-[300px]'/>
                </Link>
                </div>
                <div className=' z-50 group-hover:flex flex-col gap-2 hidden  transition-all delay-700 duration-1000 absolute top-5 right-5  p-6 '>
                <div className='bg-white text-black p-2 rounded-full cursor-pointer hover:bg-[#E67E22] hover:text-[#fff]'><TfiReload className='text-xl '/></div>
                <div className='bg-white text-black p-2 rounded-full cursor-pointer hover:bg-[#E67E22] hover:text-[#fff]'><FiHeart className='text-xl '/></div>
                <div className='bg-white text-black p-2 rounded-full cursor-pointer hover:bg-[#E67E22] hover:text-[#fff]'> <FaRegEye className='text-xl '/></div>
                </div>
                </div>
                <div className='mt-6'>
                 <Link href={`/productdetail/${product.id}`} className='text-xl font-semibold font-poppins text-[#222222] hover:text-[#D35400]'>{product.name}</Link>
                 <p className='text-lg font-bold text-[#E67E22] flex flex-row items-center gap-1 my-3'><span>{product.price}</span><FaBangladeshiTakaSign className='text-base'/></p>
 
                 <Link href={`/productdetail/${product.id}`} className='flex flex-row items-center justify-center inset-x-0 bg-[#E67E22] hover:bg-[#D35400] p-3 rounded-md text-black hover:text-[#fff] gap-1'><span className='text-base font-semibold font-poppins '>BUY NOW</span><TbShoppingCart className='text-xl font-bold'/></Link>

                </div>

             </div>
            ))
           }
          
        </div>
                   
                </div>
              </div>
    </div>
  )
}

export default Productdetails