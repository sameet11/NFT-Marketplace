import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import NavbarItem from "./navbaritem";
import NavbarButton from "./navbarButton";

const Navbar = () => {
  return (
    <div className="flex justify-between text-gray-300 p-4 shadow-lg shadow-slate-700">
      <div className="flex">
        <Avatar>
          <AvatarImage src="/coinvise-logo.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h1 className="ml-2 mt-2 font-bold">Coinvise</h1>
      </div>
      <div className="flex">
        <NavbarItem text={"Explore"} />
        <NavbarItem text={"How it work"} />
        <NavbarItem text={"Community"} />
        <NavbarButton />
      </div>
    </div>
  );
};

export default Navbar;
