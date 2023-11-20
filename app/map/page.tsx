import { getClient } from "@/src/service/apollo";
import { LocationData } from "../../src/types/Map";
import { GET_LOCATIONS } from "@/src/service/queries";

async function Map() {
   let locations: LocationData[] | undefined;
   try {
      const { data } = await getClient().query({
         query: GET_LOCATIONS,
      });
      locations = data.locations.results;
   } catch (error) {
      console.error("Error fetching character:", error);
   }
   return (
      <ul>
         {locations?.map(({ id, name, type }) => (
            <li key={id} style={{ display: "flex" }}>
               <p> Name: {name}</p>
               <p> Type: {type}</p>
            </li>
         ))}
      </ul>
   );
}

export default Map;
