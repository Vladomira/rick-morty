"use client";
import { useState } from "react";

import ArrowsList from "./ArrowsList";
import StatisticsList from "./StatisticsList";
import styles from "../../../styles/statistics/Statistics.module.scss";
import { CharactersStatistics } from "../../types/CharactersData";
import { sortData } from "../../helpers/sort";

export default function StatisticsTable({
   items,
}: {
   items: CharactersStatistics[];
}) {
   const [itemsData, setItemsData] = useState<CharactersStatistics[]>(items);

   const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
      const { name } = e.currentTarget;

      switch (name) {
         case "rising":
            setItemsData((prevItems) => sortData(prevItems, "asc"));
            break;

         case "descending":
            setItemsData((prevItems) => sortData(prevItems, "desc"));
            break;
      }
   };

   return (
      <table className={styles.table__el}>
         <ArrowsList
            buttonAction={handleChange}
            nameTitle={"Character name"}
            numberTitle={"Number of episodes"}
         />
         <StatisticsList items={itemsData} />
         <tfoot className={styles.table__footer}>
            <tr>
               <></>
            </tr>
         </tfoot>
      </table>
   );
}
