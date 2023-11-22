export type CharacterListItem = {
   __typename?: string;
   name: string;
   id: string;
   image: string;
};

export type CharactersFullData = {
   data: {
      characters: {
         __typename: "Characters";
         results: CharacterListItem[];
      };
   };
};
export type CharacterLocation = {
   __typename: string;
   name: string;
   type: string;
   dimension: string;
};
export type CharacterEpisode = {
   __typename: string;
   name: string;
   air_date: string;
   episode: string;
};
export type CharacterInstance = {
   __typename?: "Character";
   name: string;
   status: string;
   species: string;
   type: string;
   gender: string;
   image: string;
   location: CharacterLocation;
   episode: CharacterEpisode[];
};
export interface CharacterFullData {
   data: {
      character: CharacterInstance;
   };
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
      __typename: string;
      characters: {
         results: CharactersStatistics[];
      };
   };
};

// components
export interface CharactersListProps {
   items: CharacterListItem[];
}
