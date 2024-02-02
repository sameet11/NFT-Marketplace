import Image from "next/image";
import { FaEthereum } from "react-icons/fa6";

import { NFT } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";

interface NftItemsProps {
  nft: NFT;
}
const NftItems: React.FC<NftItemsProps> = ({ nft }) => {
  const image_url = useLoadImage(nft);
  return (
    <div
      key={nft.id}
      className="text-gray-500 h-1/2 w-fit bg-white rounded-xl pt-2"
    >
      <div className="flex justify-center items-center">
        <Image
          src={image_url}
          alt="nft"
          height={600}
          width={500}
          className="h-20 w-2/3 rounded-xl"
        />
      </div>
      <div className="bg-black w-full h-5/6 flex flex-col justify-end rounded-xl items-start p-2 text-white">
        <h1 className="font-bold text-lg">{nft.Title}</h1>
        <div className="flex">
          <h1> current bid:</h1>
          <FaEthereum size={20} className="text-gray-500" />
          <h2>{nft.price}</h2>
          <p className="text-gray-500 ml-1">ETH</p>
        </div>
      </div>
    </div>
  );
};
export default NftItems;
