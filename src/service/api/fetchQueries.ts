import { fetchAllCharacters } from "./fetchAllCharacters";
import { fetchCharacterById } from "./fetchCharacterById";
import { fetchLocations } from "./fetchLocations";
import { ApolloError } from "@apollo/client";

import { handleDataError } from "../../helpers/handleDataError";
import {
  CharacterFetchData,
  CharactersFetchData,
} from "../../types/CharactersData";
import { LocationsFetchData } from "../../types/Locations";
import { DataError, QueryType } from "../../types/domain";

interface QueryOptions {
  queryType: QueryType;
  id?: string;
}
type QueryTypeDataMap = {
  [QueryType.Characters]: CharactersFetchData;
  [QueryType.CharactersById]: CharacterFetchData;
  [QueryType.Locations]: LocationsFetchData;
};
type ResDataType<T extends QueryType> = T extends keyof QueryTypeDataMap
  ? QueryTypeDataMap[T]
  : undefined;

export async function fetchQueries<T extends QueryType>({
  queryType,
  id,
}: QueryOptions & { queryType: T }) {
  let dataError: DataError | undefined;
  let resData: ResDataType<T> = undefined as unknown as ResDataType<T>;
  let charactersCount: number = 0;

  try {
    let response;

    switch (queryType) {
      case QueryType.Characters:
        response = await fetchAllCharacters();
        resData = response as ResDataType<T>;
        charactersCount = response.data.characters.info.count;
        break;

      case QueryType.CharactersById:
        if (id) {
          response = await fetchCharacterById(id);
          resData = response as ResDataType<T>;
        } else {
          throw new Error("ID is required for CharactersById query");
        }
        break;

      case QueryType.Locations:
        response = await fetchLocations();
        resData = response as ResDataType<T>;
        break;

      default:
        throw new Error("Invalid query type");
    }

    if (response?.error) throw response.error;
  } catch (error) {
    dataError = handleDataError(error as ApolloError);
  }

  return {
    dataError,
    charactersCount,
    resData,
  };
}
