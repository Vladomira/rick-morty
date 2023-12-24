import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { FiltersProps } from "@/src/types/components";
import FilterItem from "./FilterItem";
import { useSearchParams } from "next/navigation";

function Filters({ name, values }: FiltersProps) {
  const [openOptions, setOpenOptions] = useState(false);
  const [selected, setSelected] = useState(values[0]);
  const searchParams = useSearchParams();

  return (
    <div className="filters__item ">
      <p className="filters__item-name text-md">{name}</p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ ease: "linear", duration: 2, y: { duration: 0.9 } }}
        className="input pt-1 pb-2 relative"
      >
        {searchParams.get(name)?.toString() || selected}

        <AnimatePresence>
          {openOptions && (
            <FilterItem
              values={values}
              setSelected={setSelected}
              selected={selected}
              name={name}
              setOpenOptions={setOpenOptions}
            />
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setOpenOptions(!openOptions)}
          className="absolute top-[7px] right-2 pr-1 pl-4 py-1"
        >
          <Image
            src={"/assets/tech/arrows/arrow-bottom-down.svg"}
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
