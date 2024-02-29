import React from 'react';
import { FaBookmark } from "react-icons/fa";

function SingleNotice({ onClick }) {
  return (
    <div className='flex space-x-1 md:space-x-2 font-medium font-serif text-[10px] sm:text-xs md:text-xs lg:text-base 2xl:text-xl bg-gradient-to-r from-gray-100 to-gray-300 rounded border-black shadow-lg shadow-gray-300 py-1 w-[85%] cursor-pointer'>
      {/* Save icon */}

      {/* Notice data or content */}
      <div className='w-[70%] sm:w-[92%] border-black max-h-[12em] lg:max-h-[7em] overflow-hidden ml-3 mb-3'>
        {/* Heading */}
        <div className='w-full text-left font-bold text-lg md:text-xl 2xl:text-2xl border-black md:my-2 md:mx-1'>
          Notice Heading
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum.

          {/* "Read More" text */}
          <span onClick={onClick} className='text-blue-500 cursor-pointer ml-1 mt-7 md:text-xs lg:text-base text-xs 2xl:text-lg'>Read More...</span>
        </p>

      </div>

      {/* Date */}
      <div className='w-[24%] md:w-[12%] text-center border-black mt-auto mb-2 md:mt-0 md:mb-0 md:self-end'>
        17 sept
      </div>

    </div>
  );
}

export default SingleNotice;
