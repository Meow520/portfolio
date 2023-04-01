import { newsData } from "@/types/types";
import React, { FC, useState } from "react";
import NewsEditInput from "./NewsEditInput";

type Props = {
  newsData: newsData;
};

const NewsEdit: FC<Props> = (props) => {
  const { newsData } = props;
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newUrl, setNewUrl] = useState("");


  const { id, title, content, created_at, url } = newsData;

  return (
    <div className="w-2/3 mx-auto my-10">
      <NewsEditInput defaultValue={title} textSize="text-lg" label="title" onChange={setNewTitle}/>
      <NewsEditInput
        defaultValue={content}
        textSize="text-lg"
        label="content"
        textarea
        rows={4}
        onChange={setNewContent}
      />
      <NewsEditInput defaultValue={url} textSize="text-lg" label="url" onChange={setNewUrl} />
      <div className="flex justify-between my-10 text-xl"></div>
    </div>
  );
};

export default NewsEdit;
