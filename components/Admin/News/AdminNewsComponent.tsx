import { FC } from "react";
import { newsData } from "@/types/types";
import Link from "next/link";

type Props = {
  newsData: newsData;
};
const AdminNewsComponent: FC<Props> = (props) => {
  const { newsData } = props;
  const { id_number, title, created_at } = newsData;
  const createdAtString: string = created_at.toString();
  const createdAtDate = createdAtString.slice(0, 10);
  return (
    <Link href={`/admin/news/${id_number}`} className="">
      <div className="w-full bg-white pb-5 pt-4 px-6 mb-4 rounded-lg hover:bg-gray-100">
        <div className="text-lg my-1">{createdAtDate}</div>
        <div className="text-xl">{title}</div>
      </div>
    </Link>
  );
};

export default AdminNewsComponent;