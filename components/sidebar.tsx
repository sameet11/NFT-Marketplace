"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GoHomeFill } from "react-icons/go";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database_types";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
const Sidebar = () => {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const pathname = usePathname();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Try again!");
    }
    router.replace("/");
  };
  useEffect(() => {
    const getuser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error || !session) {
        router.replace("/");
      }
    };
    getuser();
  }, []);
  const handleNav = (page: string) => {
    router.push(page);
  };
  return (
    <div className="w-1/6 text-gray-400 p-5 h-screen relative shadow-md">
      <div className="flex mb-10">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/coinvise-logo.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="font-bold mt-2 ml-3 text-gray-300">Coinvise</h1>
      </div>
      <div>
        <div
          className={twMerge(
            "flex hover:text-white transition duration-300 ease-in-out mb-10",
            pathname === "/dashboard" && "text-white"
          )}
          onClick={() => handleNav("/dashboard")}
        >
          <div
            className={twMerge(
              "bg-gray-600 rounded p-1 hover:bg-pink-500",
              pathname === "/dashboard" && "bg-pink-500"
            )}
          >
            <GoHomeFill size={20} />
          </div>
          <h2 className="ml-3">Dashboard</h2>
        </div>
        <div
          className={twMerge(
            "flex hover:text-white transition duration-300 ease-in-out mb-10",
            pathname === "/create" && "text-white"
          )}
          onClick={() => handleNav("/create")}
        >
          <div
            className={twMerge(
              "bg-gray-600 rounded p-1 hover:bg-pink-500",
              pathname === "/create" && "bg-pink-500"
            )}
          >
            <FaCartShopping size={20} />
          </div>
          <h2 className="ml-3">Create</h2>
        </div>
        <div
          className={twMerge(
            "flex hover:text-white transition duration-300 ease-in-out mb-10",
            pathname === "/profile" && "text-white"
          )}
          onClick={() => handleNav("/profile")}
        >
          <div
            className={twMerge(
              "bg-gray-600 rounded p-1 hover:bg-pink-500",
              pathname === "/profile" && "bg-pink-500"
            )}
          >
            <IoIosWallet size={20} />
          </div>
          <h2 className="ml-3">Profile</h2>
        </div>
        <div
          className={twMerge(
            "flex hover:text-white transition duration-300 ease-in-out mb-10",
            pathname === "/profile" && "text-white"
          )}
          onClick={() => handleNav("/favorite")}
        >
          <div
            className={twMerge(
              "bg-gray-600 rounded p-1 hover:bg-pink-500",
              pathname === "/favorite" && "bg-pink-500"
            )}
          >
            <FaHeart size={20} />
          </div>
          <h2 className="ml-3">Favorite</h2>
        </div>
      </div>
      <div className="absolute w-1/6 bottom-0">
        <div className="text-center my-8">
          <div className="border-t border-solid border-gray-400 mx-auto"></div>
        </div>
        <div
          className="flex hover:text-white transition duration-300 ease-in-out mb-10 cursor-pointer"
          onClick={handleLogout}
        >
          <div className="bg-gray-600 rounded p-1 hover:bg-pink-500">
            <IoLogOut size={20} />
          </div>
          <h2 className="ml-3">Logout</h2>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
