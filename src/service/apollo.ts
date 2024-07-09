import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { BASE_URL } from "./config";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        character: { keyFields: ["id"] },
        location: { keyFields: ["id"] },
      },
    }),
    link: new HttpLink({
      uri: BASE_URL,
    }),
  });
});
