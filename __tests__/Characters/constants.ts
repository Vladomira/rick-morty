import { CharacterListItem } from "@/src/types/CharactersData";

export const CHARACTERS_LIST_ID = "characters-list";
export const LIST_ITEM_ROLE = "list-item";

export const mockCharactersData: CharacterListItem[] = [
  {
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
  },
  {
    id: "2",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
  },
];

export const mockErrorMessage = "An error occurred";
