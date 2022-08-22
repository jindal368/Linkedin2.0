import { Comment, Post, User } from "../typing";

export const getUser = async (id:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getUser?id=${id}`)
    
    const data =await res.json();

    const user: User = data.User
    
    return user
    
} 