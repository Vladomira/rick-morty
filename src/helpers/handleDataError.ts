import { ApolloError } from "@apollo/client";

export function handleDataError(error?: ApolloError | undefined) {
  let handledError;

  if (error) {
    if (error.networkError) {
      handledError = "Network error. Please check your internet connection.";
    } else if (error.graphQLErrors && error.graphQLErrors.length > 0) {
      handledError = "GraphQL error. Please try again later.";
    } else {
      handledError = "An error occurred. Please try again later.";
    }
  }
  return { handledError };
}
