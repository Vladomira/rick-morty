import { getClient } from "@/src/service/apollo";
import CharactersList from "../src/components/CharactersList";
import {
   CharactersFullData,
   CharacterListItem,
} from "../src/types/CharactersData";
import styles from "../styles/container.module.scss";
import { characters } from "@/src/service/queries.graphql";

async function Home() {
   let charactersData: CharacterListItem[] | undefined;
   try {
      const { data }: CharactersFullData = await getClient().query({
         query: characters,
         variables: { page: 1 },
         context: {
            fetchOptions: {
               next: { revalidate: 5 },
            },
         },
      });

      charactersData = data.characters.results;
   } catch (error) {
      console.error("Error fetching character:", error);
   }

   return (
      <section className={styles.chracters__section}>
         <div className={styles.container}>
            {charactersData !== undefined && (
               <CharactersList charactersData={charactersData} />
            )}
         </div>
      </section>
   );
}

export default Home;
