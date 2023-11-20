"use client";
import React, { useState } from "react";

import ArrowsList from "./ArrowsList";
import LocationList from "./LocationList";
import styles from "../../../styles/statistics/Statistics.module.scss";
import { CharactersStatistics, locationObj } from "../../types/CharactersData";
import { sortLocations } from "../helpers/sort";

export default function LocationsTable({
   items,
}: {
   items: CharactersStatistics[];
}) {
   const locationCount = items.reduce(
      (acc: { [key: string]: number }, { location }) => {
         const { name } = location;

         if (acc[name] === undefined) {
            acc[name] = 1;
         } else {
            acc[name] += 1;
         }

         return acc;
      },
      {}
   );
   const locationInfo: locationObj[] = Object.keys(locationCount).map(
      (name) => {
         return {
            name: name,
            count: locationCount[name],
            id: name,
         };
      }
   );
   const [locationsInfo, setLocationsInfo] =
      useState<locationObj[]>(locationInfo);

   const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
      const { name } = e.currentTarget;
      switch (name) {
         case "rising":
            setLocationsInfo((prev) => sortLocations(prev, "asc"));
            break;

         case "descending":
            setLocationsInfo((prev) => sortLocations(prev, "desc"));

            break;
      }
   };

   return (
      <table className={styles.table__el}>
         <ArrowsList
            buttonAction={handleChange}
            nameTitle={"Location"}
            numberTitle={"Number of characters"}
         />
         <LocationList dataArr={locationsInfo} />

         <tfoot className={styles.table__footer}>
            <tr>
               <></>
            </tr>
         </tfoot>
      </table>
   );
}
