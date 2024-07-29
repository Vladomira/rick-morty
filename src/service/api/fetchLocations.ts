import { LocationsFetchData } from "@/src/@types/Locations";
import { getClient } from "../apollo";
import { locations } from "../queries/queries.graphql";

export const fetchLocations = async () => {
  const { data, error }: LocationsFetchData = await getClient().query({
    query: locations,
  });

  return { data, error };
};
