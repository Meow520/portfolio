import Layout from "@/components/Layout/Layout";
import NewsComponent from "@/components/News/NewsComponent";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { newsData } from "@/types/types";
import axios from "axios";

const News: NextPage = () => {
  const [newsData, setNewsData] = useState<newsData[]>([]);
  useEffect(() => {
    axios
      .get("./api/news-api")
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <Head>
        <title>News</title>
        <meta name="description" content="Mao Yamaguchi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="text-4xl text-center font-bold my-10">NEWS</div>
        <div className="w-2/3 mx-auto">
          {newsData.map((news, index) => (
            <div key={index}>
              <NewsComponent newsData={news} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default News;
