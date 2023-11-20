import {
   CharactersStatistics,
   SortOrder,
   locationObj,
} from "../../types/CharactersData";

export function sortData(items: CharactersStatistics[], order: SortOrder) {
   return [...items].sort((a, b) =>
      order === "asc"
         ? a.episode?.length - b.episode?.length
         : b.episode?.length - a.episode?.length
   );
}

export function sortLocations(items: locationObj[], order: SortOrder) {
   return [...items].sort((a, b) =>
      order === "asc" ? a.count - b.count : b.count - a.count
   );
}
