import { CharactersFullData } from "@/src/types/CharactersData";
import { getClient } from "../apollo";
import { characters } from "../queries/queries.graphql";

export const fetchAllCharacters = async () => {
  const { data }: CharactersFullData = await getClient().query({
    query: characters,
    variables: { page: 1 },
    context: {
      fetchOptions: {
        next: { revalidate: 10 },
      },
    },
  });

  return { data };
};
