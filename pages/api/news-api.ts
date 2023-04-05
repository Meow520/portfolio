import { News } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse<News[]>) => {
  const news = await prisma.news.findMany();
  res.status(200).json(news);
};
export default handler;
