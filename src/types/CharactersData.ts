import { CharacterProfile, CoreData, Count, FetchApolloError } from "./domain";
import { ApolloError } from "@apollo/client";

/*****fetch*****/
export type CharactersFetchData = FetchApolloError & {
  data: {
    characters: {
      info: Count;
      results: CharacterListItem[];
    };
  };
};
export type CharacterFetchData = FetchApolloError & {
  data: {
    character: CharacterInstance;
  };
};
/*****/

export type CharacterListItem = CoreData & {
  image: string;
};
/*** character by id***/
export type CharacterInstance = CharacterListItem &
  CharacterProfile & {
    location: CharacterLocation;
    episode: CharacterEpisode[];
  };
/***/

export type CharacterLocation = CoreData & {
  type: string;
  dimension: string;
};

export type CharacterEpisode = Pick<CoreData, "name"> & {
  air_date: string;
  episode: string;
};

export type LocationForStatistics = CoreData & Count;

export type SortOrder = "asc" | "desc";

/**components**/
export type CharactersListProps = Count & {
  charactersData: CharacterListItem[];
};

/***table**/
export interface TableHeaderProps {
  buttonAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type characterKeys =
  | "name"
  | "status"
  | "species"
  | "gender"
  | "location"
  | "episode";

export const validCharacterKeys: characterKeys[] = [
  "name",
  "status",
  "species",
  "gender",
  "location",
  "episode",
];

export type FilteredCharactersData = {
  characters: {
    info: Count;
    results: CharacterInstance[];
  };
};
export type SearchResult = {
  data: FilteredCharactersData | null | undefined;
  loading: boolean;
  error?: ApolloError | undefined;
};
