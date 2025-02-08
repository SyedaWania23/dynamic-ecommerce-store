import React from 'react'
import Image from 'next/image'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";


const page = () => {
  return (
    <div className=''>
      <div>
<Image src="/d.png" alt='' className='pt-10' height={316} width={1440}/>
      </div>
      <div>
        <h1 className='text-xs sm:text-[36px] font-medium md:font-semibold 
        flex px-3 justify-center pt-16'>Get In Touch With Us</h1>
        <h1 className='text-gray-400 text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h1>
      </div>
      <div className='flex  mt-20 '>
        <div className='flex-1  space-y-8  '>
      <div className='px-60 '>
        <div className='flex '>
      <MdLocationPin className='w-[22px] h-[28px] mt-1' />
        <h1 className='text-[24px]  font-medium mx-2 '>Address</h1></div>
        <h1 className='text-gray-400'>
        236 5th SE Avenue, New <br /> York NY10000, United <br /> States 
        </h1>
      </div>

      {/*  */}
      <div className='px-60'>
        <div className='flex'>
        <FaPhone className='mt-3'/>
<h1 className='font-medium text-[24px] mx-3'>Phone</h1></div>
<h1 className='text-gray-400 mx-24'>Mobile: +(84) 546-6789 <br />
Hotline: +(84) 456-6789</h1>
</div>

<div className='px-60'>
    <div className='flex'>
    <FaClock className='mt-3'/>
    <h1 className='font-medium text-[24px] ml-2'>Working Time</h1></div>
    <h1 className='text-gray-400'>Monday-Friday: 9:00 - <br /> 22:00 <br />
    Saturday-Sunday: 9:00 - <br /> 21:00</h1>
</div>
</div>
{/* 2nd section */}
<div className='flex-1 space-y-8 mr-20'>
    <div>
        <h1>Your Name</h1>
        <input type="text" name="" id="" placeholder='Abc' className='border mt-3 border-gray-400 px-5 h-[75px] w-[528px] rounded-lg' />
    </div>
    <div>
        <h1>Email Address</h1>
        <input type="text" name="" id="" placeholder='Abc@def.com' className='border mt-3 border-gray-400 px-5 h-[75px] w-[528px] rounded-lg' />
    </div>
    <div>
        <h1>Subject</h1>
        <input type="text" name="" id="" placeholder='This is an optional' className='border mt-3 border-gray-400 px-5 h-[75px] w-[528px] rounded-lg' />
    </div>
    <div>
        <h1>Message</h1>
        <input type="text" name="" id="" placeholder='Hi! i’d like to ask about' className='border mt-3 border-gray-400 px-5 h-[75px] w-[528px] rounded-lg' />
    </div>
    <div><button className='h-[48px] w-[237px] border border-black rounded-xl mx-36'>Submit</button></div>
</div>
</div>

<div className='bg-[#FAF4F4] mt-14 grid grid-cols-3 h-[300px] items-center  '>
        <div className=''>
        <h1 className='text-[32px]  font-semibold mx-20'>Free Delivery</h1>
        
        <p className=' mx-20 '>100% secure payment, consectetur <br />adipim scing elit</p>
        </div>
        <div>
        <h1 className='text-[32px] mx-20 font-semibold'>90 Days Return</h1>
        <p className='mx-20'>If goods have problems, consectetur <br /> adipim scing elit.</p>
        </div>
        <div>
        <h1 className='text-[32px] mx-20 font-semibold'>Secure Payment</h1>
        <p className='mx-20'>For all oders over $50, consectetur <br /> adipim scing elit.</p>
        </div>
      </div>
    
    </div>
  )
}

export default page
