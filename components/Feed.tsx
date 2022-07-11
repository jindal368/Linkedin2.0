import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Post } from '../typing'
import Box from './Box'
import Posts from './Posts'
import toast from 'react-hot-toast'
import { fetchPost } from '../utils/fetchPost'

interface Props {
    postData: Post[]
}

function Feed({ postData }: Props) {
    const [posts, setPosts] = useState<Post[]>(postData)

    const handleRefresh = async () => {

        const refreshToast = toast.loading('Refreshing....')
        try {
            const updatedPost: Post[] = await fetchPost()
            setPosts(updatedPost)

            toast.success("Feed Updated", {
                id: refreshToast
            })
        } catch (error) {

            toast.error("Failed", {
                id: refreshToast
            })
        }


    }

    return (
        <div className='col-span-7 lg:col-span-5 border-x'>
            <div className='flex items-center justify-between'>

                <RefreshIcon onClick={() => handleRefresh()} className='h-8 w-8 cursor-pointer text-blue-500 mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
            </div>

            <div className='overflow-scroll flex flex-col scrollbar-hide' style={{ maxHeight: "90vh" }}>
                {/* TweetBox... */}
                <Box />
                {/* Tweets */}
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Feed