import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { FiltersProps } from "@/src/types/components";
import FilterItem from "./FilterItem";

function Filters({ name, values, setCurrentPage }: FiltersProps) {
  const [openOptions, setOpenOptions] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="filters__item ">
      <p className="filters__item-name text-md">{name}</p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ ease: "linear", duration: 2, y: { duration: 0.9 } }}
        className="input pt-1 pb-2 relative min-h-[44px] "
        onClick={() => setOpenOptions(!openOptions)}
      >
        {selected !== "None" ? selected : ""}

        <AnimatePresence>
          {openOptions && (
            <FilterItem
              setCurrentPage={setCurrentPage}
              values={values}
              setSelected={setSelected}
              selected={selected}
              name={name}
              setOpenOptions={setOpenOptions}
            />
          )}
        </AnimatePresence>
        <button type="button" className="absolute top-[7px] right-2 pt-1">
          <Image
            src={"/assets/tech/arrows/arrow-down.svg"}
            alt={"arrow"}
            width={20}
            height={20}
            className={`${openOptions && "rotate-180"}`}
          />
        </button>
      </motion.div>
    </div>
  );
}

export default Filters;
