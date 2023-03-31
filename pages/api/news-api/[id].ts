import { NextApiRequest, NextApiResponse } from "next";
import mysql from "@/lib/mysql";
import { newsData } from "@/types/types";

// eslint-disable-next-line import/no-anonymous-default-export
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getNews(req, res);
    case "PUT":
      return await updateNews(req, res);
    case "DELETE":
      return await deleteNews(req, res);
  }
};

export default handler;

const getNews = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await mysql.query("SELECT * FROM news WHERE id = ?", [
      req.query.id,
    ]);
    const news: newsData = results[0];
    return res.status(200).json(news);
  } catch (error: unknown) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

const updateNews = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await mysql.query("UPDATE news SET ? WHERE id = ?", [
      req.body,
      req.query.id,
    ]);
    const news: newsData = results[0];
    return res.status(200).json(news);
  } catch (error: unknown) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
const deleteNews = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await mysql.query("DELETE FROM news WHERE id = ?", [
      req.query.id,
    ]);
    return res.status(204).json({ message: "deleted" });
  } catch (error: unknown) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
