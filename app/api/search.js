import fs from 'fs';
import cheerio from 'cheerio';
import withAuth from "../../server/utils/withAuth";


const handler=(req, res)=> {
  if (req.method === 'GET') {
    console.log("eee")
    return res.status(200).json({ result })
  } else {
    // Handle any other HTTP method
  }
}

export default withAuth(handler);
