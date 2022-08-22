// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment, Post, User } from '../../typing'

import { connectToDatabase } from '../../Db/dbConfig'



type Data = {
  User: User
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { id} = req.query
  const db = await connectToDatabase()
    const User: User = await db.db.collection('users').find({ id: id }).toArray()
    console.log(User);
    
  
  res.status(200).json({ User: User })
  
}
