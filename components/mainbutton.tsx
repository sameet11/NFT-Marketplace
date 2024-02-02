import React from "react";
import { Button } from "./ui/button";

import { twMerge } from "tailwind-merge";

interface MainButtonProps {
  text: string;
  classname: string;
}
const MainButton: React.FC<MainButtonProps> = ({ text, classname }) => {
  return (
    <div className="font-semibold">
      <Button
        variant="outline"
        className={twMerge(
          "text-black transition duration-300 ease-in-out rounded-xl",
          classname
        )}
      >
        {text}
      </Button>
    </div>
  );
};
export default MainButton;
