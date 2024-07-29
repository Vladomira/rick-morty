import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Table from "./Table/Table";
import { Children } from "@/src/@types/components";

function TableSkeleton() {
  return (
    <Table>
      <tbody>
        <EmptyTableRow>
          <Skeleton baseColor="rgba(34, 60, 80, 1)" />
        </EmptyTableRow>
      </tbody>
    </Table>
  );
}

function EmptyTableRow({ children }: Children) {
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);
  const cells = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <>
      {rows.map((el) => (
        <tr className="superSmall:shadow-table text-balance" key={el}>
          {cells.map((el) => (
            <td
              className="table__item table__item--small w-[189px]  h-[50px] maxMedium:px-3"
              key={el}
            >
              {children}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableSkeleton;
