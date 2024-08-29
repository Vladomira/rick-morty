import { isCharactersFetchData } from "@/src/helpers/checkTypeOfData";
import { QueryType } from "@/src/types/domain";
import dynamic from "next/dynamic";

import { fetchQueries } from "@/src/service/api/fetchQueries";

import InfoMessage from "@/src/components/InfoMessage";

const DynamicCharactersSection = dynamic(
  () => import("../src/components/CharactersSection")
);
async function Home() {
  const { resData, dataError, charactersCount } = await fetchQueries({
    queryType: QueryType.Characters,
  });
  const data = resData?.data?.characters?.results;

  return (
    <section className="chracters__section">
      {dataError && <InfoMessage message={dataError} />}
      {resData !== undefined && isCharactersFetchData(resData?.data) && (
        <DynamicCharactersSection
          charactersData={data}
          count={charactersCount}
        />
      )}
    </section>
  );
}

export default Home;
