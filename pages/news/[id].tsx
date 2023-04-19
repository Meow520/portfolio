import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { newsData } from "../../types/types";
import { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import NewsPage from "@/components/News/NewsPage";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsData, setNewsData] = useState<newsData | null>(null);
  // const [allDataLength, setAllDataLength] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get("../api/news-api/" + id)
  //     .then((res) => {
  //       console.log(res);
  //       setNewsData(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, [id]);
  const newsList = [
    {
      id: 1,
      id_string: "1",
      title: "2022技育CAMP vol.4 努力賞受賞",
      content:
        "6月18日から19日にかけて開催された「テーマを選んでハッカソン！~オンライン開発合宿vol.4~」にチーム「Do'er」として参加しました。プロダクト名「お菓子おみくじ」で発表を行い、努力賞を受賞しました。",
      url: "https://note.supporterz.jp/n/n65b5ad485281",
      created_at: new Date("2022/6/21"),
    },
    {
      id: 2,
      id_string: "2",
      title: "2022技育CAMP vol.9 努力賞受賞",
      content:
        "12月10日から11日にかけて開催された「はじめてのハッカソン！~オンライン開発合宿vol.9~」にチーム「Do'er バイオレット」として参加しました。プロダクト名「消えちゃっと」で発表を行い、努力賞を受賞しました。",
      url: "https://note.supporterz.jp/n/n01e65effb6e3",
      created_at: new Date("2022/12/12"),
    },
    {
      id: 3,
      id_string: "3",
      title: "第6回和歌山県データ利活用コンペティション 政策アイデア賞受賞",
      content:
        "12月17日に開催された「第6回和歌山県データ利活用コンペティション」にチーム「HIROSHI」として参加しました。発表タイトル「おかえり！第2のe家！」で発表を行い、政策アイデア賞を受賞しました。",
      url: "https://datarikatsuyou.pref.wakayama.jp/jinzai/competition/2022_6/",
      created_at: new Date("2022/12/18"),
    },
  ];

  const allDataLength = newsList.length;
  const news = newsList.filter((news) => news.id_string === id);
  // setNewsData(news[0]);
  console.log(news);

  return (
    <Layout>
      {news && (
        <NewsPage newsData={news[0]} allDataLength={allDataLength} />
      )}
    </Layout>
  );
};

export default Detail;
