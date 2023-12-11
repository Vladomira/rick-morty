import { getClient } from "@/src/service/apollo";
import { LocationData, LocationItem } from "../../src/types/Locations";
import { locations } from "@/src/service/queries.graphql";
import { LocationsScene } from "@/src/components/Locations/Scene";
import "../../styles/globals.css";

async function Locations() {
   let locationsData: LocationItem[] | undefined;
   try {
      const { data }: LocationData = await getClient().query({
         query: locations,
      });

      locationsData = data.locations.results;
   } catch (error) {
      console.error("Error fetching character:", error);
   }

   return <LocationsScene locations={locationsData} />;
}

export default Locations;
