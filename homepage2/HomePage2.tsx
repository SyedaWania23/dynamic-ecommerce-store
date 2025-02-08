// import React from "react";
// import Image from "next/image";

// const HomePage2 = () => {
//   return (
//     <div className="">
//       {/* Hero Image */}
//       <div className="w-full bg-[#FBEBB5] h-auto">
//         <Image
//           src="/h.png"
//           alt="hero"
//           className="w-full object-cover"
//           height={900}
//           width={1440}
//         />
//       </div>

//       {/* Second Image Section */}
//       <div>
//         <Image
//           src="/side.png"
//           alt="side image"
//           className="w-full object-cover"
//           height={672}
//           width={1440}
//         />
//       </div>

//       {/* Section Title */}
//       <div className="text-center items-center  py-10">
//         <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">
//           Top Picks For You
//         </h1>
//         <h1 className="font-medium text-sm sm:text-base text-[#9F9F9F] mt-4 px-4 mx-auto w-full">
//           Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
//         </h1>
//       </div>

//       {/* Cards Section */}
//       <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center mx-4 ">
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/side2.png"
//             alt="card 1"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 text-center pt-6">HAVIT HV-G92 Chairs</h1>
//           <h1 className="text-[#DB4444] text-center">$269</h1>
//         </div>
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/side3.png"
//             alt="card 2"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 text-center pt-6">AK-900 Wired Chairs</h1>
//           <h1 className="text-[#DB4444] text-center">$669</h1>
//         </div>
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/side4.png"
//             alt="card 3"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 text-center pt-6">IPS LCD chair table</h1>
//           <h1 className="text-[#DB4444] text-center">$169</h1>
//         </div>
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/side5.png"
//             alt="card 4"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 text-center pt-6">S-Series Comfort Chair</h1>
//           <h1 className="text-[#DB4444] text-[16px] text-center">$289</h1>
//         </div>
//       </div>

//       {/* Large Image Section */}
//       <div className="mt-8">
//         <Image
//           src="/sofa.png"
//           alt="sofa image"
//           className="w-full object-cover"
//           height={799}
//           width={1476}
//         />
//       </div>

//       {/* Blog Section Title */}
//       <div className="text-center mt-10 px-4 sm:px-16 lg:px-72">
//         <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">Our Blogs</h1>
//         <h1 className="font-medium text-sm sm:text-base text-[#9F9F9F] mt-4 px-4   mx-auto w-full ">
//           Find a bright ideal to suit your taste with our great selection.
//         </h1>
//       </div>

//       {/* Blog Cards Section */}
//       <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center mx-4   pt-8">
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/b.png"
//             alt="blog 1"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 font-extralight">Going all-in with millennial type.....</h1>
//           <h1 className="text-center underline mt-4">Read More</h1>
//         </div>
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/b2.png"
//             alt="blog 2"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 font-extralight">Going all-in with millennial type.....</h1>
//           <h1 className="text-center underline mt-4">Read More</h1>
//         </div>
//         <div className="h-[350px] w-full sm:w-[270px]">
//           <Image
//             src="/b3.png"
//             alt="blog 3"
//             className="h-[250px] w-full object-cover"
//             height={250}
//             width={270}
//           />
//           <h1 className="mt-3 font-extralight">Going all-in with millennial type.....</h1>
//           <h1 className="text-center underline mt-4">Read More</h1>
//         </div>
//       </div>

//       <div className="text-center pt-20 text-[20px] font-semibold underline">
//         View All Post
//       </div>

//       {/* Instagram Section */}
//       <div className="pt-14">
//         <Image
//           src="/insta.png"
//           alt="Instagram"
//           className="w-full object-cover"
//           height={450}
//           width={1440}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage2;
"use client"

import React from "react";
import Image from "next/image";
import { useFetchData } from '@/hooks/useFetchData'; // Ensure hook is imported

const HomePage2 = () => {
  // Define query to fetch 4 "Top Picks" from Sanity
  const query = `*[_type == "product" && topPick == true]{
    name,
    "imageUrl": image.asset->url,
    price,
    description
  }[0...4]`; // Only fetch 4 top picks

  // Use the custom hook to fetch data
  const { data, loading, error } = useFetchData(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      {/* Hero Image */}
      <div className="w-full bg-[#FBEBB5] h-auto">
        <Image
          src="/h.png"
          alt="hero"
          className="w-full object-cover"
          height={900}
          width={1440}
        />
      </div>

      {/* Second Image Section */}
      <div>
        <Image
          src="/side.png"
          alt="side image"
          className="w-full object-cover"
          height={672}
          width={1440}
        />
      </div>

      {/* Section Title */}
      <div className="text-center items-center py-10">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">
          Top Picks For You
        </h1>
        <h1 className="font-medium text-sm sm:text-base text-[#9F9F9F] mt-4 px-4 mx-auto w-full">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </h1>
      </div>

      {/* Cards Section - Displaying fetched data */}
      <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center mx-4">
        {data.length > 0 ? (
          data.map((product: any, index: number) => (
            <div key={index} className="h-[350px] w-full sm:w-[270px]">
              <Image
                src={product.imageUrl || "/placeholder.png"} // Placeholder if image is missing
                alt={product.name}
                className="h-[250px] w-full object-cover"
                height={250}
                width={270}
              />
              <h1 className="mt-3 text-center pt-6">{product.name}</h1>
              <h1 className="text-[#DB4444] text-center">${product.price}</h1>
            </div>
          ))
        ) : (
          <div>No Top Picks available</div>
        )}
      </div>

      {/* Large Image Section */}
      <div className="mt-8">
        <Image
          src="/sofa.png"
          alt="sofa image"
          className="w-full object-cover"
          height={799}
          width={1476}
        />
      </div>

      {/* Blog Section Title */}
      <div className="text-center mt-10 px-4 sm:px-16 lg:px-72">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">Our Blogs</h1>
        <h1 className="font-medium text-sm sm:text-base text-[#9F9F9F] mt-4 px-4 mx-auto w-full">
          Find a bright ideal to suit your taste with our great selection.
        </h1>
      </div>

      {/* Blog Cards Section */}
      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center mx-4 pt-8">
        <div className="h-[350px] w-full sm:w-[270px]">
          <Image
            src="/b.png"
            alt="blog 1"
            className="h-[250px] w-full object-cover"
            height={250}
            width={270}
          />
          <h1 className="mt-3 font-extralight">Going all-in with millennial type.....</h1>
          <h1 className="text-center underline mt-4">Read More</h1>
        </div>
        <div className="h-[350px] w-full sm:w-[270px]">
          <Image
            src="/b2.png"
            alt="blog 2"
            className="h-[250px] w-full object-cover"
            height={250}
            width={270}
          />
          <h1 className="mt-3 font-extralight">Going all-in with millennial type.....</h1>
          <h1 className="text-center underline mt-4">Read More</h1>
        </div>
        <div className="h-[350px] w-full sm:w-[270px]">
          <Image
            src="/b3.png"
            alt="blog 3"
            className="h-[250px] w-full object-cover"
            height={250}
            width={270}
          />
          <h1 className="mt-3 font-extralight">Going all-in with millennial type.....</h1>
          <h1 className="text-center underline mt-4">Read More</h1>
        </div>
      </div>

      <div className="text-center pt-20 text-[20px] font-semibold underline">
        View All Post
      </div>

      {/* Instagram Section */}
      <div className="pt-14">
        <Image
          src="/insta.png"
          alt="Instagram"
          className="w-full object-cover"
          height={450}
          width={1440}
        />
      </div>
    </div>
  );
};

export default HomePage2;
