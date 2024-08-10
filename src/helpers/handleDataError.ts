import { HandleApolloError } from "../types/domain";

export function handleDataError(error?: HandleApolloError): string {
  let errorMessage = "An unknown error occurred";

  //  network error
  if (error?.networkError) {
    errorMessage = "A network error occurred";
    console.error("Network error2:", error.networkError);
  }

  //  GraphQL error
  if (error?.graphQLErrors) {
    errorMessage = "A GraphQL error occurred";
    error.graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  // other errors
  if (error?.message) {
    errorMessage = "Something went wrong";
    console.error("Error message:", error.message);
  }

  return errorMessage;
}
