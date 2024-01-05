import Image from "next/image";
import { motion } from "framer-motion";
import { btnsAnimation } from "@/src/constants/animation-settings";

function ScrollButtonItem({
  scrollTo,
  imgStyles,
}: {
  scrollTo: () => void;
  imgStyles?: string;
}) {
  return (
    <motion.button
      {...btnsAnimation}
      whileHover={{
        scale: 1.1,
        transition: { duration: 1 },
      }}
      whileFocus={{ scale: 1.1, transition: { duration: 1, easings: 1 } }}
      type="button"
      className={`scroll-btns__button ${imgStyles ? "mb-4" : ""}`}
      onClick={() => scrollTo()}
    >
      <Image
        src={"/assets/tech/arrows/arrow-down.svg"}
        width={55}
        height={55}
        alt={"scroll button"}
        className={`scroll-btns__img ${imgStyles || ""}`}
      />
    </motion.button>
  );
}

export default ScrollButtonItem;
