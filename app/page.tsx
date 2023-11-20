import { getClient } from "@/src/service/apollo";
import CharactersList from "../src/components/CharactersList";
import MainContainer from "../src/components/MainContainer";
import { CharacterFullData } from "../src/types/CharactersData";
import styles from "../styles/container.module.scss";
import { GET_CHARACTERS } from "@/src/service/queries";

async function Home() {
   let characters: CharacterFullData[] | undefined;
   try {
      const { data } = await getClient().query({
         query: GET_CHARACTERS(),
         context: {
            fetchOptions: {
               next: { revalidate: 5 },
            },
         },
      });

      characters = data.characters.results;
   } catch (error) {
      console.error("Error fetching character:", error);
   }

   return (
      <MainContainer title="Main page">
         <section className={styles.chracters__section}>
            <div className={styles.container}>
               {characters !== undefined && (
                  <CharactersList characters={characters} />
               )}
            </div>
         </section>
      </MainContainer>
   );
}

export default Home;
