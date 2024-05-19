"use client";
import React, { RefObject, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { btnsAnimation } from "@/src/constants/animation-settings";
import ScrollButtonItem from "./ScrollButtonItem";

const isBrowser = () => typeof window !== "undefined";

function ScrollButtons({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLDivElement | null>;
}) {
  const [isTop, setIsTop] = useState<boolean>(false);
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function scrollToBottom() {
    if (!isBrowser()) return;

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef?.current) return;
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;

      setIsTop(window.scrollY <= sectionTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  return (
    <motion.div
      {...btnsAnimation}
      key="btns-container"
      className="scroll-btns__div "
    >
      <AnimatePresence key={"btn-top"}>
        {!isTop && (
          <ScrollButtonItem scrollTo={scrollToTop} imgStyles="rotate-180" />
        )}
      </AnimatePresence>

      <AnimatePresence key={"btn-bottom"}>
        <ScrollButtonItem scrollTo={scrollToBottom} />
      </AnimatePresence>
    </motion.div>
  );
}

export default ScrollButtons;
