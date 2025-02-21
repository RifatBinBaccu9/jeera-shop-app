"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosRemove } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ConfigProvider, Menu, Rate, Tabs, Tooltip } from "antd";
import { FaAward, FaBangladeshiTakaSign, FaHandshakeSimple, FaRegHeart, FaTencentWeibo, FaTwitter } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { BsCopy } from "react-icons/bs";
import { MdFacebook, MdKeyboardArrowRight, MdOutlineShoppingCart, MdPayment } from "react-icons/md";
import { IoAddOutline, IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { TbShoppingCart, TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useParams } from "next/navigation";
import {  useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaArrowRight, FaRegEye } from "react-icons/fa";

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
   "description": "এপ্রিকট একটি পুষ্টিকর ফল যা নানা স্বাস্থ্য উপকারে সহায়ক। এটি ভিটামিন A, C এবং ক্যালসিয়ামে সমৃদ্ধ, যা শরীরের ইমিউন সিস্টেম শক্তিশালী করতে সাহায্য করে। এপ্রিকট বিশেষ করে চোখের স্বাস্থ্যের জন্য উপকারী, কারণ এতে অ্যান্টি-অক্সিডেন্ট উপাদান থাকে যা চোখের প্রয়োজনীয় পুষ্টি সরবরাহ করে। এটি ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করতে পারে এবং হজমের জন্যও খুবই ভালো। এপ্রিকট খেলে আপনার শরীরের প্রতিরোধ ক্ষমতা বাড়ে এবং ত্বক ও চুলের স্বাস্থ্য উন্নত হয়। এটি সরবত তৈরিতে বা স্ন্যাকস হিসেবে খাওয়া যেতে পারে, এবং এটি বিভিন্ন খাবারে এক বিশেষ স্বাদ যোগ করে।",  "image": "/Apricot1.jfif",
    "image2": "/Apricot2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "কালোজিরা (Nigella sativa) একটি প্রাকৃতিক ঔষধি উদ্ভিদ, যা শারীরিক বিভিন্ন উপকারে সহায়ক। এটি মেটাবলিজম বৃদ্ধি করতে সাহায্য করে, শরীরের বিপাক ক্রিয়া উন্নত করে এবং হৃদরোগের ঝুঁকি কমায়। কালোজিরার মধ্যে প্রচুর অ্যান্টি-অক্সিডেন্ট থাকে, যা দেহের ক্ষতিকর টক্সিন দূর করতে সহায়ক। এটি রোগ প্রতিরোধ ক্ষমতা শক্তিশালী করতে এবং হজম প্রক্রিয়া উন্নত করতে সাহায্য করে। কালোজিরা ত্বকের সমস্যা দূর করতে সহায়ক, যেমন ব্রণ, ত্বকের আর্দ্রতা বজায় রাখা, এবং আরও অনেক। বিভিন্ন রান্নায় বা স্যালাডে ব্যবহার করা যেতে পারে, এমনকি সরবত বা গরম পানীয়তেও এটি ব্যবহৃত হয়।"
    ,
    "image": "/BlackCumin1.jfif",
    "image2": "/BlackCumin2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "ধনিয়া একটি জনপ্রিয় মশলা যা সাধারণত রান্নায় ব্যবহৃত হয়। এর পাতা এবং বীজ দুটি শারীরিক উপকারে আসে। ধনিয়া ভিটামিন C, K এবং ফাইবারে সমৃদ্ধ, যা হজম শক্তি বাড়াতে সাহায্য করে। এটি অ্যান্টি-অক্সিডেন্ট এবং অ্যান্টি-ইনফ্লামেটরি গুণসম্পন্ন, যা শরীরের প্রদাহ কমাতে সাহায্য করে। ধনিয়া কোলেস্টেরল নিয়ন্ত্রণে সহায়ক এবং রক্তচাপ কমাতে সাহায্য করে। এটি স্ন্যাকস বা স্যুপে মশলা হিসেবে ব্যবহৃত হয় এবং নানা রান্নায় একটি অতিরিক্ত টেস্ট যোগ করে। ধনিয়া খেলে দেহে পুষ্টির ঘাটতি পূর্ণ হয় এবং শরীরকে সতেজ রাখে।"
    ,
    "image": "/Coriander1.jfif",
    "image2": "/Coriander2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "মেথি (Trigonella foenum-graecum) এক প্রাকৃতিক উপাদান যা বিভিন্ন স্বাস্থ্য উপকারে সহায়ক। এটি হজমে সহায়ক এবং রক্তে শর্করা নিয়ন্ত্রণে সাহায্য করে, বিশেষ করে ডায়াবেটিস রোগীদের জন্য উপকারী। মেথি দেহের তাপমাত্রা স্বাভাবিক রাখতে সাহায্য করে, কোলেস্টেরল কমাতে সহায়ক এবং হার্টের স্বাস্থ্য ভালো রাখে। মেথি হজম শক্তি উন্নত করে এবং ওজন কমাতে সাহায্য করতে পারে। এটি চা, স্যুপ, সালাদ বা অন্যান্য খাবারে মশলা হিসেবে ব্যবহার করা যেতে পারে। মেথির মধ্যে থাকা ফাইবার ও প্রোটিন শরীরের জন্য উপকারী এবং এটি পেটের সমস্যা দূর করতে সহায়ক।"
  ,
    "image": "/Fenugreek1.jfif",
    "image2": "/Fenugreek2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "গোল মরিচ (Piper nigrum) বিশ্বের সবচেয়ে জনপ্রিয় মশলা। এটি হজম শক্তি বাড়াতে সহায়ক এবং শরীরের তাপমাত্রা নিয়ন্ত্রণে সাহায্য করে। গোল মরিচের মধ্যে প্রচুর ভিটামিন C, ভিটামিন A, এবং অ্যান্টি-অক্সিডেন্ট উপাদান রয়েছে, যা রোগ প্রতিরোধ ক্ষমতা উন্নত করতে সহায়ক। এটি শ্বাসতন্ত্রের সমস্যা কমাতে সাহায্য করে এবং ত্বকের সমস্যা দূর করতে সহায়ক। গোল মরিচ হৃদরোগ এবং স্ট্রোকের ঝুঁকি কমাতে সহায়ক এবং ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করে। এটি রান্নায় বিভিন্ন ধরনের মাংস, স্যুপ, স্যালাদ, বা অন্যান্য মশলাদার খাবারে ব্যবহৃত হয়।"
    ,
    "image": "/BlackPepper1.jfif",
    "image2": "/BlackPepper2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "এলাচ (Elettaria cardamomum) একটি সুগন্ধি মশলা যা রান্নায় অতুলনীয় স্বাদ যোগ করে। এটি শরীরের জন্য অনেক উপকারী, যেমন হজম শক্তি বাড়ানো, শ্বাসকষ্ট দূর করা, এবং রক্তচাপ নিয়ন্ত্রণে রাখা। এলাচের মধ্যে অ্যান্টি-অক্সিডেন্ট গুণ থাকে যা ত্বককে সতেজ ও সুন্দর রাখে এবং শরীরের বিভিন্ন প্রদাহ কমাতে সহায়ক। এলাচ রক্তে শর্করা নিয়ন্ত্রণে সহায়ক এবং খাবারের হজম প্রক্রিয়া উন্নত করে। এলাচ চা, মিষ্টান্ন, মাংস বা অন্যান্য রান্নায় ব্যবহার করা যেতে পারে, যা খাবারের স্বাদ একে অপরকে সম্পূরকভাবে বৃদ্ধি করে।"
 ,
    "image": "/Cardamom1.jfif",
    "image2": "/Cardamom2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "লবঙ্গ (Syzygium aromaticum) একটি প্রাকৃতিক মশলা যা শরীরের বিভিন্ন উপকারে সহায়ক। এটি একটি শক্তিশালী অ্যান্টি-অক্সিডেন্ট হিসেবে কাজ করে, যা শরীরের টক্সিন দূর করতে এবং রোগ প্রতিরোধ ক্ষমতা উন্নত করতে সাহায্য করে। লবঙ্গ মুখের রোগ নিরাময়ে সহায়ক এবং হজম শক্তি বাড়াতে সাহায্য করে। এটি ত্বককে মসৃণ রাখে এবং ব্রণের সমস্যা দূর করতে সহায়ক। লবঙ্গের মধ্যে রয়েছে অ্যান্টি-ব্যাকটেরিয়াল এবং অ্যান্টি-ইনফ্লামেটরি গুণ, যা শারীরিক প্রদাহ কমাতে সহায়ক। রান্নায় লবঙ্গের ব্যবহার খাবারের স্বাদ এবং গন্ধ বাড়ায়, এটি বিভিন্ন প্রকারের মিষ্টান্ন বা স্যুপেও ব্যবহার করা হয়।"
  ,
    "image": "/Cloves1.jfif",
    "image2": "/Cloves2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "দারুচিনি (Cinnamomum verum) একটি সুগন্ধি মশলা যা শরীরের জন্য অনেক উপকারী। এটি হজম শক্তি উন্নত করে, রক্তচাপ কমাতে সাহায্য করে এবং অ্যান্টি-অক্সিডেন্ট গুণে সমৃদ্ধ। দারুচিনি শরীরের বিপাকক্রিয়া ত্বরান্বিত করে, যার ফলে ওজন কমানোর প্রক্রিয়া সহজ হয়। এটি গ্যাস্ট্রিক সমস্যা, মাইক্রোবিয়াল ইনফেকশন এবং শ্বাসতন্ত্রের সমস্যা দূর করতে সহায়ক। দারুচিনি চা, মিষ্টান্ন বা স্যুপে ব্যবহার করা যেতে পারে এবং এতে বিশেষ ধরনের গন্ধ ও স্বাদ যুক্ত করে।"
    ,
    "image": "/Cinnamon1.jfif",
    "image2": "/Cinnamon2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "মধু একটি প্রাকৃতিক এবং শক্তিশালী পুষ্টি উপাদান যা শরীরের জন্য অত্যন্ত উপকারী। এতে থাকা অ্যান্টি-অক্সিডেন্ট গুণ শরীরের টক্সিন দূর করতে সাহায্য করে, রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং শরীরকে সতেজ রাখে। মধু হজম শক্তি বাড়াতে সহায়ক এবং ত্বকের স্বাস্থ্য উন্নত করে। এটি প্রাকৃতিক শক্তির উৎস হিসেবে কাজ করে, বিশেষ করে শীতকালে এটি শরীরকে উষ্ণ রাখে। মধু গলার ব্যথা, কাশি এবং ঠান্ডার সমস্যারও কার্যকরী চিকিৎসা হিসেবে কাজ করে। এটি স্ন্যাকস, স্যালাড ড্রেসিং, ডেজার্ট বা সরবত তৈরির জন্য ব্যবহার করা যেতে পারে।"
  ,
    "image": "/honey.jfif",
    "image2": "/honey2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "বিস্কুট (Biscuits) একটি জনপ্রিয় স্ন্যাকস যা প্রাতঃরাশ বা চা সময়ে খাওয়ার জন্য আদর্শ। এটি সুস্বাদু এবং স্বাস্থ্যকর, এবং এতে প্রয়োজনীয় প্রোটিন, ফাইবার এবং ক্যালসিয়াম থাকে। বিস্কুট বিভিন্ন প্রকারের মিষ্টি এবং স্যাল্টেড ফ্লেভারে পাওয়া যায় এবং এটি বাচ্চাদের এবং বয়স্কদের জন্য একটি পুষ্টিকর স্ন্যাক হিসেবে ব্যবহৃত হয়। বিস্কুট শরীরকে শক্তি প্রদান করে এবং দ্রুত খাবারের পছন্দের বিকল্প হতে পারে। এটি অফিসে, স্কুলে বা যেকোনো স্থানে সহজে বহনযোগ্য এবং খাওয়ার জন্য উপযুক্ত।"
 ,
    "image": "/biscuits.jfif",
    "image2": "/biscuits2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
    "description": "বাদাম (Almonds) একটি সুস্বাদু এবং পুষ্টিকর শুকনো ফল যা প্রোটিন, ভিটামিন, খনিজ এবং অ্যান্টি-অক্সিডেন্টে পূর্ণ। এটি হৃদরোগের ঝুঁকি কমাতে সাহায্য করে এবং ত্বকের স্বাস্থ্য উন্নত করে। বাদাম মস্তিষ্কের কর্মক্ষমতা বাড়াতে সহায়ক এবং স্মৃতিশক্তি বাড়াতে সাহায্য করে। এতে থাকা ভিটামিন E ত্বকের জন্য উপকারী, যা ত্বককে মসৃণ ও তরুণ রাখতে সহায়ক। বাদাম রক্তে শর্করার মাত্রা নিয়ন্ত্রণে রাখে এবং ডায়াবেটিস রোগীদের জন্য উপকারী। বাদাম হজম শক্তি বাড়ায় এবং শরীরের অপ্রয়োজনীয় টক্সিন দূর করতে সহায়ক। বাদামের মধ্যে থাকা ফ্যাটি অ্যাসিড হৃদযন্ত্রের জন্য উপকারী এবং শরীরের শুষ্কতা কমাতে সাহায্য করে। বাদাম চা, স্যালাড, মিষ্টান্ন বা অন্য যেকোনো খাবারে ব্যবহার করা যেতে পারে, এবং এটি স্ন্যাকস হিসেবেও খাওয়া যেতে পারে।"
    ,
    "image": "/almonds.jfif",
    "image2": "/almonds2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
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
   "description": "পেস্তা বাদাম (Pistachio) একটি সুস্বাদু এবং পুষ্টিকর শুকনো ফল যা বিভিন্ন স্বাস্থ্য উপকারে সহায়ক। এটি প্রোটিন, ফাইবার, ভিটামিন E এবং ক্যালসিয়ামে সমৃদ্ধ, যা শরীরের জন্য অত্যন্ত উপকারী। পেস্তা বাদাম হৃদরোগের ঝুঁকি কমাতে সাহায্য করে এবং ডায়াবেটিস নিয়ন্ত্রণে সহায়ক। এর মধ্যে থাকা অ্যান্টি-অক্সিডেন্ট গুণ দেহের টক্সিন দূর করতে সহায়ক এবং রোগ প্রতিরোধ ক্ষমতা বাড়ায়। পেস্তা বাদাম শরীরের বিপাকক্রিয়া ত্বরান্বিত করে এবং শরীরের অতিরিক্ত চর্বি কমাতে সাহায্য করে। এটি হজম প্রক্রিয়া উন্নত করে এবং ত্বকের স্বাস্থ্য উন্নত করতে সহায়ক। পেস্তা বাদাম চা, স্যালাড, মিষ্টান্ন বা অন্যান্য খাবারে ব্যবহার করা যেতে পারে, এবং এটি স্ন্যাকস হিসেবেও খাওয়া যেতে পারে। এছাড়াও, পেস্তা বাদামের মধ্যে থাকা ফ্যাটি অ্যাসিড এবং অ্যান্টি-ইনফ্লামেটরি গুণ হৃদযন্ত্রের স্বাস্থ্য রক্ষা করতে সাহায্য করে।"
,
    "image": "/pistachios.jfif",
    "image2": "/pistachios2.jfif",
    "imageslide": [
      {"id":11, "image":"/Apricot1.jfif"},
      {"id":11, "image":"/Apricot2.jfif"},
      {"id":11, "image":"/BlackCumin1.jfif"},
      {"id":11, "image":"/BlackCumin2.jfif"},
      {"id":11, "image":"/Coriander1.jfif"},
      {"id":11, "image":"/Coriander2.jfif"},
    ]
  }
]


const Productdetails = () => {
    const {id} = useParams();

    const products = product.find(product => product.id == id);
   console.log(products);
   

    const [selectedImage, setSelectedImage]= useState(products.image);

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
    const [priceData, setPriceData] = useState(null);

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
    }
  }, []);
  return (
    <div>
    <div className=' bg-[#f4ebd9] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <Link href={'/shop/product'} className='flex flex-row items-center gap-2'>
        <span>Shop</span>
        </Link>
        <MdKeyboardArrowRight />
        <span className='text-[#E67E22]'>{products.name}</span> 
        </div> 
        </div> 

        <div className="  container my-[60px]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="mb-10 lg:mb-0 ">
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
    {products.imageslide.map((category, index) => (
      <SwiperSlide key={index} className="!lg:w-[96px] !lg:h-[96px]">
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => setSelectedImage(category.image)}>
          <div className="w-full h-full rounded-md border border-[#E67E22] p-2">
            <Image
              src={category.image || null}
              width={900}
              height={900}
              alt={'image'}
              
              className="w-full h-[100px] lg:object-cover"
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
    <button className="z-50 flex absolute top-1/2 transform -translate-y-1/2  left-0 custom-prev items-center justify-center w-10 h-10 bg-[#E67E22] text-white rounded-full shadow-lg hover:bg-[#d35400] transition-all duration-300">
      <IoIosArrowRoundBack className="text-4xl" />
    </button>

    {/* Next Button */}
    <button className="z-50 flex absolute top-1/2  transform -translate-y-1/2  right-0 custom-next items-center justify-center w-10 h-10 bg-[#E67E22] text-white rounded-full shadow-lg hover:bg-[#d35400] transition-all duration-300">
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
            <div className="text-sm font-semibold">{products.rating} Star Rating</div>
            </div>
            <div className="text-sm font-normal">({products.reviews} User feedback)</div>
          </div>

          <div className="sm:gap-3 gap-0 mt-4">
            <div className="grid grid-cols-2 justify-between items-center">
               <span><span className="text-sm font-normal text-[#5F6C72]">Sku:</span> <span  className="text-sm font-medium text-black">{products.sku}</span></span>
               <span><span className="text-sm font-normal text-[#5F6C72]">Availability:</span > <span className="text-sm font-medium text-black">{products.availability}</span></span>
            </div>
            <div className="grid grid-cols-2 justify-between items-center">
            <span><span className="text-sm font-normal text-[#5F6C72]">Brand:</span> <span  className="text-sm font-medium text-black">{products.brand}</span></span>
            <span><span className="text-sm font-normal text-[#5F6C72]">Category:</span> <span  className="text-sm font-medium text-black">{products.category}</span></span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center sm:justify-start py-6">
            <div className="flex flex-row items-center">
             <span className="text-2xl font-semibold text-[#E67E22]">${products.price}.00</span>
             <span className="text-lg font-normal text-[#5F6C72] line-through ml-1">${products.oldPrice}.00</span>
            </div>
            <div>
                <h3 className="text-sm font-semibold px-[10px] py-[5px] bg-[#EFD33D] text-black rounded-sm ml-3">{products.discount}F</h3>
            </div>
          </div>
          
          <h1 className="text-lg font-normal font-poppins mb-5">{products.description}</h1>
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
            <Image src={'/cashon-removebg-preview.png'} alt="image" width={100} height={100} className="w-[50px] sm:w-[100px] h-full"/>
            <Image src={'/bkash-removebg-preview.png'} alt="image" width={100} height={100} className="w-[50px] sm:w-[100px] h-full"/>
            <Image src={'/nagad-removebg-preview.png'} alt="image" width={100} height={100} className="w-[50px] sm:w-[100px] h-full"/>
            <Image src={'/rokat-removebg-preview.png'} alt="image" width={100} height={100} className="w-[50px] sm:w-[100px] h-full"/>
            </div>
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
                            {products.description}
                          </p>
                        </div>

                        <div className="col-span-1">
  <h3 className="text-xl font-semibold text-orange-600 mb-4">Features</h3>
  <ul className="space-y-3 text-gray-700">
    <li className="flex items-center gap-2"><TbTruckDelivery className="text-orange-600" /> ফ্রি ও দ্রুত ডেলিভারি</li>
    <li className="flex items-center gap-2"><FaHandshakeSimple className="text-orange-600" /> টাকা ফেরত গ্যারান্টি</li>
    <li className="flex items-center gap-2"><RiCustomerService2Fill className="text-orange-600" /> ২৪/৭ সাপোর্ট</li>
    <li className="flex items-center gap-2"><MdPayment className="text-orange-600" /> নিরাপদ পেমেন্ট</li>
  </ul>
</div>

{/* শিপিং তথ্য সেকশন */}
<div className="col-span-1">
  <h3 className="text-xl font-semibold text-orange-600 mb-4">Shipping Information</h3>
  <ul className="space-y-3 text-gray-700">
    <li>কুরিয়ার: ২-৪ দিন, ফ্রি শিপিং</li>
    <li>লোকাল শিপিং: এক সপ্তাহ পর্যন্ত, $১৯.০০</li>
    <li>UPS গ্রাউন্ড শিপিং: ৪-৬ দিন, $২৯.০০</li>
    <li>গ্লোবাল এক্সপোর্ট: ৩-৪ দিন, $৩৯.০০</li>
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
                   <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
           {
            productfilter.slice(0, 4).map((product) => (
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
              </div>
    </div>
  )
}

export default Productdetails