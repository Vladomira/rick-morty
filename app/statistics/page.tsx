import LocationsTable from "../../src/components/Statistics/LocationsTable"
import StatisticsTable from "../../src/components/Statistics/StatisticsTable"
import {
  CharactersStatistics,
  CharactersStatisticsData,
} from "../../src/types/CharactersData"

import styles from "../../styles/statistics/Statistics.module.scss"
import { getClient } from "@/src/service/apollo"
import { charactersForStatistics } from "@/src/service/queries.graphql"

const episodeTable = styles.table__wrapper + " " + styles.table__episode

export default async function Statistics() {
  let results: CharactersStatistics[] | undefined
  try {
    const { data }: CharactersStatisticsData = await getClient().query({
      query: charactersForStatistics,
    })

    results = data.characters.results
  } catch (error) {
    console.error("Error fetching character:", error)
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
  )
}
