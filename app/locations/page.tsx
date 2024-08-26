import { Suspense } from "react";

import { isLocationsFetchData } from "@/src/helpers/checkTypeOfData";
import { QueryType } from "@/src/types/domain";
import dynamic from "next/dynamic";

import { fetchQueries } from "@/src/service/api/fetchQueries";

import Fallback from "@/src/components/Fallback";

const DynamicInfoMessage = dynamic(
  () => import("@/src/components/InfoMessage")
);

const DynamicLocationsScene = dynamic(
  () => import("@/src/components/Locations/Scene")
);
async function Locations() {
  const { resData, dataError } = await fetchQueries({
    queryType: QueryType.Locations,
  });
  const locations = resData.data.locations.results;
  return (
    <Suspense fallback={<Fallback />}>
      {resData && isLocationsFetchData(resData) && (
        <DynamicLocationsScene locations={locations} />
      )}

      {dataError && (
        <section className="empty__scene bg-image-position bg-black-sky">
          <DynamicInfoMessage message={dataError} />
        </section>
      )}
    </Suspense>
  );
}

export default Locations;
