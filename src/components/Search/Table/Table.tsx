import { TableHeaderProps } from "@/src/types/CharactersData";
import TableHeader from "./TableHeader";
import { Children } from "@/src/types/components";

export type TableProps = Children &
  TableHeaderProps & {
    style?: string;
  };
export default function Table({ buttonAction, children, style }: TableProps) {
  return (
    <table className={`table ${style || ""} `}>
      <TableHeader buttonAction={buttonAction} />
      {children}
      <tfoot className="table__footer">
        <tr></tr>
      </tfoot>
    </table>
  );
}
