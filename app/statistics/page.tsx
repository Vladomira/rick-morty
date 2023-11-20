import Link from "next/link";

import MainContainer from "../../src/components/MainContainer";
import LocationsTable from "../../src/components/Statistics/LocationsTable";
import StatisticsTable from "../../src/components/Statistics/StatisticsTable";
import {
   CharactersStatistics,
   CharactersStatisticsData,
} from "../../src/types/CharactersData";
import btnStyles from "../../styles/CharacterPage.module.scss";
import styles from "../../styles/statistics/Statistics.module.scss";
import { getClient } from "@/src/service/apollo";
import { GET_CHARACTERS_FOR_STATISTICS } from "@/src/service/queries";

const episodeTable = styles.table__wrapper + " " + styles.table__episode;

export default async function Statistics() {
   let results: CharactersStatistics[] | undefined;
   try {
      const { data }: CharactersStatisticsData = await getClient().query({
         query: GET_CHARACTERS_FOR_STATISTICS,
      });
      results = data.characters.results;
   } catch (error) {
      console.error("Error fetching character:", error);
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
               <Link href="/map">
                  <button type="button" className={btnStyles.btn}>
                     Map
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
