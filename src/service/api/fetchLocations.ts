import { LocationData } from "@/src/types/Locations";
import { getClient } from "../apollo";
import { locations } from "../queries/queries.graphql";

export const fetchLocations = async () => {
  const { data, error }: LocationData = await getClient().query({
    query: locations,
  });

  return { data, error };
};
