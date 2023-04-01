import React, { FC, useState } from "react";
import NewsEditInput from "./NewsEditInput";


const NewPostEdit: FC = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newUrl, setNewUrl] = useState("");

  return (
    <div className="w-2/3 mx-auto my-10">
      <NewsEditInput defaultValue={newTitle} textSize="text-lg" label="title" onChange={setNewTitle}/>
      <NewsEditInput
        defaultValue={newContent}
        textSize="text-lg"
        label="content"
        textarea
        rows={4}
        onChange={setNewContent}
      />
      <NewsEditInput defaultValue={newUrl} textSize="text-lg" label="url" onChange={setNewUrl} />
      <div className="flex justify-between my-10 text-xl"></div>
    </div>
  );
};

export default NewPostEdit;
