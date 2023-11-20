export type CharacterFullData = {
   created: string;
   episode: string[];
   gender: string;
   id: number;
   image: string;
   location: {
      name: string;
      url: string;
   };
   name: string;
   origin: {
      name: string;
      url: string;
   };
   species: string;
   status: string;
   type: string;
   url: string;
};
export interface CharacterData {
   data: {
      info: {
         count: number;
         next: string;
         pages: number;
         prev: null;
      };
      results: CharacterFullData[];
   };
}

export interface CharacterListItem {
   id: number;
   name: string;
   image: string;
}
export interface CharacterPage {
   character: CharacterListItem;
   status: string;
   species: string;
   gender: string;
}

export interface CharactersListProps {
   items: CharacterListItem[];
}

export type locationObj = { name: string; count: number; id: string };
export type SortOrder = "asc" | "desc";

export type CharactersListResult = {
   data: {
      characters: {
         results: CharacterFullData[];
      };
   };
};

export type Episode = {
   name: string;
   air_date: string;
   episode: string;
};
export type CharactersStatistics = {
   name: string;
   id: string;

   episode: Episode[];
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
