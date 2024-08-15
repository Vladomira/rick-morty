import { Suspense } from "react";

import { isCharacterInstance } from "@/src/helpers/checkTypeOfData";
import { QueryType } from "@/src/types/domain";

import { fetchQueries } from "@/src/service/api/fetchQueries";

import { CharacterInfoBox } from "@/src/components/CharacterDetail/CharacterInfoBox";
import Fallback from "@/src/components/Fallback";

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { resData, dataError } = await fetchQueries({
    queryType: QueryType.CharactersById,
    id,
  });
  const characterData = resData.data.character;

  return (
    <Suspense fallback={<Fallback />}>
      <section
        className="character__section"
        style={{ minHeight: "calc(100vh - 53px)" }}
      >
        <div className="container m-auto">
          {characterData && isCharacterInstance(characterData) && (
            <div className="flex md:flex-col md:items-center gap-5 lg:flex-row lg:justify-around sm:flex-col maxMedium:flex-col maxMedium:items-center ">
              <CharacterInfoBox
                src={characterData.image}
                imgName={characterData.name}
                infoItems={[
                  characterData.name,
                  characterData.gender,
                  characterData.species,
                  characterData.status,
                ]}
              />
              <CharacterInfoBox
                imgName={characterData.location.name}
                infoItems={[
                  characterData.location.name,
                  characterData.location.type,
                ]}
                bg={characterData.location.name}
                id={characterData.location.id}
                episode={characterData.episode}
              />
            </div>
          )}
          {dataError && <h2 className="inform__text-box--text">{dataError}</h2>}
        </div>
      </section>
    </Suspense>
  );
}
