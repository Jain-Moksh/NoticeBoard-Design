import React from 'react';
import SingleNotice from '../Components/SingleNotice';
import SearchComponent from '../Components/SearchComponent';
import LoginButton from '../Components/LoginButton';


function NoticeBoard() {
    return (
        // This is main container which has all notices, search section , and login/signup button .
        <div className='mx-auto justify-center w-[80%] mt-[5%]  border-black max-w-screen-xl'>
            {/* this is search section div bar */}
            <div className='bg-pink-100 rounded-t-lg h-14 pt-3'>
                <SearchComponent />
            </div>

            {/* this is notice section  */}
            <div className='flex flex-col items-center justify-center pt-3 pb-4 space-y-2 bg-gray-200'>
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
                <SingleNotice />
            </div>

            {/* this is login signup button */}
            <div className='flex items-end justify-end mt-2 '>
        <LoginButton />
            </div>

        </div>
    )
}

export default NoticeBoard
