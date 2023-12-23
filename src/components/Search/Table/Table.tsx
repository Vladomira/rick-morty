import { TableHeaderProps } from "@/src/types/CharactersData";
import TableHeader from "./TableHeader";
import { Children } from "@/src/types/components";

export interface TableProps {
  style?: string;
}
export default function Table({
  buttonAction,
  children,
  items,

  style,
}: TableProps & Children & TableHeaderProps) {
  return (
    <table className={`table ${style || ""} `}>
      <TableHeader buttonAction={buttonAction} items={items} />
      {children}
      <tfoot className="table__footer">
        <tr>
          <></>
        </tr>
      </tfoot>
    </table>
  );
}
