
import {  Post, PostBody,User } from "../typing";

export const createUser = async (userData :User , id:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/createUser?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
    
  const data = await res.json();
  console.log("DTadaa : ",data);
  

    return data
    
} 
export default createUser;