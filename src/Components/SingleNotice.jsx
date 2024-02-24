import React from 'react';
import { FaBookmark } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

function SingleNotice({ onClick }) {
  return (
    <div className='flex space-x-1 md:space-x-2 font-medium font-serif text-[10px] sm:text-xs md:text-base bg-white rounded border-black shadow-sm shadow-gray-500 mx-2 py-1 w-[85%] cursor-pointer' onClick={onClick}>
      {/* this is save icon */}
      <div className='flex mt-1 justify-center w-[10%] sm:w-[5%] pl-1 border-black text-center'>
        <FaBookmark />
      </div>

      {/* this is the notice data or content */}
      <div className='w-[70%] sm:w-[85%] border-black transition-max-h duration-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum unde, sunt nihil repudiandae reiciendis similique, consequuntur ex vitae explicabo mollitia nemo nisi quo eaque animi dolores dicta alias a!
      </div>

      {/* this is date */}
      <div className='w-[24%] md:w-[10%] text-center border-black overflow-hidden overflow-ellipsis whitespace-nowrap'>
        17 sept
      </div>

      {/* this is time */}
      <div className='w-[0%] sm:w-[12%] md:w-[13%] border-black overflow-hidden overflow-ellipsis whitespace-nowrap'>
        00:00
      </div>
    </div>
  );
}

export default SingleNotice;
