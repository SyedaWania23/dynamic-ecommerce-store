

// // aik dum perfect
// import { client } from "@/sanity/lib/client"; // Sanity client import karna
// import { FaStarHalfAlt } from "react-icons/fa";
// import { FaStar } from 'react-icons/fa';
// import { groq } from "next-sanity";
// import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url"; // Image builder import karna

// // Sanity image ka URL generate karne ke liye builder create kar rahe hain
// const builder = imageUrlBuilder(client);

// // Helper function jo image URL generate karega
// function urlFor(source: any) {
//   return builder.image(source);
// }

// // Product ke data ke liye type define kiya
// interface Product {
//   _id: string;
//   productName: string;
//   image: { asset: { url: string } };
//   price: number;
//   description: string;
// }

// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const { slug } = params;

//   // Sanity se product data fetch kar rahe hain
//   const product = await client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       productName,
//       _type,
//       image,
//       price,
//       description
//     }`,
//     { slug }
//   );

//   // Agar product nahi mila toh 404 page dikhaenge
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // Agar productName nahi hai, toh default alt text dena
//   const altText = product.productName || "Product Image"; // Fallback alt text

//   return (
//     <div className="container mx-auto p-4">
//       {/* Flex Layout for Small & Big Images */}
//       <div className="flex flex-col lg:flex-row gap-8 p-8">
//         {/* Left Side: Small Images */}
//         <div className="flex sm:flex-row sm:flex-wrap gap-1 sm:gap-5 p-5 sm:p-0 lg:w-[20%] w-full justify-center">
//           {product.image && (
//             <>
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={altText}
//                 height={80}
//                 width={80}
//                 className="w-20 h-20 object-cover"
//               />
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={altText}
//                 height={80}
//                 width={80}
//                 className="w-20 h-20 object-cover"
//               />
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={altText}
//                 height={80}
//                 width={80}
//                 className="w-20 h-20 object-cover"
//               />
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={altText}
//                 height={80}
//                 width={80}
//                 className="w-20 h-20 object-cover"
//               />
//             </>
//           )}
//         </div>

//         {/* Middle: Big Image */}
//         <div className="flex-shrink-0 lg:w-[40%] w-full mb-4 lg:mb-0 flex justify-center">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={altText}
//               height={400}
//               width={400}
//               className="w-full h-auto object-cover max-w-[400px]"
//             />
//           )}
//         </div>

//         {/* Right Side: Product Details */}
//         <div className="flex flex-col gap-6 max-w-xl w-full">
//           <h1 className="text-[28px] sm:text-[32px] lg:text-[42px] font-semibold">
//             {product.productName}
//           </h1>

//           <p className="text-xl font-bold text-red-600">Price: ${product.price}</p>

//           <p className=" text-xs sm:text-lg text-gray-700 mt-4">{product.description}</p>
//           <div className="mt-2 flex space-x-1">
//                       <FaStar className="text-yellow-500"/>
//                       <FaStar className="text-yellow-500"/>
//                       <FaStar className="text-yellow-500"/>
//                       <FaStar className="text-yellow-500"/>
//                       <FaStarHalfAlt className="text-yellow-500"/>
//                     </div>

//           {/* Add to Cart Section */}
//           <div className="flex gap-2 sm:gap-5 items-center sm:mt-4">
//             <button className="text-black sm:py-2 sm:px-6 rounded-md border border-gray-500 w-[123px] h-[64px]">
//               - <span className="mx-2 "> 1 </span>+
//             </button>
//             <button className="text-black sm:py-2 sm:px-10 rounded-md border border-gray-500 w-full lg:w-[215px] h-[64px]">
//               <h1 className="w-full text-center">Add to Cart</h1>
//             </button>
//           </div>

//           <div className="border border-gray-300 mt-6"></div>

//           <div className="text-gray-400 mt-6">
//             <h1>SKU <span className="mx-9"> : 676 </span></h1>
//             <h1 className="pt-5">Category <span className="mx-5">: type </span></h1>
//             <h1 className="pt-5">Tags <span className="mx-9"> : Sofa, Chair, Home, Shop</span></h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// 


import { client } from "@/sanity/lib/client"; // Sanity client import karna
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { groq } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url"; // Image builder import karna

// Sanity image ka URL generate karne ke liye builder create kar rahe hain
const builder = imageUrlBuilder(client);

// Helper function jo image URL generate karega
function urlFor(source: any) {
  return builder.image(source);
}

// Product ke data ke liye type define kiya
interface Product {
  _id: string;
  productName: string;
  image: { asset: { url: string } };
  price: number;
  description: string;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Correctly wait for the 'params' object
  const { slug } = await params; // Await params before using it

  // Sanity se product data fetch kar rahe hain
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
      description
    }`,
    { slug }
  );

  // Agar product nahi mila toh 404 page dikhaenge
  if (!product) {
    return <div>Product not found</div>;
  }

  // Agar productName nahi hai, toh default alt text dena
  const altText = product.productName || "Product Image"; // Fallback alt text

  return (
    <div className="container mx-auto p-4">
      {/* Flex Layout for Small & Big Images */}
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Side: Small Images */}
        <div className="flex sm:flex-row sm:flex-wrap gap-1 sm:gap-5 p-5 sm:p-0 lg:w-[20%] w-full justify-center">
          {product.image && (
            <>
              <Image
                src={urlFor(product.image).url()}
                alt={altText}
                height={80}
                width={80}
                className="w-20 h-20 object-cover"
              />
              <Image
                src={urlFor(product.image).url()}
                alt={altText}
                height={80}
                width={80}
                className="w-20 h-20 object-cover"
              />
              <Image
                src={urlFor(product.image).url()}
                alt={altText}
                height={80}
                width={80}
                className="w-20 h-20 object-cover"
              />
              <Image
                src={urlFor(product.image).url()}
                alt={altText}
                height={80}
                width={80}
                className="w-20 h-20 object-cover"
              />
            </>
          )}
        </div>

        {/* Middle: Big Image */}
        <div className="flex-shrink-0 lg:w-[40%] w-full mb-4 lg:mb-0 flex justify-center">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={altText}
              height={400}
              width={400}
              className="w-full h-auto object-cover max-w-[400px]"
            />
          )}
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[42px] font-semibold">
            {product.productName}
          </h1>

          <p className="text-xl font-bold text-red-600">Price: ${product.price}</p>

          <p className=" text-xs sm:text-lg text-gray-700 mt-4">{product.description}</p>
          <div className="mt-2 flex space-x-1">
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStarHalfAlt className="text-yellow-500"/>
          </div>

          {/* Add to Cart Section */}
          <div className="flex gap-2 sm:gap-5 items-center sm:mt-4">
            <button className="text-black sm:py-2 sm:px-6 rounded-md border border-gray-500 w-[123px] h-[64px]">
              - <span className="mx-2 "> 1 </span>+
            </button>
            <button className="text-black sm:py-2 sm:px-10 rounded-md border border-gray-500 w-full lg:w-[215px] h-[64px]">
              <h1 className="w-full text-center">Add to Cart</h1>
            </button>
          </div>

          <div className="border border-gray-300 mt-6"></div>

          <div className="text-gray-400 mt-6">
            <h1>SKU <span className="mx-9"> : 676 </span></h1>
            <h1 className="pt-5">Category <span className="mx-5">: type </span></h1>
            <h1 className="pt-5">Tags <span className="mx-9"> : Sofa, Chair, Home, Shop</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}






