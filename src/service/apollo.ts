import { HttpLink } from "@apollo/client";
import {
   NextSSRInMemoryCache,
   NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const BASE_URL = "https://rickandmortyapi.com/graphql";

export const { getClient } = registerApolloClient(() => {
   return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new HttpLink({
         uri: BASE_URL,
      }),
   });
});
