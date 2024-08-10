import { handleDataError } from "@/src/helpers/handleDataError";
import CharactersList from "@/src/components/CharactersList";
import { CharacterListItem } from "@/src/types/CharactersData";
import { fetchAllCharacters } from "@/src/service/api/fetchAllCharacters";
import { ApolloError } from "@apollo/client";
import { DataError } from "@/src/types/domain";

async function Home() {
  let charactersData: CharacterListItem[] | undefined;
  let charactersCount: number = 0;
  let dataError: DataError;

  try {
    const { data, error } = await fetchAllCharacters();

    if (error) {
      throw error;
    }
    charactersData = data.characters.results;
    charactersCount = data.characters.info.count;
  } catch (error) {
    dataError = handleDataError(error as ApolloError);
  }

  return (
    <section
      className="chracters__section"
      style={{
        minHeight: "calc(100vh - 53px)",
        backgroundImage:
          "linear-gradient(rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)),  url(/assets/background/home-back2.jpg)",
      }}
    >
      {dataError && (
        <h2 className="inform__text-box--text max-w-max m-auto">{dataError}</h2>
      )}
      {charactersData !== undefined && (
        <CharactersList
          charactersData={charactersData}
          count={charactersCount}
        />
      )}
    </section>
  );
}

export default Home;
