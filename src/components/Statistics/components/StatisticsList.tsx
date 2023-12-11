import styles from "@/styles/statistics/Statistics.module.scss";
import { CharactersStatistics } from "../../../types/CharactersData";

export default function StatisticsList({
  items,
}: {
  items: CharactersStatistics[] | undefined;
}) {
  return (
    <>
      {items?.map(({ name, episode, id }: CharactersStatistics) => {
        return (
          <tbody key={id} className={styles.table__body}>
            <tr className={styles.table__dataRow}>
              <td className={styles.table__item}>{name}</td>
              <td className={styles.table__item}>{episode?.length}</td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
