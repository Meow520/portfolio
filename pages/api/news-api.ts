import { NextApiRequest, NextApiResponse } from "next";
import mysql from "@/lib/mysql";

// eslint-disable-next-line import/no-anonymous-default-export
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const newsData = await mysql.query("SELECT * FROM news ORDER BY id DESC");
  await mysql.end();
  res.status(200).json(newsData);
};

export default handler;