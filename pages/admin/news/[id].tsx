import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { newsData } from "@/types/types";
import { NextPage } from "next";
import axios from "axios";
import AdminLayout from "@/components/Admin/Layout/AdminLayout";
import NewsEdit from "@/components/Admin/News/NewsEdit";

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsData, setNewsData] = useState<newsData | null>(null);
  useEffect(() => {
    axios
      .get("../../api/news-api/" + id)
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <AdminLayout>{newsData && <NewsEdit newsData={newsData} />}</AdminLayout>
  );
};

export default Detail;
