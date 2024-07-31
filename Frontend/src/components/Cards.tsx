"use client";
import Image from "next/image";
import { cn } from "../../lib/utils";

interface CardDemoProps {
  image: string;
  title: string;
  time: string;
  content: string;
  author: string;
}

export function CardDemo({ image, title, time, content, author}: CardDemoProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm backgroundImage flex flex-col justify-between p-4  mx-10 my-10 border-2 border-white",
          "bg-[url()] bg-cover"
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10 ">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src=""
            className="h-10 w-10 rounded-full border-2 object-cover "
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author}
            </p>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
