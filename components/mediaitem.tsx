"use client";
import Image from "next/image";

import { NFT } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";

interface MediaItemProps {
  data: NFT;
}

const MediaItem: React.FC<MediaItemProps> = ({ data }) => {
  const image_url = useLoadImage(data);

  return (
    <div
      className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        w-full
        p-2
        rounded-md"
    >
      <div
        className="relative
            rounded-md
            min-h-[48px]
            min-w-[48px]
            overflow-hidden"
      >
        <Image
          fill
          src={image_url || "images/liked.png"}
          alt="media-item"
          className="object-cover
                "
        />
      </div>
      <div
        className="
            flex
            flex-col
            gap-y-1
            overflow-hidden"
      >
        <p className="text-white truncate">{data.Title}</p>
      </div>
    </div>
  );
};

export default MediaItem;
