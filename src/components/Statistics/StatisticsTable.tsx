"use client";
import { useState } from "react";

import StatisticsList from "./components/StatisticsList";
import { CharactersStatistics } from "../../types/CharactersData";
import { sortData } from "../../helpers/sort";
import Table from "./components/Table";

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
    <Table
      nameTitle="Character name"
      numberTitle="Number of episodes"
      handleChange={handleChange}
      // children={<StatisticsList items={itemsData} />}
    >
      <StatisticsList items={itemsData} />
    </Table>
  );
}
