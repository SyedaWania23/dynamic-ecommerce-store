
import React from 'react';
import Image from 'next/image';

const CheckoutPage = () => {
  return (
    <div className=" md:w-[480px]  lg:p-16 xl:p-24">
      <div className="pt-12 w-full">
        <Image
          src="/ch.png"
          alt="Checkout Image"
          layout="responsive"
          width={1440}
          height={316}
          className=" "
        />
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        {/* Left Column: Billing Details */}
        <div className="flex-1 space-y-7 p-4 sm:p-6 lg:p-20">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">Billing Details</h1>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-3 md:gap-6     ">
            <div className="w-full sm:w-[45%]">
              <h1 className="mt-5">First Name</h1>
              <input
                type="text"
                className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
              />
            </div>
            <div className="w-full sm:w-[45%]">
              <h1 className="mt-5">Last Name</h1>
              <input
                type="text"
                className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] 
                "
              />
            </div>
          </div>

          <div className="w-full">
            <h1 className="mt-5">Company Name (Optional)</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <h1>Country/Region</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <h1>Street Address</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <h1>Town/City</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <h1>Province</h1>
            <input
              type="text" 
            
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <h1>Zipcode</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <h1>Phone</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            /> 
          </div>
          <div className="w-full">
            <h1>Email</h1>
            <input
              type="text"
              className="border mt-3 border-[#9F9F9F] rounded-lg h-[45px] w-[295px] md:w-[200px] "
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="px-4 border border-[#9F9F9F] rounded-lg h-[45px] w-[295px] mt-3 md:w-[200px] md:text-[12px] "
              placeholder="Additional Information"
            />
          </div>
        </div>

        {/* Right Column: Product and Pricing Information */}
        <div className="flex-1 space-y-7 p-4 sm:p-6 lg:p-16 ">
          <div className="flex flex-row md:flex-row gap-6 ">
            {/* Product & Subtotal Section */}
            <div className="flex-1 space-y-3 mt-14">
              <h1 className="text-[20px] sm:text-[28px] 
              md:text-[32px] font-medium">Product</h1>
              <h1 className="text-[#9F9F9F] text-[13px] md:text-[24px]">
                Asgaard sofa <span className="text-black mx-2">
                   X </span>{' '}
                <span className="text-black mx-2">1</span>
              </h1>
              <h1>Subtotal</h1>
              <h1>Total</h1>
            </div>

            {/* Pricing Details */}
            <div className="flex-1 space-y-3 mt-14">
              <h1 className="text-[20px] sm:text-[28px] md:text-[32px] font-medium">Subtotal</h1>
              <h1 className='text-[13px]' >Rs 310.000</h1>
              <h1 className='text-[13px]'>Rs 310.000</h1>
              <h1 className="text-[13px] sm:text-[28px] md:text-[32px] font-semibold text-[#B88E2F]">
                Rs 310.000
              </h1>
            </div>
          </div>

          <div className="flex items-center pt-3 gap-4">
            <div className="border border-black bg-black rounded-full w-[14px] h-[14px]"></div>
            <h1 className="text-[16px] sm:text-[18px]">Direct Bank Transfer</h1>
          </div>
          <h1 className="text-gray-400 mt-3 text-[14px] sm:text-[16px]">
            Make your payment directly into our bank account. Please use <br />
            your Order ID as the payment reference. Your order will not be <br />
            shipped until the funds have cleared in our account.
          </h1>

          <div className="flex items-center gap-4">
            <div className="border border-gray-500 bg-white rounded-full w-[14px] h-[14px]"></div>
            <h1 className="text-gray-400 text-[14px] sm:text-[16px]">Direct Bank Transfer</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="border border-gray-500 bg-white rounded-full w-[14px] h-[14px]"></div>
            <h1 className="text-gray-400 text-[14px] sm:text-[16px]">Cash On Delivery</h1>
          </div>

          <h1 className="text-gray-400 mt-3 text-[14px] sm:text-[16px]">
            Your personal data will be used to support your experience <br />
            throughout this website, to manage access to your account, <br />
            and for other purposes described in our <span className="text-black font-semibold"> privacy policy.</span>
          </h1>

          <button className="mt-16 border h-[52px] w-[295px]
            lg:w-[320px] xl:w-[400px] rounded-lg
            border-black  lg:mx-16 lg:text-[20px] text-[16px]">
            Place Order
          </button>
        </div>
      </div>

      {/* Footer Section: Delivery & Policies */}
      <div className="bg-[#FAF4F4] mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 p-4 w-[364px]  ">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-semibold text-center sm:text-left md:text-[16px]">
            Free Delivery
          </h1>
          <p className="text-center sm:text-left text-[14px] sm:text-[16px] md:text-[12px]">
            100% secure payment, consectetur <br />
            adipiscing elit
          </p>
        </div>
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-semibold text-center sm:text-left md:text-[16px]  ">
            90 Days Return
          </h1>
          <p className="text-center sm:text-left text-[14px] sm:text-[16px] md:text-[12px]">
            If goods have problems, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-semibold text-center sm:text-left md:text-[16px]">
            Secure Payment
          </h1>
          <p className="text-center sm:text-left text-[14px] sm:text-[16px] md:text-[12px]">
            For all orders over $50, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
