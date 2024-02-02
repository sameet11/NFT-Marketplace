"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NavbarButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
  };
  return (
    <div className="ml-5 font-semibold">
      <Button
        variant="outline"
        className=" text-black bg-gradient-to-b from-purple-700 to-pink-500 transition duration-300 ease-in-out rounded-xl"
        onClick={handleClick}
      >
        Sign In
      </Button>
    </div>
  );
};

export default NavbarButton;
