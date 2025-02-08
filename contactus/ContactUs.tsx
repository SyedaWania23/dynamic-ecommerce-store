import React from 'react'
import Image from 'next/image'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className=''>
      <div className=''>
        <Image src="/d.png" alt='' className='pt-10 ' 
        height={316} width={1440}  />
      </div>
      <div>
        <h1 className=' text-[25px] sm:text-[36px] font-semibold flex justify-center pt-16'>Get In Touch With Us</h1>
        <h1 className='text-gray-400 text-center px-4 sm:px-10 md:px-16 lg:px-32'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us 
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </h1>
      </div>
      <div className='flex flex-col sm:flex-row mt-20'>
        <div className='flex-1 space-y-8'>
          <div className='px-4 sm:px-16 md:px-32'>
            <div className='flex'>
              <MdLocationPin className='w-[22px] h-[28px] mt-1' />
              <h1 className='text-[24px] font-medium mx-2'>Address</h1>
            </div>
            <h1 className='text-gray-400'>
              236 5th SE Avenue, New <br /> York NY10000, United <br /> States
            </h1>
          </div>

          <div className='px-4 sm:px-16 md:px-32'>
            <div className='flex'>
              <FaPhone className='mt-3' />
              <h1 className='font-medium text-[24px] mx-3'>Phone</h1>
            </div>
            <h1 className='text-gray-400'>
              Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789
            </h1>
          </div>

          <div className='px-4 sm:px-16 md:px-32'>
            <div className='flex'>
              <FaClock className='mt-3' />
              <h1 className='font-medium text-[24px] ml-2'>Hours</h1>
            </div>
            <h1 className='text-gray-400'>
              Monday-Friday: 9:00 - <br /> 22:00 <br />
              Saturday-Sunday: 9:00 - <br /> 21:00
            </h1>
          </div>
        </div>

        {/* 2nd Section (Contact Form) */}
        <div className='flex-1 space-y-9  mr-4 sm:mr-20'>
          <div>
            <h1 className='pt-9  mx-2 sm:pt-0'>Your Name</h1>
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder='Abc' 
              className='border mt-3 border-gray-400 px-5 mx-2
               h-[60px] xl:w-[528px] w-full lg:w-[450px] rounded-lg' 
            />
          </div>
          <div>
            <h1 className='mx-2'>Email Address</h1>
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder='Abc@def.com' 
              className='border mt-3 border-gray-400 px-5 h-[60px] w-full mx-2 lg:w-[450px] rounded-lg xl:w-[528px] ' 
            />
          </div>
          <div>
            <h1 className='mx-2'>Subject</h1>
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder='This is an optional' 
              className='border mt-3 border-gray-400 px-5 
              h-[60px] mx-2 w-full lg:w-[450px] xl:w-[528px]  rounded-lg' 
            />
          </div>
          <div>
            
            <h1 className='mx-2'> Message</h1>
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder='Hi! I’d like to ask about' 
              className='border mt-3 border-gray-400 px-5
               h-[60px] w-full mx-2 lg:w-[450px] rounded-lg xl:w-[528px] ' 
            />
          </div>
          <div>
            <button className='h-[48px] w-full sm:w-[237px] border border-black rounded-xl mx-aut block mx-2 mt-4'>
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Information Section (Free Delivery, 90 Days Return, Secure Payment) */}
      <div className='bg-[#FAF4F4] mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-32 py-16'>
        <div className='text-center'>
          <h1 className='text-[32px] font-semibold'>Free Delivery</h1>
          <p>100% secure payment, consectetur <br />adipiscing elit</p>
        </div>
        <div className='text-center'>
          <h1 className='text-[32px] font-semibold'>90 Days Return</h1>
          <p>If goods have problems, consectetur <br />adipiscing elit.</p>
        </div>
        <div className='text-center'>
          <h1 className='text-[32px] font-semibold'>Secure Payment</h1>
          <p>For all orders over $50, consectetur <br />adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
