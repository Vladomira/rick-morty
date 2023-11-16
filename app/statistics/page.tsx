import Link from 'next/link';

import MainContainer from '../../src/components/MainContainer';
import LocationsTable from '../../src/components/Statistics/LocationsTable';
import StatisticsTable from '../../src/components/Statistics/StatisticsTable';
import { fetchCharacters } from '../../src/service/api';
import { CharacterFullData } from '../../src/types/CharactersData';
import btnStyles from '../../styles/CharacterPage.module.scss';
import styles from '../../styles/statistics/Statistics.module.scss';

const episodeTable = styles.table__wrapper + ' ' + styles.table__episode;

export default async function Statistics() {
  let results: CharacterFullData[] | undefined;
  try {
    results = await fetchCharacters();
  } catch (error) {
    console.error('Error fetching character:', error);
  }
  return (
    <MainContainer title="Statistics page">
      <section className={styles.section}>
        <div className={styles.container}>
          <Link href="/">
            <button type="button" className={btnStyles.btn}>
              Home
            </button>
          </Link>
          {results !== undefined && (
            <ul className={styles.table__box}>
              <li className={episodeTable}>
                <StatisticsTable items={results} />
              </li>
              <li className={styles.table__wrapper}>
                <LocationsTable items={results} />
              </li>
            </ul>
          )}
        </div>
      </section>
    </MainContainer>
  );
}
