import { Suspense } from "react";

import CharacterDetail from "../../../src/components/CharacterDetail";
import {
   CharacterFullData,
   CharacterInstance,
} from "../../../src/types/CharactersData";
import styles from "../../../styles/CharacterPage.module.scss";
import { getClient } from "@/src/service/apollo";
import { character } from "@/src/service/queries.graphql";

type CharacterEpisode = { name: string; air_date: string; episode: string };
type CharacterLocation = { name: string; type: string };
export default async function CharacterPage({
   params,
}: {
   params: { id: string };
}) {
   let characterData: CharacterInstance | undefined;
   let location: CharacterLocation = { name: "", type: "" };
   let episodes: CharacterEpisode[] = [];
   const { id } = params;
   try {
      const { data }: CharacterFullData = await getClient().query({
         query: character,
         variables: { id },
         context: {
            fetchOptions: {
               next: { revalidate: 5 },
            },
         },
      });
      characterData = data.character;

      const { name, type } = data.character.location;
      location = { name: name, type: type };
   } catch (error) {
      console.error("Error fetching character:", error);
   }

   return (
      <section className={styles.character__section}>
         <div className={styles.character__container}>
            <Suspense fallback={<div>Loading...</div>}>
               <div style={{ display: "flex" }}>
                  {" "}
                  <CharacterDetail character={characterData} />
                  <div style={{ backgroundColor: "GrayText" }}>
                     <p>
                        Location: {location.name}, type:{location.type}
                     </p>
                     <p>Episodes quantity: {episodes.length}</p>
                  </div>
               </div>
            </Suspense>
         </div>
      </section>
   );
}
