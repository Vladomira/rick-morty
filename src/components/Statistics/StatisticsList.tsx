import styles from '../../../styles/statistics/Statistics.module.scss';
import { CharacterFullData } from '../../types/CharactersData';

export default function StatisticsList({
  items,
}: {
  items: CharacterFullData[] | undefined;
}) {
  return (
    <>
      {items?.map(({ name, episode, id }: CharacterFullData) => {
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
