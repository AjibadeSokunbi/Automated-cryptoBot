import { KEY } from "@/utils/indexServer";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
  } from "@apollo/experimental-nextjs-app-support/ssr";

export const { getClient } = registerApolloClient(() => {


  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://metadapp.com/graphql",
      headers: {
        Authorization: KEY,
      }
    }),
  });
});