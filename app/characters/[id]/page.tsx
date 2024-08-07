import { Suspense } from "react";
import { CharacterInstance } from "../../../src/@types/CharactersData";
import { CharacterInfoBox } from "@/src/components/CharacterDetail/CharacterInfoBox";
import { fetchCharacterById } from "@/src/service/api/fetchCharacterById";
import Fallback from "@/src/components/Fallback";
import { handleDataError } from "@/src/helpers/handleDataError";
import { ApolloError } from "@apollo/client";
import { DataError } from "@/src/@types/source";

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  let characterData: CharacterInstance | undefined;
  let dataError: DataError;

  const { id } = params;
  try {
    const { data, error } = await fetchCharacterById(id);

    if (error) {
      throw error;
    }
    characterData = data.character;
  } catch (error) {
    dataError = handleDataError(error as ApolloError);
  }

  return (
    <Suspense fallback={<Fallback />}>
      <section
        className="character__section"
        style={{ minHeight: "calc(100vh - 53px)" }}
      >
        <div className="container m-auto">
          {characterData && (
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
