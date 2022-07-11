import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'
import { Comment } from '../typing'

interface Props {
    comments: Comment[]
}

function FetchComments({ comments }: Props) {
    return (
        comments?.map((comment, key) => (

            <div >

                <div className='flex flex-row space-x-1'>

                    <img src={comment.profileImage} alt='dp' className='h-10 w-10 rounded-full flex-start mr-1 mt-4 ml-4' />

                    <div className='flex flex-row flex-grow rounded-lg justify-between bg-gray-200 m-3'>

                        <div className='flex flex-col space-x-1 p-2 bg-gray-200'>
                            <p className=' font-bold'>{comment.name}</p>
                            <p className=' text-gray-500 text-xs mt-0.2'>{comment.designation}</p>
                            <p className='text-sm mt-2' >{comment.comment}</p>
                        </div>

                        <div className='flex flex-row text-gray-500 text-xs space-x-1 ml-2'>
                            <p className='mt-1'>1h</p>
                            <DotsHorizontalIcon className=' h-6 w-6 flex flex-row mr-3' />
                        </div>

                    </div>

                </div>

                <div className='flex flex-row  space-x-4 ml-20 text-xs font-bold text-gray-500'>
                    <p className='hover:bg-gray-300 transition-all duration-200 cursor-pointer'>Like</p>
                    <p className='hover:bg-gray-300 transition-all duration-200 cursor-pointer'>Reply</p>
                </div>

            </div>
        ))
    )
}

export default FetchComments