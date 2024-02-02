"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database_types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NftItems from "./NftItems";

import { NFT } from "@/types";
const Collections = () => {
  const supabase = createClientComponentClient<Database>();
  const [Nfts, setNfts] = useState<NFT[] | null>(null);
  const router = useRouter();
  useEffect(() => {
    const getuser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        router.refresh();
      }
      if (user) {
        const { data: NFTsdata, error: NFTserror } = await supabase
          .from("NFT")
          .select("*")
          .eq("user_id", user.id);
        if (NFTserror) {
          return router.refresh();
        }
        if (NFTsdata) {
          setNfts(NFTsdata);
        }
      }
    };
    getuser();
  }, [router]);
  return (
    <div className="w-5/6 text-gray-300">
      <div className="mb-5">
        <h1 className=" font-extrabold text-white ml-2 text-4xl">
          My Collection
        </h1>
      </div>
      <div className="h-full bg-gray-950 grid grid-cols-3 w-full p-5">
        {Nfts !== null ? (
          Nfts.map((nft: NFT) => <NftItems nft={nft} key={nft.id} />)
        ) : (
          <p>No NFTs yet</p>
        )}
      </div>
    </div>
  );
};
export default Collections;
