"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa'
import { MdArrowForward, MdOutlineDateRange, MdOutlineTextsms } from 'react-icons/md'
import { Tooltip } from 'antd';

import { FaArrowLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Navigation } from 'swiper/modules';

export const blogs = [
  {
    "id": 9,
    "image": "/blog9.jfif",
    "title": "রান্নায় জিরার ব্যবহার ও এর উপকারিতা",
    "dis": "জিরা শুধু স্বাদ বাড়ায় না, এটি খাবারকে আরও স্বাস্থ্যকর করে তোলে। রান্নায় জিরার বিভিন্ন ব্যবহারের কথা জানুন।",
    "name": "Sumaiya Khan",
    "date": "March 15, 2025",
    "sms": "897",
    "catagory": "মশলা",
    "intro": "জিরা একটি শক্তিশালী অ্যান্টিঅক্সিডেন্ট মশলা যা আমাদের শরীরের জন্য অত্যন্ত উপকারী। এটি খাদ্য এবং চিকিৎসা উভয়ের জন্য ব্যবহৃত হয়।",
    "imageuser": "/zira-usage-9.jpg",
    "text": "জিরা শরীরের ডিটক্সিফিকেশন এবং হজম প্রক্রিয়া উন্নত করতে সহায়তা করে।",
    "healthBenefits": "জিরা ব্লাড সুগার নিয়ন্ত্রণে রাখে, হজম প্রক্রিয়া উন্নত করে এবং বিভিন্ন স্বাস্থ্য সমস্যার সমাধান করতে সহায়তা করে।",
    "useimg": "/zira-benefits-9.jpg",
    "useimg2": "/zira-cultivation-9.jpg",
    "conclusion": "জিরা একটি অমূল্য মশলা, যা আমাদের শারীরিক এবং মানসিক স্বাস্থ্যের জন্য খুবই উপকারী।"
  },
  {
    "id": 8,
    "image": "/blog8.jfif",
    "title": "জিরা চা: ওজন কমানোর সহজ উপায়",
    "dis": "জিরা চা মেটাবলিজম বাড়ায়, হজম প্রক্রিয়ায় সাহায্য করে এবং ওজন কমানোর ক্ষেত্রে অত্যন্ত কার্যকর।",
    "name": "Rakibul Islam",
    "date": "March 10, 2025",
    "sms": "654",
    "catagory": "মশলা",
    "intro": "জিরা একটি সুগন্ধী মশলা যা খাদ্য প্রস্তুতিতে ব্যবহৃত হয় এবং তা শরীরের জন্য উপকারী। এটি হজম শক্তি বাড়ানোর পাশাপাশি শরীর থেকে টক্সিন বের করতে সাহায্য করে।",
    "imageuser": "/zira-usage-8.jpg",
    "text": "জিরা পেটের সমস্যাগুলি সমাধান করতে সহায়তা করে এবং হজম প্রক্রিয়া উন্নত করতে সাহায্য করে।",
    "healthBenefits": "জিরা শরীরের বিভিন্ন ধরনের সমস্যা সমাধান করতে সহায়তা করে, যেমন পেটের সমস্যা, ত্বক সমস্যা, এবং শরীরের শক্তি বাড়ানো।",
    "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
    "conclusion": "জিরা একটি অমূল্য মশলা যা আমাদের স্বাস্থ্যের উন্নতির জন্য অত্যন্ত কার্যকর।"
  },
  {
    "id": 7,
    "image": "/blog7.jfif",
    "title": "জিরার ভেষজ গুণ ও তার ব্যবহার",
    "dis": "প্রাচীনকাল থেকেই জিরা ভেষজ উপাদান হিসেবে ব্যবহৃত হয়ে আসছে। এটি নানা ধরনের শারীরিক সমস্যার সমাধানে কার্যকর।",
    "name": "Salma Akter",
    "date": "March 2, 2025",
    "sms": "812",
    "catagory": "মশলা",
    "intro": "জিরা একটি অ্যান্টিঅক্সিডেন্টসমৃদ্ধ মশলা যা শরীরের রোগ প্রতিরোধ ক্ষমতা উন্নত করতে সহায়তা করে। এটি হজম ক্ষমতা এবং ত্বকের স্বাস্থ্য উন্নত করতে সাহায্য করে।",
    "imageuser": "/zira-usage-7.jpg",
    "text": "জিরা শরীরের শক্তি বাড়ানোর পাশাপাশি হজম এবং ত্বক সংক্রান্ত সমস্যা সমাধান করতে সহায়তা করে।",
    "healthBenefits": "জিরার পুষ্টি মান অনেক বেশি, যা আমাদের স্বাস্থ্য উন্নত করতে সহায়তা করে। এটি ক্যান্সার প্রতিরোধেও কার্যকর।",
    "useimg": "/zira-benefits-7.jpg",
    "useimg2": "/zira-cultivation-7.jpg",
    "conclusion": "জিরা আমাদের শরীরের পুষ্টির চাহিদা পূরণ করতে সহায়তা করে এবং এটি একটি অমূল্য মশলা।"
  },
  {
    "id": 6,
    "image": "/blog6.jfif",
    "title": "গ্যাস ও বদহজম কমাতে জিরার ভূমিকা",
    "dis": "জিরা গ্যাসের সমস্যা কমায় এবং বদহজম দূর করতে কার্যকর। এটি হজম প্রক্রিয়া উন্নত করে এবং আরাম দেয়।",
    "name": "Imran Hossain",
    "date": "February 25, 2025",
    "sms": "721",
    "catagory": "মশলা",
    "intro": "জিরা খাবারের স্বাদ বাড়ানোর জন্য ব্যবহার করা হয়, তবে এটি স্বাস্থ্য উপকারিতাও নিয়ে আসে। এটি হজম শক্তি উন্নত করতে সহায়ক এবং শরীরের অঙ্গপ্রত্যঙ্গের সুরক্ষা বাড়ায়।",
    "imageuser": "/zira-usage-6.jpg",
    "text": "জিরা শরীরের শক্তি বৃদ্ধি করতে এবং টক্সিন দূর করতে সহায়তা করে।",
    "healthBenefits": "জিরা হজম প্রক্রিয়া উন্নত করতে সহায়তা করে এবং শরীর থেকে টক্সিন বের করতে সাহায্য করে।",
    "useimg": "/zira-benefits-6.jpg",
    "useimg2": "/zira-cultivation-6.jpg",
    "conclusion": "জিরা একটি অত্যন্ত উপকারী মশলা যা বিভিন্ন ধরনের স্বাস্থ্য সমস্যার সমাধানে ব্যবহার করা হয়।"
  },
  {
    "id": 5,
    "image": "/blog5.jfif",
    "title": "ত্বকের যত্নে জিরার ভূমিকা",
    "dis": "জিরা অ্যান্টিব্যাকটেরিয়াল ও অ্যান্টিঅক্সিডেন্ট উপাদানে সমৃদ্ধ, যা ত্বকের উজ্জ্বলতা বৃদ্ধি করে এবং ব্রণের সমস্যা কমাতে সাহায্য করে।",
    "name": "Nausheen Akter",
    "date": "February 20, 2025",
    "sms": "678",
    "catagory": "মশলা",
    "intro": "জিরা হল একটি প্রাচীন মশলা যা বিভিন্ন ধরনের খাদ্য প্রস্তুতিতে ব্যবহৃত হয়। এটি খাবারের স্বাদ বাড়ানোর পাশাপাশি আমাদের স্বাস্থ্যের জন্যও উপকারী।",
    "imageuser": "/zira-usage-5.jpg",
    "text": "জিরা আমাদের হজম ক্ষমতা উন্নত করে এবং রক্তচাপ নিয়ন্ত্রণে সহায়তা করে।",
    "healthBenefits": "জিরার সঠিক ব্যবহার শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং হজম প্রক্রিয়া উন্নত করে।",
    "useimg": "/zira-benefits-5.jpg",
    "useimg2": "/zira-cultivation-5.jpg",
    "conclusion": "জিরা একটি শক্তিশালী মশলা যা আমাদের শারীরিক সুস্থতার জন্য প্রয়োজনীয়।"
  },
    {
      "id": 4,
      "image": "/blog4.jfif",
      "title": "জিরার গুণাগুণ ও এর স্বাস্থ্য উপকারিতা",
      "dis": "জিরা শুধু রান্নার স্বাদ বাড়ায় না, এটি হজম, ত্বকের যত্ন এবং রোগ প্রতিরোধ ক্ষমতা বাড়াতেও সাহায্য করে।",
      "name": "Arif Rahman",
      "date": "February 15, 2025",
      "sms": "743",
      "catagory": "মশলা",
      "intro": "জিরা অ্যান্টিঅক্সিডেন্ট এবং বিভিন্ন গুরুত্বপূর্ণ খনিজে সমৃদ্ধ যা শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে।",
      "imageuser": "/zira-usage-4.jpg",
      "text": "জিরা খাবারে স্বাদ বৃদ্ধির পাশাপাশি হজমশক্তি উন্নত করতে সাহায্য করে।",
      "healthBenefits": "জিরা হজম শক্তি বৃদ্ধি করে, গ্যাসের সমস্যা কমায় এবং রোগ প্রতিরোধ ক্ষমতা উন্নত করে।",
      "useimg": "/zira-benefits-4.jpg",
      "useimg2": "/zira-cultivation-4.jpg",
      "conclusion": "প্রতিদিনের খাদ্যতালিকায় জিরা অন্তর্ভুক্ত করা স্বাস্থ্যের জন্য অত্যন্ত উপকারী।"
    },
    {
      "id": 3,
      "image": "/blog3.jfif",
      "title": "জিরার পুষ্টিগুণ ও দৈনন্দিন ব্যবহারের উপকারিতা",
      "dis": "জিরা আমাদের শরীরের জন্য অনেক উপকারী এবং এটি রক্তচাপ নিয়ন্ত্রণেও সহায়ক।",
      "name": "Mehedi Hasan",
      "date": "February 10, 2025",
      "sms": "610",
      "catagory": "মশলা",
      "intro": "জিরার মধ্যে প্রচুর পরিমাণে অ্যান্টিঅক্সিডেন্ট এবং মিনারেলস আছে যা শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়াতে সাহায্য করে।",
      "imageuser": "/zira-usage-3.jpg",
      "text": "জিরার সঠিক ব্যবহার শরীরের কার্যক্ষমতা বৃদ্ধি করে এবং রোগ প্রতিরোধ ক্ষমতা শক্তিশালী করে।",
      "healthBenefits": "জিরা ওজন নিয়ন্ত্রণ, হজম শক্তি বৃদ্ধি এবং কোলেস্টেরল নিয়ন্ত্রণে সাহায্য করে।",
      "useimg": "/zira-benefits-3.jpg",
      "useimg2": "/zira-cultivation-3.jpg",
      "conclusion": "নিয়মিত জিরার ব্যবহার স্বাস্থ্যকর জীবনযাপনে সাহায্য করতে পারে।"
    },
    {
      "id": 2,
      "image": "/blog2.jfif",
      "title": "রান্নায় জিরার সঠিক ব্যবহার",
      "dis": "জিরা বিভিন্ন ধরনের রান্নায় ব্যবহৃত হয় এবং এটি খাবারে বিশেষ স্বাদ ও সুগন্ধ যোগ করে।",
      "name": "Tanzila Rahman",
      "date": "February 5, 2025",
      "sms": "523",
      "catagory": "মশলা",
      "intro": "জিরা রান্নায় ব্যবহৃত একটি গুরুত্বপূর্ণ উপাদান যা খাবারের স্বাদ বৃদ্ধি করে এবং হজমে সহায়ক।",
      "imageuser": "/zira-usage-2.jpg",
      "text": "জিরার ব্যবহারে খাবারের স্বাদ উন্নত হয় এবং এটি গ্যাস্ট্রিক সমস্যার সমাধানেও সাহায্য করে।",
      "healthBenefits": "জিরা গ্যাস ও বদহজম কমাতে সাহায্য করে এবং শরীরের শক্তি বৃদ্ধি করে।",
      "useimg": "/zira-benefits-2.jpg",
      "useimg2": "/zira-cultivation-2.jpg",
      "conclusion": "জিরার সঠিক ব্যবহার সুস্বাদু এবং স্বাস্থ্যকর খাবার তৈরিতে সহায়ক।"
    },
    {
      "id": 1,
      "image": "/blog1.jfif",
      "title": "জিরার ইতিহাস ও এর গুরুত্ব",
      "dis": "জিরার ব্যবহারের ইতিহাস হাজার বছরের পুরোনো, এটি শুধু রান্নায় নয়, বিভিন্ন চিকিৎসায়ও ব্যবহৃত হয়।",
      "name": "Sadia Jahan",
      "date": "February 1, 2025",
      "sms": "450",
      "catagory": "মশলা",
      "intro": "প্রাচীনকাল থেকেই জিরার ব্যবহার হয়ে আসছে এবং এটি বিভিন্ন সংস্কৃতির খাদ্য ও ওষুধে ব্যবহৃত হয়।",
      "imageuser": "/zira-usage-1.jpg",
      "text": "জিরা শুধু রান্নায় নয়, চিকিৎসা ও আয়ুর্বেদিক পদ্ধতিতেও ব্যবহৃত হয়ে আসছে।",
      "healthBenefits": "জিরা দেহের রোগ প্রতিরোধ ক্ষমতা বাড়াতে, ওজন কমাতে এবং ত্বকের যত্নে সাহায্য করে।",
      "useimg": "/zira-benefits-1.jpg",
      "useimg2": "/zira-cultivation-1.jpg",
      "conclusion": "জিরার গুরুত্ব কেবল রান্নায় নয়, স্বাস্থ্য ও চিকিৎসাতেও অপরিসীম।"
    }  
]

const Blogs = () => {
   
  return (
    <div>
         <div className='container pb-[120px] '>
         <div className=' container flex flex-row justify-between items-center relative'>
        <h1 className='text-2xl sm:text-3xl xl:text-4xl font-bold font-poppins text-center'>Latest News</h1>
       
        <div className="">
          <button className="z-50 flex absolute top-0 right-16 md:right-20 lg:right-24 swiper-button-next custom-next items-center  bg-[#F5E1C8] hover:bg-white p-2 md:p-3 lg:p-4 rounded-full ml-5">
            <FaArrowLeft className="text-sm sm:text-base lg:text-lg xl:text-2xl text-[#5A3E36] hover:text-black" />
          </button>
          <button className="z-50 flex absolute top-0 right-0  items-center  swiper-button-prev custom-prev bg-[#F5E1C8] hover:bg-white p-2 md:p-3 lg:p-4 rounded-full mr-5">
            <FaArrowRight  className="text-sm sm:text-base lg:text-lg xl:text-2xl text-[#5A3E36] hover:text-black" />
          </button>
        </div>
        </div>
               <div className=' mt-10 '>
               <Swiper
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
        loop={true}
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
            1240: { slidesPerView: 3, spaceBetween: 20 },
            1620: { slidesPerView: 3, spaceBetween: 20 },
          }}
        className="w-full "
        
      >  
                {
                    blogs.map(cardList =>(
                        <SwiperSlide key={cardList.id} >
                        <div className='border border-[#FA8232] p-6 rounded-md'> 
                        <div className='w-full rounded-md h-[280px]'>
                            <Image src={cardList.image} alt='image' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                        <div className='flex flex-row items-center justify-between mt-6'>
                                <span className='flex flex-row items-center gap-1'>
                                <FaRegUserCircle className='text-[#FA8232]'/>
                                <Tooltip title={cardList.name}>
                                <span className=' line-clamp-1'>{cardList.name}</span>
                                </Tooltip>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineDateRange className='text-[#FA8232]'/>
                                <Tooltip title={cardList.date}>
                                <span className=' line-clamp-1'>{cardList.date}</span>
                                </Tooltip>
                                </span>
                                <span className='flex flex-row items-center gap-1'>
                                <MdOutlineTextsms className='text-[#FA8232]'/>
                                <span>{cardList.sms}</span>
                                </span>
                            </div>
                            <Tooltip title={cardList.title}>
                            <h1 className=' text-lg font-medium mt-2 mb-3 line-clamp-1'>{cardList.title}</h1>
                            </Tooltip>
                            <p className='text-base font-normal text-[#8f8777] mb-6 line-clamp-2'>{cardList.dis}</p>

                            <Link href={`/blog/blogedetail/${cardList.id}`} className='w-[162px] h-[48px] py-3 px-6 border border-[#FA8232] hover:border-[#ff7134] text-[#FA8232] hover:text-[#ff7134] hover:bg-[#F5E1C8] rounded-md flex flex-row items-center justify-center gap-2'><span className='text-sm font-bold'>Read more</span> <MdArrowForward  className='text-xl'/></Link>
                        </div>
                        </div>
                </SwiperSlide>
                    ))
                }
        </Swiper>
               </div>
            </div>
    </div>
  )
}

export default Blogs