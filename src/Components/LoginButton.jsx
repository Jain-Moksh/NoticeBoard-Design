import React from 'react';
import { IoMdLogIn } from "react-icons/io";
import './LoginButton.css'; // Import your CSS file for styling

function LoginButton() {
  return (
    <button className="custom-button flex space-x-1 w-[100%] md:w-[52%] lg:w-[40%] px-4 py-2">
      <span>CONTINUE </span>
      <span className='hidden sm:block'> WITH SIGNUP / LOGIN</span>
      <span className='text-xl items-center pl-1 md:pl-1'> <IoMdLogIn /> </span>
    </button>
  );
}

export default LoginButton;
