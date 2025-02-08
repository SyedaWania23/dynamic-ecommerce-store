import React from 'react'
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger className='text-black flex mt-2 '>
  <Menu  />
  <Link href="/login" className="text-lg right-24 absolute text-gray-700 hover:text-teal-200">
              <MdOutlineAccountCircle className="h-[28px] w-[28px]" />
            </Link>
            <Link href="" className="text-3xl text-gray-700 hover:text-teal-200  right-16 absolute">
              <IoIosSearch
               
              />
            </Link>
            
            <Link href="" 
            className="text-lg text-gray-700
             hover:text-teal-200 right-9 absolute">
              <IoIosHeartEmpty className="h-[28px] w-[28px]" />
            </Link>
            <Link href="" className="text-lg text-gray-700
             hover:text-teal-200 right-1 absolute">
              <IoCartOutline className="h-[28px] w-[28px]" />
             </Link>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='w-[20px]'>Menu</SheetTitle>
      <SheetDescription className='  text-[16px] font-poppins gap-3 flex flex-col text-black w-[20px]'>
     
   
          {/* Left side menu items */}
          <Link href="/">Home</Link>
         <Link href="/shop">Shop</Link>
         {/* <Link href="">About</Link> */}
          <Link href="/cart">Cart</Link>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNavbar
