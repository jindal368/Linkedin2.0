
import { BadgeCheckIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, LightBulbIcon, SwitchVerticalIcon, UploadIcon, PlusIcon, ThumbUpIcon, ChatAlt2Icon, ShareIcon, ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Post } from '../typing'
import Comment from './Comment'
import PostBody from './PostBody'

interface Props {
    posts: Post[]

}

function Posts({ posts }: Props) {
    const [showComment, setShowComment] = useState<boolean>(false)
    const [liked, setLiked] = useState<boolean>(false)
    return (
        posts?.map((post, key) => (
            <PostBody post={post} />
        ))
    )
}

export default Posts