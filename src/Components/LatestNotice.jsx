import React from 'react';
import { FaBookmark } from "react-icons/fa";

function LatestNotice({ onClick }) {
  return (
    <div className='flex space-x-1 md:space-x-2 font-medium font-serif text-[10px] sm:text-xs md:text-base bg-white rounded border-black shadow-sm shadow-gray-500 py-1 w-[95%] cursor-pointer'>
      

      {/* Notice data or content */}
      <div className='w-[70%] sm:w-[92%] border-black max-h-[25vh] overflow-hidden text-xs 2xl:text-2xl ml-3 mb-2'>
        <div className='w-full text-left font-bold text-lg md:text-base 2xl:text-3xl border-black my-1'>
          Notice Heading
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum. 

          <span onClick={onClick} className='text-blue-500 cursor-pointer mt-11 text-xs 2xl:text-xl'> Read More...</span>
   
        </p>


      </div>


      {/* Date */}
      {/* <div className='w-[24%] md:w-[10%] text-center border-black overflow-hidden overflow-ellipsis whitespace-nowrap mt-12'>
        17 sept
      </div> */}


    </div>
  );
}

export default LatestNotice;
