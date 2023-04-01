import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import AdminNewsComponent from "@/components/Admin/News/AdminNewsComponent";
import { newsData } from "@/types/types";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";

const News = () => {
  const [newsData, setNewsData] = useState<newsData[]>([]);
  useEffect(() => {
    axios
      .get("../api/news-api")
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <Head>
        <title>News</title>
        <meta name="description" content="Mao Yamaguchi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="text-4xl text-center font-bold my-10">NEWS</div>
        <div className="w-2/3 mx-auto">
          <div className="my-5">
            <Link
              href="/admin/news/newpost"
              className=" bg-white text-xl p-3 w-40 rounded-lg hover:bg-gray-100"
            >
              + POST
            </Link>
          </div>
          {newsData.map((news, index) => (
            <div key={index}>
              <AdminNewsComponent newsData={news} />
            </div>
          ))}
        </div>
      </main>
    </AdminLayout>
  );
};

export default News;
