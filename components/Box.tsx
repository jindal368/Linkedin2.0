import React, { useContext, useState } from 'react'
import {
    LocationMarkerIcon,
    CalendarIcon,
    PhotographIcon,
    SearchCircleIcon,
    EmojiHappyIcon,
    ChartBarIcon
} from '@heroicons/react/outline'
import { TemplateIcon, VideoCameraIcon } from '@heroicons/react/solid';
import createPost from '../utils/createPosts'
import toast from 'react-hot-toast';
import { AuthContext } from '../AppContext';
function Box() {
    const { user } = useContext(AuthContext);
    const [input, setInput] = useState<string>('');

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const refreshToast = toast.loading('Posting....')
        const postData = {
            name: user.displayName,
            designation: "SDE @ Gainsight",
            profileImg: user.photoURL,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJYHqPndy47ghiHY9rE8vSbCO2dfOPGVqCMLYkxZEew&s',
            text: input
        }
        await createPost(postData).then((res) => {
            setInput('')
            toast.success("Posted Successfully", {
                id: refreshToast
            })
        }).catch((e) => console.log("error : ", e))

    }
    return (
        <div className='bg-white m-4 rounded-lg'>
            <div className='flex flex-row mt-3 m-4 rounded-full space-x-3 '>
                {/* Avatar */}
                <img src={user.photoURL} alt='img' className='h-14 w-14 rounded-full' />
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Start a post about a topic that excites you"
                    type="text"
                    className='bg-transparent outline-none border-2 text-start pl-5 rounded-full flex-1 mt-1 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-all duration-200 cursor-pointer' />
            </div>

            <div className='flex flex-row justify-between mb-4'>

                <div className='flex flex-row ml-4 space-x-20 '>
                    <div className='flex flex-row space-x-2'>
                        <PhotographIcon className="h-6 w-8 text-blue-500 hover:bg-gray-100 transition-all duration-200 cursor-pointer" />
                        <p className=' font-bold text-gray-500'>Photo</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <VideoCameraIcon className="h-6 w-6 text-green-700" />
                        <p className=' font-bold text-gray-500'>Video</p>
                    </div>
                    <div className='flex flex-row space-x-2'>
                        <CalendarIcon className="h-6 w-6 text-orange-500" />
                        <p className=' font-bold text-gray-500'>Event</p>
                    </div>
                    <div className='flex flex-row space-x-2' onClick={(e) => handleSubmit(e)}>
                        <TemplateIcon className="h-6 w-6 text-red-500" />
                        <p className=' font-bold text-gray-500'>Write</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Box