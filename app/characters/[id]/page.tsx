import { Suspense } from "react";

import {
  CharacterFullData,
  CharacterInstance,
} from "../../../src/types/CharactersData";
import { getClient } from "@/src/service/apollo";
import { character } from "@/src/service/queries.graphql";
import { CharacterInfoBox } from "@/src/components/CharacterDetail/CharacterInfoBox";

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  let characterData: CharacterInstance | undefined;

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
  } catch (error) {
    console.error("Error fetching character:", error);
  }

  return (
    <section className="character__section">
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex md:flex-col md:items-center gap-5 lg:flex-row lg:justify-around sm:flex-col maxMedium:flex-col maxMedium:items-center ">
            {characterData && (
              <>
                <CharacterInfoBox
                  src={characterData.image}
                  imgName={characterData.name}
                  props={[
                    characterData.name,
                    characterData.gender,
                    characterData.species,
                    characterData.status,
                  ]}
                />
                <CharacterInfoBox
                  imgName={characterData.location.name}
                  props={[
                    characterData.location.name,
                    characterData.location.type,
                  ]}
                  bg={characterData.location.name}
                  id={characterData.location.id}
                  episode={characterData.episode}
                />
              </>
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
