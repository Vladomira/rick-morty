"use client";

import React, { useState } from "react";

import { filtersArray } from "@/src/constants/filters";
import dynamic from "next/dynamic";

import { useSearchQuery } from "@/src/hooks/useSearchHook";

import CharacterInput from "@/src/components/Filter/CharacterInput";
import Filters from "@/src/components/Filter/FIlters";
import CharactersTable from "@/src/components/Search/CharactersTable";
import TableSkeleton from "@/src/components/Search/TableSkeleton";

const DynamicTablePagination = dynamic(
  () => import("@/src/components/Search/TablePagination")
);
const DynamicInfoMessage = dynamic(() => import("../InfoMessage"));

export const SearchPanel = () => {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const { data, loading, error, itemsQuantity, resultsLength } =
    useSearchQuery(currentPage);

  const pageQuantity = Math.ceil(itemsQuantity / itemsPerPage);
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
        <div className="table__wrapper">
          {loading ? (
            <TableSkeleton />
          ) : (
            <>
              {resultsLength > 0 && data && (
                <CharactersTable items={data?.characters?.results} />
              )}
              {pageQuantity > 0 && itemsQuantity > itemsPerPage && (
                <DynamicTablePagination
                  pageCount={pageQuantity}
                  setPage={setCurrentPage}
                  page={currentPage}
                />
              )}
            </>
          )}
        </div>
      )}

      {resultsLength === 0 && data && !loading && (
        <DynamicInfoMessage message="No results" />
      )}

      {error && <DynamicInfoMessage message={error.message} />}
    </div>
  );
};
