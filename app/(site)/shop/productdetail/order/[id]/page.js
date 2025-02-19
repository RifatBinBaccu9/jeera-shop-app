"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {  useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { product } from "../../../product/page";
import {  Modal, Result } from "antd";

export default function CheckoutPage() {
  
  // Form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    shipping: "Inside Dhaka",
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    
    if (Object.keys(newErrors).length > 1) {
      setErrors(newErrors);
    } 
  };
 
  // Product
  const {id} = useParams();
  
      const products = product.find(product => product.id == id);
      const {image, name} = products;

  // Modal 
      const [isModalOpen, setIsModalOpen] = useState(false);

  // Local Storage
      const [priceData, setPriceData] = useState(null);
      const [productCount, setProductCount] = useState(null);
      const showModal = () => {
        setIsModalOpen(true);
        
        if(priceData) localStorage.removeItem("updatePrice");
        if(productCount) localStorage.removeItem("productCount");
      };
      
      useEffect(() => {
          if ( window !== "undefined") {
            setPriceData(localStorage.getItem("updatePrice"));
            setProductCount(localStorage.getItem("productCount"));
          }
        }, []);
      const price = parseInt(priceData) || 0;

      // Total Price
          if(formData.shipping === "Inside Dhaka"){
            const totalPricee = price + 50;
            console.log("🚀 ~ CheckoutPage ~ totalPricee:", totalPricee)
            
          }else{
            const totalPrices = price + 80;
            console.log("🚀 ~ CheckoutPage ~ totalPrices:", totalPrices)
            
          }

  return (
    <div className="">
<Modal title="Basic Modal" open={isModalOpen} >
<Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Link href="/" type="primary" key="console">Go Home</Link>,
      <Link href="/shop/product" key="buy">Buy Again</Link>,
    ]}
  />   
      </Modal>

  <div className=' bg-[#f4ebd9] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <Link href={'/shop'} className='flex flex-row items-center gap-2'>
        <span>Shop</span>
        </Link>
        <MdKeyboardArrowRight />
        <Link href={'/productdetail'} className='flex flex-row items-center gap-2'>
        <span>Product Detail</span>
        </Link>
        <MdKeyboardArrowRight />
        <span className='text-[#E67E22]'>Order</span> 
        </div>
        </div>

<div className="max-w-[800px] mx-auto py-[80px]">
      <h2 className="text-xl font-bold mb-4">Billing & Shipping</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type your name..."
            className="w-full p-2 border border-[#E67E22] outline-none rounded"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number *</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Type your phone number"
            className="w-full p-2 border border-[#E67E22]  outline-none rounded"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2">Address *</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Type your address"
            className="w-full p-2 border border-[#E67E22] outline-none rounded"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-2">Order Notes (Optional)</label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full p-2 border border-[#E67E22] outline-none rounded"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="shipping" className="block text-sm font-medium mb-2">Shipping</label>
          <select
            name="shipping"
            id="shipping"
            className="w-full p-2 border border-[#E67E22] outline-none rounded"
            value={formData.shipping}
            onChange={handleChange}
          >
            <option value="Inside Dhaka">Inside Dhaka (50৳)</option>
            <option value="Outside Dhaka">Outside Dhaka (80৳)</option>
          </select>
        </div>
        
        <div className="">
      <h2 className="text-xl font-bold text-center mb-4 mt-10">YOUR ORDER</h2>
      <div className="grid grid-cols-4 justify-between items-center gap-4">
        <div className="w-16 h-16 relative">
          <Image
            src={image}
            alt="Seed Mix Combo"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="col-span-2">
          <p className="text-gray-800 font-medium">
            <span className="font-bangla">{name}</span> 
          </p>
        </div>
        <p className="text-[#E67E22] font-semibold text-lg text-end">{price}৳</p>
      </div>
    </div>

        <div className="pt-4">
          <h3 className="text-lg font-bold">Product</h3>
          <hr className="border my-2"/>
          <p className="flex justify-between mb-1">
            <span>Subtotal:</span> <span>{price}৳</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping:</span> <span>{formData.shipping === "Inside Dhaka" ? "50৳" : "80৳"}</span>
          </p>
          <hr className="border my-2"/>
          <p className="flex justify-between font-bold">
            <span>Total:</span>
            <span>
              {formData.shipping === "Inside Dhaka" ? `${price + 50}৳` : `${price + 80}৳`}
            </span>
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
         <h3 className="text-lg font-semibold">Cash on Delivery</h3>
         <div className="relative bg-gray-200 p-3 mt-2 rounded-lg">
           <div className="absolute top-0 left-4 w-3 h-3 bg-gray-200 rotate-45 transform -translate-y-1/2"></div>
           <p className="text-gray-700">Pay with cash upon delivery.</p>
         </div>
      </div>

      <hr className="border "/>
        <p className="text-sm font-normal font-poppins">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-[#E67E22] font-semibold">Privacy Policy</span>.</p>

     <div className="grid grid-cols-1 items-center gap-5">

     <div>
      {
        formData.name && formData.phone && formData.address ? (
          <button type="submit" onClick={showModal} className="w-full bg-[#E67E22] hover:bg-[#d35400] text-white py-2 rounded-lg">
          PLACE ORDER {formData.shipping === "Inside Dhaka" ? `${price + 50}৳` : `${price + 80}৳`}
        </button>
        ) : (
          <button type="submit" className="w-full bg-[#E67E22] hover:bg-[#d35400] text-white py-2 rounded-lg">
          PLACE ORDER {formData.shipping === "Inside Dhaka" ? `${price + 50}৳` : `${price + 80}৳`}
        </button>
        )
       }
      </div>
      <div>
      <Link href={'/shop/product'} className=" w-full ">
      <h1 className="w-full text-center bg-[#282727] hover:bg-[#000] text-white py-2 rounded-lg uppercase">canceled ORDER</h1>
        </Link>
      </div>
     </div>
      </form>
    </div>
    </div>
  );
}
