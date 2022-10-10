// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useSession,getSession } from "next-auth/react";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { 
  const session =await getSession();
  console.log("session", session);
  // console.log("loading", session.status);
 
  res.status(200).json({ name: 'John Doe' });
}
