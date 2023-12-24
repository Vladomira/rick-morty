"use client";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import CharactersTable from "@/src/components/Search/CharactersTable";
import { characterByFilter } from "@/src/service/queries.graphql";
import CharacterInput from "@/src/components/Filter/CharacterInput";
import { filtersArray } from "@/src/constants/filters";
import Filters from "@/src/components/Filter/FIlters";
import { UseQueryResult } from "@/src/types/CharactersData";

import { UseGetParams } from "@/src/hooks/useGetParams";

export default function Statistics() {
  const [value, setValue] = useState("");
  // { data, loading, error }
  const { data }: UseQueryResult = useQuery(characterByFilter, {
    variables: {
      name: UseGetParams("query") || "Rick",
      gender: UseGetParams("gender") || "Male",
      status: UseGetParams("status") || "Alive",
      species: UseGetParams("species") || "Human",
    },
  });

  const resultsLength = data?.characters?.results?.length ?? 0;
  return (
    <section className="statistics__section">
      <div className={"px-6"}>
        <CharacterInput setValue={setValue} value={value} />
        <div className="filters__wrapper">
          {filtersArray.map(({ name, values }) => (
            <Filters name={name} values={values} key={name} />
          ))}
        </div>

        {/* <div className="text-primaryYellow bg-black p-5 inline mt-3">
          {data?.characters.info.count}
        </div> */}
        {/* {loading && (
          <p className="bg-black text-primaryYellow font-medium text-lg">
            Loading
          </p>
        )} */}
        {resultsLength > 0 && data && (
          <div className="mt-5 flex justify-center">
            <CharactersTable items={data?.characters.results} />
          </div>
        )}
        {/* {resultsLength === 0 && data && !loading && (
          <p className="bg-black text-primaryYellow font-medium text-lg">
            No results
          </p>
        )} */}
      </div>
    </section>
  );
}
