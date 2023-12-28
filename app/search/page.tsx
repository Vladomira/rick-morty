"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import CharactersTable from "@/src/components/Search/CharactersTable";
import { characterByFilter } from "@/src/service/queries.graphql";
import CharacterInput from "@/src/components/Filter/CharacterInput";
import { filtersArray } from "@/src/constants/filters";
import Filters from "@/src/components/Filter/FIlters";
import { UseQueryResult } from "@/src/types/CharactersData";
import { useGetParams } from "@/src/hooks/useGetParams";
import TableSkeleton from "@/src/components/Search/TableSkeleton";
import TablePagination from "@/src/components/Search/TablePagination";

const defaultPageCount = 2;

export default function Search() {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [pageCount, setPageCount] = useState(defaultPageCount);
  const { data, loading, error }: UseQueryResult = useQuery(characterByFilter, {
    variables: {
      page: currentPage,
      name: useGetParams("query") || "Rick",
      gender: useGetParams("gender") || "",
      status: useGetParams("status") || "",
      species: useGetParams("species") || "",
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
    <section className="statistics__section ">
      <div className={"px-6"}>
        <CharacterInput setValue={setValue} value={value} />
        <div className="filters__wrapper">
          {filtersArray.map(({ name, values }) => (
            <Filters name={name} values={values} key={name} />
          ))}
        </div>
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
          <div className="inform__text-box mt-12">
            <p className="inform__text-box--text ">No results</p>
          </div>
        )}
        {error && (
          <div className="inform__text-box mt-12;">
            <p className="inform__text-box--text ">
              {"Something went wrong :("}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
