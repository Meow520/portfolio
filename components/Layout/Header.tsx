import { FC } from "react";
import Link from "next/link";

type Props = {
  currentPath: string;
};

const Header: FC<Props> = (props) => {
  const { currentPath } = props;
  const highlightHeaderElement = "text-gray-800 mx-8 text-xl";
  const basicHeaderElement = "mx-8 text-xl text-gray-400 hover:text-gray-300";

  return (
    <header className="flex justify-start py-5 ml-20 font-bold">
      <Link
        className={
          currentPath === "/" ? highlightHeaderElement : basicHeaderElement
        }
        href="/"
      >
        HOME
      </Link>
      <Link
        className={
          currentPath === "/about" ? highlightHeaderElement : basicHeaderElement
        }
        href="/about"
      >
        ABOUT
      </Link>
      <Link
        className={
          currentPath === "/contact"
            ? highlightHeaderElement
            : basicHeaderElement
        }
        href="/contact"
      >
        CONTACT
      </Link>
      <Link
        className={
          currentPath == "/news" ? highlightHeaderElement : basicHeaderElement
        }
        href="/news"
      >
        NEWS
      </Link>
    </header>
  );
};

export default Header;
