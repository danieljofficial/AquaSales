"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { Home, ShoppingCart, CreditCard, Users, FileText } from "lucide-react";
import BurgerIcon from "./Burger";
import { motion } from "framer-motion";
import ThemeSlider from "./ThemeSlider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarVariants = {
  hidden: {
    x: "-86%",
  },
  visible: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Dashboard", href: "/dashboard", icon: Home },
    { label: "Sales", href: "/sales", icon: ShoppingCart },
    { label: "Expenses", href: "/expenses", icon: CreditCard },
    { label: "Debtors", href: "/debtors", icon: Users },
    { label: "Reports", href: "/reports", icon: FileText },
  ];
  const pathname = usePathname();
  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      className={`absolute h-full w-full z-10 ${
        isOpen ? "bg-base" : "bg-transparent"
      }`}
    >
      <div className="text-pri">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold m-2">Business analytics</h1>
          <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <nav className="space-y-2 p-4 grid place-items-center">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link key={link.label} href={link.href}>
                <NavItem
                  Icon={link.icon}
                  label={link.label}
                  isActive={isActive}
                />
              </Link>
            );
          })}
        </nav>
        <div>
          <ThemeSlider />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
