import React from 'react'
import { IoMdLogIn } from "react-icons/io";

function LoginButton() {
    return (
        <button class="flex space-x-1 bg-violet-700 hover:bg-violet-900 text-white font-serif sm:font-bold font-medium justify-center py-2 px-4 w-[100%] md:w-[52%] lg:w-[40%] rounded transition-transform transform text-sm ">
            
                <span>CONTINUE </span>
                <span className='hidden sm:block'> WITH SIGNUP / LOGIN</span>
                <span className='text-xl items-center pl-1 md:pl-1'> <IoMdLogIn /> </span>
                
        </button>

    )
}

export default LoginButton
// 