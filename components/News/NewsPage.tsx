import { newsData } from "@/types/types";
import React, { FC, useState } from "react";
import NewsButton from "./NewsButton";

type Props = {
  newsData: newsData;
  allDataLength: number;
};

const NewsPage: FC<Props> = (props) => {
  const { newsData, allDataLength } = props;

  const { id, title, content, created_at, url } = newsData;
  const createdAtString: string = created_at.toString();
  const createdAtDate = createdAtString.slice(0, 10);

  return (
    <div className="w-2/3 mx-auto my-10">
      <NewsButton url="/news" label="< All News" />
      <div className="text-3xl py-5 my-5 font-semi bold">{title}</div>
      <div className="text-lg">{createdAtDate}</div>
      <div className="text-xl my-5">{content}</div>
      <div>
        詳細情報はこちらから :{" "}
        <a href={url} className="hover:text-gray-500">
          {url}
        </a>
      </div>
      <div className="flex justify-between my-10 text-xl">
        {id === 1 ? (
          <div> </div>
        ) : (
          <NewsButton url={"/news/" + (id - 1)} label="< Back" />
        )}
        {id === allDataLength ? (
          <div> </div>
        ) : (
          <NewsButton url={"/news/" + (id + 1)} label="Next >" />
        )}
      </div>
    </div>
  );
};

export default NewsPage;
