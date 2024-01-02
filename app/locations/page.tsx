import { Suspense } from "react";
import Fallback from "@/src/components/Fallback";
import { LocationItem } from "../../src/types/Locations";
import { LocationsScene } from "@/src/components/Locations/Scene";
import { fetchLocations } from "@/src/service/api/fetchLocations";

async function Locations() {
  let locationsData: LocationItem[] | undefined;
  try {
    const { data } = await fetchLocations();
    locationsData = data.locations.results;
  } catch (error) {
    console.error("Error fetching character:", error);
  }

  return (
    <Suspense fallback={<Fallback />}>
      <LocationsScene locations={locationsData} />
    </Suspense>
  );
}

export default Locations;
