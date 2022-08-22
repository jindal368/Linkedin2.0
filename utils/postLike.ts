import { send } from "process";
import { Comment, CommentBody } from "../typing";

export const postLike = async (userData: object , id:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/postLike?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
    
    const data =await res.json();

    return data
    
} 
export const postDislike = async (userData: object , id:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/postDislike?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
  
  const data =await res.json();

  return data
  
} 
export default postLike