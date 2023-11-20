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
// const COUNTRIES_API = "https://countries.trevorblades.com";
//
// ******
// const httpLink = createHttpLink({
//    uri: "https://flyby-router-demo.herokuapp.com/",
// });
// export const client = new ApolloClient({
//    link: httpLink,
//    cache: new InMemoryCache(),
// });

// *******
// const client = new ApolloClient({
//    uri: "https://flyby-router-demo.herokuapp.com/",
//    cache: new InMemoryCache(),
// });
// function createApolloClient() {
//    return new ApolloClient({
//       ssrMode: typeof window === "undefined",
//       uri: COUNTRIES_API,
//       cache: new InMemoryCache(),
//    });
// }

// export function initializeApollo(initialState?: any) {
//    const _apolloClient = apolloClient ?? createApolloClient();

//    if (initialState) {
//       const existingCache = _apolloClient.cache.extract();

//       const data = merge(initialState, existingCache, {
//          arrayMerge: (destinationArray, sourceArray) => [
//             ...sourceArray,
//             ...destinationArray.filter((d) =>
//                sourceArray.every((s) => !isEqual(d, s))
//             ),
//          ],
//       });
//       _apolloClient.cache.restore(data);
//    }

//    if (typeof window === "undefined") {
//       return _apolloClient;
//    }

//    if (!apolloClient) {
//       apolloClient = _apolloClient;
//    }

//    return _apolloClient;
// }

// export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
// export function addApolloState(
//    client: ApolloClient<NormalizedCacheObject>,
//    pageProps: any
// ) {
//    if (pageProps?.props) {
//       pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
//    }

//    return pageProps;
// }
