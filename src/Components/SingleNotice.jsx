import React from 'react'
import { FaBookmark } from "react-icons/fa";

function SingleNotice() {
    return (
        <div className='flex space-x-1 md:space-x-2 font-medium font-serif text-sm sm:text-base bg-white rounded border-black shadow-sm shadow-gray-500 mx-2 py-1 w-[85%]'>
            {/* this is save icon */}
            <div className='flex items-center justify-center w-[5%] pl-1 border-black text-center'>
            <FaBookmark />
            </div>

            {/* this is the notice data or content */}
            <div class='w-[75%]  border-black overflow-hidden overflow-ellipsis whitespace-nowrap'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam.
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
    )
}

export default SingleNotice
