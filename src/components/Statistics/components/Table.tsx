import styles from "@/styles/statistics/Statistics.module.scss";
import ArrowsList from "./ArrowsList";
import { Children } from "@/src/types/common";

export interface TableProps {
  nameTitle: string;
  numberTitle: string;
  handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Table({
  handleChange,
  children,
  nameTitle,
  numberTitle,
}: TableProps & Children) {
  return (
    <table className={styles.table__el}>
      <ArrowsList
        buttonAction={handleChange}
        nameTitle={nameTitle}
        numberTitle={numberTitle}
      />
      {children}
      <tfoot className={styles.table__footer}>
        <tr>
          <></>
        </tr>
      </tfoot>
    </table>
  );
}
