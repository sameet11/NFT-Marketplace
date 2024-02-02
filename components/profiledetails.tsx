"use client";
import React from "react";
import { Button } from "./ui/button";
import { FaEthereum } from "react-icons/fa6";
import { User } from "@/types";
import { useRouter } from "next/navigation";
interface profileDetailsProps {
  User: User;
}
const ProfileDetails: React.FC<profileDetailsProps> = ({ User }) => {
  const router = useRouter();
  const handleClick = (text: string) => {
    router.push(text);
  };
  return (
    <div className="w-1/6">
      <div>
        <h1 className="text-xl font-semibold">
          {User.full_name ? User.full_name : "unknown"}
        </h1>
      </div>
      <div className="mb-2 text-sm">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div className="flex mb-2">
        <h1>Balance:</h1>
        <FaEthereum className="mt-1" />
        <h3 className="ml-2">{User.Balance}</h3>
      </div>
      <div className="flex">
        <Button
          onClick={() => handleClick("/create")}
          variant="outline"
          className=" text-black bg-gradient-to-b from-purple-700 to-pink-500 transition duration-300 ease-in-out rounded-xl"
        >
          Create
        </Button>
        <Button
          onClick={() => handleClick("/dashboard")}
          variant="outline"
          className=" text-black bg-gradient-to-b from-purple-700 to-pink-500 transition duration-300 ease-in-out rounded-xl ml-3"
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
export default ProfileDetails;
