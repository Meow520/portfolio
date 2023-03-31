import { newsData } from "@/types/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TopNewsComponent from "./TopNewsComponent";

const TopNews = () => {
  const [topNewsData, setTopNewsData] = useState<newsData[] | null>(null);
  useEffect(() => {
    axios
      .get("./api/news-api")
      .then((res) => {
        setTopNewsData(res.data.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="text-4xl text-center font-semibold my-10">
        What&apos;s New?
      </div>
      <div className="flex justify-center">
        {topNewsData?.map((newsData, index) => (
          <div key={index}>
            <TopNewsComponent newsData={newsData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNews;
