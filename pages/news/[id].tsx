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
  const [allDataLength, setAllDataLength] = useState(0);
  useEffect(() => {
    axios
      .get("../api/news-api/" + id)
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    axios
      .get("../api/news-api")
      .then((res) => {
        setAllDataLength(res.data.length);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  });

  return (
    <Layout>
      {newsData && (
        <NewsPage newsData={newsData} allDataLength={allDataLength} />
      )}
    </Layout>
  );
};

export default Detail;
