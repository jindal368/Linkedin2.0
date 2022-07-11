import { send } from "process";
import { Comment, CommentBody } from "../typing";

export const createComment = async (commentData : CommentBody) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/createComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      })
    
    const data =await res.json();

    return data
    
} 

export default createComment