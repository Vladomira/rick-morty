"use client";

import { useState } from "react";

import Table from "./Table/Table";
import TableInfoList from "./Table/TableInfoList";
import { CharacterInstance } from "@/src/types/CharactersData";

import { sortData } from "../../helpers/sort";

export default function CharactersTable({
  items,
}: {
  items: CharacterInstance[];
}) {
  const [itemsData, setItemsData] = useState<CharacterInstance[]>(items);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget;

    switch (name) {
      case "rising":
        setItemsData((prevItems) => prevItems && sortData(prevItems, "asc"));
        break;

      case "descending":
        setItemsData((prevItems) => prevItems && sortData(prevItems, "desc"));
        break;
    }
  };

  return (
    <Table buttonAction={handleChange}>
      <TableInfoList items={itemsData} />
    </Table>
  );
}
