"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const btns = ["top", "bottom"];
const isBrowser = () => typeof window !== "undefined";

function ScrollButtons() {
  const [isTop, setIsTop] = useState<boolean>(false);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setIsTop(true);
    }, 1000);
  }
  function scrollToBottom() {
    if (!isBrowser()) return;

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setIsTop(false);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{
          ease: "linear",
          x: { duration: 1 },
        }}
        className="fixed bottom-[35%] right-14 maxMedium:right-2 beforeXl:right-4 flex flex-col "
      >
        {btns.map((el) => (
          <button
            type="button"
            key={el}
            className={`first:mb-4 rounded-2xl shadow-listItem hover:scale-105 focus:cale-105 transition-all duration-200
             ${isTop && el == "top" ? "hidden" : ""} `}
            onClick={() => (el === "top" ? scrollToTop() : scrollToBottom())}
          >
            <Image
              src={"/assets/tech/arrows/arrow-down.svg"}
              width={55}
              height={55}
              alt={"scroll button"}
              className={`bg-green-600 shadow-table  superSmall:w-[45px] rounded-md
                ${el === "top" ? "rotate-180 " : ""}`}
            />
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default ScrollButtons;
