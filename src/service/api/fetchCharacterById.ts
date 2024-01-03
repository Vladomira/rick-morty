import { CharacterFullData } from "@/src/types/CharactersData";
import { getClient } from "../apollo";
import { character } from "../queries/queries.graphql";

export const fetchCharacterById = async (id: string) => {
  const { data, error }: CharacterFullData = await getClient().query({
    query: character,
    variables: { id },
  });

  return { data, error };
};
