import React, { useState } from 'react';
import SingleNotice from '../Components/SingleNotice';
import SearchComponent from '../Components/SearchComponent';
import LoginButton from '../Components/LoginButton';
import '../Components/LoginButton.css';

// Modal component
const NoticeModal = ({ isOpen, closeModal, noticeData }) => {
    // Check if noticeData is not null before accessing its properties
    const title = noticeData?.title || '';
    const description = noticeData?.description || '';
    const date = noticeData?.date || '';
    const time = noticeData?.time || '';

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
            <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md w-[60%] h-[60vh] sm:h-[65vh] overflow-y-auto  border-black'>

                <div className='flex border-2 rounded p-2 m-1 border-black'>
                    <h2 className='sm:text-xl font-bold sm:w-[70%] w-[60%] text-sm'>{title}</h2>
                    <p className='font-bold text-xs md:text-sm w-[40%] sm:w-[30%] text-center'>{date}</p>
                    <p className='font-semibold text-xs md:text-sm w-[20%] text-center hidden sm:block'>{time}</p>
                </div>

                <p className='mb-4 text-xs sm:text-base p-2'>{description}</p>
                <button onClick={closeModal} className='custom-button w-[40%] sm:w-[20%] mx-2 mb-2 '>Close</button>
            </div>
        </div>
    );
};

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
        <div className='mx-auto justify-center w-[80%] mt-[5%] border-black max-w-screen-xl'>

            {/* Search Section */}
            <div className='bg-pink-100 rounded-t-lg h-14 pt-3'>
                <SearchComponent />
            </div>

            {/* Notice Section - Scrollable */}
            <div className='bg-gray-200 h-[70vh] sm:h-[75vh] overflow-y-auto'>
                <div className='flex flex-col items-center justify-center space-y-2 p-4'>
                    <SingleNotice onClick={() => openModal({ title: 'Happy Republic day ', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-autoLorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore vel incidunt molestias totam ea libero corporis vero? Reiciendis quos ipsum, consequuntur ullam aperiam illum et at fuga fugiat aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.overflow-y-autooverflow-y-auto', date: '2022-02-24', time: '12:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    <SingleNotice onClick={() => openModal({ title: 'Sample Title 2', description: 'Lorem ipsum...', date: '2022-02-25', time: '1:00 PM' })} />
                    {/* Add more SingleNotice components as needed */}
                </div>
            </div>

            {/* Login/Signup Button */}
            <div className='flex items-end justify-end mt-2'>
                <LoginButton />
            </div>

            {/* Modal */}
            <NoticeModal isOpen={isModalOpen} closeModal={closeModal} noticeData={selectedNotice} />

        </div>
    );
}

export default NoticeBoard;


// mt-4 bg-violet-700 hover:bg-violet-900 text-white py-2 px-4 rounded-md