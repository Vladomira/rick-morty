import {
  CharacterFetchData,
  CharactersFetchData,
} from "../types/CharactersData";
import { LocationsFetchData } from "../types/Locations";

export function isCharactersFetchData(data: any): data is CharactersFetchData {
  return (
    data &&
    Array.isArray(data.characters.results) &&
    (typeof data.error === "string" || data.error === undefined)
  );
}
export function isCharacterInstance(data: any): data is CharacterFetchData {
  return (
    data &&
    typeof data === "object" &&
    "name" in data &&
    "status" in data &&
    "species" in data &&
    "id" in data
  );
}
export function isLocationsFetchData(data: any): data is LocationsFetchData {
  return (
    data &&
    typeof data === "object" &&
    "data" in data &&
    "locations" in data.data &&
    Array.isArray(data.data.locations.results)
  );
}
