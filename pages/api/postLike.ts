// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'
import { ObjectId} from 'mongodb'


type Data = {
    comments: Comment[]
  error: string
  message: string,
    success:boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    
      const userName = (req.body);
      
      const { id } = req.query;
   
    const db = await connectToDatabase()
     await db.db.collection('posts').updateOne({ _id:new ObjectId(id.toString()) },
       { $push: { like: userName } } )
    
    return res.json({
      message: 'Like Count',
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
