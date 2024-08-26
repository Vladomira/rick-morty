import { ApolloError } from "@apollo/client";

export type CoreData = {
  id: string;
  name: string;
};

export type Count = { count: number };
export type HandleApolloError = ApolloError;
export type DataError = string | undefined;

export type CharacterProfile = {
  gender: string;
  status: string;
  species: string;
};

export type FetchApolloError = { error?: ApolloError };

// querie
export enum QueryType {
  Characters = "characters",
  CharactersById = "characterById",
  Locations = "locations",
}
