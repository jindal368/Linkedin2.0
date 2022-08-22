// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'
import { ObjectId} from 'mongodb'


type Data = {
    posts: Post[]
    e:string
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
       { $pull: { like: {email:userName.email} } } )
    
    return res.json({
      message: 'Dislike Count',
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
