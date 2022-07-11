// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'



type Data = {
  comments: Comment[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { postId } = req.query;
  const db = await connectToDatabase()
    const Comments: Comment[] =  await db.db.collection('comments').find({"postId":postId}).toArray()
    console.log(Comments);
    
  
  res.status(200).json({ comments: Comments })
  
}
