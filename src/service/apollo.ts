import { HttpLink, InMemoryCache } from "@apollo/client";
import { NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const BASE_URL = "https://rickandmortyapi.com/graphql";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache,
    link: new HttpLink({
      uri: BASE_URL,
    }),
  });
});
const cache = new InMemoryCache({
  typePolicies: {
    character: { keyFields: ["id"] },
    location: { keyFields: ["id"] },
  },
});
