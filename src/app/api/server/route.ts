// import axios from 'axios';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export async function post(req: NextApiRequest, res: NextApiResponse) {
//  const referer = req.headers.referer || req.headers.referrer; // get the referer from the request headers

//  if (process.env.NODE_ENV !== "development") {
//    if (!referer || referer !== process.env.APP_URL) {
//      res.status(401).json({ message: 'Unauthorized' });
//      return;
//    }
//  }

//  try {
//    const { body } = req;
//    const url = 'https://api.openai.com/v1/chat/completions';
//    const headers = {
//      'Content-type': 'application/json',
//      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//    };

//    const response = await axios.post(url, body, { headers: headers })

//    res.status(200).json(response.data);
//  } catch (error) {
//    console.log(error);
//    res.status(500).json({ message: "Something went wrong" });
//  }
// }
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
 const referer = req.headers.referer || req.headers.referrer; // get the referer from the request headers

 if (process.env.NODE_ENV !== "development") {
   if (!referer || referer !== process.env.APP_URL) {
     res.status(401).json({ message: 'Unauthorized' });
     return;
   }
 }

 try {
   const { body } = req;
   const url = 'https://api.openai.com/v1/chat/completions';
  
console.log(typeof url);

  
   
   const headers = {
     'Content-type': 'application/json',
     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
   };

   const response = await axios.post(url, body, { headers: headers }) 
   console.log(response.status); // should print the status code
   console.log(response.data); // should print the response data
  } catch (error) {
   console.error(error); // should print any errors
  }
  
   res.status(500).json({ message: "Something went wrong" });
 }

