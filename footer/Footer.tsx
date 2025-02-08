
import React from 'react';

const Footer = () => {
  return (
    <div>


<footer className="text-gray-600 body-font">
  <div className="container px-16 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
  
        {/* Address Section */}
         <div className="flex-1 ">           
          <h1 className="text-gray-400 pt-32 ">
             400 University Drive Suite 200 Coral <br /> Gables, <br />
             FL 33134 USA
           </h1>
        </div>
      </div>

{/* ****88 */}
 

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">     
        <nav className="list-none">
           {/* Links Section */}
           <div className="flex-1 flex flex-col items-start pt-10 space-y-2 gap-[24px] mx-10">
           <h1 className="text-[#9F9F9F] tracking-widest mb-3 text-base">Links</h1>
           <h1 className="font-medium text-base">Home</h1>
           <h1 className="font-medium text-base">About</h1>
           <h1 className="font-medium text-base">Login</h1>
           <h1 className="font-medium text-base">Cart</h1>
           <h1 className="font-medium text-base">Wishlist  
            </h1>         </div>
        </nav>
      </div>
      
           {/* Quick Links Section */} 

<div className="lg:w-1/4 md:w-1/2 w-full px-4">     
        <nav className="list-none">
           {/* Links Section */}
           <div className="flex-1 flex flex-col items-start pt-10 space-y-2 gap-[24px] mx-7">
           <h1 className="text-[#9F9F9F] tracking-widest mb-3 text-base">Help</h1>
           <h1 className="font-medium text-base">Privacy Policy</h1>
           <h1 className="font-medium text-base">Terms Of Use</h1>
           <h1 className="font-medium text-base">FAQ</h1>
           <h1 className="font-medium text-base">Contact</h1>
       
                     </div>
        </nav>
      </div>



      <div className="lg:w-1/4 md:w-1/2 w-full ">
        <h2 className="text-[#9F9F9F] tracking-widest text-[16px] pt-10">Newsletter</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input
              type="text"
              placeholder="Enter your email Address"
              className="border-white underline placeholder-gray-500  pt-8"
            />
             
          </div>
          <h1 className="underline lg:mt-2 xl:mt-0 flex-shrink-0 px-4  text-black text-medium text-base">Subscribe</h1>
        </div>
      </div>
    </div>
     {/* Footer Bottom Section */}
      <div className="border-t  border-gray-300  mt-5 pt-5">
         <h1 className="text-center lg:text-start  text-[16px]">
           2022 Meubel House. All rights reserved
         </h1>
      </div>
  </div>
  

</footer>
</div>
  );}
 export default Footer;