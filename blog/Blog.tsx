import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className=''>
      <div className='pt-10'>
        <Image src="/blog1.png" alt='' height={316} width={1440} />
      </div>

      <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 p-4 lg:ml-44'>
        <div className='flex-1'>
          {/* Blog Post 1 */}
          <div className='pt-10'>
            <Image src="/blog2.png" alt='' height={500} 
            width={817} />
            <h1 className='text-[30px] lg:text-[22px]  font-medium xl:text-[30px]'>Going all with millennial design</h1>
            <p className='text-gray-400 text-[10px]
             sm:text-[15px]'>
              Lorem ipsum, dolor sit amet consectetur adi elit. Enim natus necessitatibus aspernatur numquam dicta facilis
             
              distinct unde earum. Adipisci aliquid illo quis nesciunt at ullam quia expedita totam placeat ratione. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Saepe temporibus voluptatem accusamus ratione tempore voluptas eiusimggby.
              
              Recusandae sit aspernatur, autem illo nemo consequuntur molestias amet repellab.
            </p>
            <h1 className='underline text-[16px] pt-6'>Read More</h1>
          </div>

          {/* Blog Post 2 */}
          <div className='pt-10'>
            <Image src="/blog3.png" alt='' height={500} width={817} className='' />
            <h1 className='text-[30px] font-medium lg:text-[22px] xl:text-[30px] '>Going all-in with millennial design</h1>
            <p className='text-gray-400 sm:text-[15px] text-[10px]'>
            Lorem ipsum, dolor sit amet consectetur adi elit. Enim natus necessitatibus aspernatur numquam dicta facilis
             
             distinct unde earum. Adipisci aliquid illo quis nesciunt at ullam quia expedita totam placeat ratione. Lorem ipsum
             dolor sit amet consectetur adipisicing elit. Saepe temporibus voluptatem accusamus ratione tempore voluptas eiusimggby.
             
             Recusandae sit aspernatur, autem illo nemo consequuntur molestias amet repellab.
            </p>
            <h1 className='underline text-[16px]  pt-6'>Read More</h1>
          </div>

          {/* Blog Post 3 */}
          <div className='pt-10'>
            <Image src="/blog4.png" alt='' height={500} 
            width={817} />
            <h1 className='text-[30px] font-medium lg:text-[22px] xl:text-[30px]'>Going all-in with millennial design</h1>
            <p className='text-gray-400 text-[10px] sm:text-[15px]'>
            Lorem ipsum, dolor sit amet consectetur adi elit. Enim natus necessitatibus aspernatur numquam dicta facilis
             
             distinct unde earum. Adipisci aliquid illo quis nesciunt at ullam quia expedita totam placeat ratione. Lorem ipsum
             dolor sit amet consectetur adipisicing elit. Saepe temporibus voluptatem accusamus ratione tempore voluptas eiusimggby.
             
             Recusandae sit aspernatur, autem illo nemo consequuntur molestias amet repellab.
            </p>
            <h1 className='underline text-[16px]  pt-6'>Read More</h1>
          </div>
        </div>

        {/* Sidebar */}
        <div className='flex-1'>
          <div className="border  rounded-md px-4 py-2 w-full lg:w-[243px] focus-within:border-[#c38b2a] flex items-center mt-10 ">
            <input
              type="text"
              className="w-full  bg-transparent outline-none text-sm text-gray-700 "
            />
            <FaSearch className="h-[24px] w-[24px] text-[#767373]" />
          </div>

          <div className='space-y-8'>
            <h1 className='text-[24px] font-medium mt-5'>Categories</h1>
            <div className='flex justify-between'>
              <h1 className='text-gray-400'>Crafts</h1>
              <h1 className='text-gray-400 mx-16 lg:mx-56'>2</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-gray-400 text-[16px]'>Designs</h1>
              <h1 className='gap-20 lg:gap-60 flex text-gray-400 mx-16 lg:mx-56'>8</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-gray-400 text-[16px]'>HandMade</h1>
              <h1 className='text-gray-400 text-[16px] mx-16 lg:mx-56'>7</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-gray-400 text-[16px]'>Interior</h1>
              <h1 className='text-gray-400 mx-16 lg:mx-56'>5</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='text-gray-400 text-[16px] '>Wood</h1>
              <h1 className='text-gray-400 mx-16 lg:mx-56'>8</h1>
            </div>

            {/* Recent Posts */}
            <div>
              <h1 className='text-[24px] font-medium mt-5'>Recent Posts</h1>

              {/* First Recent Post */}
              <div className='flex items-center gap-4 mt-5'>
                <Image src="/k.png" alt='' height={80} width={80} />
                <div>
                  <h1 className='text-[14px]'>Going all-in  <br />with millennial design</h1>
                  <h1 className='text-gray-400 text-[12px]'>03 Aug 2022</h1>
                </div>
              </div>

              {/* Second Recent Post */}
              <div className='flex items-center gap-4 mt-5'>
                <Image src="/m.png" alt='' height={80} width={80} />
                <div>
                  <h1 className='text-[14px]'>
                    Colorful office  <br />redesign</h1>
                  <h1 className='text-gray-400 text-[12px]'>03 Aug 2022</h1>
                </div>
              </div>

              {/* Third Recent Post */}
              <div className='flex items-center gap-4 mt-5'>
                <Image src="/k.png" alt='' height={80} width={80} />
                <div>
                  <h1 className='text-[14px]'>Exploring new ways <br /> of decorating</h1>
                  <h1 className='text-gray-400 text-[12px]'>03 Aug 2022</h1>
                </div>
              </div>

              {/* Fourth Recent Post */}
              <div className='flex items-center gap-4 mt-5'>
                <Image src="/m2.png" alt='' height={80} width={80} />
                <div>
                  <h1 className='text-[14px]'>Handmade pieces <br /> that took time to make</h1>
                  <h1 className='text-gray-400 text-[12px]'>03 Aug 2022</h1>
                </div>
              </div>

              {/* Fifth Recent Post */}
              <div className='flex items-center gap-4 mt-5'>
                <Image src="/m3.png" alt='' height={80} width={80} />
                <div>
                  <h1 className='text-[14px]'>Modern home in <br />milan</h1>
                  <h1 className='text-gray-400 text-[12px]'>03 Aug 2022</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-5 justify-center pt-10'>
        <div className='bg-[#FFF9E5] h-[60px] w-[50px] rounded-md p-5 flex items-center justify-center  sm:w-[60px]'>1</div>
        <div className='bg-[#FFF9E5] h-[60px] w-[50px] rounded-md p-5 flex items-center justify-center  sm:w-[60px]'>2</div>
        <div className='bg-[#FFF9E5] h-[60px] w-[50px] rounded-md p-5 flex items-center justify-center  sm:w-[60px]'>3</div>
        <div className='bg-[#FFF9E5] h-[60px] w-[90px]
         sm:w-[98px] rounded-md p-5 flex items-center justify-center '>Next</div>
      </div>
    </div>
  );
};

export default Blog;
