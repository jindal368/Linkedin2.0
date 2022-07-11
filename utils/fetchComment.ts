import { Comment } from "../typing";

export const fetchComment = async (postId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/fetchComment?postId=${postId}`)
    
    const data =await res.json();

    const comments: Comment[] = data.comments
    
    return comments
    
} 