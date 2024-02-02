import React from "react";
import Image from "next/image";

import { NFT } from "@/types";
import MediaItem from "./mediaitem";
interface DashboardContentProps {
  nfts: NFT[];
}
const DashboardContent: React.FC<DashboardContentProps> = ({ nfts }) => {
  if (nfts.length == 0) {
    return (
      <div>
        <div className="mb-10">
          <h1 className="font-bold text-4xl">Dashboard</h1>
          <p>Buy and Sell Digital Artworks</p>
        </div>
        <div>
          <Image src={"/dash-slide.jpg"} height={600} width={700} alt="Slide" />
        </div>
        <div className="absolute right-24 top-44">
          <Image src={"/dash-end.png"} height={300} width={250} alt="Slide" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6">
        {nfts.map((nft: NFT) => (
          <div key={nft.id} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <MediaItem data={nft} />
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default DashboardContent;
