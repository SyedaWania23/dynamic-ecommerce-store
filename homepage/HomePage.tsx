
// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoCartOutline } from "react-icons/io5";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { IoIosSearch } from "react-icons/io";
// import { FaTimes } from "react-icons/fa";  // Import the cross icon
// import { useSelector } from 'react-redux';



// const HomePage:React.FC = () => {
//   const item= useSelector ((state:RootState)=>state.cart)
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false); // Manage search bar visibility
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Asgaard Sofa',
//       price: 25000,
//       quantity: 1,
//       image: '/p.png'
//     },
//     {
//       id: 2,
//       name: 'HAVIT sofa',
//       price: 15000,
//       quantity: 2,
//       image: '/s.png'
//     },
//   ]);
//   const [searchQuery, setSearchQuery] = useState(''); // Manage search input state

//   // Toggle the cart visibility
//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   // Toggle the search bar visibility
//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//     if (isSearchOpen) {
//       setSearchQuery(''); // Clear search when search is closed
//     }
//   };

//   // Calculate the subtotal
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   // Get the total number of unique items in the cart
//   const cartItemCount = cartItems.length; // count unique items (products)

//   // Remove item from cart
//   const removeItem = (id: number) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   // Handle search input change
//   const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className='bg-[#FBEBB5] h-[100px]'>
//       <nav className='px-28 mx-9 h-[50px]'>
//         <ul className='flex justify-center gap-14 items-center text-[16px] font-poppins pl- pt-9'>
//           {/* Left side menu items */}
//           <li className=''><Link href="/">Home</Link></li>
//           <li className=''> <Link href="/shop">Shop</Link></li>
//           {/* <li className=''><Link href="/">About</Link></li> */}
//           <li className=''><Link href="/cart">Cart</Link></li>

//           {/* Right side Heart and Cart icons */}
//           <li className='ml-auto  lg:ml-20 flex gap-4 '>
//             <Link href="/login" className="text-xl text-gray-700 hover:text-teal-200">
//               <MdOutlineAccountCircle className="h-[28px] w-[28px]" />
//             </Link> 
//             <Link href="" className="text-xl text-gray-700 hover:text-teal-200">
//              <IoIosSearch className="h-[28px] w-[28px]" onClick={toggleSearch} />
//              </Link> 
//             <Link href="" className="text-xl text-gray-700 hover:text-teal-200">
//               <IoIosHeartEmpty className="h-[28px] w-[28px]" />
//             </Link>
//             {/* Cart Icon with count (badge) */}
//             <button onClick={toggleCart} className="relative text-xl text-gray-700 hover:text-teal-200">
//               <IoCartOutline className="h-[28px] w-[28px]" />
//               {/* Cart Item Count Badge */}
//               {cartItemCount > 0 && (
//                 <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartItemCount}
//                 </span>
//               )}
//             </button>
//           </li>
//         </ul>
//       </nav>

//       {/* Search Bar */}
//       {/* Search Bar */}
// {/* Search Bar */}
// {isSearchOpen && (
//   <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg w-[300px]">
//     <input
//       type="text"
//       value={searchQuery}
//       onChange={handleSearchChange}
//       placeholder="Search products..."
//       className="w-full p-2 border rounded-md"
//     />
//     <button 
//       className="absolute top-2 right-2"  // Adjusted 'right' to 'right-3' for more space from the input border
//       onClick={toggleSearch}
//     >
//       <FaTimes className="text-xl" />
//     </button>
//     {/* You can also display suggestions or search results here */}
//   </div>
// )}


//       {/* Cart Sidebar */}
//       {isCartOpen && (
//         <div className="fixed top-0 right-0 w-[350px] bg-white h-full shadow-lg z-50">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-xl font-semibold">Shopping Cart</h2>
//             <button onClick={toggleCart} className="text-2xl">×</button>
//           </div>
//           <div className="p-4">
//             {/* Cart items */}
//             {cartItems.map(item => (
//               <div key={item.id} className="flex justify-between items-center py-4 border-b">
//                 {/* Left: Product Image */}
//                 <Image src={item.image} alt={item.name} className="w-20 h-20 object-cover" height={50} width={50}/>

//                 {/* Right: Product Info */}
//                 <div className="flex flex-col justify-between ml-4 w-full">
//                   <div className="flex justify-between items-center">
//                     <span className="font-semibold">{item.name}</span>
//                     <span className="text-gray-500">Rs {item.price}</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-gray-400">{item.quantity} x</span>
//                     <span className="font-semibold">Rs {item.price * item.quantity}</span>
//                   </div>
//                 </div>

//                 {/* Remove Button (Cross Icon) */}
//                 <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600 ml-4">
//                   <FaTimes className="w-5 h-5" />
//                 </button>
//               </div>
//             ))}

//             {/* Subtotal */}
//             <div className="flex justify-between items-center mt-4 border-t pt-4 font-semibold">
//               <span className="text-lg">Subtotal</span>
//               <span className="text-lg">Rs {subtotal}</span>
//             </div>

//             {/* Checkout Button */}
//             <div className="flex justify-center mt-4">
//               <button className="bg-teal-500 text-white py-2 px-6 rounded-md">Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomePage;





"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaTimes } from "react-icons/fa";  // Import the cross icon

const HomePage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Manage search bar visibility
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 25000,
      quantity: 1,
      image: '/p.png'
    },
    {
      id: 2,
      name: 'HAVIT sofa',
      price: 15000,
      quantity: 2,
      image: '/s.png'
    },
  ]);
  const [searchQuery, setSearchQuery] = useState(''); // Manage search input state

  // Toggle the cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Toggle the search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery(''); // Clear search when search is closed
    }
  };

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Get the total number of unique items in the cart
  const cartItemCount = cartItems.length; // count unique items (products)

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle search input change
  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='bg-[#FBEBB5] h-[100px]'>
      <nav className='px-28 mx-9 h-[50px]'>
        <ul className='flex justify-center gap-14 items-center text-[16px] font-poppins pl- pt-9'>
          {/* Left side menu items */}
          <li className=''><Link href="/">Home</Link></li>
          <li className=''> <Link href="/shop">Shop</Link></li>
          {/* <li className=''><Link href="/">About</Link></li> */}
          <li className=''><Link href="/cart">Cart</Link></li>

          {/* Right side Heart and Cart icons */}
          <li className='ml-auto  lg:ml-20 flex gap-4 '>
            <Link href="/login" className="text-xl text-gray-700 hover:text-teal-200">
              <MdOutlineAccountCircle className="h-[28px] w-[28px]" />
            </Link> 
            <Link href="" className="text-xl text-gray-700 hover:text-teal-200">
             <IoIosSearch className="h-[28px] w-[28px]" onClick={toggleSearch} />
             </Link> 
            <Link href="" className="text-xl text-gray-700 hover:text-teal-200">
              <IoIosHeartEmpty className="h-[28px] w-[28px]" />
            </Link>
            {/* Cart Icon with count (badge) */}
            <button onClick={toggleCart} className="relative text-xl text-gray-700 hover:text-teal-200">
              <IoCartOutline className="h-[28px] w-[28px]" />
              {/* Cart Item Count Badge */}
              {cartItemCount > 0 && (
                <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      {/* Search Bar */}
{/* Search Bar */}
{isSearchOpen && (
  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 shadow-lg w-[300px]">
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search products..."
      className="w-full p-2 border rounded-md"
    />
    <button 
      className="absolute top-2 right-2"  // Adjusted 'right' to 'right-3' for more space from the input border
      onClick={toggleSearch}
    >
      <FaTimes className="text-xl" />
    </button>
    {/* You can also display suggestions or search results here */}
  </div>
)}


      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-[350px] bg-white h-full shadow-lg z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button onClick={toggleCart} className="text-2xl">×</button>
          </div>
          <div className="p-4">
            {/* Cart items */}
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center py-4 border-b">
                {/* Left: Product Image */}
                <Image src={item.image} alt={item.name} className="w-20 h-20 object-cover" height={50} width={50}/>

                {/* Right: Product Info */}
                <div className="flex flex-col justify-between ml-4 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-gray-500">Rs {item.price}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400">{item.quantity} x</span>
                    <span className="font-semibold">Rs {item.price * item.quantity}</span>
                  </div>
                </div>

                {/* Remove Button (Cross Icon) */}
                <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600 ml-4">
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            ))}

            {/* Subtotal */}
            <div className="flex justify-between items-center mt-4 border-t pt-4 font-semibold">
              <span className="text-lg">Subtotal</span>
              <span className="text-lg">Rs {subtotal}</span>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center mt-4">
              <button className="bg-teal-500 text-white py-2 px-6 rounded-md">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;



