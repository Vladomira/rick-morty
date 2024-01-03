import { ApolloError } from "@apollo/client";

export type CharacterListItem = {
  name: string;
  id: string;
  image: string;
};

export type CharactersFullData = {
  data: {
    characters: {
      info: { count: number };
      results: CharacterListItem[];
    };
  };
  error?: ApolloError | undefined;
};
export type CharacterLocation = {
  name: string;
  type: string;
  dimension: string;
  id: string;
};
export type CharacterEpisode = {
  name: string;
  air_date: string;
  episode: string;
};
export type CharacterInstance = {
  name: string;
  status: string;
  species: string;
  gender: string;
  id: string;
  image: string;
  location: CharacterLocation;
  episode: CharacterEpisode[];
};
export interface CharacterFullData {
  data: {
    character: CharacterInstance;
  };
  error?: ApolloError | undefined;
}

export type LocationForStatistics = { name: string; count: number; id: string };
export type SortOrder = "asc" | "desc";

export type CharactersStatistics = {
  name: string;
  id: string;

  episode: CharacterEpisode[];
  location: { name: string };
};
export type CharactersStatisticsData = {
  data: {
    characters: {
      results: CharactersStatistics[];
    };
  };
};

// components
export type CharactersListProps = {
  charactersData: CharacterListItem[];
  charactersCount: number;
};

// table
export interface TableHeaderProps {
  buttonAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
//character

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
    info: { count: number };
    results: CharacterInstance[];
  };
};
export type UseQueryResult = {
  data: FilteredCharactersData | null | undefined;
  loading: boolean;
  error?: ApolloError | undefined;
};
