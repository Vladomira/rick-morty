import { useEffect, useState } from "react";

import { useGetParams } from "./useGetParams";
import { getCharacterByFilterQuery } from "@/src/service/queries/queries.graphql";
import { useQuery } from "@apollo/client";

import { SearchResult } from "../types/CharactersData";
import { FiltersInstance } from "../types/components";

const defaultItemsQuantity = 1;
export const useSearchQuery = (currentPage: number) => {
  const [itemsQuantity, setItemsQuantity] =
    useState<number>(defaultItemsQuantity);
  const filters: FiltersInstance = {
    name: useGetParams("query") || "Rick",
    gender: useGetParams("gender") || "",
    status: useGetParams("status") || "",
    species: useGetParams("species") || "",
  };
  // hook
  const { data, loading, error }: SearchResult = useQuery(
    getCharacterByFilterQuery,
    {
      variables: {
        page: currentPage,
        ...filters,
      },
      fetchPolicy: "network-only",
    }
  );

  const resultsLength = data?.characters?.results?.length ?? 0;

  useEffect(() => {
    if (data) {
      setItemsQuantity(data?.characters?.info?.count);
    }
  }, [data]);

  return {
    data,
    loading,
    error,
    itemsQuantity,
    resultsLength,
  };
};
