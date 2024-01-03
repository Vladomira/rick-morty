import { Suspense } from "react";
import Fallback from "@/src/components/Fallback";
import { LocationItem } from "../../src/types/Locations";
import { LocationsScene } from "@/src/components/Locations/Scene";
import { fetchLocations } from "@/src/service/api/fetchLocations";
import { handleDataError } from "@/src/helpers/handleDataError";

async function Locations() {
  let locationsData: LocationItem[] | undefined;
  let dataError: undefined | string;
  try {
    const { data, error } = await fetchLocations();

    if (error) {
      const { handledError } = handleDataError(error);
      dataError = handledError;
    } else {
      locationsData = data.locations.results;
    }
  } catch (error) {
    console.error("Error fetching character:", error);
    dataError = "An unexpected error occurred. Please try again later.";
  }

  return (
    <Suspense fallback={<Fallback />}>
      {!dataError && <LocationsScene locations={locationsData} />}
      {dataError && (
        <div
          className="chracters__section"
          style={{
            minHeight: "calc(100vh - 65px)",
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
