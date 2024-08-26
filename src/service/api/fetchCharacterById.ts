import { CharacterFetchData } from "@/src/types/CharactersData";

import { getClient } from "../apollo";
import { getCharacterQuery } from "../queries/queries.graphql";

export const fetchCharacterById = async (id: string) => {
  const { data, error }: CharacterFetchData = await getClient().query({
    query: getCharacterQuery,
    variables: { id },
  });

  return { data, error };
};
