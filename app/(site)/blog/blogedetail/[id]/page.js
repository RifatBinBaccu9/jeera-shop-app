"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight, MdOutlineDateRange, MdOutlineTextsms } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaLink } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";

const blogs = [
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
    "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
    "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
    "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
    "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
    "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
      "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
      "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
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
      "useimg": "/blog8.jfif",
    "useimg2": "/blog9.jfif",
      "conclusion": "জিরার গুরুত্ব কেবল রান্নায় নয়, স্বাস্থ্য ও চিকিৎসাতেও অপরিসীম।"
    }  
]


const ZiraDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === parseInt(id));
  return (
    <div className=" py-[26px]">
      <div className=' bg-[#f4ebd9] py-[26px]'>
         <div className='container flex sm:flex-row flex-wrap items-center gap-2 text-sm font-normal '>
        <Link href={'/'} className='flex flex-row items-center gap-2'>
        <IoHomeOutline />
        <span>Home</span>
        </Link>
        <MdKeyboardArrowRight />
        <Link href={'/blog/bloglist'} className='flex flex-row items-center gap-2'>
        <span>blog</span>
        </Link>
        <MdKeyboardArrowRight />
        <span className='text-[#E67E22]'>{blog.title}</span> 
        </div> 
        </div>

      <div className=" w-full lg:w-[1024px] mx-auto px-3 my-[80px]">
        <div className="w-full flex flex-row items-center justify-center mb-8">
          <Image src={blog.image} alt="Zira Image" width={900} height={900} className="border border-[#E67E22] p-6 rounded-md w-full lg:w-[700px] h-[300px] md:h-[400px] lg:h-[500px] transition-transform transform hover:scale-105" />
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 mb-6">
            <span className="flex flex-row items-center gap-1">
              <FaCanadianMapleLeaf className="text-[#FA8232]" />
              <span>{blog.catagory}</span>
            </span>
            <span className="flex flex-row items-center gap-1">
              <FaRegUserCircle className="text-[#FA8232]" />
              <span>{blog.name}</span>
            </span>
            <span className="flex flex-row items-center gap-1">
              <MdOutlineDateRange className="text-[#FA8232]" />
              <span>{blog.date}</span>
            </span>
            <span className="flex flex-row items-center gap-1">
              <MdOutlineTextsms className="text-[#FA8232]" />
              <span>{blog.sms}</span>
            </span>
          </div>

          <h1 className="text-xl sm:text-[32px] font-semibold mt-4 mb-6">{blog.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-6">
            <div className="flex flex-row  items-center gap-3">
              <Image src="/rifat.jpg" alt="Author Image" width={40} height={40} className="rounded-full w-[40px] h-[40px]" />
              <h1 className="text-sm font-medium">{blog.name}</h1>
            </div>
            <div>
            <div className="flex flex-row justify-between items-center gap-3 ">
      <a href="#" className="p-2 bg-green-500 rounded-full text-white text-xl">
        <FaWhatsapp />
      </a>
      <a href="#" className="p-2 bg-blue-700 rounded-full text-white text-xl">
        <FaFacebookF />
      </a>
      <a href="#" className="p-2 bg-blue-500 rounded-full text-white text-xl">
        <FaTwitter />
      </a>
      <a href="#" className="p-2 bg-blue-800 rounded-full text-white text-xl">
        <FaLinkedinIn />
      </a>
      <a href="#" className="p-2 bg-red-600 rounded-full text-white text-xl">
        <FaPinterestP />
      </a>
      <a href="#" className="p-2 bg-gray-500 rounded-full text-white text-xl">
        <FaLink />
      </a>
    </div>
            </div>
          </div>

          <div>
            <p className="py-[32px] leading-relaxed">
              {blog.dis}
            </p>

            <div className="flex flex-row gap-6 px-[20px] py-[40px] bg-[#dcd0cb] border-l-8 border-[#FA8232] rounded-lg">
              <div className="hidden sm:block">
              <GiBookmarklet className='text-5xl text-[#FA8232]'/>
              </div>
              <p>{blog.intro}</p>
            </div>

            <div className="my-[32px]">
              <p className="mb-4">{blog.text}</p>
              <p className="mb-4">{blog.healthBenefits}</p>
            
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-[32px]">
              <Image src={blog.useimg} alt="Zira Benefits" width={900} height={900} className="rounded-md shadow-lg w-full h-full" />
              <Image src={blog.useimg2} alt="Zira Cultivation" width={900} height={900} className="rounded-md shadow-lg w-full h-full" />
            </div>

            <p className="text-base font-normal mb-[72px]">{blog.conclusion}</p>

            <div className="mb-[48px]">
              <h1 className="text-xl font-medium mb-6">মন্তব্য করুন</h1>
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="w-full">
                  <label htmlFor="name" className="block mb-2">পূর্ণ নাম</label>
                  <input type="text" id="name" className="p-2 h-[44px] w-full outline-none border border-[#FA8232] rounded-md bg-[#FAF3E0]" />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block mb-2">ইমেইল ঠিকানা</label>
                  <input type="text" id="email" className="p-2 h-[44px] w-full outline-none border border-[#FA8232] rounded-md bg-[#FAF3E0]" />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block mb-2">বিবরণ</label>
                <textarea id="comment" placeholder="এই ব্লগ সম্পর্কে আপনার ভাবনা..." className="p-3 h-[124px] w-full outline-none border border-[#FA8232] rounded-md bg-[#FAF3E0]" />
                <button className="text-base font-normal px-6 h-[48px] bg-[#FA8232] w-[178px] flex items-center justify-center text-white rounded-sm mt-6 hover:bg-[#e6712e]">মন্তব্য পোস্ট করুন</button>
              </div>
            </div>

            <div className="mb-[72px]">
              <h1 className="text-xl font-medium mb-6">মন্তব্যসমূহ</h1>
              <div className="flex flex-row gap-3 mb-6">
                <div>
                  <Image src="/rifat.jpg" alt="Commenter Image" width={100} height={100} className="rounded-full w-10 h-10"/>
                </div>
                <div>
                  <div className="flex flex-row mb-2">
                    <span className="font-normal text-sm">অ্যানেট ব্ল্যাক</span>
                    <span className="text-sm font-normal text-[#475156]">২৬ এপ্রিল, ২০২১</span>
                  </div>
                  <p className="text-sm font-normal text-[#475156]">জিরা ব্যবহারের ফলে আমার হজম সমস্যা অনেক ভালো হয়েছে। এটি সত্যিই কার্যকর!</p>
                  <hr className="my-6 border border-[#E4E7E9]" />
                </div>
              </div>

              <div className="text-base border border-[#FA8232] text-[#FA8232] rounded-sm flex flex-row justify-center items-center font-normal w-[200px] select-none h-[48px] px-6 gap-2 cursor-pointer hover:bg-[#FFE7D6]">
                <TfiReload />
                <span>আরও লোড করুন</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZiraDetail;
