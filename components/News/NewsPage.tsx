import { newsData } from "@/types/types";
import React, { FC, useState } from "react";
import NewsButton from "./NewsButton";

type Props = {
  newsData: newsData;
  allDataLength: number;
};

const NewsPage: FC<Props> = (props) => {
  const { newsData, allDataLength } = props;

  const { id_number, title, content, created_at, url } = newsData;
  const createdAtString: string = created_at.toLocaleDateString();




  return (
    <div className="w-2/3 mx-auto my-10">
      <NewsButton url="/news" label="< All News" />
      <div className="text-3xl py-5 my-5 font-semi bold">{title}</div>
      <div className="text-lg">{createdAtString}</div>
      <div className="text-xl my-5">{content}</div>
      <div>
        詳細情報はこちらから :{" "}
        <a href={url} className="hover:text-gray-500">
          {url}
        </a>
      </div>
      <div className="flex justify-between my-10 text-xl">
        {id_number === 1 ? (
          <div> </div>
        ) : (
          <NewsButton url={"/news/" + (id_number - 1)} label="< Back" />
        )}
        {id_number === allDataLength ? (
          <div> </div>
        ) : (
          <NewsButton url={"/news/" + (id_number + 1)} label="Next >" />
        )}
      </div>
    </div>
  );
};

export default NewsPage;
