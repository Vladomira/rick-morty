import { handleDataError } from "@/src/helpers/handleDataError";
import CharactersList from "../src/components/CharactersList";
import { CharacterListItem } from "../src/types/CharactersData";
import { fetchAllCharacters } from "@/src/service/api/fetchAllCharacters";

async function Home() {
  let charactersData: CharacterListItem[] | undefined;
  let charactersCount: number = 0;
  let dataError: undefined | string;

  try {
    const { data, error } = await fetchAllCharacters();

    if (error) {
      const { handledError } = handleDataError(error);
      dataError = handledError;
    } else {
      charactersData = data.characters.results;
      charactersCount = data.characters.info.count;
    }
  } catch (error) {
    console.error("Error fetching character:", error);
    dataError = "An unexpected error occurred. Please try again later.";
  }

  return (
    <section
      className="chracters__section"
      style={{
        minHeight: "calc(100vh - 65px)",
        backgroundImage:
          " linear-gradient(rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)),  url(/assets/background/home-back2.jpg)",
      }}
    >
      {dataError && (
        <h2 className="inform__text-box--text max-w-max m-auto">{dataError}</h2>
      )}
      {charactersData !== undefined && (
        <CharactersList
          charactersData={charactersData}
          charactersCount={charactersCount}
        />
      )}
    </section>
  );
}

export default Home;
