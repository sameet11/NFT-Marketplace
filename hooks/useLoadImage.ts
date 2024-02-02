

import { NFT } from "@/types";

const useLoadImage = (nft: NFT) => {

    return `https://nalqxpmdyxrbqotigbtu.supabase.co/storage/v1/object/public/NFT/${nft.image_url}`
};

export default useLoadImage;