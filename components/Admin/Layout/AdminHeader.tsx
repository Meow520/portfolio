import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  currentPath: string;
};

const Header: FC<Props> = (props) => {
  const { currentPath } = props;
  const router = useRouter();
  const highlightHeaderElement = "text-gray-800 mx-8 text-xl";
  const basicHeaderElement = "mx-8 text-xl text-gray-400 hover:text-gray-300";
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };
  return (
    <header className="flex justify-between">
      <div className="flex justify-start py-5 ml-20 font-bold">
        <Link
          className={
            currentPath === "/admin/"
              ? highlightHeaderElement
              : basicHeaderElement
          }
          href="/admin/"
        >
          HOME
        </Link>
        <Link
          className={
            currentPath === "/admin/about"
              ? highlightHeaderElement
              : basicHeaderElement
          }
          href="/admin/about"
        >
          ABOUT
        </Link>
        <Link
          className={
            currentPath == "/admin/news"
              ? highlightHeaderElement
              : basicHeaderElement
          }
          href="/admin/news"
        >
          NEWS
        </Link>
      </div>
      <div className="py-5 mr-10">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
