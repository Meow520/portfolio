import Link from "next/link";
import { FC } from "react";

type Props = {
  url: string;
  label: string;
  hidden?:boolean;
};

const NewsButton: FC<Props> = (props) => {
  const { url, label, hidden } = props;
  return (
    <div hidden={hidden}>
      <Link href={url}
      className="hover:text-gray-500">{label}</Link>
    </div>
  );
};

export default NewsButton;
