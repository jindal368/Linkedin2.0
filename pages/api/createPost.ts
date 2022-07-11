// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'



type Data = {
    Post: Post[]
    e:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  try {
    
    const { name, designation, image, profileImg, text } = (req.body);
    
    const db = await connectToDatabase()
      await db.db.collection('posts').insertOne({ name, designation, image, profileImg ,text})

    return res.json({
        message: 'Post added successfully',
        success: true,
      });   
    
  }
  catch(error) {
          return res.json({
                message: new Error(error).message,
                success: false,
            });
    
  }
    
}
