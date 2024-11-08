"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ComponentsIcon, InspirationIcon, LogoIcon, ToolsIcon } from "./icons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
// import { usePathname } from "next/navigation";

type NavLink = {
  title: string;
  icon: ReactNode;
  url: string;
};

interface NavProps {
  isVisible: boolean;
}

const NavList: NavLink[] = [
  {
    title: "Inspiration",
    icon: <InspirationIcon />,
    url: "/websites",
  },
  {
    title: "Components",
    icon: <ComponentsIcon />,
    url: "/components",
  },
  {
    title: "Tools",
    icon: <ToolsIcon />,
    url: "/tools",
  },
];

export default function Nav({ isVisible }: NavProps) {
  const isSmall: boolean = useMediaQuery("(min-width: 768px)");
  // const pathname = usePathname();

  return (
    <motion.header className=" w-full flex items-center justify-center gap-4 h-16 mt-5 fixed z-50 px-3">
      <motion.div
        className="hidden md:block"
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Link href={"/"}>
          <LogoIcon />
        </Link>
      </motion.div>
      <motion.div
        style={{ height: "100%", backgroundColor: "red" }}
        animate={!isSmall ? {} : { x: isVisible ? 0 : -44 }}
        className="flex justify-start items-center bg-gradient-to-r from-nav-primary to-nav-secundary py-3 px-4 rounded-2xl overflow-x-scroll h-full no-scrollbar"
      >
        <motion.div className=" flex items-center gap-4 text-lg font-medium text-nav-text ">
          {NavList.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="flex items-center gap-3 group cursor-pointer group text-sm md:text-base font-medium"
            >
              {item.icon}{" "}
              <motion.div className="group-hover:text-white">
                {item.title}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
