'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className=" ">
     
      <div className="container py-16">
        <div className="grid md:grid-cols-3 justify-between gap-8 mb-16">
          <div>
             
             <h1 className=' text-lg font-normal font-poppins'>Address</h1>
             <hr className=' border  my-2'/>
             <p className='text-base font-normal font-poppins'>1215 Lorem Ipsum, Ch 176080', 'Chandigarh, INDIA</p>
          </div>
          <div>
          
             <h1 className=' text-lg font-normal font-poppins'>E-mail</h1>
             <hr className=' border  my-2'/>
             <p className='text-base font-normal font-poppins'>info@LoremIpsum.com</p>
          </div>
          <div>
          
             <h1 className=' text-lg font-normal font-poppins'>Customer Support</h1>
             <hr className=' border  my-2'/>
             <p className='text-base font-normal font-poppins'>Mon - Thu 9:00 am - 4:00 pm </p>
             <p className='text-base font-normal font-poppins'>Thu - Mon 10:00 pm - 5:00 pm </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="border border-[#E67E22] p-6 shadow-md rounded-lg">
            <h1 className="text-base font-medium text-gray-500 mb-4">INFORMATION ABOUT US</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">CONTACT US FOR ANY QUESTIONS</h2>
            <div className=" flex flex-col gap-4">
             <div className='grid grid-cols-2 gap-4'>
             <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-base font-normal font-poppins'>Your Name</label>
              <input type="text" name="name" id='name' placeholder="Your Name" onChange={handleChange} className=" border rounded-md border-[#E67E22] outline-none text-base font-normal font-poppins px-3 py-2 " />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-base font-normal font-poppins'>E-mail</label>
              <input type="email" name="email" placeholder="E-mail" onChange={handleChange} className=" border rounded-md border-[#E67E22] outline-none text-base font-normal font-poppins px-3 py-2 "/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="phone" className='text-base font-normal font-poppins'>Phone Number</label>
              <input type="number" name="phone" placeholder="Phone Number" onChange={handleChange} className=" border rounded-md border-[#E67E22] outline-none text-base font-normal font-poppins px-3 py-2 "/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="subject" className='text-base font-normal font-poppins'>Subject</label>
              <input type="text" name="subject" placeholder="Subject" onChange={handleChange} className=" border rounded-md border-[#E67E22] outline-none text-base font-normal font-poppins px-3 py-2 " />
              </div>
             </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-base font-normal font-poppins'>Write Your Message</label>
              <textarea name="message" placeholder="Write Your Message" onChange={handleChange} className="h-32 border rounded-md border-[#E67E22] outline-none text-base font-normal font-poppins px-3 py-2 "></textarea>
              </div>
              <button type="submit" className="bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-2 px-4 rounded-lg  transition">Send Now</button>
            </div>
          </form>

          <div className='w-full'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7354.852067250491!2d89.54001149999999!3d22.82372230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1739782431023!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              className="rounded-lg shadow-md h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, details }) {
  return (
    <div className="bg-blue-900 text-white p-6 text-center rounded-lg shadow-md">
      <div className="text-4xl mb-4 text-orange-500">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-300">{detail}</p>
      ))}
    </div>
  );
}
