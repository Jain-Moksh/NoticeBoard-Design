

import React, { useState } from 'react';
import SingleNotice from '../Components/SingleNotice';
import Heading from '../Components/Heading';
import '../Components/CloseModalButton.css';
import LatestNotice from '../Components/LatestNotice';

// Placeholder for NoticeModal component
const NoticeModal = ({ isOpen, closeModal, noticeData }) => {
    // Placeholder content, replace with your actual modal content
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-[60%] h-[60vh] sm:h-[65vh] overflow-y-auto  border-black'>

                <div className='flex border-2 rounded p-2 m-1 border-black'>
                    <h2 className='sm:text-xl font-bold sm:w-[70%] w-[60%] text-sm'>{noticeData?.title || ''}</h2>
                    <p className='font-bold text-xs md:text-sm w-[40%] sm:w-[30%] text-center'>{noticeData?.date || ''}</p>
                    <p className='font-semibold text-xs md:text-sm w-[20%] text-center hidden sm:block'>{noticeData?.time || ''}</p>
                </div>

                <p className='mb-4 text-xs sm:text-base p-2'>{noticeData?.description || ''}</p>
                <button onClick={closeModal} className='custom-button w-[40%] sm:w-[20%] mx-2 mb-2 '>Close</button>
            </div>
        </div>
    );
};
// ... (Previous code)

function NoticeBoard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const openModal = (noticeData) => {
        setSelectedNotice(noticeData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedNotice(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <Heading />
            <div className='flex'>

                {/* Container with three notices in the 1st part */}
                <div className='w-[35%] lg:w-[25%] py-4 px-2 lg:p-4 bg-gray-200 overflow-y-auto space-y-4 mx-2 mt-2 h-[86vh] rounded hidden sm:block'>
                    <h2 className="text-xl font-bold text-center 2xl:text-4xl ">Latest Notices</h2>

                    <LatestNotice onClick={() => openModal({ title: 'Happy Republic day ', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia  amet consectetur adipisicing elit.overflow-y-autooverflow-y-auto', date: '2022-02-24', time: '12:00 PM' })} />

                    <LatestNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    
                    <LatestNotice onClick={() => openModal({ title: 'Sample Title 3', description: 'Lorem ipsum...', date: '2022-02-26', time: '2:00 PM' })} />
                    
                    {/* Add more SingleNotice components as needed */}
                </div>

                {/* Notices Section in the last 3 parts */}
                <div className='lg:w-[95%] mx-auto sm:w-[75%] bg-white h-[86vh] sm:h-[86vh] lg:h-[86vh] overflow-y-auto mt-2 rounded mr-2 '>
                    <div className='flex flex-col items-center justify-center space-y-7 p-4 '>
                        <h2 className="text-xl font-bold text-left text-black 2xl:text-4xl">Important Notices !!</h2>
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 4', description: 'Lorem ipsum...', date: '2022-02-27', time: '3:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 5', description: 'Lorem ipsum...', date: '2022-02-28', time: '4:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 6', description: 'Lorem ipsum...', date: '2022-02-29', time: '5:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 4', description: 'Lorem ipsum...', date: '2022-02-27', time: '3:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 5', description: 'Lorem ipsum...', date: '2022-02-28', time: '4:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 6', description: 'Lorem ipsum...', date: '2022-02-29', time: '5:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 4', description: 'Lorem ipsum...', date: '2022-02-27', time: '3:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 5', description: 'Lorem ipsum...', date: '2022-02-28', time: '4:00 PM' })} />
                        <SingleNotice onClick={() => openModal({ title: 'Sample Title 6', description: 'Lorem ipsum...', date: '2022-02-29', time: '5:00 PM' })} />
                        {/* Add more SingleNotice components as needed */}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <NoticeModal isOpen={isModalOpen} closeModal={closeModal} noticeData={selectedNotice} />
        </>
    );
}

export default NoticeBoard;
