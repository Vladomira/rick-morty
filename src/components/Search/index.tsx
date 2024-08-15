"use client";

import React, { useEffect, useState } from "react";

import { filtersArray } from "@/src/constants/filters";
import { characterByFilter } from "@/src/service/queries/queries.graphql";
import { SearchResult } from "@/src/types/CharactersData";
import { FiltersInstance } from "@/src/types/components";
import { useQuery } from "@apollo/client";

import { useGetParams } from "@/src/hooks/useGetParams";

import CharacterInput from "@/src/components/Filter/CharacterInput";
import Filters from "@/src/components/Filter/FIlters";
import CharactersTable from "@/src/components/Search/CharactersTable";
import TablePagination from "@/src/components/Search/TablePagination";
import TableSkeleton from "@/src/components/Search/TableSkeleton";

const defaultPageCount = 2;

export const SearchPanel = () => {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [pageCount, setPageCount] = useState(defaultPageCount);
  const filters: FiltersInstance = {
    name: useGetParams("query") || "Rick",
    gender: useGetParams("gender") || "",
    status: useGetParams("status") || "",
    species: useGetParams("species") || "",
  };

  const { data, loading, error }: SearchResult = useQuery(characterByFilter, {
    variables: {
      page: currentPage,
      ...filters,
    },
    fetchPolicy: "network-only",
  });

  const resultsLength = data?.characters?.results?.length ?? 0;

  useEffect(() => {
    if (data) {
      setPageCount(data?.characters?.info?.count);
    }
  }, [data]);

  return (
    <div className={"px-6"}>
      {!error && (
        <>
          <CharacterInput setValue={setValue} value={value} />
          <div className="filters__wrapper">
            {filtersArray.map(({ name, values }) => (
              <Filters
                name={name}
                values={values}
                key={name}
                setCurrentPage={setCurrentPage}
              />
            ))}
          </div>
        </>
      )}

      {!error && (
        <div className="mt-5 flex items-center flex-col">
          {loading ? (
            <TableSkeleton />
          ) : (
            <>
              {resultsLength > 0 && data && (
                <CharactersTable items={data?.characters?.results} />
              )}
              {pageCount > 0 && (
                <TablePagination
                  pageCount={Math.ceil(pageCount / itemsPerPage)}
                  setPage={setCurrentPage}
                  page={currentPage}
                />
              )}
            </>
          )}
        </div>
      )}

      {resultsLength === 0 && data && !loading && (
        <p className="inform__text-box--text ">No results</p>
      )}
      {error && <p className="inform__text-box--text ">{error.message}</p>}
    </div>
  );
};
