import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className=''>
      <div className='pt-10'>
       < Image src="/a.png" alt='' height={316} width={1440} />
      </div>
      <div className='grid grid-cols-2 pt-16 '>
        <div className='mx-32'>
      <div >
        <h1 className='font-semibold text-[36px] '>Log In</h1>
        <h1 className='mt-5 text-[16px] font-medium'>Username or email address</h1>
        <input type="text" className=' mt-3 border border-[#9F9F9F] rounded-lg h-[75px] w-[423px]' name="" id="" />
        
        </div>
      <div>
        <h1 className='mt-5 text-[16px] font-medium'>Password</h1>
      <input type="text" className='mt-3 border border-[#9F9F9F] rounded-lg h-[75px] w-[423px]' name="" id="" />
      </div>
      <div className='flex '>
        <div className='mt-5 border border-[#9F9F9F] h-[27px] w-[30px]'></div>

<h1 className='mx-3 mt-5'>Remember me</h1>
        
      </div>
      <div className='flex'>
        <button className='mt-5 border h-[64px] w-[215px] rounded-lg border-[#9F9F9F] text-[20px]'>Log In</button>
        <h1 className='mt-10 mx-3'>Lost Your Password?</h1>
      </div>
      </div>
      {/*  */}
      <div className='mx-20'>
        <h1 className='font-semibold text-[36px]'>Register</h1>
        <h1 className='mt-5'>Email Address</h1>
        <div className='mt-3 border border-[#9F9F9F] h-[75px] w-[423px] rounded-lg'></div>
        <h1 className='mt-5'>A link to set a new password will be sent to your email address.</h1>
    
        <h1 className='mt-3  '>Your personal data will be used to support your experience throughout <br />this website, to manage access to your account, and for other purpose <br /> described in our <span className='font-semibold'>
          privacy policy</span></h1>
        
        <button className='mt-16 border h-[64px] w-[215px] rounded-lg border-[#9F9F9F] text-[20px]'>Register</button>

      </div>
      </div>
      {/*  */}
      <div className='bg-[#FAF4F4] mt-20 grid grid-cols-3 h-[300px] items-center  '>
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
