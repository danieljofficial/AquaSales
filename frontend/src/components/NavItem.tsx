import { LucideProps } from "lucide-react";
import React from "react";
type Props = {
  Icon: React.ComponentType<LucideProps>;
  label: string;
  isActive?: boolean;
};

const NavItem: React.FC<Props> = ({ Icon, label, isActive }) => {
  return (
    <button
      className={`flex items-center space-x-3 w-64 p-3 rounded-lg transition-colors shadow-md ${
        isActive
          ? "bg-pri text-base"
          : "hover:bg-cta hover:text-base transition-colors duration-300"
      }`}
    >
      <Icon />
      <span>{label}</span>
    </button>
  );
};

export default NavItem;
