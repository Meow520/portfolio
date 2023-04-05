import { News } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
        const news = await prisma.news.findFirst({
          where: { id: Number(req.query.id) },
        });
        return res.status(200).json(news);
      } catch (error: unknown) {
        if (error instanceof Error)
          return res.status(500).json({ message: error.message });
      }
};

export default handler;

// const getNews = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const news = await prisma.news.findFirst({
//       where: { id: Number(req.query.id) },
//     });
//     return res.status(200).json(news);
//   } catch (error: unknown) {
//     if (error instanceof Error)
//       return res.status(500).json({ message: error.message });
//   }
// };

// const updateNews = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const news = await prisma.news.update({
//       where: { id: Number(req.query.id) },
//       data: req.body,
//     });
//     return res.status(200).json(news);
//   } catch (error: unknown) {
//     if (error instanceof Error)
//       return res.status(500).json({ message: error.message });
//   }
// };
// const deleteNews = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const results = await prisma.news.delete({
//       where: { id: Number(req.query.id) },
//     });
//     return res.status(204).json({ message: "deleted" });
//   } catch (error: unknown) {
//     if (error instanceof Error)
//       return res.status(500).json({ message: error.message });
//   }
// };
