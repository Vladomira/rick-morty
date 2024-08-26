import { useState } from "react";

import FilterOptions from "./FilterOptions";
import { FiltersProps } from "@/src/types/components";
import { AnimatePresence, motion } from "framer-motion";

import { useGetParams } from "@/src/hooks/useGetParams";

function Filters({ name, values, setCurrentPage }: FiltersProps) {
  const [openOptions, setOpenOptions] = useState(false);
  const [selected, setSelected] = useState("");

  const valueFromThePath = useGetParams(name);

  return (
    <div className="select__box">
      <p className="select__label">{name}</p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ ease: "linear", duration: 0.9, y: { duration: 0.9 } }}
        className="select"
        onClick={() => setOpenOptions(!openOptions)}
      >
        {selected !== "None" ? selected || valueFromThePath : ""}

        <AnimatePresence>
          {openOptions && (
            <FilterOptions
              setCurrentPage={setCurrentPage}
              values={values}
              setSelected={setSelected}
              selected={selected}
              name={name}
              setOpenOptions={setOpenOptions}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Filters;
