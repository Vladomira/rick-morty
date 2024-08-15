import { Suspense } from "react";

import { isLocationsFetchData } from "@/src/helpers/checkTypeOfData";
import { QueryType } from "@/src/types/domain";

import { fetchQueries } from "@/src/service/api/fetchQueries";

import Fallback from "@/src/components/Fallback";
import { LocationsScene } from "@/src/components/Locations/Scene";

async function Locations() {
  const { resData, dataError } = await fetchQueries({
    queryType: QueryType.Locations,
  });
  const locations = resData.data.locations.results;

  return (
    <Suspense fallback={<Fallback />}>
      {resData && isLocationsFetchData(resData) && (
        <LocationsScene locations={locations} />
      )}
      {dataError && (
        <div
          className="chracters__section"
          style={{
            minHeight: "calc(100vh - 53px)",
            backgroundImage:
              " linear-gradient(rgba(47, 48, 58, 0.6), rgba(47, 48, 58, 0.6)),  url(/assets/space/space2.jpg)",
          }}
        >
          <h2 className="inform__text-box--text max-w-max m-auto">
            {dataError}
          </h2>
        </div>
      )}
    </Suspense>
  );
}

export default Locations;
