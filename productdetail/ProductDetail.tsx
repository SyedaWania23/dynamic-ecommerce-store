import Image from 'next/image';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';

export default function ProductDetail() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        {/* Left Side: Small Images */}
        <div className="flex  sm:flex-col flex-wrap gap-4 p-5 sm:p-0 lg:w-[20%] w-full ">
          <Image src="/p2.png" alt="Image 1" 
          height={20} width={20} className="w-20 h-20 object-cover" />
          <Image src="/p3.png" alt="Image 2"  height={20} width={20} className="w-20 h-20 object-cover" />
          <Image src="/p2.png" alt="Image 3" height={20} width={20} className="w-20 h-20 object-cover" />
          <Image src="/p3.png" alt="Image 4" height={20} width={20} className="w-20 h-20 object-cover" />
        </div>

        {/* Middle: Big Image */}
        <div className="flex-shrink-0 lg:w-[40%] w-full mb-4 lg:mb-0">
          <Image src="/p.png"  alt="Big Product Image" height={500} width={423} className="w-full h-auto object-cover" />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[42px] font-semibold">
            Asgaard sofa
          </h1>
          
          <p className="text-xl font-bold text-red-600">Price: $199.99</p>

          <div className="mt-2 flex space-x-1">
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStarHalfAlt className="text-yellow-500"/>
          </div>

          <p className=" text-xs sm:text-lg text-gray-700 mt-4">
            This is a short description of the product. You can add specifications, details, and other information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit animi consequatur id iste optio deserunt ab aperiam blanditiis consequuntur?
          </p>

          <h1 className="text-gray-400 mt-4">Size</h1>
          <div className="flex gap-5 flex-wrap">
            <div className="bg-[#FBEBB5] h-[30px] w-[30px] rounded-md flex p-5 items-center justify-center mb-2">L</div>
            <div className="bg-[#FBEBB5] h-[30px] w-[30px] rounded-md p-5 flex items-center justify-center mb-2">XL</div>
            <div className="bg-[#FBEBB5] h-[30px] w-[30px] rounded-md p-5 flex items-center justify-center mb-2">XS</div>
          </div>

          <h1 className="text-gray-400">Color</h1>
          <div className="flex gap-5 flex-wrap">
            <div className="bg-[#816DFA] h-[30px] w-[30px] rounded-full mb-2"></div>
            <div className="bg-black h-[30px] w-[30px] rounded-full mb-2"></div>
            <div className="bg-[#CDBA7B] h-[30px] w-[30px] rounded-full mb-2"></div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-2 sm:gap-5 items-center sm:mt-4">
            <button className="text-black sm:py-2  sm:px-6 rounded-md border border-gray-500 w-[123px] h-[64px]">
              - <span className="mx-2 sm:mx-4"> 1 </span>+
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

      <div className="border border-gray-300 mt-6"></div>

      {/* Description, Additional Info, and Reviews Section */}
      <div className="text-black gap-10 flex flex-wrap justify-center pt-10 text-[16px] sm:text-[20px]">
        <h1 className="w-full sm:w-[136px] h-[36px] text-center">Description</h1>
        <h1 className="w-full sm:w-[269px] h-[36px] text-center sm:ml-3">Additional Information</h1>
        <h1 className="w-full sm:w-[138px] h-[36px] text-center">Reviews(1)</h1>
      </div>

      <div className="text-left   text-[14px] 
      sm:text-[14px] md:text-[16px] w-full   pt-5 text-gray-400">
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row sm:items-center sm:mt-16 gap-4 mt-5 justify-center">
        <Image src="/t.png" alt="Image 1" height={350} width={605} />
        <Image src="/t.png" alt="Image 2" height={350} width={605} />
      </div>

      <div className="border border-gray-300 mt-6"></div>

      <div className="flex justify-center">
        <div className="text-center font-semibold text-[30px] sm:text-[36px] w-full sm:w-[309px] h-[54px] pt-5">
          <h1>Related Products</h1>
        </div>
      </div>

      

      <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center mx-4  space-y-8">
              <div className="h-[350px] w-full sm:w-[270px]">
                <Image
                  src="/side2.png"
                  alt="card 1"
                  className="h-[250px] w-full object-cover mt-7 "
                  height={250}
                  width={270}
                />
                <h1 className="mt-3 text-center pt-6">HAVIT HV-G92 Chairs</h1>
                <h1 className="text-[#DB4444] text-center">$269</h1>
              </div>
              <div className="h-[350px] w-full sm:w-[270px]">
                <Image
                  src="/side4.png"
                  alt="card 2"
                  className="h-[250px] w-full object-cover"
                  height={250}
                  width={270}
                />
                <h1 className="mt-3 text-center pt-6">AK-900 Wired Chairs</h1>
                <h1 className="text-[#DB4444] text-center">$669</h1>
              </div>
              <div className="h-[350px] w-full sm:w-[270px]">
                <Image
                  src="/s.png"
                  alt="card 3"
                  className="h-[250px] w-full object-cover"
                  height={250}
                  width={270}
                />
                <h1 className="mt-3 text-center pt-6">IPS LCD chair table</h1>
                <h1 className="text-[#DB4444] text-center">$169</h1>
              </div>
              <div className="h-[350px] w-full sm:w-[270px]">
                <Image
                  src="/side3.png"
                  alt="card 4"
                  className="h-[250px] w-full object-cover"
                  height={250}
                  width={270}
                />
                <h1 className="mt-3 text-center pt-6">S-Series Comfort Chair</h1>
                <h1 className="text-[#DB4444] text-[16px] text-center">$289</h1>
              </div>
            </div>

      <div className="text-center pt-20 text-[16px] sm:text-[20px] font-semibold underline">
        View More
      </div>
    </div>
  );
}
