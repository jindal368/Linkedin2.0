import React, { useState } from 'react'
import { BadgeCheckIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, LightBulbIcon, SwitchVerticalIcon, UploadIcon, PlusIcon, ThumbUpIcon, ChatAlt2Icon, ShareIcon, ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/solid'

import { Post } from '../typing'
import Comment from './Comment'

interface Props {
    post: Post
}

function PostBody({ post }: Props) {

    const [showComment, setShowComment] = useState<boolean>(false)
    const [liked, setLiked] = useState<boolean>(false)

    return (
        <div>
            <div>
                <div className=' mt-2  flex flex-col border-dashed bg-white m-4 rounded-md'>

                    <div className='flex flex-row justify-between border-b-2 p-1'>
                        <div className='flex flex-row pl-4 pt-3 space-x-2' >
                            <img src={post.profileImg} alt='dp' className='h-7 w-7 rounded-full flex-start' />
                            <p className='text-xs pt-1'><span className='font-bold'>Mohd Suhail khan</span> likes this</p>
                        </div>
                        <DotsHorizontalIcon className='text-gray-500 justify-between h-7 w-7 flex flex-row mt-2 mr-3' />
                    </div>
                    <div className='flex flex-row justify-between'>

                        <div className='flex flex-row'>

                            <img src={post.profileImg} alt='dp' className='h-14 w-14 rounded-full flex-start m-3' />

                            <div className='flex flex-col'>
                                <div className='flex flex-row space-x-1 h-6 mt-4'>
                                    <p className='h-auto  font-bold'>{post.name}</p>
                                    <p className='text-gray-500 -mt-1'>{`.`}</p>
                                    <p className='text-gray-500'>{`${Math.round((Date.now() - Date.parse('post._createdAt')) / 3600000)}h`}</p>
                                </div>

                                <p className='h-auto text-gray-500  text-xs'>{post.designation}</p>
                                <p className='text-gray-500 text-sm'>{`1h`}</p>

                            </div>
                        </div>
                        <div className='flex flex-row text-blue-600 space-x-2 font-bold p-6 '>
                            <PlusIcon className='text-blue-500 justify-between h-7 w-7' />
                            <p>Follow</p>
                        </div>
                    </div>


                    <p className='text-sm leading-relaxed p-3'>{post.text}</p>

                    <div className='flex flex-col ml-20 mr-4 mb-4 mt-3'>
                        {/* HAshtags */}
                        <div className='flex flex-1 text-blue-500 space-x-1 text-md'>
                            {/* {
                                tweet.hashtag.map((tag: string, key: number) => (
                                    <h4 key={key}>{`#${tag}`}</h4>
                                ))} */}
                        </div>

                    </div>
                    <img src={post.image} alt="Source" className='h-72 w-full mt-3' />

                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row space-x-1'>
                            <div className='flex flex-row -space-x-1 pt-2 pl-2 '>
                                <HeartIcon className='h-4 w-4 text-red-500' />
                                <ThumbUpIcon className='h-4 w-4 text-blue-600' />
                                <LightBulbIcon className='h-4 w-4 text-yellow-600' />
                            </div>
                            <p className='text-xs text-gray-500 mt-2 hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer'>Vishesh jindal and 1213 others like this</p>
                        </div>

                        <div className='flex flex-row space-x-2'>
                            <p className='text-xs text-gray-500 mt-2 hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer'>70 comments</p>
                            <p className='text-gray-500 -mt-0.5'>{`.`}</p>
                            <p className='text-xs text-gray-500 mt-2 pr-2 hover:text-blue-500 hover:underline transition-all duration-200 cursor-pointer'>70 share</p>
                        </div>
                    </div>


                    <div className='flex flex-row flex-start justify-between p-6 text-gray-500 '>
                        <div className='flex flex-row space-x-1 hover:bg-gray-200 transition-all duration-200 cursor-pointer'>
                            <img src={'https://avatars.githubusercontent.com/u/46999893?v=4'} alt='dp' className='h-6 w-6 rounded-full flex-start' />
                            <ChevronDownIcon className='h-4 w-4 mt-1 text-gray-500' />
                        </div>
                        <div className={`flex flex-row space-x-0 hover:bg-gray-200 transition-all duration-200 cursor-pointer`} onClick={() => setLiked(!liked)}>
                            <ThumbUpIcon className={`${liked ? 'text-blue-500' : ''} h-6 w-6 mr-3`} />
                            <p>Like</p>
                        </div>
                        <div className='flex flex-row space-x-0 hover:bg-gray-200 transition-all duration-200 cursor-pointer' onClick={() => setShowComment(!showComment)}>
                            <ChatAlt2Icon className=' h-6 w-6 mr-3' />
                            <p>Comment</p>
                        </div>
                        <div className='flex flex-row space-x-0 hover:bg-gray-200 transition-all duration-200 cursor-pointer'>
                            <ShareIcon className=' h-6 w-6 mr-3' />
                            <p>Share</p>
                        </div>
                        <div className='flex flex-row space-x-0  hover:bg-gray-200 transition-all duration-200 cursor-pointer'>
                            <ArrowRightIcon className=' h-6 w-6 mr-3' />
                            <p>Send</p>
                        </div>
                    </div>

                    <Comment postId={post._id} showComment={showComment} />
                    {/* {setShowComment(false)} */}
                </div>

            </div>
        </div>
    )
}

export default PostBody