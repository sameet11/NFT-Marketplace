import React from "react";

interface NavbarItemProps {
  text: string;
}
const NavbarItem: React.FC<NavbarItemProps> = ({ text }) => {
  return (
    <div className="mt-2 ml-5 hover:underline transition duration-300 ease-in-out">
      {text}
    </div>
  );
};

export default NavbarItem;
