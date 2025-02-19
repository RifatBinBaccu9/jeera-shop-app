import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

const About = () => {
  return (
    <div className=' '>
      <div className='container flex flex-col-reverse lg:flex-row justify-between items-center mt-[72px] mb-[124px] gap-10 xl:gap-[136px]'>
      <div className='w-full lg:w-[536px]'>
            <Link href={"#"} className='text-sm font-semibold px-4 py-2 bg-[#2DA5F3] rounded-sm'>WHO WE ARE</Link>
            <h1 className='text-2xl sm:text-4xl lg:text-3xl xl:text-[40px] font-semibold mt-3 mb-6'>Kinbo - largest electronics retail shop in the world.</h1>
            <p className='text-base text-[#475156] font-normal mt-6 mb-[32px]'>Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum risus, ac tincidunt diam lectus id magna. Praesent maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor. </p>
            <ul>
                <li className='flex flex-row items-center mb-4 gap-3'><BsCheckAll className='w-6 h-6 text-[#2DB224]'/><span className='text-base font-normal'>Great 24/7 customer services.</span></li>
                <li className='flex flex-row items-center mb-4 gap-3'><BsCheckAll className='w-6 h-6 text-[#2DB224]'/><span className='text-base font-normal'>600+ Dedicated employe.</span></li>
                <li className='flex flex-row items-center mb-4 gap-3'><BsCheckAll className='w-6 h-6 text-[#2DB224]'/><span className='text-base font-normal'>50+ Branches all over the world.</span></li>
                <li className='flex flex-row items-center mb-4 gap-3'><BsCheckAll className='w-6 h-6 text-[#2DB224]'/><span className='text-base font-normal'>Over 1 Million Electronics Products</span></li>
            </ul>
        </div>

        <div className='w-full lg:w-[648px]'>
            <Image src={'/about.png'} alt='aboutpng' width={648} height={536} className='w-full '/>
        </div>
      </div>





      <div className='container my-[72px]'>
                <h1 className='text-[32px] font-semibold mb-[40px] text-center'>Our core team member</h1>

                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team1.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team2.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team3.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team4.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team5.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team6.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team7.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center border border-[#E4E7E9] rounded-sm p-6 gap-4'>
                        <div className='w-[64px] h-[64px]'>
                          <Image src={"/team8.png"} alt='team' width={100} height={100} className='w-full h-full'/>
                        </div>
                        <div>
                           <h1 className='text-base font-semibold'>Kevin Gilbert</h1>
                           <p className='text-sm font-normal'>Chief Executive Officer</p>
                        </div>
            </div>
        </div>
      </div>

      <div>

        <div className='container my-[72px] sm:grid grid-cols-2 xl:grid-cols-4 gap-6 space-y-3 sm:space-y-0'>
           
           <div className=' space-y-4 '>
           <h1 className='text-base font-semibold mb-4'>FLASH SALE TODAY</h1>

             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/1.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/2.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/3.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
           </div>
           <div className=' space-y-4'>
           <h1 className='text-base font-semibold mb-4'>FLASH SALE TODAY</h1>

             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/4.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/5.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/6.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
           </div>
           <div className=' space-y-4'>
           <h1 className='text-base font-semibold mb-4'>FLASH SALE TODAY</h1>

             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/7.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/8.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/9.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
           </div>
           <div className=' space-y-4'>
           <h1 className='text-base font-semibold mb-4'>FLASH SALE TODAY</h1>

             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/10.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/11.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
             <div className='flex flex-row items-center gap-3 border border-[#E4E7E9] rounded-sm p-3'>
                 <div className='w-[80px] h-[80px]'>
                     <Image src={'/12.png'} alt='image' width={50} height={50} className='w-full h-full'/>
                 </div>
                  <div>
                     <h1 className='text-sm font-normal mb-2'>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h1>
                     <p className='text-sm font-semibold text-[#2DA5F3]'>$1,500</p>
                  </div>
             </div>
           </div>
        </div>
      </div>

    </div>
  )
}

export default About