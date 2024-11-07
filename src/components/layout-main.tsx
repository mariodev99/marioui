"use client";

import { ReactNode, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Footer from "./footer";
import Nav from "./nav";

interface PropsLayout {
  children: ReactNode;
}

export default function LayoutMain({ children }: PropsLayout) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <div>
      <Nav isVisible={isVisible} />
      <div className="pt-48">{children}</div>
      <Footer></Footer>
    </div>
  );
}
