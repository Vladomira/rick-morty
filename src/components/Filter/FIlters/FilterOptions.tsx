import { FiltersItemProps } from "@/src/types/components";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterOptions({
  setSelected,
  selected,
  name,
  values,
  setOpenOptions,
  setCurrentPage,
}: FiltersItemProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const onHandleClick = (el: string) => {
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
        opacity: { duration: 0.4 },
        y: { duration: 1 },
      }}
      className="option-list__wrapper"
    >
      {values.map((el, idx) => (
        <AnimatePresence key={el}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{
              ease: "linear",
              scale: { duration: 0.4 },
              y: { duration: 0.05 + idx },
            }}
            whileHover={{ scale: 1.02 }}
            className={`option__item  ${el === "None" ? "shadow-table pb-2" : ""}`}
            onClick={() => onHandleClick(el)}
          >
            {el !== selected && el}
          </motion.div>
        </AnimatePresence>
      ))}
    </motion.div>
  );
}

export default FilterOptions;
