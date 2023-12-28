import { TableHeaderProps } from "@/src/types/CharactersData";
import TableHeader from "./TableHeader";
import { Children } from "@/src/types/components";

export interface TableProps {
  style?: string;
}
export default function Table({
  buttonAction,
  children,
  style,
}: TableProps & Children & TableHeaderProps) {
  return (
    <table className={`table ${style || ""} `}>
      <TableHeader buttonAction={buttonAction} />
      {children}
      <tfoot className="table__footer">
        <tr>{/* <td>qweqwe</td> */}</tr>
      </tfoot>
    </table>
  );
}