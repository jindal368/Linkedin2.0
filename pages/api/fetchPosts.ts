// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment, Post } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'



type Data = {
  posts: Post[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   
  const db = await connectToDatabase()
    const Posts: Post[] =  await db.db.collection('posts').find({}).toArray()
    console.log(Posts);
    
  
  res.status(200).json({ posts: Posts })
  
}
