import { getClient } from "@/src/service/apollo";
import CharactersList from "../src/components/CharactersList";
import {
  CharactersFullData,
  CharacterListItem,
} from "../src/types/CharactersData";
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
    <section
      className="chracters__section"
      style={{
        backgroundImage:
          " linear-gradient(rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)),  url(/assets/background/home-back2.jpg)",
      }}
    >
      <div className={"container"}>
        {charactersData !== undefined && (
          <CharactersList charactersData={charactersData} />
        )}
      </div>
    </section>
  );
}

export default Home;
