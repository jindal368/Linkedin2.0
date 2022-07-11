import React, { useEffect, useState } from 'react'
import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'
import FetchComments from './FetchComments'
import { fetchComment } from '../utils/fetchComment'
import createComment from '../utils/createComment'
import { Comment } from '../typing'
import toast from 'react-hot-toast'
interface Props {
    showComment: boolean
    postId: string
}
function Comment({ showComment, postId }: Props) {

    const [input, setInput] = useState<string>('')
    const [comments, setComments] = useState<Comment[]>([])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const refreshToast = toast.loading('Commenting....')
        const commentData = {
            name: "Vishesh Jindal",
            designation: "SDE @ Google",
            profileImage: 'https://lh3.googleusercontent.com/ogw/ADea4I6apRQFow7H2WwHtRziF4aGanoNYvbrEgQnOPb2=s32-c-mo',
            postId: postId,
            comment: input
        }
        await createComment(commentData).then((res) => {
            setInput('')
            toast.success("Commented Successfully", {
                id: refreshToast
            })

        }).catch((e) => {
            console.log("error : ", e)
            toast.error("Failed", {
                id: refreshToast
            })
        })

    }

    useEffect(() => {

        refreshComment(postId)
            .then((res) => console.log("res : ", res))
            .catch(e => console.log("Err L ", e))


    }, [])

    const refreshComment = async (id: string) => {
        const comments: Comment[] = await fetchComment(id)
        setComments(comments)
    }

    return (
        showComment ?
            <div className='bg-white'>
                <div className='flex flex-row pt-2 pl-3 pb-3 space-x-2 '>
                    {/* Avatar */}
                    <img src='https://avatars.githubusercontent.com/u/46999893?v=4' alt='img' className='h-10 w-10 rounded-full mt-1' />
                    <div className='flex flex-row flex-1 h-12 rounded-full border-2'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Add a comment..."
                            type="text"
                            className='bg-transparent outline-0 text-start pl-5  flex-1 text-sm  ' />


                        <EmojiHappyIcon className='h-6 w-6 text-gray-500 mt-2 mr-5 font-semibold hover:bg-gray-200 transition-all duration-200 cursor-pointer rounded-full' onClick={(e) => handleSubmit(e)} />
                        <PhotographIcon className='h-6 w-6 text-gray-500 mt-2 mr-4 font-semibold hover:bg-gray-200 transition-all duration-200 cursor-pointer' />

                    </div>
                </div>

                <FetchComments comments={comments} />
            </div> : <div />
    )
}

export default Comment