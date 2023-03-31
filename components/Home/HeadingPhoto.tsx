import React from "react";
import Image from "next/image";
import profilePhoto from "../../public/pictures/profile.jpg";

const HeadingPhoto = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={profilePhoto} alt="bg" className="w-2/3 ml-20" priority />
      </div>
      <div className="bg-gray-500 text-gray-50 text-6xl py-20 px-28 font-serif absolute overflow-x-hidden top-1/2 right-20">
        <div className="mb-3">Mao</div>
        <div>Yamaguchi</div>
      </div>
    </div>
  );
};

export default HeadingPhoto;
