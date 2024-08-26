import { btnScrollAnimation } from "@/src/constants/animation-settings";
import { motion } from "framer-motion";
import Image from "next/image";

function ScrollButtonItem({
  scrollTo,
  imgStyles,
}: {
  scrollTo: () => void;
  imgStyles?: string;
}) {
  return (
    <motion.button
      {...btnScrollAnimation}
      type="button"
      className={`scroll-btns__button ${imgStyles ? "mb-4" : ""}`}
      onClick={scrollTo}
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
