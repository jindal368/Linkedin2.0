export interface Post extends PostBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'tweet'
    blockPost: boolean
    
}

export type PostBody = {
    text: string
    designation: string
    name: string
    profileImg: string
    hashtag?:array
    image?: string
}

export interface Comment extends CommentBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'comment'
    Post: Post
}

export type CommentBody = {
    comment: string,
    name: string,
    designation: string,
    profileImage: string,
    hashtag?: array,
}

export interface User {
    
}