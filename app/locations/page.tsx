import { Suspense } from "react";
import Fallback from "@/src/components/Fallback";

import { LocationsScene } from "@/src/components/Locations/Scene";
import { fetchLocations } from "@/src/service/api/fetchLocations";
import { handleDataError } from "@/src/helpers/handleDataError";
import { ApolloError } from "@apollo/client";
import { DataError } from "@/src/types/domain";
import { LocationItem } from "@/src/types/Locations";

async function Locations() {
  let locationsData: LocationItem[] | undefined;
  let dataError: DataError;
  try {
    const { data, error } = await fetchLocations();
    if (error) {
      throw error;
    }
    locationsData = data.locations.results;
  } catch (error) {
    dataError = handleDataError(error as ApolloError);
  }

  return (
    <Suspense fallback={<Fallback />}>
      {!dataError && <LocationsScene locations={locationsData} />}
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
