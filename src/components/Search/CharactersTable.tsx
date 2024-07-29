"use client";
import { useState } from "react";
import { CharacterInstance } from "../../@types/CharactersData";
import { sortData } from "../../helpers/sort";
import Table from "./Table/Table";
import TableInfoList from "./Table/TableInfoList";

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
