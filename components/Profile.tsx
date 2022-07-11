import React, { useContext, useState } from 'react'
import { DeviceTabletIcon, BookmarkIcon, PlusIcon } from '@heroicons/react/solid'
import { AuthContext } from '../AppContext';

function Profile() {
    const { user } = useContext(AuthContext);
    const [hashTag, setHashTag] = useState(['Hackerrank', 'Careers', 'Google', 'Microsoft'])
    return (
        <div className='flex flex-col col-span-2 justify-center mb-4 overflow-scroll scrollbar-hide ' style={{ maxHeight: '90vh' }}>
            {/* card 1 */}
            <div className='flex flex-col items-start w-full bg-white h-auto border-black mt-40 border-1 rounded-md '>
                <div className='flex flex-col items-center w-full bg-white'>
                    <div className='w-full bg-slate-400 h-14 rounded-t-lg' />
                    <img src={user.photoURL}
                        className='h-16 w-16 -mt-8 rounded-full cursor-pointer'
                    />

                    <h2 className='text-lg mt-5 font-bold hover:underline transition-all duration-200 cursor-pointer' >{user.displayName}</h2>
                    <p className='text-xs text-gray-500 mt-1 mb-4'>Full stack Developer</p>
                </div>

                <div className='border-y-2 text-xs items-start text-slate-500 font-semibold ml-3'>
                    <div className='flex flex-row justify-around lg:space-x-16 space-x-2 mt-4 hover:bg-gray-100 transition-all duration-200 cursor-pointer'>
                        <p className='' >Who's viewed your profile</p>
                        <p className='text-blue-500'>34</p>
                    </div>
                    <div className='flex flex-row justify-around lg:space-x-16 space-x-2 mt-2 mb-4 hover:bg-gray-100 transition-all duration-200 cursor-pointer'>
                        <p className=''>Impressions of your post</p>
                        <p className='text-blue-500'>592</p>
                    </div>
                </div>


                <div className=' flex flex-col mt-3 ml-4 mb-3 cursor-pointer text-xs hover:bg-gray-100 transition-all duration-200'>
                    <p className='text-gray-500'>Access exclusive tools & insights</p>
                    <div className='flex flex-row'>
                        <DeviceTabletIcon className='h-3 w-4 text-yellow-500 mt-0.5' />
                        <p className='font-bold'>Try premium for free</p>
                    </div>
                </div>


                <div className=' flex flex-col mt-3 ml-5 mb-3 cursor-pointer text-xxs hover:bg-gray-100 scale-125 transition-all duration-200'>

                    <div className='flex flex-row space-x-1'>
                        <BookmarkIcon className='h-4 w-4 text-gray-500 mt-0.5' />
                        <p className='font-bold'>My items</p>
                    </div>
                </div>


            </div>


            {/* card 2 */}

            <div className='flex flex-col w-full bg-white h-auto border-black mt-3 border-1 rounded-md '>



                <img src='/static/images/icon/Learning.png'
                    className='h-16 w-16 pt-2 pl-2 pr-2 m-2 bg-orange-50 cursor-pointer'
                />


                <h2 className=' mb-2 ml-2 font-bold hover:underline transition-all duration-200 cursor-pointer' >learningwithus</h2>

                <div className='border-y-2 text-xs  text-slate-500 font-semibold ml-3'>
                    <div className='flex flex-row justify-start space-x-28 mt-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer'>
                        <p className='' >Page notifications</p>
                        <p className='text-blue-500'>34</p>
                    </div>
                    <div className='flex flex-row justify-between mr-3 mt-2 mb-2 hover:bg-gray-100 transition-all duration-200 cursor-pointer'>
                        <p className=''>Page visitors</p>
                        <p className='text-blue-500 ml-2'>592</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center cursor-pointer'>
                    <p className='font-bold text-xs m-3'>See visitor analytics</p>

                </div>

            </div>
            {/* card3 */}
            <div className='flex flex-col w-full bg-white h-auto border-black mt-3 border-1 rounded-md '>
                <p className='text-xs ml-4 mt-4 mb-2'>Recent</p>

                {/* Hastags */}
                {
                    hashTag.map((tag, key) => (
                        <div key={key} className='flex flex-row space-x-3 p-1 font-bold text-xs text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black transition-all duration-200'>
                            <p className='ml-3'>#</p>
                            <p>{tag}</p>
                        </div>
                    ))
                }

                <p className='text-xs ml-4 mt-5 mb-2 text-blue-600 font-bold'>Groups</p>
                <div className='flex flex-row justify-between mt-3 mb-2'>
                    <p className='text-xs ml-4 text-blue-600 font-bold'>Events</p>
                    <PlusIcon className='h-5 w-5 mr-2' />
                </div>

                <p className='text-xs ml-4 mt-4 mb-2'>Followed Hashtags</p>

                {/* Hastags */}
                {
                    hashTag.map((tag, key) => (
                        <div key={key} className='flex flex-row space-x-3 p-1 font-bold text-xs text-gray-500 cursor-pointer hover:bg-gray-300 hover:text-black transition-all duration-200'>
                            <p className='ml-3'>#</p>
                            <p>{tag}</p>
                        </div>
                    ))
                }
                <div className='flex flex-row justify-center cursor-pointer p-3 hover:bg-gray-300 hover:text-black transition-all duration-200'>
                    <p className='font-bold text-gray-500 text-sm'>Discover more</p>

                </div>
            </div>

        </div>
    )
}

export default Profile