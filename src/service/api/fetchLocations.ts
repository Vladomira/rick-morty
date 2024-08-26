import { LocationsFetchData } from "@/src/types/Locations";

import { getClient } from "../apollo";
import { getLocationsQuery } from "../queries/queries.graphql";

export const fetchLocations = async () => {
  const { data, error }: LocationsFetchData = await getClient().query({
    query: getLocationsQuery,
  });
  return { data, error };
};
