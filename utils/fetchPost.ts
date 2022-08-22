import { Comment, Post } from "../typing";

export const fetchPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/fetchPosts`)
    
    const data =await res.json();

    const posts: Post[] = data?.posts
    
    return posts
    
} 