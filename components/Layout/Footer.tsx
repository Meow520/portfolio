import { FC } from "react";
import twitter from "../../public/icons/twitter.png";
import Image from "next/image";
import github from "../../public/icons/github-mark.png";

const Footer: FC = () => {
  return (
    <footer className="text-center py-10">
      <div className="my-5">Mao Yamaguchi</div>
      <div className="flex justify-center">
        <div className="w-10 mx-2 opacity-80 hover:opacity-100">
          <a href="https://twitter.com/montlevre">
            <Image src={twitter} alt="twitter" />
          </a>
        </div>
        <div className="w-10 mx-2 opacity-80 hover:opacity-100">
          <a href="https://github.com/meow520">
            <Image src={github} alt="github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
