// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'



type Data = {
    comments: Comment[]
    e:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    
    const { name, designation, profileImage, comment, postId } = (req.body);
    const db = await connectToDatabase()
    await db.db.collection('comments').insertOne({ name, designation, postId, profileImage, comment })
    return res.json({
      message: 'Post added successfully',
      success: true,
    });
  }
  catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }

        
  
    
  
  
}
