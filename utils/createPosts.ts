
import {  Post, PostBody } from "../typing";

export const createPost = async (postData : PostBody) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/createPost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
    
  const data = await res.json();
  console.log("DTadaa : ",data);
  

    return data
    
} 
export default createPost;