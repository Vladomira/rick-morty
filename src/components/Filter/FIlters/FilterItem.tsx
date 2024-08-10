import { FiltersItemProps } from "@/src/types/components";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterItem({
  values,
  setSelected,
  selected,
  name,
  setOpenOptions,
  setCurrentPage,
}: FiltersItemProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const onClickHandle = (el: string) => {
    const queryValue = el !== "None" ? el.toLowerCase() : "";
    params.set(`${[name]}`, queryValue);
    replace(`${pathname}?${params.toString()}`);

    setCurrentPage(1);
    setSelected(el);
    setOpenOptions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        ease: "linear",
        opacity: { duration: 0.6 },
        y: { duration: 1 },
      }}
      className="filter__option-wraper"
    >
      {values.map((el, idx) => (
        <AnimatePresence key={el}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              ease: "linear",
              scale: { duration: 0.95 },
              y: { duration: 0.09 + idx },
            }}
            whileHover={{ scale: 1.03 }}
            className={`filter__option-item  ${
              el === "None" ? "shadow-table" : ""
            }`}
            onClick={() => onClickHandle(el)}
          >
            {el !== selected && el}
          </motion.div>
        </AnimatePresence>
      ))}
    </motion.div>
  );
}

export default FilterItem;
