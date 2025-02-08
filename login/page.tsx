// pages/login.js
"use client"
import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and signup forms

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-10">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Toggle between login and sign-up form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
            />
          </div>

          {/* Show different button text depending on login or signup */}
          <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md mt-4">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          {/* Toggle between login and signup */}
          <p onClick={() => setIsLogin(!isLogin)} className="text-sm text-teal-500 cursor-pointer">
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
