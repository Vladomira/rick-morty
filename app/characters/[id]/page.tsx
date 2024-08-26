import { Suspense } from "react";

import { isCharacterInstance } from "@/src/helpers/checkTypeOfData";
import { QueryType } from "@/src/types/domain";
import dynamic from "next/dynamic";

import { fetchQueries } from "@/src/service/api/fetchQueries";

import Fallback from "@/src/components/Fallback";

const DynamicInfoMessage = dynamic(
  () => import("@/src/components/InfoMessage")
);
const DynamicCharacterInfoBox = dynamic(
  () => import("@/src/components/CharacterDetail/CharacterInfoBox")
);

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
      <section className="character__section bg-image-position">
        <div className="container m-auto">
          {characterData && isCharacterInstance(characterData) && (
            <div className="character__infobox-wrapper">
              <DynamicCharacterInfoBox
                src={characterData.image}
                imgName={characterData.name}
                infoItems={[
                  characterData.name,
                  characterData.gender,
                  characterData.species,
                  characterData.status,
                ]}
              />
              <DynamicCharacterInfoBox
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
          {dataError && <DynamicInfoMessage message={dataError} />}
        </div>
      </section>
    </Suspense>
  );
}
