import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newsList = [
      {
        id: "1",
        title: "2022技育CAMP vol.4 努力賞受賞",
        content:
          "6月18日から19日にかけて開催された「テーマを選んでハッカソン！~オンライン開発合宿vol.4~」にチーム「Do'er」として参加しました。プロダクト名「お菓子おみくじ」で発表を行い、努力賞を受賞しました。",
        url: "https://note.supporterz.jp/n/n65b5ad485281",
        created_at: new Date(2022 - 6 - 21),
      },
      {
        id: "2",
        title: "2022技育CAMP vol.9 努力賞受賞",
        content:
          "12月10日から11日にかけて開催された「はじめてのハッカソン！~オンライン開発合宿vol.9~」にチーム「Do'er バイオレット」として参加しました。プロダクト名「消えちゃっと」で発表を行い、努力賞を受賞しました。",
        url: "https://note.supporterz.jp/n/n01e65effb6e3",
        created_at: new Date(2022 - 12 - 12),
      },
      {
        id: "3",
        title: "第6回和歌山県データ利活用コンペティション 政策アイデア賞受賞",
        content:
          "12月17日に開催された「第6回和歌山県データ利活用コンペティション」にチーム「HIROSHI」として参加しました。発表タイトル「おかえり！第2のe家！」で発表を行い、政策アイデア賞を受賞しました。",
        url: "https://datarikatsuyou.pref.wakayama.jp/jinzai/competition/2022_6/",
        created_at: new Date(2022 - 12 - 18),
      },
    ];
    const news = newsList.filter((news) => news.id === req.query.id);
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
