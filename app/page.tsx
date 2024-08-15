import { isCharactersFetchData } from "@/src/helpers/checkTypeOfData";
import { QueryType } from "@/src/types/domain";
import dynamic from "next/dynamic";

import { fetchQueries } from "@/src/service/api/fetchQueries";

// import CharactersList from "@/src/components/CharactersList";

const DynamicCharactersList = dynamic(
  () => import("../src/components/CharactersList")
);
async function Home() {
  const { resData, dataError, charactersCount } = await fetchQueries({
    queryType: QueryType.Characters,
  });
  const data = resData.data;

  return (
    <section
      className="chracters__section"
      style={{
        minHeight: "calc(100vh - 53px)",
        backgroundImage:
          "linear-gradient(rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)),  url(/assets/background/home-back2.webp)",
      }}
    >
      {dataError && (
        <h2 className="inform__text-box--text max-w-max m-auto">{dataError}</h2>
      )}
      {resData !== undefined && isCharactersFetchData(data) && (
        <DynamicCharactersList
          charactersData={data.characters.results}
          count={charactersCount}
        />
      )}
    </section>
  );
}

export default Home;
