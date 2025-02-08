
// // static data
// import React from 'react'
// import Image from 'next/image'
// import { VscListFilter } from "react-icons/vsc";
// import { PiDotsSixBold } from "react-icons/pi";
// import { BsViewList } from "react-icons/bs";
// import { client } from "@/sanity/lib/client";

// async function getData() {
//   const fetchData = await client.fetch(`*[_type == "product"] {
//     name,
//     "imageUrl": image.asset->url,
//     price,
//     description,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel,
//     category,
//     imagePath
//   }`);
//   return fetchData;
// }

// // DataFetch component to display the fetched data
// export default async function DataFetch() {
//   const data = await getData(); // Data fetch ho gaya
//   console.log(data); 

//   return (
//     <div>

// <div className="pt-8 sm:pt-10 md:pt-0 lg:pt-0">
//   <Image 
//     src="/shop.png" 
//     alt="Shop Banner" 
//     width={1440} 
//     height={316} 
//     layout="responsive"
//     className="w-full"  // Ensures the image takes the full width of the container
//   />
// </div>
// <div className='bg-[#FAF4F4] gap-2 sm:gap-10 p-2 sm:p-6 md:p-10 flex items-center w-full h-[100px]'>
//   {/* Menu bar */}
//   <div className="flex  gap-2">
//     <VscListFilter />
//     <h1 className="text-xs sm:text-sm md:text-base hidden sm:block">Filter</h1>
//     <PiDotsSixBold />
//   </div>

//   <BsViewList className="hidden sm:block" />
//   <h1 className="hidden sm:block">|</h1>

//   <p className=' text-[10px] sm:text-sm md:text-base'>
//     Showing 1-16 of 32 results
//   </p>

//   <div className='flex items-center gap-2 sm:px-10  md:px-16 ml-5 justify-end'>
//     <h1 className=' text-[10px] sm:text-sm md:text-base'>Show</h1>
//     <p className='bg-white text-center  text-[10px] sm:text-sm md:text-base'>
//       16
//     </p>
//     <h1 className='  ml-2 text-[10px] sm:text-sm md:text-base'>
//       Short
//     </h1>
//     <h2 className='bg-white  rounded-md  text-start p-2 sm:p-4 md:p-6 text-[10px] sm:text-sm md:text-base'>
//       Default
//     </h2>
//   </div>
// </div>

// <div className="flex flex-wrap justify-center gap-[20px] px-4  w-full font-poppins text-[#000000] font-semibold">
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/ss2.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
//     <h1 className="text-[#DB4444] text-center">$269</h1>
//   </div>

//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side3.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
//     <h1 className="text-[#DB4444] text-center">$669</h1>
//   </div>

//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side2.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">IPS LCD chair</h1>
//     <h1 className="text-[#DB4444] text-center">$169</h1>
//   </div>

//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side4.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
//     <h1 className="text-[#DB4444] text-center text-[16px]">$289</h1>
//   </div>
// </div>
// <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
//   {/* First Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/coffee-table.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
//     <h1 className="text-[#DB4444] text-center">$269</h1>
//   </div>

//   {/* Second Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side3.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
//     <h1 className="text-[#DB4444] text-center">$669</h1>
//   </div>

//   {/* Third Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/ss2.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">IPS LCD chair</h1>
//     <h1 className="text-[#DB4444] text-center">$169</h1>
//   </div>

//   {/* Fourth Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/ss.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
//     <h1 className="text-[#DB4444] text-center text-[16px]">$289</h1>
//   </div>
// </div>
// <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
//   {/* First Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/ss3.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
//     <h1 className="text-[#DB4444] text-center">$269</h1>
//   </div>

//   {/* Second Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side3.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
//     <h1 className="text-[#DB4444] text-center">$669</h1>
//   </div>

//   {/* Third Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side2.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">IPS LCD chair</h1>
//     <h1 className="text-[#DB4444] text-center">$169</h1>
//   </div>

//   {/* Fourth Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side4.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
//     <h1 className="text-[#DB4444] text-center text-[16px]">$289</h1>
//   </div>
// </div>
// <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
//   {/* First Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/s.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">HAVIT HV-G table chair</h1>
//     <h1 className="text-[#DB4444] text-center">$269</h1>
//   </div>

//   {/* Second Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side3.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">AK-900 Wired chair</h1>
//     <h1 className="text-[#DB4444] text-center">$669</h1>
//   </div>

//   {/* Third Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/coffee-table.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">IPS LCD chair</h1>
//     <h1 className="text-[#DB4444] text-center">$169</h1>
//   </div>

//   {/* Fourth Product */}
//   <div className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//     <Image
//       src="/side4.png"
//       alt=""
//       className="h-[250px] w-full object-cover"
//       height={250}
//       width={270}
//     />
//     <h1 className="mt-3 text-center">S-Series Comfort Chair</h1>
//     <h1 className="text-[#DB4444] text-center text-[16px]"></h1>
//   </div>
// </div>


// <div className='flex flex-wrap justify-center gap-5 pt-10'>
//   {/* 1st */}
//   <div className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
//     1
//   </div>

//   {/* 2nd */}
//   <div className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
//     2
//   </div>

//   {/* 3rd */}
//   <div className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
//     3
//   </div>

//   {/* 4th (Next button) */}
//   <div className='bg-[#FBEBB5] h-[60px] w-[98px] sm:w-[120px] md:w-[150px] rounded-md p-5 flex items-center justify-center'>
//     Next
//   </div>
// </div>
// <div className="flex flex-wrap justify-evenly bg-[#FAF4F4] mt-20 items-center py-8 pb-28">
//   {/* Free and Fast Delivery */}
//   <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
//     <div className="items-center flex justify-center w-[80px] h-[80px] mx-auto mb-4">
//       {/* Icon can be added here */}
//     </div>
//     <h1 className="text-[24px] sm:text-[32px] font-medium">FAST DELIVERY</h1>
//     <h1 className="text-[12px] sm:text-[14px] text-gray-400">
//       For all orders over $50, consectetur adipiscing elit.
//     </h1>
//   </div>

//   {/* 90 Days Return */}
//   <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
//     <div className="items-center flex justify-center w-[80px] h-[80px] mx-auto mb-4">
//       {/* Icon can be added here */}
//     </div>
//     <h1 className="text-[24px] sm:text-[32px] font-medium">90 Days Return</h1>
//     <h1 className="text-[12px] sm:text-[14px] text-gray-400">
//       For all orders over $50, consectetur adipiscing elit.
//     </h1>
//   </div>

//   {/* Secure Payment */}
//   <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
//     <div className="items-center flex justify-center w-[80px] h-[80px] mx-auto mb-4">
//       {/* Icon can be added here */}
//     </div>
//     <h1 className="text-[24px] sm:text-[32px] font-medium">Secure Payment</h1>
//     <h1 className="text-[12px] sm:text-[14px] text-gray-400">
//       We return money within 30 days.
//     </h1>
//   </div>
// </div>
// </div>
//   )
// }

// 888888888888888888888888888888888888888888888888888

// dynamic content from sanity


// import React from 'react';
// import Image from 'next/image';
// import { VscListFilter } from "react-icons/vsc";
// import { PiDotsSixBold } from "react-icons/pi";
// import { BsViewList } from "react-icons/bs";
// import { client } from "@/sanity/lib/client";

// // Type definition for a single product
// interface Product {
//   name: string;
//   imageUrl: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
//   imagePath: string;
// }

// // Fetching data from Sanity
// async function getData() {
//   const fetchData: Product[] = await client.fetch(`*[_type == "product"] {
//     name,
//     "imageUrl": image.asset->url,
//     price,
//     description,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel,
//     category,
//     imagePath
//   }`);
//   return fetchData;
// }

// // Shop component that will display the fetched products
// export default async function DataFetch() {
//   const data = await getData(); // Fetch data from Sanity
//   console.log(data); // Just for debugging, you can remove it later

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="pt-8 sm:pt-10 md:pt-0 lg:pt-0">
//         <Image 
//           src="/shop.png" 
//           alt="Shop Banner" 
//           width={1440} 
//           height={316} 
//           layout="responsive"
//           className="w-full"  // Ensures the image takes the full width of the container
//         />
//       </div>

//       {/* Filter and Pagination Section */}
//       <div className='bg-[#FAF4F4] gap-2 sm:gap-10 p-2 sm:p-6 md:p-10 flex items-center w-full h-[100px]'>
//         <div className="flex gap-2">
//           <VscListFilter />
//           <h1 className="text-xs sm:text-sm md:text-base hidden sm:block">Filter</h1>
//           <PiDotsSixBold />
//         </div>
//         <BsViewList className="hidden sm:block sm:text-[30px] lg:text-[15px]" />
//         <h1 className="hidden sm:block">|</h1>
//         <p className=' text-[10px] sm:text-[12px] xl:text-[17px]'>
//           Showing 1-16 of {data.length} results
//         </p>

//         <div className='flex items-center gap-2 sm:px-10  md:px-16 ml-5 justify-end'>
//           <h1 className=' text-[10px] sm:text-sm md:text-base'>Show</h1>
//           <p className='bg-white text-center  text-[10px] sm:text-sm md:text-base'>
//             16
//           </p>
//           <h1 className=' ml-2 text-[10px] sm:text-sm md:text-base'>
//             Short
//           </h1>
//           <h2 className='bg-white  rounded-md  text-start p-2 sm:p-4 md:p-6 text-[10px] sm:text-sm md:text-base'>
//             Default
//           </h2>
//         </div>
//       </div>
     

//       {/* Product Cards Section */}
//       <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
//         {data.map((product: Product, index: number) => (
//           <div key={index} className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//             {/* Conditional rendering for image */}
//             {product.imageUrl ? (
//               <Image
//                 src={product.imageUrl}  // Dynamically load the image URL
//                 alt={product.name}
//                 className="h-[250px] w-full object-cover"
//                 height={250}
//                 width={270}
//               />
//             ) : (
//               <div className="h-[250px] w-full bg-gray-300 flex items-center justify-center"> {/* Placeholder if no image */}
//                 <span>No Image</span>
//               </div>
//             )}
//             <h1 className="mt-3 text-center">{product.name}</h1>
//             <h1 className="text-[#DB4444] text-center">{`$${product.price}`}</h1>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Section */}
//       <div className='flex flex-wrap justify-center gap-5 pt-10'>
//         {/* Pagination buttons */}
//         {[1, 2, 3].map((pageNumber: number) => (
//           <div key={pageNumber} className='bg-[#FBEBB5] h-[60px] w-[60px] sm:w-[80px] md:w-[100px] rounded-md p-5 flex items-center justify-center'>
//             {pageNumber}
//           </div>
//         ))}
//         <div className='bg-[#FBEBB5] h-[60px] w-[98px] sm:w-[120px] md:w-[150px] rounded-md p-5 flex items-center justify-center'>
//           Next
//         </div>
//       </div>

//       {/* Free Delivery, Return, Payment Section */}
//       <div className="flex flex-wrap justify-evenly bg-[#FAF4F4] mt-20 items-center py-8 pb-28">
//         <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
//           <h1 className="text-[24px] sm:text-[32px] font-medium">FAST DELIVERY</h1>
//           <h1 className="text-[12px] sm:text-[14px] text-gray-400">
//             For all orders over $50, consectetur adipiscing elit.
//           </h1>
//         </div>
//         <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
//           <h1 className="text-[24px] sm:text-[32px] font-medium">90 Days Return</h1>
//           <h1 className="text-[12px] sm:text-[14px] text-gray-400">
//             For all orders over $50, consectetur adipiscing elit.
//           </h1>
//         </div>
//         <div className="text-center mb-6 sm:mb-0 w-full sm:w-auto">
//           <h1 className="text-[24px] sm:text-[32px] font-medium">Secure Payment</h1>
//           <h1 className="text-[12px] sm:text-[14px] text-gray-400">
//             We return money within 30 days.
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
// dynamic data hook component say liya gyaa wo wala jo hr jagah aik component say import kra sktay
// src/pages/ShopPage.tsx


// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { useFetchData } from '@/hooks/useFetchData'; // Import the custom hook

// export default function ShopPage() {
//   // Define the query for fetching product data
//   const query = `*[_type == "product"] {
//     name,
//     "imageUrl": image.asset->url,
//     price,
//     description,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel,
//     category,
//     imagePath
//   }`;

//   // Use the custom hook to fetch data
//   const { data, loading, error } = useFetchData(query);

//   if (loading) return <div>Loading...</div>; // Show loading while fetching data
//   if (error) return <div>{error}</div>;     // Show error message if something goes wrong

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="pt-8 sm:pt-10 md:pt-0 lg:pt-0">
//         <Image 
//           src="/shop.png" 
//           alt="Shop Banner" 
//           width={1440} 
//           height={316} 
//           layout="responsive"
//           className="w-full"
//         />
//       </div>

//       {/* Product Cards Section */}
//       <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
//         {data.map((product: Product, index: number) => (
//           <div key={index} className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//             {product.imageUrl ? (
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="h-[250px] w-full object-cover"
//                 height={250}
//                 width={270}
//               />
//             ) : (
//               <div className="h-[250px] w-full bg-gray-300 flex items-center justify-center">
//                 <span>No Image</span>
//               </div>
//             )}
//             <h1 className="mt-3 text-center">{product.name}</h1>
//             <h1 className="text-[#DB4444] text-center">{`$${product.price}`}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import React from 'react';
import Image from 'next/image';
import { useFetchData } from '@/hooks/useFetchData'; // Import the custom hook
import Link from 'next/link';

// Define the Product type with the slug field
interface Product {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  imagePath: string;
  slug:{
    _type:"Slug";
    current:string;
  }; // Added slug field
}

export default function ShopPage() {
  // Define the query for fetching product data
  const query = `*[_type == "product"] {
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    imagePath,
    slug // Add slug to the query
  }`;

  // Use the custom hook to fetch data
  const { data, loading, error } = useFetchData(query);

  if (loading) return <div>Loading...</div>; // Show loading while fetching data
  if (error) return <div>{error}</div>;     // Show error message if something goes wrong

  return (
    <div>
      {/* Banner Section */}
      <div className="pt-8 sm:pt-10 md:pt-0 lg:pt-0">
        <Image 
          src="/shop.png" 
          alt="Shop Banner" 
          width={1440} 
          height={316} 
          layout="responsive"
          className="w-full"
        />
      </div>

      {/* Product Cards Section */}
     <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
        {data.map((product: Product, index: number) => (
          
          <div key={index} className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
 <Link
                href={`/product/${product.slug.current}`} // Use the slug dynamically in the URL
                className="text-center text-blue-500"
              >
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="h-[250px] w-full object-cover"
                height={250}
                width={270}
              />
            ) : (
              <div className="h-[250px] w-full bg-gray-300 flex items-center justify-center">
                <span>No Image</span>
              </div>
            )}
            <h1 className="mt-3 text-center">{product.name}</h1>
            <h1 className="text-[#DB4444] text-center">{`$${product.price}`}</h1>

        
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

























// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { useDispatch } from 'react-redux';
// import { addToCart } from "../redux/cartslice"; // Relative path

// import { useFetchData } from '@/hooks/useFetchData'; // Import custom hook

// export default function ShopPage() {
//   // Define the query for fetching product data
//   const query = `*[_type == "product"] {
//     name,
//     "imageUrl": image.asset->url,
//     price,
//     description,
//     discountPercentage,
//     isFeaturedProduct,
//     stockLevel,
//     category,
//     imagePath
//   }`;

  

//   // Use the custom hook to fetch data
//   const { data, loading, error } = useFetchData(query);
//   const dispatch = useDispatch(); // Redux dispatch to add product to cart

//   if (loading) return <div>Loading...</div>; // Show loading while fetching data
//   if (error) return <div>{error}</div>;     // Show error message if something goes wrong

//   const handleAddToCart = (product: any) => {
//     dispatch(addToCart(product)); // Dispatch action to add the product to the cart
//   };

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="pt-8 sm:pt-10 md:pt-0 lg:pt-0">
//         <Image 
//           src="/shop.png" 
//           alt="Shop Banner" 
//           width={1440} 
//           height={316} 
//           layout="responsive"
//           className="w-full"
//         />
//       </div>

//       {/* Product Cards Section */}
//       <div className="flex flex-wrap justify-center gap-[20px] px-4 w-full font-poppins text-[#000000] font-semibold">
//         {data.map((product: any, index: number) => (
//           <div key={index} className="h-auto w-full sm:w-[270px] md:w-[270px] lg:w-[270px] xl:w-[270px]">
//             {product.imageUrl ? (
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="h-[250px] w-full object-cover"
//                 height={250}
//                 width={270}
//               />
//             ) : (
//               <div className="h-[250px] w-full bg-gray-300 flex items-center justify-center">
//                 <span>No Image</span>
//               </div>
//             )}
//             <h1 className="mt-3 text-center">{product.name}</h1>
//             <h1 className="text-[#DB4444] text-center">{`$${product.price}`}</h1>

//             {/* Add to Cart Button */}
//             <button
//               onClick={() => handleAddToCart(product)} // Call handleAddToCart on click
//               className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
