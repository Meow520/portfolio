import { newsData } from "@/types/types";
import { FC } from "react";
import Link from "next/link";
type Props = {
  newsData: newsData;
};

const TopNewsComponent: FC<Props> = (props) => {
  const { newsData } = props;
  const { id_number, created_at, title } = newsData;
  const createdAtString: string = created_at.toString();
  const createdAtDate = createdAtString.slice(0, 10);
  return (
    <div>
      <Link href={`/news/${id_number}`}>
        <div className="w-80 h-56 bg-white mx-10 px-5 rounded-md py-8 hover:bg-gray-100 hover:animate-scale-up-center">
          <div className="text-md my-3">{createdAtDate}</div>
          <div className="text-xl">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default TopNewsComponent;
