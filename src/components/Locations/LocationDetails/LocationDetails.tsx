"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import styles from "../style.module.scss";
import { LocationdetailsProps } from "@/src/types/Locations";
import { location } from "@/src/service/queries.graphql";

export function LocationDetails({
   setIsOpen,
   locationId,
}: LocationdetailsProps) {
   const { data } = useSuspenseQuery(location, {
      variables: { id: locationId },
   });

   return (
      <motion.div
         className={styles.modal}
         initial={{ y: -300, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: -300, opacity: 0 }}
         transition={{ ease: "linear", duration: 2, y: { duration: 0.9 } }}
      >
         <div
            style={{
               background: "white",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column",
               width: 400,
               height: "auto",
               margin: "auto",
               color: "black",
            }}
         >
            <div onClick={setIsOpen} className="mb-4 bg-slate-900 p-6">
               Close
            </div>
            <div className=""> LocationDetails</div>
         </div>
      </motion.div>
   );
}
