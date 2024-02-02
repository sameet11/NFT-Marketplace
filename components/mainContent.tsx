"use client";
import MainButton from "./mainbutton";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database_types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const MainContent = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  useEffect(() => {
    const getuser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.replace("/dashboard");
      }
    };
    getuser();
  }, []);
  return (
    <div className="flex mt-10 p-10 text-gray-400">
      <div className="w-1/2">
        <div className="text-6xl font-semibold">
          <h1 className="mb-2">
            Lets
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-pink-500 ml-2">
              Collect
            </span>
          </h1>
          <h1 className="mb-2">Extraordinary</h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-pink-500 mb-2">
            NFTs
          </h1>
        </div>
        <div>
          <p className="text-sm mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsa
            perferendis ipsum iusto vitae accusantium consequuntur odio nostrum
          </p>
        </div>
        <div className="flex mb-5">
          <MainButton
            text="Discover"
            classname="bg-gradient-to-b from-purple-700 to-pink-500 mr-3"
          />
          <MainButton text="Learn more" classname="bg-white" />
        </div>
        <div className="flex text-white justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">432k+</h1>
            <p>Collections</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">200k+</h1>
            <p>Artists</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">10k+</h1>
            <p>Commumnity</p>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-full ml-5">
        <div>
          <Image src="/main-1.png" height={100} width={200} alt="nft" />
        </div>
        <div className="absolute right-0">
          <Image src="/main-2.png" height={100} width={200} alt="nft" />
        </div>
      </div>
    </div>
  );
};
export default MainContent;
