import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://instaclone-backend-sexy-eum.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
