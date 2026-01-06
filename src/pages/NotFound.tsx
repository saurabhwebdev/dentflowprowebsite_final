import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '@/assets/animations/404animation.json';

const funnyMessages = [
  "Oops! This page is playing hide and seek (and winning)",
  "Looks like this page took a vacation without telling us",
  "404: Page got lost in the digital wilderness",
  "This page is as missing as a developer's sleep schedule",
  "Even our AI couldn't find this page (and it's pretty smart)",
  "Houston, we have a problem - page not found!",
  "This page must be using Internet Explorer, because it's not responding",
  "Error 404: Page decided to work from home today"
];

const NotFound = () => {
  // Set a random message only once when component mounts
  const [message] = useState(() => {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    return funnyMessages[randomIndex];
  });

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-10">
      <div className="relative max-w-[280px] w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0 -m-3 bg-gray-50 rounded-2xl transform rotate-3 border border-gray-100"></div>
        <div className="absolute inset-0 -m-3 bg-gray-50 rounded-2xl transform -rotate-3 border border-gray-100"></div>
        
        {/* Main animation container */}
        <div className="relative bg-white rounded-2xl p-4 border border-gray-200 shadow-xl">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-48 md:h-56"
          />
        </div>
      </div>
      
      <div className="text-center mt-8 max-w-md">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 text-base text-gray-600">
          {message}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          While we look for it, why not head back home?
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
