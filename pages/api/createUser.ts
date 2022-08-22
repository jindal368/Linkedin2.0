// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'
import { ObjectId } from 'mongodb'



type Data = {
    User: User
    e: string
    message: string
    success:boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  try {
    
    const {  name, designation, displayPicture } = (req.body);
    const { id} = req.query
    // const like:any = [];
    
      const db = await connectToDatabase()
    const user = await db.db.collection('users').findOne({ id: id })
    console.log("User in API : ",user);
    
      if(!user)
          await db.db.collection('users').insertOne({ id, name, designation, displayPicture })
      else
        await db.db.collection('users').updateOne({ id: id }, { $set: { name, designation, displayPicture } })

    return res.json({
        message: "User updated successfully",
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
