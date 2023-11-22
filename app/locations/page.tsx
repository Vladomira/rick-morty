import { getClient } from "@/src/service/apollo";
import { LocationData, LocationItem } from "../../src/types/Map";
import { locations } from "@/src/service/queries.graphql";

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
   return (
      <>
         <h1>Locations</h1>
         <ul>
            {locationsData?.map(({ id, name, type }) => (
               <li key={id} style={{ display: "flex" }}>
                  <p> Name: {name}</p>
                  <p> Type: {type}</p>
               </li>
            ))}
         </ul>
      </>
   );
}

export default Locations;
