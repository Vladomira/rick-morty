import { useState } from "react";

import { OperationVariables, useSuspenseQuery } from "@apollo/client";

import { incrementPage } from "../helpers/incrementPage";
import { characters } from "../service/queries/queries.graphql";
import { CharacterListItem } from "../types/CharactersData";
import { Count } from "../types/domain";

type CharacterQueryResult = {
  characters: { info: Count; results: CharacterListItem[] };
};

export const useCharactersPagination = (
  initialData: CharacterListItem[],
  count: number
) => {
  const [page, setPage] = useState<number>(2);
  const [items, setItems] = useState<CharacterListItem[]>(initialData);
  const { data, error } = useSuspenseQuery<
    CharacterQueryResult,
    OperationVariables
  >(characters, {
    variables: { page },
    skip: page === 1,
  });

  const itemsPerPage = 20;
  const pagesCount = Math.floor(count / itemsPerPage);

  const getMoreCharacters = () => {
    incrementPage({ page, setPage, pagesCount });
    const results = data?.characters.results;

    results && setItems((prev) => [...prev, ...results]);
  };
  return {
    items,
    getMoreCharacters,
    hasMore: page < pagesCount,
    error,
  };
};
