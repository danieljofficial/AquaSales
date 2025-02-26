"use client";
import React, { useState } from "react";

type BurgerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerIcon: React.FC<BurgerProps> = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="flex flex-col items-center justify-center w-10 h-10 space-y-2 group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`h-1 w-8 bg-pri rounded transition-transform duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-8 bg-pri rounded transition-transform duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-8 bg-pri rounded transition-transform duration-300 ${
          isOpen ? "-translate-y-3.5 -rotate-45" : ""
        }`}
      ></div>
    </button>
  );
};

export default BurgerIcon;
