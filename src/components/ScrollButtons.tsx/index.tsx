"use client";

import React, { RefObject, useEffect, useState } from "react";

import ScrollButtonItem from "./ScrollButtonItem";
import { btnsAnimation } from "@/src/constants/animation-settings";
import { AnimatePresence, motion } from "framer-motion";

const isBrowser = () => typeof window !== "undefined";

export enum BtnsTestId {
  BtnTop = "btn-top",
  BtnBottom = "btn-bottom",
}

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
      className="scroll-btns__div"
      data-testid="scroll-buttons"
    >
      <AnimatePresence key={"btn-top"}>
        {!isTop && (
          <ScrollButtonItem
            testId={BtnsTestId.BtnTop}
            scrollTo={scrollToTop}
            imgStyles="rotate-180"
          />
        )}
      </AnimatePresence>

      <AnimatePresence key={"btn-bottom"}>
        <ScrollButtonItem
          testId={BtnsTestId.BtnBottom}
          scrollTo={scrollToBottom}
        />
      </AnimatePresence>
    </motion.div>
  );
}

export default ScrollButtons;
