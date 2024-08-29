import { mockCharactersData, mockErrorMessage } from "./constants";
import { ApolloError, gql } from "@apollo/client";

export const characters = gql`
  query characters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export const mockCharacters = [
  {
    request: {
      query: characters,
      variables: { page: 1 },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 2,
          },
          results: mockCharactersData,
        },
      },
    },
  },
];

export const mockReturnData = {
  items: mockCharactersData,
  getMoreCharacters: jest.fn(),
  hasMore: true,
  error: undefined,
};
const mockApolloError = new ApolloError({
  errorMessage: mockErrorMessage,
});

export const mockReturnDataError = {
  ...mockReturnData,
  error: mockApolloError,
};
