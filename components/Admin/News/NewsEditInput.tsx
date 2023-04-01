import React, { FC } from "react";

interface InputChangeEvent<T = HTMLInputElement | HTMLTextAreaElement>
  extends React.ChangeEvent<T> {
  target: T & (EventTarget & T);
}

type Props = {
  defaultValue?: string;
  textSize: string;
  label: string;
  textarea?: boolean;
  cols?: number;
  rows?: number;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const NewsEditInput: FC<Props> = (props) => {
  const { defaultValue, textSize, label, textarea, cols, rows, onChange } =
    props;
  const handleChange = (e: InputChangeEvent) => {
    onChange(e.target.value);
  };
  return (
    <div className="py-3">
      <label htmlFor="title" className="text-xl font-semibold py-2 ml-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={label}
          cols={cols}
          rows={rows}
          defaultValue={defaultValue}
          className={`${textSize} ${"w-full p-3 rounded-md"}`}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type="text"
          defaultValue={defaultValue}
          className={`${textSize} ${"w-full py-3 px-2 rounded-md"}`}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default NewsEditInput;
